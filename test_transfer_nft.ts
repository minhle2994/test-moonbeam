const test1Mnemonic = 'start print thing cart puppy virus crystal hire level bottom gap garbage';
const test2Mnemonic = 'nephew ten camera assist six apology fix shuffle keen century ugly sweet';
const contractAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_approved",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "_interfaceID",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

async function main() {
	const Web3 = require('web3');
	const web3 = new Web3('wss://moonbeam-alpha.api.onfinality.io/public-ws');
	// console.log('web3 version: ', web3.version);

	const contractAddress = '0x2953ea6f45fb189f1d33820d67c001ba287f6419';
	const contract = new web3.eth.Contract(contractAbi, contractAddress);

	const ethers = require('ethers');
	const test1Account = ethers.Wallet.fromMnemonic(test1Mnemonic);
	console.log('test 1 address: ', test1Account.address);
	const test1NftCount = parseInt(await contract.methods.balanceOf(test1Account.address).call());
	const test1NftIndex = Array.from(Array(test1NftCount).keys());
	const test1Nft = await Promise.all(test1NftIndex.map(i => contract.methods.tokenOfOwnerByIndex(test1Account.address, i).call()));
	console.log('test 1 nft: ', test1Nft);

	const test2Account = ethers.Wallet.fromMnemonic(test2Mnemonic);
	console.log('test 2 address: ', test2Account.address);
	const test2NftCount = parseInt(await contract.methods.balanceOf(test2Account.address).call());
	const test2NftIndex = Array.from(Array(test2NftCount).keys());
	const test2Nft = await Promise.all(test2NftIndex.map(i => contract.methods.tokenOfOwnerByIndex(test2Account.address, i).call()));
	console.log('test 2 nft: ', test2Nft);

	const fromAccount = test1Nft.length > 0 ? test1Account : test2Account;
	const fromAccountTxCount = await web3.eth.getTransactionCount(fromAccount.address);
	const fromAccountNft = test1Nft.length > 0 ? test1Nft : test2Nft;
	const toAccount = test1Nft.length > 0 ? test2Account : test1Account;

    const gasPriceGwei = await web3.eth.getGasPrice();
    const gasLimit = await web3.eth.estimateGas({
    	'nonce': '0x' + fromAccountTxCount.toString(16),
        'from': fromAccount.address,
        'gasPrice': web3.utils.toHex(gasPriceGwei),
        'to': contractAddress,
        'value': "0x00",
        'data': contract.methods.safeTransferFrom(fromAccount.address, toAccount.address, fromAccountNft[0]).encodeABI(),
    });

    let rawTransaction = {
		'nonce': '0x' + fromAccountTxCount.toString(16),
		'from': fromAccount.address,
		'gasPrice': web3.utils.toHex(gasPriceGwei),
		'gasLimit': gasLimit,
		'to': contractAddress,
		'value': "0x00",
		'data': contract.methods.safeTransferFrom(fromAccount.address, toAccount.address, fromAccountNft[0]).encodeABI(),
    };
    console.log('Raw of Transaction: \n', JSON.stringify(rawTransaction, null, '\t'));

	const Common = require('ethereumjs-common');
	const common = Common.default.forCustomChain('mainnet', {
		name: 'moonbase',
		networkId: 1287,
		chainId: 1287
	}, 'petersburg');

    const Tx = require('ethereumjs-tx').Transaction;
    const tx = new Tx(rawTransaction, {common});
    tx.sign(Buffer.from(fromAccount.privateKey.slice(2), 'hex'));
    const serializedTx = tx.serialize();
    console.log('Attempting to send signed tx:', serializedTx.toString('hex'));

    await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
    .on('transactionHash', (hash: string) => {
    	console.log('Tx hash:', hash);
    })
    .on('receipt', (receipt: any) => {
    	console.log('Receipt info: \n', JSON.stringify(receipt, null, '\t'));
    })
    .on('confirmation', (confNumber: any, receipt: any, latestBlockHash: any) => {
    	console.log('Latest block hash:', latestBlockHash);
    	console.log('Confirmation number:', confNumber);
    	// console.log('Receipt info: \n', JSON.stringify(receipt, null, '\t'));
    })
    .on('error', (error: any) => {
    	console.log('Error occur:', error)
    })
    .then((receipt: any) => {
    	console.log('Finally done');
	});
}

main()
	.then(() => process.exit(0))
	.catch((err) => {
		console.log(err);
    	process.exit(1);
  	});
