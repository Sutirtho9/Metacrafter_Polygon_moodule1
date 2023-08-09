// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract NftBridge is ERC721A {
    address public Owner;

    // Maximum number of tokens that can be minted
    uint256 public max_quantity = 5;

    uint256 public Supply = 0;

    // prompts for the nfts
    string prompt = "Batman on the rooftop";
    

    constructor() ERC721A("Batman", "BTM") {
        Owner = msg.sender;
    }

    // Modifier that only allows the owner to execute a function
    modifier onlyOwner() {
        require(msg.sender == Owner, "Only owner can perform this action!");
        _;
    }

    // Function to mint NFT which only owner can perform
    function mint(uint256 quantity) external payable onlyOwner {
        require(Supply + quantity <= max_quantity, "You can not mint more than 5");

        Supply += quantity;       // for checking the quantity 

        _mint(msg.sender, quantity);
    }

    // Return the URL for the prompt description and names and all that
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
