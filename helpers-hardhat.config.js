const { network } = require("hardhat");

 const networkConfig = {
    31337: {
        name: "localhost"
      },
      11155111: {
        name: "sepolia",
        reward:"25",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
        
      },

     
      

}
const devlopmentChains = ["hardhat","localhost"];
const reward = "25"

module.exports = {
    networkConfig,
    devlopmentChains,
    reward
}