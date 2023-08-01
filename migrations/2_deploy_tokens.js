const AnyToken = artifacts.require("AnyToken")
const FarmToken = artifacts.require("FarmToken")

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(AnyToken)
  const anyToken = await AnyToken.deployed()

  await deployer.deploy(FarmToken, anyToken.address)
  const farmToken = await FarmToken.deployed()
}