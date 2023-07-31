// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BoultToken is ERC20,ERC20Burnable,Ownable{
     
     uint256 public blockReward;

    constructor(uint256 reward) ERC20("BOULT", "BLT") {
        _mint(msg.sender, 1000000 * 10 ** 18);
        blockReward = reward * 10 ** 18;
    }

    //tresnfer to specific address
 function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

//supply rewards
   function _mintMinerReward() internal {
        _mint(block.coinbase, blockReward);
    }

    function _beforeTokenTransfer(address from, address to, uint256 value) internal virtual override {
        if (!(from == address(0) && to == block.coinbase)) {
          _mintMinerReward();
        }
        super._beforeTokenTransfer(from, to, value);
    }

    function setBlockReward(uint256 reward)public onlyOwner {
       blockReward =  reward * 10 ** 18;
    }
}
