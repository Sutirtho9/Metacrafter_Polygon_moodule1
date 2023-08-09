require("dotenv").config();

const { ethers } = require("hardhat");

const Bridge = require( "../artifacts/contracts/NftBridge.sol/NftBridge.json");

const privateKey = process.env.PR_KEY;

// The URL of the network provider
const networkAddress = 'https://rpc-mumbai.maticvigil.com';

// Create a provider using the URL
const provider = new ethers.providers.JsonRpcProvider(networkAddress);

// Create a signer from the private key and provider
const wallet = new ethers.Wallet(privateKey, provider);


// get balance below which is supposed to be deployed in the  mumbai testnet
const main = async () => {

  const token_address = "0xE2aC2Db0cbEA02a14792EFB613FCc323F3D55D8c"; //  the address which i got from polygonscan

  // so i already have my wallet and abi above now i just need to get the instance of the contract through the above token_address

  const token = new ethers.Contract(token_address, Bridge.abi, wallet);

  // Fetch contract balance after FXRoot contract is fetched successfully
  const balance = await token.balanceOf(wallet.address);

  const ContractBalance = parseInt(balance.toString(), 10);

  console.log("The Balance of the Bridge Contract " ,  wallet.address , " is: " , ContractBalance);

};

// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
