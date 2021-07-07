// SPDX-License-Identifier: MIT

pragma solidity =0.8.3;

import "./ProxyFactory.sol";
import "../PaymentSplitter.sol";

contract PaymentSplitterFactory is ProxyFactory {
    event CreatePaymentSplitter(address indexed proxy, address[] payees, uint256[] shares);

    address internal immutable target;

    constructor() {
        PaymentSplitter recipients = new PaymentSplitter();
        recipients.initialize("", new address[](0), new uint256[](0));
        target = address(recipients);
    }

    function createPaymentSplitter(
        string memory title,
        address[] memory payees,
        uint256[] memory shares
    ) external returns (address proxy) {
        bytes memory initData =
            abi.encodeWithSignature("initialize(string,address[],uint256[])", title, payees, shares);
        proxy = _createProxy(target, initData);

        emit CreatePaymentSplitter(proxy, payees, shares);
    }

    function isPaymentSplitter(address query) external view returns (bool result) {
        return _isProxy(target, query);
    }
}
