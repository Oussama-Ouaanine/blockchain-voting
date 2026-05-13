# 🗳️ Blockchain Electronic Voting DApp

![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)
![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Web3.js](https://img.shields.io/badge/Web3.js-F16822?style=for-the-badge&logo=javascript&logoColor=white)

A decentralized application (DApp) for secure, transparent, and tamper-proof electronic voting, built on a local Ethereum blockchain using Solidity, Truffle, Ganache, and Web3.js. 

## 🚀 Features

- **Smart Contract Driven**: Voting logic is executed autonomously on the blockchain.
- **One Vote per Address**: The smart contract mathematically ensures no wallet can vote twice.
- **MetaMask Integration**: Connects via Web3.js to authenticate users securely.
- **Real-Time Updates**: Immediate reflection of the vote counts straight from the blockchain ledger.

---

## 🛠️ Technology Stack

- **Blockchain**: Ganache (Local Ethereum Testnet)
- **Smart Contracts**: Solidity (^0.8.0)
- **Framework**: Truffle Suite
- **Backend / Serveur**: Node.js & Express
- **Frontend**: Vanilla HTML / CSS / JS + Web3.js
- **Wallet**: MetaMask

---

## ⚙️ Installation & Setup (Step-by-Step Guide)

Follow these instructions carefully to reproduce the environment, deploy the smart contracts, and run the DApp from scratch.

### Step 1: Install Prerequisites
Before you begin, ensure you have the following installed on your machine:
1. **Node.js & npm**: Download and install from [nodejs.org](https://nodejs.org/).
2. **MetaMask Extension**: Install the [MetaMask Wallet](https://metamask.io/) in your web browser (Chrome, Firefox, Edge, etc.). Create a basic wallet if you don't have one yet.

### Step 2: Clone the Repository & Install Dependencies
Open your terminal (or Command Prompt) and execute the following commands:
```bash
# 1. Clone the project locally
git clone https://github.com/Oussama-Ouaanine/blockchain-voting.git

# 2. Navigate into the project folder
cd blockchain-voting

# 3. Install all required Node.js packages
npm install
```

### Step 3: Start the Local Blockchain (Ganache)
We need a local Ethereum network to test our smart contracts. We use `ganache` for this.
1. Open a **new terminal window** in the `blockchain-voting` folder.
2. Run the following command to start Ganache with the correct configurations:
```bash
npx ganache --port 7545 --chain.chainId 1337 --chain.networkId 1337
```
3. Keep this terminal open! Ganache will display a list of **Available Accounts** and their corresponding **Private Keys**, each loaded with 1,000 fake ETH. You will need these private keys later.

### Step 4: Compile and Deploy the Smart Contracts
Now the blockchain is running, we need to deploy our `Election.sol` contract to it.
1. Open a **second terminal window** in the `blockchain-voting` folder.
2. Compile the Solidity code into artifacts:
```bash
npx truffle compile
```
3. Migrate (deploy) the artifacts to your local Ganache network:
```bash
npx truffle migrate --network development --reset
```
*Note: The `--reset` flag ensures any old contracts are overwritten cleanly.*

### Step 5: Start the DApp Frontend Server
In the same terminal where you just deployed the contracts (terminal #2), start the Node.js server:
```bash
npm start
```
Your frontend is now available at **http://localhost:3000**.

---

## 🦊 Connecting MetaMask and Voting

To interact with the local blockchain on the website, you must configure MetaMask.

### Step 1: Add the Ganache Network to MetaMask
1. Open your MetaMask browser extension.
2. Click the Network dropdown at the top (it usually says "Ethereum Mainnet").
3. Scroll down and click **Add network**.
4. Click **Add a network manually** at the bottom.
5. Fill in the following exact details:
   - **Network Name**: Ganache Local
   - **New RPC URL**: `http://127.0.0.1:7545`
   - **Chain ID**: `1337`
   - **Currency Symbol**: `ETH`
6. Leave the "Block Explorer URL" blank. Click **Save** and select **Switch to Ganache Local**.

### Step 2: Import a Test Account for Voting
Your default MetaMask account has 0 ETH on this local network. You need money to pay gas fees and cast a vote!
1. Go back to your **First Terminal** where `ganache` is running.
2. Look at the `Private Keys` section and select one (e.g., Account (0) or (1)). Copy the long string (e.g., `0x1de5...`).
3. In MetaMask, click the **Account selector** at the top center.
4. Click **Add account or hardware wallet** > **Import account**.
5. Paste the Private Key you copied and click **Import**.
6. You should now see an account loaded with approximately **1,000 ETH**!

### Step 3: Cast Your Vote!
1. Open your browser and go to **http://localhost:3000**.
2. Click the **Connect Wallet** button on the page. MetaMask will prompt you to connect the account you just imported. Click Next/Confirm.
3. Once connected, your wallet address will appear, and the list of candidates will load.
4. Select a candidate (Pikachu, Charizard, etc.) from the dropdown and click **Vote**.
5. MetaMask will pop up asking you to confirm the transaction (paying a tiny fraction of test ETH for network fees). Click **Confirm**.
6. Wait a few seconds, and the page will update instantly, adding your vote to the blockchain tally!
