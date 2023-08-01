const AnyToken = artifacts.require("AnyToken")
const FarmToken = artifacts.require("FarmToken")

module.exports = async function (callback) {
  anyToken = await AnyToken.deployed()
  farmToken = await FarmToken.deployed()
  balance = await anyToken.balanceOf(farmToken.address)
  console.log(web3.utils.fromWei(balance.toString()))
  callback()
}
