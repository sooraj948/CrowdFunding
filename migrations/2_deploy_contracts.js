const CrowdFunding = artifacts.require("CrowdFunding");

module.exports = async function (deployer)
{
    await deployer.deploy(CrowdFunding);
    const cf = await CrowdFunding.deployed();

    
}