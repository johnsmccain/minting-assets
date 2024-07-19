import { artifacts } from "hardhat";

export default async function saveFrontendFiles(name:string, contractAddress:string){
    const fs = require("fs");
    const contractdDir = `${__dirname}/../../client/contractsData`;
   
    if (!fs.existsSync(contractdDir)){
        fs.mkdirSync(contractdDir);
    }
    // console.log(`${name} :${contractAddress}`)
    fs.writeFileSync(`${contractdDir}/${name}-address.json`,JSON.stringify({address: `${contractAddress}`}, undefined, 2));

    const contractArtifact = artifacts.readArtifactSync(name);
    // console.log(contractArtifact)

    fs.writeFileSync(`${contractdDir}/${name}.json`,JSON.stringify(contractArtifact, null, 2));
}