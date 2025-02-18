/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  LSSVMPairFactory,
  LSSVMPairFactoryInterface,
} from "../LSSVMPairFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract LSSVMPairEnumerableETH",
        name: "_enumerableETHTemplate",
        type: "address",
      },
      {
        internalType: "contract LSSVMPairMissingEnumerableETH",
        name: "_missingEnumerableETHTemplate",
        type: "address",
      },
      {
        internalType: "contract LSSVMPairEnumerableERC20",
        name: "_enumerableERC20Template",
        type: "address",
      },
      {
        internalType: "contract LSSVMPairMissingEnumerableERC20",
        name: "_missingEnumerableERC20Template",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_protocolFeeRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_protocolFeeMultiplier",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract ICurve",
        name: "bondingCurve",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAllowed",
        type: "bool",
      },
    ],
    name: "BondingCurveStatusUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAllowed",
        type: "bool",
      },
    ],
    name: "CallTargetStatusUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
    ],
    name: "NFTDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
    ],
    name: "NewPair",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newMultiplier",
        type: "uint256",
      },
    ],
    name: "ProtocolFeeMultiplierUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipientAddress",
        type: "address",
      },
    ],
    name: "ProtocolFeeRecipientUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract LSSVMRouter",
        name: "router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAllowed",
        type: "bool",
      },
    ],
    name: "RouterStatusUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
    ],
    name: "TokenDeposit",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract ICurve",
        name: "",
        type: "address",
      },
    ],
    name: "bondingCurveAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "callAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "enumerableERC20Template",
    outputs: [
      {
        internalType: "contract LSSVMPairEnumerableERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "enumerableETHTemplate",
    outputs: [
      {
        internalType: "contract LSSVMPairEnumerableETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "missingEnumerableERC20Template",
    outputs: [
      {
        internalType: "contract LSSVMPairMissingEnumerableERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "missingEnumerableETHTemplate",
    outputs: [
      {
        internalType: "contract LSSVMPairMissingEnumerableETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "protocolFeeMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "protocolFeeRecipient",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract LSSVMRouter",
        name: "",
        type: "address",
      },
    ],
    name: "routerStatus",
    outputs: [
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "wasEverAllowed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
    payable: true,
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "contract ICurve",
        name: "_bondingCurve",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_assetRecipient",
        type: "address",
      },
      {
        internalType: "enum LSSVMPair.PoolType",
        name: "_poolType",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "_delta",
        type: "uint128",
      },
      {
        internalType: "uint96",
        name: "_fee",
        type: "uint96",
      },
      {
        internalType: "uint128",
        name: "_spotPrice",
        type: "uint128",
      },
      {
        internalType: "uint256[]",
        name: "_initialNFTIDs",
        type: "uint256[]",
      },
    ],
    name: "createPairETH",
    outputs: [
      {
        internalType: "contract LSSVMPairETH",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract ERC20",
            name: "token",
            type: "address",
          },
          {
            internalType: "contract IERC721",
            name: "nft",
            type: "address",
          },
          {
            internalType: "contract ICurve",
            name: "bondingCurve",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "assetRecipient",
            type: "address",
          },
          {
            internalType: "enum LSSVMPair.PoolType",
            name: "poolType",
            type: "uint8",
          },
          {
            internalType: "uint128",
            name: "delta",
            type: "uint128",
          },
          {
            internalType: "uint96",
            name: "fee",
            type: "uint96",
          },
          {
            internalType: "uint128",
            name: "spotPrice",
            type: "uint128",
          },
          {
            internalType: "uint256[]",
            name: "initialNFTIDs",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "initialTokenBalance",
            type: "uint256",
          },
        ],
        internalType: "struct LSSVMPairFactory.CreateERC20PairParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "createPairERC20",
    outputs: [
      {
        internalType: "contract LSSVMPairERC20",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "potentialPair",
        type: "address",
      },
      {
        internalType: "enum ILSSVMPairFactoryLike.PairVariant",
        name: "variant",
        type: "uint8",
      },
    ],
    name: "isPair",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "withdrawETHProtocolFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawERC20ProtocolFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_protocolFeeRecipient",
        type: "address",
      },
    ],
    name: "changeProtocolFeeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_protocolFeeMultiplier",
        type: "uint256",
      },
    ],
    name: "changeProtocolFeeMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ICurve",
        name: "bondingCurve",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isAllowed",
        type: "bool",
      },
    ],
    name: "setBondingCurveAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "target",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isAllowed",
        type: "bool",
      },
    ],
    name: "setCallAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract LSSVMRouter",
        name: "_router",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isAllowed",
        type: "bool",
      },
    ],
    name: "setRouterAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "depositNFTs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162001f3738038062001f3783398101604081905262000035916200013c565b6200004033620000d3565b6001600160a01b0386811660805285811660a05284811660c05283811660e052600180546001600160a01b03191691841691909117905567016345785d8a0000811115620000c45760405162461bcd60e51b815260206004820152600d60248201526c46656520746f6f206c6172676560981b604482015260640160405180910390fd5b60025550620001c49350505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200013957600080fd5b50565b60008060008060008060c087890312156200015657600080fd5b8651620001638162000123565b6020880151909650620001768162000123565b6040880151909550620001898162000123565b60608801519094506200019c8162000123565b6080880151909350620001af8162000123565b8092505060a087015190509295509295509295565b60805160a05160c05160e051611cf362000244600039600081816102a30152818161057601528181610aab0152610ad60152600081816103aa0152818161052a0152610afc01526000818161016c0152818161060001528181610f970152610fc201526000818161045e015281816105bb0152610fe80152611cf36000f3fe60806040526004361061014e5760003560e01c8063715018a6116100b6578063ad2e57701161006f578063ad2e57701461044c578063b483eddc14610480578063cc5bc20b14610495578063ce9c095d146104b5578063ebd0f693146104c8578063f2fde38b146104e857600080fd5b8063715018a6146103455780638da5cb5b1461035a5780639c3c11d214610378578063a427f1ad14610398578063a82719c8146103cc578063a93ec68b146103fc57600080fd5b80634bf107c1116101085780634bf107c1146102715780634c6bc43314610291578063514f0330146102c557806359722caa146102e557806364df049e146103055780636cc88edb1461032557600080fd5b80624885ea1461015a57806308f25a8f146101ab5780631cad5a40146101db5780631ce4c78b146101fd5780631fba95e8146102215780632cdb394b1461025157600080fd5b3661015557005b600080fd5b34801561016657600080fd5b5061018e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101b757600080fd5b506101cb6101c6366004611825565b610508565b60405190151581526020016101a2565b3480156101e757600080fd5b506101fb6101f6366004611862565b61062f565b005b34801561020957600080fd5b5061021360025481565b6040519081526020016101a2565b34801561022d57600080fd5b506101cb61023c3660046118a3565b60046020526000908152604090205460ff1681565b34801561025d57600080fd5b506101fb61026c366004611913565b610722565b34801561027d57600080fd5b506101fb61028c366004611989565b610853565b34801561029d57600080fd5b5061018e7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102d157600080fd5b506101fb6102e03660046118a3565b6108ea565b3480156102f157600080fd5b5061018e6103003660046119b7565b6109ab565b34801561031157600080fd5b5060015461018e906001600160a01b031681565b34801561033157600080fd5b506101fb610340366004611989565b610c45565b34801561035157600080fd5b506101fb610d59565b34801561036657600080fd5b506000546001600160a01b031661018e565b34801561038457600080fd5b506101fb6103933660046119f3565b610d8f565b3480156103a457600080fd5b5061018e7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103d857600080fd5b506101cb6103e73660046118a3565b60036020526000908152604090205460ff1681565b34801561040857600080fd5b506104356104173660046118a3565b60056020526000908152604090205460ff8082169161010090041682565b6040805192151583529015156020830152016101a2565b34801561045857600080fd5b5061018e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048c57600080fd5b506101fb610e36565b3480156104a157600080fd5b506101fb6104b0366004611a0c565b610e76565b61018e6104c3366004611a7f565b610ebe565b3480156104d457600080fd5b506101fb6104e3366004611989565b611093565b3480156104f457600080fd5b506101fb6105033660046118a3565b611181565b6000600282600381111561051e5761051e611b40565b14156105565761054f307f00000000000000000000000000000000000000000000000000000000000000008561121c565b9050610629565b600382600381111561056a5761056a611b40565b141561059b5761054f307f00000000000000000000000000000000000000000000000000000000000000008561121c565b60008260038111156105af576105af611b40565b14156105e05761054f307f000000000000000000000000000000000000000000000000000000000000000085611296565b60018260038111156105f4576105f4611b40565b14156106255761054f307f000000000000000000000000000000000000000000000000000000000000000085611296565b5060005b92915050565b6106446001600160a01b038416338484611310565b61064f826002610508565b806106605750610660826003610508565b1561071d57816001600160a01b031663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c79190611b56565b6001600160a01b0316836001600160a01b0316141561071d576040516001600160a01b03831681527f831faf3fbb75c9fc66e318de7e95905d24c0430822da168c1c06fd49cba8f5f79060200160405180910390a15b505050565b8160005b818110156107cb57856001600160a01b03166342842e0e338588888681811061075157610751611b73565b6040516001600160e01b031960e088901b1681526001600160a01b03958616600482015294909316602485015250602090910201356044820152606401600060405180830381600087803b1580156107a857600080fd5b505af11580156107bc573d6000803e3d6000fd5b50505050806001019050610726565b506107d7826002610508565b806107e857506107e8826000610508565b806107f957506107f9826003610508565b8061080a575061080a826001610508565b1561084c576040516001600160a01b03831681527f4fd0cd7c14badac45ff0bee670a9d8dd80e87907afcf2c121e0fd4b8b4b0047f9060200160405180910390a15b5050505050565b6000546001600160a01b031633146108865760405162461bcd60e51b815260040161087d90611b89565b60405180910390fd5b6001600160a01b038216600081815260036020908152604091829020805460ff19168515159081179091558251938452908301527f1da28d127ec72d2dde6a533c98857664b25cd827680fb1f39f57394c2b444d9191015b60405180910390a15050565b6000546001600160a01b031633146109145760405162461bcd60e51b815260040161087d90611b89565b6001600160a01b0381166109565760405162461bcd60e51b815260206004820152600960248201526830206164647265737360b81b604482015260640161087d565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527fceec08a75d1f3b12c14c6cdc16c081aec1c401c2eac1d8c6ea91e9d73b929211906020015b60405180910390a150565b60006003816109c060608501604086016118a3565b6001600160a01b0316815260208101919091526040016000205460ff16610a295760405162461bcd60e51b815260206004820152601d60248201527f426f6e64696e67206375727665206e6f742077686974656c6973746564000000604482015260640161087d565b6000610a3b60408401602085016118a3565b6040516301ffc9a760e01b815263780e9d6360e01b60048201526001600160a01b0391909116906301ffc9a790602401602060405180830381865afa925050508015610aa4575060408051601f3d908101601f19168201909252610aa191810190611bbe565b60015b610acf57507f0000000000000000000000000000000000000000000000000000000000000000610b20565b80610afa577f0000000000000000000000000000000000000000000000000000000000000000610b1c565b7f00000000000000000000000000000000000000000000000000000000000000005b9150505b610b8630610b3460608601604087016118a3565b610b4460408701602088016118a3565b610b5460a0880160808901611bdb565b6002811115610b6557610b65611b40565b610b7260208901896118a3565b6001600160a01b0387169493929190611393565b9150610c0382610b9960208601866118a3565b610ba960408701602088016118a3565b610bb960808801606089016118a3565b610bc960c0890160a08a01611bf6565b610bd960e08a0160c08b01611c11565b610bea6101008b0160e08c01611bf6565b610bf86101008c018c611c2c565b8c6101200135611416565b6040516001600160a01b03831681527ff5bdc103c3e68a20d5f97d2d46792d3fdddfa4efeb6761f8141e6a7b936ca66c9060200160405180910390a150919050565b6000546001600160a01b03163314610c6f5760405162461bcd60e51b815260040161087d90611b89565b8015610cd2576001600160a01b03821660009081526004602052604090205460ff1615610cd25760405162461bcd60e51b815260206004820152601160248201527021b0b713ba1031b0b636103937baba32b960791b604482015260640161087d565b604080518082018252821515808252600160208084019182526001600160a01b03871660008181526005835286902094518554935161ffff1990941690151561ff0019161761010093151593909302929092179093558351908152918201527f24e274cfd23919da24a57044266685f5474338837aecdcca3136b2102f78fee591016108de565b6000546001600160a01b03163314610d835760405162461bcd60e51b815260040161087d90611b89565b610d8d6000611549565b565b6000546001600160a01b03163314610db95760405162461bcd60e51b815260040161087d90611b89565b67016345785d8a0000811115610e015760405162461bcd60e51b815260206004820152600d60248201526c46656520746f6f206c6172676560981b604482015260640161087d565b60028190556040518181527f7c5d30e0df5c540841a598b27bd89807223a2e6348125bb4aa74f1a8cb9ce768906020016109a0565b6000546001600160a01b03163314610e605760405162461bcd60e51b815260040161087d90611b89565b600154610d8d906001600160a01b031647611599565b6000546001600160a01b03163314610ea05760405162461bcd60e51b815260040161087d90611b89565b600154610eba906001600160a01b038481169116836115ea565b5050565b6001600160a01b03881660009081526003602052604081205460ff16610f265760405162461bcd60e51b815260206004820152601d60248201527f426f6e64696e67206375727665206e6f742077686974656c6973746564000000604482015260640161087d565b6040516301ffc9a760e01b815263780e9d6360e01b60048201526000906001600160a01b038c16906301ffc9a790602401602060405180830381865afa925050508015610f90575060408051601f3d908101601f19168201909252610f8d91810190611bbe565b60015b610fbb57507f000000000000000000000000000000000000000000000000000000000000000061100c565b80610fe6577f0000000000000000000000000000000000000000000000000000000000000000611008565b7f00000000000000000000000000000000000000000000000000000000000000005b9150505b611037308b8d8b600281111561102457611024611b40565b6001600160a01b03861693929190611668565b9150611049828c8b8a8a8a8a8a6116e1565b6040516001600160a01b03831681527ff5bdc103c3e68a20d5f97d2d46792d3fdddfa4efeb6761f8141e6a7b936ca66c9060200160405180910390a1509998505050505050505050565b6000546001600160a01b031633146110bd5760405162461bcd60e51b815260040161087d90611b89565b8015611125576001600160a01b038216600090815260056020526040902054610100900460ff16156111255760405162461bcd60e51b815260206004820152601160248201527021b0b713ba1031b0b636103937baba32b960791b604482015260640161087d565b6001600160a01b038216600081815260046020908152604091829020805460ff19168515159081179091558251938452908301527fab2e2e8d21d5efbffb30945e9b6ee1fb43620ef65a228f871f5028bf8a6e004a91016108de565b6000546001600160a01b031633146111ab5760405162461bcd60e51b815260040161087d90611b89565b6001600160a01b0381166112105760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161087d565b61121981611549565b50565b6000604051733d3d3d3d363d3d37605160353639366051013d7360601b81528360601b60148201526c5af43d3d93803e603357fd5bf360981b60288201528460601b6035820152604981016049600082863c6029810151602983015114602082015160208401511416815183511416925050509392505050565b6000604051733d3d3d3d363d3d37603d6035363936603d013d7360601b81528360601b60148201526c5af43d3d93803e603357fd5bf360981b60288201528460601b6035820152604981016049600082863c6029810151602983015114602082015160208401511416815183511416925050509392505050565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d116001600051141617169150508061084c5760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b604482015260640161087d565b60006040517f60863d8160093d39f33d3d3d3d363d3d37605160353639366051013d7300000081528760601b601d8201526c5af43d3d93803e603357fd5bf360981b60318201528660601b603e8201528560601b60528201528460601b606682015283607a8201538260601b607b820152608f816000f098975050505050505050565b60405163fd17aef960e01b81526001600160a01b038b169063fd17aef99061144a9033908b908b908b908b90600401611c76565b600060405180830381600087803b15801561146457600080fd5b505af1158015611478573d6000803e3d6000fd5b50611492925050506001600160a01b038a16338c84611310565b8160005b8181101561153b57896001600160a01b03166342842e0e338e8888868181106114c1576114c1611b73565b6040516001600160e01b031960e088901b1681526001600160a01b03958616600482015294909316602485015250602090910201356044820152606401600060405180830381600087803b15801561151857600080fd5b505af115801561152c573d6000803e3d6000fd5b50505050806001019050611496565b505050505050505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600080600085875af190508061071d5760405162461bcd60e51b815260206004820152601360248201527211551217d514905394d1915497d19052531151606a1b604482015260640161087d565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806116625760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b604482015260640161087d565b50505050565b60006040517f60723d8160093d39f33d3d3d3d363d3d37603d6035363936603d013d7300000081528660601b601d8201526c5af43d3d93803e603357fd5bf360981b60318201528560601b603e8201528460601b60528201528360601b606682015282607a820153607b816000f0979650505050505050565b60405163fd17aef960e01b81526001600160a01b0389169063fd17aef9906117159033908a908a908a908a90600401611c76565b600060405180830381600087803b15801561172f57600080fd5b505af1158015611743573d6000803e3d6000fd5b5061175b925050506001600160a01b03891634611599565b8060005b8181101561180457886001600160a01b03166342842e0e338c87878681811061178a5761178a611b73565b6040516001600160e01b031960e088901b1681526001600160a01b03958616600482015294909316602485015250602090910201356044820152606401600060405180830381600087803b1580156117e157600080fd5b505af11580156117f5573d6000803e3d6000fd5b5050505080600101905061175f565b50505050505050505050565b6001600160a01b038116811461121957600080fd5b6000806040838503121561183857600080fd5b823561184381611810565b915060208301356004811061185757600080fd5b809150509250929050565b60008060006060848603121561187757600080fd5b833561188281611810565b9250602084013561189281611810565b929592945050506040919091013590565b6000602082840312156118b557600080fd5b81356118c081611810565b9392505050565b60008083601f8401126118d957600080fd5b50813567ffffffffffffffff8111156118f157600080fd5b6020830191508360208260051b850101111561190c57600080fd5b9250929050565b6000806000806060858703121561192957600080fd5b843561193481611810565b9350602085013567ffffffffffffffff81111561195057600080fd5b61195c878288016118c7565b909450925050604085013561197081611810565b939692955090935050565b801515811461121957600080fd5b6000806040838503121561199c57600080fd5b82356119a781611810565b915060208301356118578161197b565b6000602082840312156119c957600080fd5b813567ffffffffffffffff8111156119e057600080fd5b820161014081850312156118c057600080fd5b600060208284031215611a0557600080fd5b5035919050565b60008060408385031215611a1f57600080fd5b8235611a2a81611810565b946020939093013593505050565b803560038110611a4757600080fd5b919050565b80356001600160801b0381168114611a4757600080fd5b80356bffffffffffffffffffffffff81168114611a4757600080fd5b60008060008060008060008060006101008a8c031215611a9e57600080fd5b8935611aa981611810565b985060208a0135611ab981611810565b975060408a0135611ac981611810565b9650611ad760608b01611a38565b9550611ae560808b01611a4c565b9450611af360a08b01611a63565b9350611b0160c08b01611a4c565b925060e08a013567ffffffffffffffff811115611b1d57600080fd5b611b298c828d016118c7565b915080935050809150509295985092959850929598565b634e487b7160e01b600052602160045260246000fd5b600060208284031215611b6857600080fd5b81516118c081611810565b634e487b7160e01b600052603260045260246000fd5b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215611bd057600080fd5b81516118c08161197b565b600060208284031215611bed57600080fd5b6118c082611a38565b600060208284031215611c0857600080fd5b6118c082611a4c565b600060208284031215611c2357600080fd5b6118c082611a63565b6000808335601e19843603018112611c4357600080fd5b83018035915067ffffffffffffffff821115611c5e57600080fd5b6020019150600581901b360382131561190c57600080fd5b6001600160a01b0395861681529390941660208401526001600160801b0391821660408401526bffffffffffffffffffffffff166060830152909116608082015260a0019056fea2646970667358221220d9cc814f76bb304b3aecbb515c7a4d606ee1e84dc583416f44aeef6996b9057664736f6c634300080b0033";

type LSSVMPairFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LSSVMPairFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LSSVMPairFactory__factory extends ContractFactory {
  constructor(...args: LSSVMPairFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _enumerableETHTemplate: PromiseOrValue<string>,
    _missingEnumerableETHTemplate: PromiseOrValue<string>,
    _enumerableERC20Template: PromiseOrValue<string>,
    _missingEnumerableERC20Template: PromiseOrValue<string>,
    _protocolFeeRecipient: PromiseOrValue<string>,
    _protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LSSVMPairFactory> {
    return super.deploy(
      _enumerableETHTemplate,
      _missingEnumerableETHTemplate,
      _enumerableERC20Template,
      _missingEnumerableERC20Template,
      _protocolFeeRecipient,
      _protocolFeeMultiplier,
      overrides || {}
    ) as Promise<LSSVMPairFactory>;
  }
  override getDeployTransaction(
    _enumerableETHTemplate: PromiseOrValue<string>,
    _missingEnumerableETHTemplate: PromiseOrValue<string>,
    _enumerableERC20Template: PromiseOrValue<string>,
    _missingEnumerableERC20Template: PromiseOrValue<string>,
    _protocolFeeRecipient: PromiseOrValue<string>,
    _protocolFeeMultiplier: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _enumerableETHTemplate,
      _missingEnumerableETHTemplate,
      _enumerableERC20Template,
      _missingEnumerableERC20Template,
      _protocolFeeRecipient,
      _protocolFeeMultiplier,
      overrides || {}
    );
  }
  override attach(address: string): LSSVMPairFactory {
    return super.attach(address) as LSSVMPairFactory;
  }
  override connect(signer: Signer): LSSVMPairFactory__factory {
    return super.connect(signer) as LSSVMPairFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LSSVMPairFactoryInterface {
    return new utils.Interface(_abi) as LSSVMPairFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LSSVMPairFactory {
    return new Contract(address, _abi, signerOrProvider) as LSSVMPairFactory;
  }
}
