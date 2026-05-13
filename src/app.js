const App = {
    web3Provider: null,
    contracts: {},
    account: '0x0',
    electionInstance: null,

    init: async function() {
        if (typeof window.ethereum !== 'undefined') {
            App.web3Provider = window.ethereum;
            web3 = new Web3(window.ethereum);
            console.log("MetaMask is installed!");
        } else {
            console.log("Please install MetaMask!");
            App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
            web3 = new Web3(App.web3Provider);
        }
        return App.initContract();
    },

    initContract: async function() {
        try {
            const response = await fetch('/build/contracts/Election.json');
            const election = await response.json();
            
            App.contracts.Election = TruffleContract(election);
            App.contracts.Election.setProvider(App.web3Provider);
            
            if (window.ethereum && window.ethereum.selectedAddress) {
                App.account = window.ethereum.selectedAddress;
                document.getElementById('account-address').innerText = "Connected: " + App.account;
                document.getElementById('wallet-section').style.display = 'none';
                document.getElementById('voting-section').style.display = 'block';
                App.render();
            }
        } catch (error) {
            console.error("Error loading contract: ", error);
        }
    },

    connectWallet: async function() {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            App.account = accounts[0];
            document.getElementById('account-address').innerText = "Connected: " + App.account;
            document.getElementById('wallet-section').style.display = 'none';
            document.getElementById('voting-section').style.display = 'block';
            App.render();
            
            window.ethereum.on('accountsChanged', function (accounts) {
                App.account = accounts[0];
                document.getElementById('account-address').innerText = "Connected: " + App.account;
                App.render();
            });
        } catch (error) {
            console.error("User denied account access");
        }
    },

    render: async function() {
        const candidatesList = document.getElementById("candidates-grid");
        const candidateSelect = document.getElementById("candidate-select");
        const statusEl = document.getElementById("voting-status");

        candidatesList.innerHTML = "";
        candidateSelect.innerHTML = '<option value="" disabled selected>Select a candidate...</option>';

        try {
            App.electionInstance = await App.contracts.Election.deployed();
            const candidatesCountBN = await App.electionInstance.candidatesCount();
            const candidatesCount = candidatesCountBN.toNumber();
            
            const hasVoted = await App.electionInstance.hasVoted(App.account);
            if (hasVoted) {
                statusEl.innerText = "You have already voted.";
                document.querySelector('form button').disabled = true;
            } else {
                statusEl.innerText = "";
                document.querySelector('form button').disabled = false;
            }

            for (let i = 1; i <= candidatesCount; i++) {
                const candidate = await App.electionInstance.candidates(i);
                const id = candidate[0].toNumber ? candidate[0].toNumber() : candidate[0];
                const name = candidate[1];
                const voteCount = candidate[2].toNumber ? candidate[2].toNumber() : candidate[2];

                const cardHtml = `
                <div class="candidate-card">
                    <div class="candidate-id">ID: #${id}</div>
                    <div class="candidate-name">${name}</div>
                    <div class="vote-badge">
                        <span class="vote-count">${voteCount}</span> Votes
                    </div>
                </div>
                `;
                candidatesList.innerHTML += cardHtml;

                const option = `<option value="${id}">${name}</option>`;
                candidateSelect.innerHTML += option;
            }
        } catch (error) {
            console.error(error);
        }
    },

    castVote: async function() {
        const candidateId = document.getElementById("candidate-select").value;
        const statusEl = document.getElementById("voting-status");

        if (!candidateId) {
            statusEl.innerText = "Please select a candidate.";
            return;
        }

        try {
            statusEl.innerText = "Processing transaction...";
            await App.electionInstance.vote(candidateId, { from: App.account });
            statusEl.innerText = "Vote successfully cast!";
            App.render();
        } catch (error) {
            console.error(error);
            statusEl.innerText = "Error: Did you already vote or is voting closed?";
        }
    }
};

window.onload = function() {
    App.init();
};
