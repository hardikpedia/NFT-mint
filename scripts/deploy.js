const { ethers} = require("hardhat")


async function main(){
  const MyNFT = await ethers.getContractFactory("MyNFT");

  const myNFT = await MyNFT.deploy();

  console.log("Contract deployed to address:",myNFT.address);
}

  try{
    main();
  }catch(e){
    console.log(e);
    process.exit(1);
  }
  // 0x1ddc6Db445e4e3413F322853B3C699A630c583de