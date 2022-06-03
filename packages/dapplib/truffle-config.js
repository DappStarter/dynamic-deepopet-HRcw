require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note muscle protect idea knee bone trigger'; 
let testAccounts = [
"0x4b6030234957acac90bb6d755c03a29456ddbf90608c8f3c7a570f3ead615fcb",
"0x44b899661434b6ca8e2c6cd2a8edc47383d3d8a047ac40202230a9976d7156e0",
"0x501b721c24f5ca05d6a7e7d557fc723371e217da0a449150b10270930439f93b",
"0xb040ce3d85e98c91373d595c0dbc9a8178946c6ec36edea6cbf8ba4dc8c5076f",
"0x306aad5e69f32b1cdeacf76dcd68af9205508c4562010dfc5a3c50327fd05482",
"0x2cae31c61e3fc6cfe9650ed4fa6488528b1d7dad67fa44d515f843f3260caa4f",
"0x91e60087f92cb0d0c0231c000225ff4be4296f241b3e2f32e98453fa79665b10",
"0x90a5d5f22a7ebdd3eb8a23e0fb4f2325cf4b38ec35ef52c7add2b8bc5546c64d",
"0x78c5a137ff024c6da6d1990f7d6274302e2318c6aa1fc04cc2adae59a39c5263",
"0xd1ff113bceb9d98a146b344349f11d6e4ce579689d0285ee44c2857ab26b1c1d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

