const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');
const { ethers } = require('hardhat');
const { int } = require('hardhat/internal/core/params/argumentTypes');

describe('Game5', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game5');
    const game = await Game.deploy();
    const signer1 = ethers.provider.getSigner(4);
    const address1 = await signer1.getAddress();
    return { game , address1 , signer1 };
  }
  it('should be a winner', async function () {
    const { game , signer1 , address1 } = await loadFixture(deployContractAndSetVariables);

    // good luck
 const th = 0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf 
  let validAddress = false;
  let wallet;
  let address = 0;
  while (!validAddress) {
    wallet = ethers.Wallet.createRandom()
    address = await wallet.getAddress()
    if(address < th) 
    validAddress = true;
  }
  await game.win();
    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
