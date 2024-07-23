const FarmingContract = artifacts.require("FarmingContract");

module.exports = async function(deployer, network, accounts) {
  // Addresses of the Sherpaswap router and the reward token
  const sherpaswapRouterAddress = "0x63d530FDb0A8986E444cCd2f457Df02646D7D6e2";
  const rewardTokenAddress = "0x089FE5D7799093aE1339C8fA6756adeebbDcb92f";

  // Deploy the FarmingContract
  await deployer.deploy(FarmingContract, sherpaswapRouterAddress, rewardTokenAddress);

  // Optionally, you can get the instance of the deployed contract
  const farmingContractInstance = await FarmingContract.deployed();

  console.log("FarmingContract deployed at address:", farmingContractInstance.address);
};
