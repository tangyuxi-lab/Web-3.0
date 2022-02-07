//https://eth-ropsten.alchemyapi.io/v2/BCV7IR-ONZwrlHJrLn9aHbS2D9PGQoP_

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/BCV7IR-ONZwrlHJrLn9aHbS2D9PGQoP_',
      accounts: ['b35b676fe171e3cf13c394abe6078fb73e083f05df8628c610c447dfed7be0b8']
    }
  }
}