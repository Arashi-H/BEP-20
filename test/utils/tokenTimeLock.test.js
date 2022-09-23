const {
  BN,
  expectRevert,
  time,
} = require("../../node_modules/@openzeppelin/test-helpers");

const { expect, assert } = require("chai");

const IncognitoDevToken = artifacts.require("BEP20");
const TokenTimelock = artifacts.require("TokenTimelock");

contract("TokenTimeLock", function (accounts) {
  const [beneficiary] = accounts;
  beforeEach(async () => {
    token = await IncognitoDevToken.deployed();
  });

  describe("Initial TimeLock check", () => {
    it("rejects release time in the past", async function () {
      token = await IncognitoDevToken.deployed();
      const pastReleaseTime = (await time.latest()).sub(time.duration.years(1));
      await expectRevert(
        TokenTimelock.new(token.address, beneficiary, pastReleaseTime),
        "TokenTimelock: release time is before current time"
      );
    });
  });

  describe("Deploy Timelock", async () => {
    const amount = new BN(100);

    // before starting any tests
    beforeEach(async () => {
      // define release time as 1 year from now
      releaseTime = (await time.latest()).add(time.duration.years(1));

      // instantiate a new Timelock on the IDT tokens
      timelock = await TokenTimelock.new(
        token.address,
        beneficiary,
        releaseTime
      );

      // mint tokens
      await token.mint(timelock.address, amount);
    });

    // try releasing tokens at the time of minting
    it("cannot be released before time limit", async () => {
      await expectRevert(
        timelock.release(),
        "TokenTimelock: current time is before release time"
      );
    });

    // try releasing tokens after a year of minting
    it("can be released after time limit", async () => {
    
      // increase time to 1 year pas the release time
      await time.increaseTo(releaseTime.add(time.duration.years(1)));
      // release tokens
      await timelock.release();

      assert(
        token.balanceOf(beneficiary),
        amount,
        "Tokens weren't released successfully"
      );
    });
  });
});
