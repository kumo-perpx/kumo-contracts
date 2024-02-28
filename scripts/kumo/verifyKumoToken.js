const { ethers, upgrades } = require("hardhat");

// HOW TO RUN SCRIPT??? 
// npx hardhat run scripts/verifyKumoToken.js --network mainnet

async function main() {
  const contractAddress = "<YOUR_CONTRACT_ADDRESS>"; // Replace with the actual contract address
  const network = "mainnet"; // Replace with the desired network (rinkeby, ropsten, mainnet, etc.)

  console.log(`Verifying KumoToken contract on ${network} for address: ${contractAddress}`);

  // Specify the constructor arguments
  const constructorArguments = [];

  // Verify the contract on Etherscan with constructor arguments
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments,
    network,
  });

  console.log("Contract verification successful!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
