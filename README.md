# 🗳️ Blockchain Voting DApp

Welcome to the Blockchain Electronic Voting DApp! The application framework, smart contracts, and frontend have all been fully scaffolded for you.

Follow these instructions to spin up the local blockchain, deploy the contract, and test the app.

## Prerequisites
- **Ganache**: [Download and install Ganache](https://trufflesuite.com/ganache/)
- **MetaMask**: Install the [MetaMask browser extension](https://metamask.io/)

---

## 🚀 How to Run the Project

### Step 1: Start Your Local Blockchain (Ganache)
1. Open the **Ganache** desktop application.
2. Click **"New Workspace"** (or Quickstart).
3. Under the **Server** tab, ensure the **Port Number** is set to `7545`.
4. Click **Save and Start**.
5. *Ganache will generate 10 test accounts with 100 ETH each. Leave this running.*

### Step 2: Deploy the Smart Contracts
Open a terminal in the `blockchain-voting` folder (where this README is located) and run the following command to deploy the smart contract to Ganache:
```bash
npx truffle migrate --network development
```
*(Note: I have already compiled the contracts for you using `npx truffle compile`. If you make changes to `Election.sol` in the future, simply re-run `npx truffle compile` before migrating).*

### Step 3: Start the Web Server
In the same terminal (inside the `blockchain-voting` folder), start the Node.js server:
```bash
npm start
```
The server will start running at **http://localhost:3000**.

### Step 4: Configure MetaMask
You need to connect MetaMask to your local Ganache blockchain so you can interact with the app.
1. Open the MetaMask extension in your browser.
2. Click the network dropdown at the top left and select **Add network**.
3. Scroll down and click **Add a network manually**.
4. Enter the following details:
   - **Network Name**: Ganache Local
   - **New RPC URL**: `http://127.0.0.1:7545`
   - **Chain ID**: `1337` (Try `5777` if `1337` gives an error)
   - **Currency Symbol**: `ETH`
5. Click **Save**.

### Step 5: Import a Test Account
1. In Ganache, look at the first account in the list and click the **Key icon (🔑)** on the far right.
2. Copy the **Private Key**.
3. In MetaMask, click on the **Account icon** (or dropdown) at the top, and select **Import Account**.
4. Paste the private key you just copied and click **Import**.
5. *You should now see an account with ~100 ETH!*

### Step 6: Vote!
1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. Click **Connect Wallet** (Approve the connection in MetaMask).
3. The DApp will load the active candidates from the blockchain.
4. Select a candidate, click **Vote**, and confirm the transaction in MetaMask!
5. After the transaction finishes, the page will update and the vote tally will increase.

---

### Troubleshooting
- **RPC Error / Nonce too high**: This happens if you restart Ganache without clearing MetaMask data. In MetaMask go to: *Settings > Advanced > Clear activity tab data*.
- **Contract not deployed**: Make sure you ran `npx truffle migrate` *after* Ganache was running.
