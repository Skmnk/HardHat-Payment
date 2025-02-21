const {getNamedAccounts, ethers} = require("hardhat");
const { parseEther } = require("ethers");


async function main(){
    const {deployer} = await getNamedAccounts();
    const fundMe = await ethers.getContract("FundMe", deployer);
    console.log("Funding Contract ...");
    const transactionResponse = await fundMe.fund({
        // value: ethers.utils.parseEther("0.1")
        value : parseEther("0.1")
    })
    await transactionResponse.wait()
    console.log("Funded....")
}

main().then(() => process.exit(0)).catch((error) => {

    console.error(error);
    process.exit(1);
  });