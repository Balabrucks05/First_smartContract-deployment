/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers")
require("@nomicfoundation/hardhat-verify");
// require('@openzeppelin/hardhat-upgrades');

const {GARNET_RPC_URL,PRIVATE_KEY,ETHERSCAN_API_KEY}= process.env;

module.exports = {
  solidity: "0.8.27",
  defaultNetwork: "Garnet_holesky",
  networks: {
    hardhat:{},
    testnet:{
      url: GARNET_RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    Garnet_holesky: {
      url: GARNET_RPC_URL,
      accounts:  [`0x${PRIVATE_KEY}`],
    },
  },
  sourcify: {
    enabled:true
  },
  etherscan: {
    apiKey: {
      holesky: ETHERSCAN_API_KEY
  }
}
};
