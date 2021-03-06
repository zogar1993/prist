import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import "@typechain/hardhat"
import "dotenv/config"
import "hardhat-gas-reporter"
import "solidity-coverage"
import "./tasks/block-number"

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || ""
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x00003108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		goerli: {
			url: GOERLI_RPC_URL,
			accounts: [PRIVATE_KEY],
			chainId: 5
		},
		localhost: {
			url: "http://127.0.0.1:8545",
			chainId: 31337
		}
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY
	},
	gasReporter: {
		enabled: false,
		outputFile: "gas-report.txt",
		noColors: true,
		currency: "USD",
		coinmarketcap: COINMARKETCAP_API_KEY
	},
	solidity: "0.8.8"
}
