const ARBITRUM_CONTRACT_ADDRESS = 0x7308dc041a0de3fa7fe501e9bc73f0e99d32cc40;
const OASIS_CONTRACT_ADDRESS = 0x7308dc041a0de3fa7fe501e9bc73f0e99d32cc40;


const OASIS_ABI = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "gatewayAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "feePayerAddress",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "CustomError",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint64",
				"name": "requestId",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ackMessage",
				"type": "string"
			}
		],
		"name": "AckFromDestination",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "eventIdentifier",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isSuccess",
				"type": "bool"
			}
		],
		"name": "ExecutionStatus",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint64",
				"name": "requestId",
				"type": "uint64"
			}
		],
		"name": "NewPing",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "srcChainId",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint64",
				"name": "requestId",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "PingFromSource",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"name": "ackFromDestination",
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
		"name": "currentRequestId",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gatewayContract",
		"outputs": [
			{
				"internalType": "contract IGateway",
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
				"internalType": "uint64",
				"name": "destGasLimit",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "destGasPrice",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "ackGasLimit",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "ackGasPrice",
				"type": "uint64"
			},
			{
				"internalType": "uint128",
				"name": "relayerFees",
				"type": "uint128"
			},
			{
				"internalType": "uint8",
				"name": "ackType",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "isReadCall",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "asmAddress",
				"type": "string"
			}
		],
		"name": "getRequestMetadata",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestIdentifier",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "execFlag",
				"type": "bool"
			},
			{
				"internalType": "bytes",
				"name": "execData",
				"type": "bytes"
			}
		],
		"name": "iAck",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "destChainId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "destinationContractAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "str",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "requestMetadata",
				"type": "bytes"
			}
		],
		"name": "iPing",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "packet",
				"type": "bytes"
			},
			{
				"internalType": "string",
				"name": "srcChainId",
				"type": "string"
			}
		],
		"name": "iReceive",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"name": "pingFromSource",
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
		"inputs": [
			{
				"internalType": "string",
				"name": "feePayerAddress",
				"type": "string"
			}
		],
		"name": "setDappMetadata",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "gateway",
				"type": "address"
			}
		],
		"name": "setGateway",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const ARBITRUM_ABI = [
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "gatewayAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "feePayerAddress",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "CustomError",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint64",
				"name": "requestId",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ackMessage",
				"type": "string"
			}
		],
		"name": "AckFromDestination",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "eventIdentifier",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isSuccess",
				"type": "bool"
			}
		],
		"name": "ExecutionStatus",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint64",
				"name": "requestId",
				"type": "uint64"
			}
		],
		"name": "NewPing",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "srcChainId",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint64",
				"name": "requestId",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "PingFromSource",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"name": "ackFromDestination",
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
		"name": "currentRequestId",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gatewayContract",
		"outputs": [
			{
				"internalType": "contract IGateway",
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
				"internalType": "uint64",
				"name": "destGasLimit",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "destGasPrice",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "ackGasLimit",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "ackGasPrice",
				"type": "uint64"
			},
			{
				"internalType": "uint128",
				"name": "relayerFees",
				"type": "uint128"
			},
			{
				"internalType": "uint8",
				"name": "ackType",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "isReadCall",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "asmAddress",
				"type": "string"
			}
		],
		"name": "getRequestMetadata",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestIdentifier",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "execFlag",
				"type": "bool"
			},
			{
				"internalType": "bytes",
				"name": "execData",
				"type": "bytes"
			}
		],
		"name": "iAck",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "destChainId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "destinationContractAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "str",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "requestMetadata",
				"type": "bytes"
			}
		],
		"name": "iPing",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "bytes",
				"name": "packet",
				"type": "bytes"
			},
			{
				"internalType": "string",
				"name": "srcChainId",
				"type": "string"
			}
		],
		"name": "iReceive",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"name": "pingFromSource",
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
		"inputs": [
			{
				"internalType": "string",
				"name": "feePayerAddress",
				"type": "string"
			}
		],
		"name": "setDappMetadata",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "gateway",
				"type": "address"
			}
		],
		"name": "setGateway",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];