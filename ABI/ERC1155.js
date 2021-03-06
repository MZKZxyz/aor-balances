const ERC1155 = {
    "contractName": "ERC1155",
    "abi":[	
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"name": "_owner",
					"type": "address"
				},
				{
					"indexed": true,
					"name": "_operator",
					"type": "address"
				},
				{
					"indexed": false,
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
					"name": "_operator",
					"type": "address"
				},
				{
					"indexed": true,
					"name": "_from",
					"type": "address"
				},
				{
					"indexed": true,
					"name": "_to",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "_ids",
					"type": "uint256[]"
				},
				{
					"indexed": false,
					"name": "_values",
					"type": "uint256[]"
				}
			],
			"name": "TransferBatch",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"name": "_operator",
					"type": "address"
				},
				{
					"indexed": true,
					"name": "_from",
					"type": "address"
				},
				{
					"indexed": true,
					"name": "_to",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "_id",
					"type": "uint256"
				},
				{
					"indexed": false,
					"name": "_value",
					"type": "uint256"
				}
			],
			"name": "TransferSingle",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "_value",
					"type": "string"
				},
				{
					"indexed": true,
					"name": "_id",
					"type": "uint256"
				}
			],
			"name": "URI",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_owner",
					"type": "address"
				},
				{
					"name": "_id",
					"type": "uint256"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_owners",
					"type": "address[]"
				},
				{
					"name": "_ids",
					"type": "uint256[]"
				}
			],
			"name": "balanceOfBatch",
			"outputs": [
				{
					"name": "",
					"type": "uint256[]"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_name",
					"type": "string"
				},
				{
					"name": "_totalSupply",
					"type": "uint256"
				},
				{
					"name": "_initialReserve",
					"type": "uint256"
				},
				{
					"name": "_supplyModel",
					"type": "address"
				},
				{
					"name": "_meltValue",
					"type": "uint256"
				},
				{
					"name": "_meltFeeRatio",
					"type": "uint16"
				},
				{
					"name": "_transferable",
					"type": "uint8"
				},
				{
					"name": "_transferFeeSettings",
					"type": "uint256[3]"
				},
				{
					"name": "_nonFungible",
					"type": "bool"
				}
			],
			"name": "create",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_owner",
					"type": "address"
				},
				{
					"name": "_operator",
					"type": "address"
				}
			],
			"name": "isApprovedForAll",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_ids",
					"type": "uint256[]"
				},
				{
					"name": "_values",
					"type": "uint256[]"
				}
			],
			"name": "melt",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_id",
					"type": "uint256"
				},
				{
					"name": "_to",
					"type": "address[]"
				},
				{
					"name": "_values",
					"type": "uint256[]"
				}
			],
			"name": "mintFungibles",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_id",
					"type": "uint256"
				},
				{
					"name": "_to",
					"type": "address[]"
				}
			],
			"name": "mintNonFungibles",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_from",
					"type": "address"
				},
				{
					"name": "_to",
					"type": "address"
				},
				{
					"name": "_ids",
					"type": "uint256[]"
				},
				{
					"name": "_values",
					"type": "uint256[]"
				},
				{
					"name": "_data",
					"type": "bytes"
				}
			],
			"name": "safeBatchTransferFrom",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_from",
					"type": "address"
				},
				{
					"name": "_to",
					"type": "address"
				},
				{
					"name": "_id",
					"type": "uint256"
				},
				{
					"name": "_value",
					"type": "uint256"
				},
				{
					"name": "_data",
					"type": "bytes"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_operator",
					"type": "address"
				},
				{
					"name": "_approved",
					"type": "bool"
				}
			],
			"name": "setApprovalForAll",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "_id",
					"type": "uint256"
				},
				{
					"name": "_uri",
					"type": "string"
				}
			],
			"name": "setURI",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
			  {
				"name": "_id",
				"type": "uint256"
			  }
			],
			"name": "totalSupply",
			"outputs": [
			  {
				"name": "",
				"type": "uint256"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
			  {
				"name": "_id",
				"type": "uint256"
			  }
			],
			"name": "circulatingSupply",
			"outputs": [
			  {
				"name": "",
				"type": "uint256"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
			  {
				"name": "_id",
				"type": "uint256"
			  }
			],
			"name": "name",
			"outputs": [
			  {
				"name": "",
				"type": "string"
			  }
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_interfaceID",
					"type": "bytes4"
				}
			],
			"name": "supportsInterface",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "_id",
					"type": "uint256"
				}
			],
			"name": "uri",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	]
      
}

module.exports = ERC1155;