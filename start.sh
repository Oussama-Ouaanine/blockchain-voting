#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")"

echo "==========================================="
echo " 🗳️ Blockchain Electronic Voting Setup"
echo "==========================================="

echo -e "\n📦 Installing npm dependencies..."
npm install

echo -e "\n🛠️  Compiling Smart Contracts..."
npx truffle compile

echo -e "\n⚠️  ACTION REQUIRED: ⚠️"
echo "Please make sure you have the Ganache application running."
echo "Ensure it is running a workspace on port 7545."
read -p "Press [Enter] once Ganache is running to deploy contracts..."

echo -e "\n🚀 Deploying Smart Contracts to Ganache..."
npx truffle migrate --network development --reset

echo -e "\n🌐 Starting the Web Server..."
npm start
