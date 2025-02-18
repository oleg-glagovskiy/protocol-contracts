/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PolicyManager, PolicyManagerInterface } from "../PolicyManager";

const _abi = [
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
        indexed: true,
        internalType: "address",
        name: "policy",
        type: "address",
      },
    ],
    name: "PolicyRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "policy",
        type: "address",
      },
    ],
    name: "PolicyWhitelisted",
    type: "event",
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
    inputs: [
      {
        internalType: "address",
        name: "policy",
        type: "address",
      },
    ],
    name: "addPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "policy",
        type: "address",
      },
    ],
    name: "removePolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "policy",
        type: "address",
      },
    ],
    name: "isPolicyWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "viewCountWhitelistedPolicies",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
    ],
    name: "viewWhitelistedPolicies",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6108758061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100f7578063b84ef08114610112578063d6f0d88e14610125578063f2fde38b1461013b57600080fd5b8063715018a61461008d578063747f54ae1461009757806378d38d82146100c1578063874516cd146100d4575b600080fd5b61009561014e565b005b6100aa6100a53660046106d7565b61018d565b6040516100b89291906106f9565b60405180910390f35b6100956100cf36600461074a565b610282565b6100e76100e236600461074a565b610338565b60405190151581526020016100b8565b6000546040516001600160a01b0390911681526020016100b8565b61009561012036600461074a565b61034b565b61012d610406565b6040519081526020016100b8565b61009561014936600461074a565b610417565b6000546001600160a01b031633146101815760405162461bcd60e51b815260040161017890610773565b60405180910390fd5b61018b60006104b2565b565b60606000828461019d6001610502565b6101a791906107be565b8111156101c657846101b96001610502565b6101c391906107be565b90505b60008167ffffffffffffffff8111156101e1576101e16107d1565b60405190808252806020026020018201604052801561020a578160200160208202803683370190505b50905060005b828110156102695761022d61022582896107e7565b60019061050c565b82828151811061023f5761023f6107fa565b6001600160a01b03909216602092830291909101909101528061026181610810565b915050610210565b508061027583886107e7565b9350935050509250929050565b6000546001600160a01b031633146102ac5760405162461bcd60e51b815260040161017890610773565b6102b760018261051f565b6102f55760405162461bcd60e51b815260206004820152600f60248201526e139bdd081dda1a5d195b1a5cdd1959608a1b6044820152606401610178565b610300600182610541565b506040516001600160a01b038216907f7d69543e56287cc6159e1cd00d200f2d86996b94ef9a170c4ec9a31daa6dd2ce90600090a250565b600061034560018361051f565b92915050565b6000546001600160a01b031633146103755760405162461bcd60e51b815260040161017890610773565b61038060018261051f565b156103c35760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481dda1a5d195b1a5cdd1959606a1b6044820152606401610178565b6103ce600182610556565b506040516001600160a01b038216907f5b5592d50e950152eab424f0fde17ba8b36801c96694a656ca54c6ffd149980890600090a250565b60006104126001610502565b905090565b6000546001600160a01b031633146104415760405162461bcd60e51b815260040161017890610773565b6001600160a01b0381166104a65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610178565b6104af816104b2565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000610345825490565b6000610518838361056b565b9392505050565b6001600160a01b03811660009081526001830160205260408120541515610518565b6000610518836001600160a01b038416610595565b6000610518836001600160a01b038416610688565b6000826000018281548110610582576105826107fa565b9060005260206000200154905092915050565b6000818152600183016020526040812054801561067e5760006105b96001836107be565b85549091506000906105cd906001906107be565b90508181146106325760008660000182815481106105ed576105ed6107fa565b9060005260206000200154905080876000018481548110610610576106106107fa565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061064357610643610829565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610345565b6000915050610345565b60008181526001830160205260408120546106cf57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610345565b506000610345565b600080604083850312156106ea57600080fd5b50508035926020909101359150565b604080825283519082018190526000906020906060840190828701845b8281101561073b5781516001600160a01b031684529284019290840190600101610716565b50505092019290925292915050565b60006020828403121561075c57600080fd5b81356001600160a01b038116811461051857600080fd5b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b81810381811115610345576103456107a8565b634e487b7160e01b600052604160045260246000fd5b80820180821115610345576103456107a8565b634e487b7160e01b600052603260045260246000fd5b600060018201610822576108226107a8565b5060010190565b634e487b7160e01b600052603160045260246000fdfea26469706673582212209823a4bd975099202da3838943c44ac32a35c2796006192d4b4d1c66679ce95464736f6c63430008110033";

type PolicyManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PolicyManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PolicyManager__factory extends ContractFactory {
  constructor(...args: PolicyManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PolicyManager> {
    return super.deploy(overrides || {}) as Promise<PolicyManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PolicyManager {
    return super.attach(address) as PolicyManager;
  }
  override connect(signer: Signer): PolicyManager__factory {
    return super.connect(signer) as PolicyManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PolicyManagerInterface {
    return new utils.Interface(_abi) as PolicyManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PolicyManager {
    return new Contract(address, _abi, signerOrProvider) as PolicyManager;
  }
}
