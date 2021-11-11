require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe strong response muscle pulse install hat army gate'; 
let testAccounts = [
"0x2b256eb65a38c343c4dbd0de6ceeacc8c9d266c11ef8661898336f8dc98b9152",
"0x732b26e35bee996d8e3593e5666b178d0cb9ccb07ff5c6f331c304b8ba3de372",
"0xd8d06f0f56814ed1d3c1dc3049a733754f45d14a3d0bfe06ce4f7505be7622e3",
"0x22583f0c61756a4d15675fb9ef048690d05130307088464d6d96145ea9743dff",
"0x4385bcde6aaa14dd5853b3364ca3a2775185ea2907926c450b6c431709a60300",
"0x2a8f29e793d415e29c6ed6e2e884ea608477c395064a10ba3eaf2322bdd432cc",
"0xcb3c60a5d27563a71f00e02c1dcdd624cb81ff85c372d05bc3986c7a3f5a9ee1",
"0x4d79901277ff254169cf2d98577d788c5007e91f746c4d5a3d883693e721075b",
"0x1c9da5f9cb4ec97e96e0a5cac3735f89dea819e5b93b0dab7d58e3b8f4e4cc5c",
"0xca9eb9356e12678c1aada75b10c837f003827debeaef381d61c9b4fa9aff2a5a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


