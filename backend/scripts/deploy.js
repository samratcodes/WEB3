const { ethers } = require("hardhat");

async function main() {
  // We get the contract to deploy
  const ButtonClick = await ethers.getContractFactory("ButtonClick");
  const buttonClick = await ButtonClick.deploy();

  console.log("ButtonClick contract deployed to address:", buttonClick.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

  