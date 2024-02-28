const { ethers } = require("hardhat");

// HOW TO RUN SCRIPT??? 
// npx hardhat run scripts/deployKumoToken.js --network <your_network>

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying KumoToken contract with the account:", deployer.address);

  // Replace with your desired constructor arguments
  const TOKEN_CAPPED = ethers.utils.parseUnits("100000000", 18); // 100 million tokens
  const creator = "https://kumo.exchange/";
  const name = "Kumo PerpX";
  const symbol = "KUMO";

  const KumoToken = await ethers.getContractFactory("KumoToken");
  const KumoToken = await KumoToken.deploy();

  await KumoToken.deployed();

  console.log("KumoToken contract address:", KumoToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
