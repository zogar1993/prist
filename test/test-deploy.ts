import { expect } from "chai"
import { ethers } from "hardhat"
import { Prist, Prist__factory } from "../typechain-types"

describe("Prist", () => {
	let factory: Prist__factory
	let contract: Prist

	beforeEach(async () => {
		factory = await ethers.getContractFactory("Prist") as Prist__factory
		contract = await factory.deploy("Wea")
	})

	it("Should be deployed with text", async () => {
		const value = await contract.getValue()
		expect(value).to.equal("Wea")
	})

	it("Should update when we call setValue", async () => {
		const response = await contract.setValue("Fome")
		await response.wait(1)

		const value = await contract.getValue()
		expect(value).to.equal("Fome")
	})
})