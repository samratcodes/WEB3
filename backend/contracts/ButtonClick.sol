// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ButtonClick {
    event ButtonClicked(address clicker);

    function clickButton() public {
        emit ButtonClicked(msg.sender);
    }
}
