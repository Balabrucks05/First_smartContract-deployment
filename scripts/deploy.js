const {ethers, upgrades} = require("hardhat");
// require('@openzeppelin/hardhat-upgrades');

async function main(){
    //First Contract Deployment
    const FCDT = await ethers.getContractFactory("FCDT");
    const FCDT_ = await FCDT.deploy();
    const FCDTAddress = await FCDT_.getAddress();
      console.log(`First Contract Address: ${FCDTAddress}`);

}
    main().catch((error) => {
        console.error(error);
        process.exitcode = 1;
    })