import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
}) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying MarcadoNFT");
  const result = await deploy("MarcadoNFT", {
    from: deployer,
    waitConfirmations: 1,
    log: true,
  });
  console.log("========Deploying MarcadoNFT========");
  console.log("Contract address: ", result.address);
  
};

func.tags = ["PayLink"];

export default func;

// ========Deploying MarcadoNFT========
// Contract address:  0xCB1919974Fdd5fCA4C695bdb7e41dC807309313E