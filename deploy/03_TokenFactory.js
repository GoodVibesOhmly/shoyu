const { network } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deployer, admin } = await getNamedAccounts();
    const { deploy, execute, get } = deployments;

    const baseURI =
        network.chainId === 1 ? "/" : "https://shoyu-api-server.herokuapp.com/metadata/" + network.chainId + "/"; // TODO
    const result = await deploy("TokenFactory", {
        from: deployer,
        args: [admin, 25, admin, 0, baseURI, baseURI],
        log: true,
    });

    if (result.newlyDeployed) {
        await execute("TokenFactory", { from: deployer, log: true }, "setDeployerWhitelisted", admin, true);
        const nft721 = await get("NFT721V0");
        await execute("TokenFactory", { from: deployer, log: true }, "upgradeNFT721", nft721.address);
        const nft1155 = await get("NFT1155V0");
        await execute("TokenFactory", { from: deployer, log: true }, "upgradeNFT1155", nft1155.address);
        const socialToken = await get("SocialTokenV0");
        await execute("TokenFactory", { from: deployer, log: true }, "upgradeSocialToken", socialToken.address);
    }
};
