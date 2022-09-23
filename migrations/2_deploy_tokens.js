const token = artifacts.require("BEP20.sol");

module.exports = async (deployer) => {
  const name = "Incognito Developer's Token";
  const symbol = "IDT";
  const totalAmount = 100000;
  const decimal = 3;

  await deployer.deploy(token, name, symbol, totalAmount, decimal);

  console.log(totalAmount * 10**decimal, " tokens minted");
};
