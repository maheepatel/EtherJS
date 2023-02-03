const { ethers } = require("hardhat");
const provider = new ethers.providers.JsonRpcProvider(
  `https://goerli.infura.io/v3/8c58f275874f4d6cadadacc03e93b43d`
);

const querryBlockchain = async () => {
    const block = await provider.getBlockNumber();
    console.log("Current Block Number:", block);
};

querryBlockchain();





//Dapp uni
// const { ethers } = require("ethers");

// const INFURA_ID = '8c58f275874f4d6cadadacc03e93b43d';
// const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

// const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

// const main = async () => {
//     const balance = await provider.getBalance(address)
//     console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
// }

// main()


