import Web3 from 'web3'
import HDWalletProvider from '@truffle/hdwallet-provider'

import dsTokenAbi from './abis/DSTokenInterface.json' assert { type: 'json' }

const privateKey = 'key here'
const investorAddr = 'wallet address here'

const provider = new HDWalletProvider({
  privateKeys: [privateKey],
  providerOrUrl: 'https://polygon-testnet.public.blastapi.io',
  chainId: 80001,
})

const web3 = new Web3(provider)

const dsTokenAddress = 'ds token address here'

const dsToken = new web3.eth.Contract(dsTokenAbi, dsTokenAddress)

dsToken.methods
  .issueTokens(investorAddr, 3)
  .call()
  .then((res) => console.log(res))