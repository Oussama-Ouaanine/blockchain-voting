module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "1337" // Explicitly match MetaMask's ID
    }
  },
  compilers: {
    solc: {
      version: "0.8.0" 
    }
  }
};
