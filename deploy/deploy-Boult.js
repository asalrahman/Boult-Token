

const { network } = require("hardhat");
const{devlopmentChains,reward}=require("../helpers-hardhat.config");
const { verify } = require("../verify");


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainId;

    console.log("Deploying BLT and waiting for confirmations...");

    const args=[reward];
    const boult= await deploy("BoultToken",{
      from: deployer,
      args: args,
      log: true,
      waitConfirmations: network.config.blockConfirmations || 1,
    });
    console.log("BLT token deployed at ",boult.address);
     // Verification
  if (!devlopmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(boult.address, args);
  }


};
module.exports.tags = ["all","boult"]