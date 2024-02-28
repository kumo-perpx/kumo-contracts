// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC20Capped} from "../libraries/tokens/extensions/ERC20Capped.sol";
import {ERC20} from "../libraries/tokens/ERC20.sol";
import {IERC20} from "../libraries/tokens/IERC20.sol";
import "../libraries/access/Ownable.sol";

contract KumoToken is Ownable, ERC20Capped {
  uint public constant TOKEN_CAPPED = 100 * (10 ** 6) * (10 ** 18);
  string public creator;

  constructor() ERC20Capped(TOKEN_CAPPED) ERC20("Kumo PerpX", "KUMO") {
    creator = "https://kumo.exchange/";
  }

  function mint(uint _amount, address _holder) external onlyOwner {
    _mint(_holder, _amount);
  }

  function claimStuckTokens(address _token) external onlyOwner {
    require(_token != address(this), "INVALID_HOLDER");
    if (_token == address(0)) {
      (bool suceess, ) = msg.sender.call{value: address(this).balance}("");
      if (!suceess) revert("WITHDRAWAL_FAILED");
      return;
    }
    IERC20(_token).transfer(msg.sender, IERC20(_token).balanceOf(address(this)));
  }
}
