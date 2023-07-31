const AnyToken = artifacts.require("AnyToken")

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(AnyToken)
  const anyToken = await AnyToken.deployed()
}