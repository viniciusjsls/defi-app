const AnyToken = artifacts.require("AnyToken")
const FarmToken = artifacts.require("FarmToken")

module.exports = async function (callback) {
  const accounts = await new web3.eth.getAccounts()
  const anyToken = await AnyToken.deployed()
  const farmToken = await FarmToken.deployed()

  balanceAnyTokenBeforeAccounts0 = await anyToken.balanceOf(accounts[0])
  balanceAnyTokenBeforeFarmToken = await anyToken.balanceOf(farmToken.address)
  console.log("*** Any Token ***")
  console.log(
    "Balance AnyToken Before accounts[0] " +
      web3.utils.fromWei(balanceAnyTokenBeforeAccounts0.toString())
  )
  console.log(
    "Balance AnyToken Before TokenFarm " +
      web3.utils.fromWei(balanceAnyTokenBeforeFarmToken.toString())
  )

  console.log("*** Farm Token ***")
  balanceFarmTokenBeforeAccounts0 = await farmToken.balanceOf(accounts[0])
  balanceFarmTokenBeforeFarmToken = await farmToken.balanceOf(farmToken.address)
  console.log(
    "Balance FarmToken Before accounts[0] " +
      web3.utils.fromWei(balanceFarmTokenBeforeAccounts0.toString())
  )
  console.log(
    "Balance FarmToken Before TokenFarm " +
      web3.utils.fromWei(balanceFarmTokenBeforeFarmToken.toString())
  )

  console.log("Call Withdraw Function")
  await farmToken.withdraw(web3.utils.toWei("100", "ether"))

  console.log("*** Any Token ***")
  balanceAnyTokenAfterAccounts0 = await anyToken.balanceOf(accounts[0])
  balanceAnyTokenAfterFarmToken = await anyToken.balanceOf(farmToken.address)
  console.log(
    "Balance AnyToken After accounts[0] " +
      web3.utils.fromWei(balanceAnyTokenAfterAccounts0.toString())
  )
  console.log(
    "Balance AnyToken After TokenFarm " +
      web3.utils.fromWei(balanceAnyTokenAfterFarmToken.toString())
  )

  console.log("*** Farm Token ***")
  balanceFarmTokenAfterAccounts0 = await farmToken.balanceOf(accounts[0])
  balanceFarmTokenAfterFarmToken = await farmToken.balanceOf(farmToken.address)
  console.log(
    "Balance FarmToken After accounts[0] " +
      web3.utils.fromWei(balanceFarmTokenAfterAccounts0.toString())
  )
  console.log(
    "Balance FarmToken After TokenFarm " +
      web3.utils.fromWei(balanceFarmTokenAfterFarmToken.toString())
  )

  callback()
}
