# The Bridge

In this project, I first minted 5 NFTs using Batch Minting and then deployed them to the Sepolia testnet. After this, I bridged them over to the Polygon chain using the FXPortal bridge. For the NFT images, I used DALL-E and stored the images in the IPFS (Interplanetary File System) through Pinata.

## Executing The Program

To run the project, follow these steps:

Step 1: Install the necessary dependencies by running:

npm i


Step 2: Start a local development node by running:

npx hardhat node


Step 3: Compile the Solidity smart contract by running:

npx hardhat compile


Step 4: Deploy the contract to the Sepolia testnet by running:

npx hardhat run --network goerli scripts/deploy.js





## Key Points

1. Ensure to change your private key.
2. Store all private keys and other sensitive information in the `.env` file in the root directory.
3. You can modify or add networks in the `hardhat.config.js` file.
4. Metamask should be installed in your browser for wallet interaction.

## Authors

[SutirthoChakravorty](https://www.linkedin.com/in/sutirtho-chakravorty-23921423)

## License

This project is licensed under the MIT License.
