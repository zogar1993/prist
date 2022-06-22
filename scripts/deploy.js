const { ethers, run, network } = require("hardhat")

async function main() {
	const Prist = await ethers.getContractFactory("Prist")

	console.log("Deploying... ")
	const contract = await Prist.deploy("Fome")
	await contract.deployed()
	console.log(`Deployed to ${contract.address}`)

	if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
		console.log(`Verifying ${contract.address}`)
		await contract.deployTransaction.wait(6)
		await verify(contract.address, [])
	}

	const a = await contract.greet()
	console.log(a)
	const transactionResponse = await contract.setGreeting("Weon")
	await transactionResponse.wait(1)

	const newA = await contract.greet()
	console.log(newA)

}

async function verify(contractAddress, args) {
	console.log("Verifying code...")
	try {
		await run("verify:verify", {
			address: contractAddress,
			constructorArguments: args
		})
	} catch (e) {
		if (e.message.toLowerCase().includes("already verified"))
			console.log("Already Verified!")
		else
			console.log(e)
	}
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
