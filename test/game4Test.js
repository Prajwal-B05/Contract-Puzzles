const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');

describe('Game4', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game4');
    const game = await Game.deploy();
    const signer1 = ethers.provider.getSigner(0);
    return { game , signer1};
  }
  it('should be a winner', async function () {
    const { game,signer1 } = await loadFixture(deployContractAndSetVariables);
    const address1 = await signer1.getAddress();
    await game.write(address1);
    // nested mappings are rough :}
   
    await game.win(address1);

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
