const { assert } = require("chai");

const IncognitoDevToken = artifacts.require("BEP20");

contract("IncognitoDevToken", (accounts) => {
  beforeEach(async () => {
    token = await IncognitoDevToken.deployed();
  });

  describe("BEP-20 Token", async () => {
    it("Burns tokens", async () => {
      // get initial balance of tokens
      let initialBalance = await token.balanceOf(accounts[0]);

      try {
        await token.burn(accounts[0], 100);
      } catch (error) {
        assert.fail(error);
      }

      // new account token balance
      let finalBalance = await token.balanceOf(accounts[0]);

      // total tokens should be less by 50
      assert.equal(
        finalBalance.toNumber(),
        initialBalance.toNumber() - 100,
        "Unable to burn tokens"
      );
    });

    it("Transfers tokens", async () => {
      // get balance in account 1 before transfer
      let acc1_CurrentBalance = await token.balanceOf(accounts[0]);

      // get balance of account 2 before transfer
      let acc2_InitialBalance = await token.balanceOf(accounts[2]);

      // transfer from account 1 to account 2
      await token.transfer(accounts[2], 100, { from: accounts[0] });

      // get final balance in accounts
      let acc1_FinalBalance = await token.balanceOf(accounts[0]);
      let acc2_FinalBalance = await token.balanceOf(accounts[2]);

      // funds transfer should have occurred
      assert.equal(
        acc1_FinalBalance.toNumber(),
        acc1_CurrentBalance.toNumber() - 100,
        "Funds weren't transfered from the sender"
      );
      assert.equal(
        acc2_FinalBalance.toNumber(),
        acc2_InitialBalance.toNumber() + 100,
        "Funds weren't transfered to the receiver"
      );
    });
  });
});
