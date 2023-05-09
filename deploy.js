// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const provider = new HDWalletProvider(
    'visit glue fluid novel rabbit blade trip draw gym domain crouch basket',
    'https://sepolia.infura.io/v3/3cc2f04a26ed4ae88152e479b2768b90'
)
const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    try {
        
        console.log('trying to deploy from account', accounts[0]);
    
        const result = await new web3.eth.Contract(JSON.parse(interface))
          .deploy({ data: bytecode, arguments: ['hi there!'] })
          .send({ gas: 10000000, from: accounts[0] });
    
        console.log('Contract deployed to', result.options.address);
        provider.engine.stop();
      } catch (error) {
        balance = await web3.eth.getBalance(accounts[0]);
        console.log(`Account balance: ${web3.utils.fromWei(balance, 'ether')} ETH`);
        console.error('Error during deployment:', error);
        provider.engine.stop();
      }
};

deploy();
