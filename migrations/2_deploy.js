// const IERC20 = artifacts.require("IERC20.json");
const FarmingContract = artifacts.require("FarmingContract");

module.exports = async function (deployer, network, accounts) {
  // Deploy parameters
  const lpTokenAddress = "0xD5311B49e43B9d08587CE8e9810D4E85F06ceD59"; // Address of the LP token
  const rewardTokenAddress = "0x089FE5D7799093aE1339C8fA6756adeebbDcb92f"; // Address of the reward token
  const stakingTokenAddress = "0xD5311B49e43B9d08587CE8e9810D4E85F06ceD59"; // Address of the staking token
  const uniswapRouterAddress = "0x63d530FDb0A8986E444cCd2f457Df02646D7D6e2"; // Address of the Uniswap V2 Router
  const rewardRate = 1000; // Example reward rate per block

  await deployer.deploy(
    FarmingContract,
    lpTokenAddress,
    rewardTokenAddress,
    stakingTokenAddress,
    uniswapRouterAddress,
    rewardRate
  );

  const farmingContract = await FarmingContract.deployed();

  console.log("Farming Contract deployed at:", farmingContract.address);
};
