//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Prist {
    string private _value;

    constructor(string memory value) {
        _value = value;
    }

    function getValue() public view returns (string memory) {
        return _value;
    }

    function setValue(string memory value) public {
        _value = value;
    }
}
