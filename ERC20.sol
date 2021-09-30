// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract Emurgo is ERC20 {
    
	constructor(string memory _name, string memory uint _level) ERC20(_name, _level) {
		super._mint(name, level);
	}
}