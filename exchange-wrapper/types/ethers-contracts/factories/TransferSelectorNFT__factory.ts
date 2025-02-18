/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TransferSelectorNFT,
  TransferSelectorNFTInterface,
} from "../TransferSelectorNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_transferManagerERC721",
        type: "address",
      },
      {
        internalType: "address",
        name: "_transferManagerERC1155",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collection",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "transferManager",
        type: "address",
      },
    ],
    name: "CollectionTransferManagerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collection",
        type: "address",
      },
    ],
    name: "CollectionTransferManagerRemoved",
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
    inputs: [],
    name: "INTERFACE_ID_ERC1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INTERFACE_ID_ERC721",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRANSFER_MANAGER_ERC1155",
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
    name: "TRANSFER_MANAGER_ERC721",
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
        name: "",
        type: "address",
      },
    ],
    name: "transferManagerSelectorForCollection",
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
        name: "collection",
        type: "address",
      },
      {
        internalType: "address",
        name: "transferManager",
        type: "address",
      },
    ],
    name: "addCollectionTransferManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
    ],
    name: "removeCollectionTransferManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collection",
        type: "address",
      },
    ],
    name: "checkTransferManagerForToken",
    outputs: [
      {
        internalType: "address",
        name: "transferManager",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516109ad3803806109ad8339818101604052604081101561003357600080fd5b50805160209091015160006100466100ae565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160601b0319606092831b8116608052911b1660a0526100b2565b3390565b60805160601c60a05160601c6108c86100e56000398061032f52806106a352508061053052806105fe52506108c86000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063715018a611610071578063715018a6146101735780638da5cb5b1461017b578063b1357ddd14610183578063bc6bc0cd1461018b578063cc15949314610193578063f2fde38b146101b9576100a9565b806325c6a895146100ae57806333bf6156146100de57806338928956146101035780634216a753146101275780637053fb791461014d575b600080fd5b6100dc600480360360408110156100c457600080fd5b506001600160a01b03813581169160200135166101df565b005b6100e6610322565b604080516001600160e01b03199092168252519081900360200190f35b61010b61032d565b604080516001600160a01b039092168252519081900360200190f35b61010b6004803603602081101561013d57600080fd5b50356001600160a01b0316610351565b6100dc6004803603602081101561016357600080fd5b50356001600160a01b031661036c565b6100dc610473565b61010b61051f565b61010b61052e565b6100e6610552565b61010b600480360360208110156101a957600080fd5b50356001600160a01b031661055d565b6100dc600480360360208110156101cf57600080fd5b50356001600160a01b03166106c8565b6101e76107ca565b6001600160a01b03166101f861051f565b6001600160a01b031614610241576040805162461bcd60e51b81526020600482018190526024820152600080516020610822833981519152604482015290519081900360640190fd5b6001600160a01b0382166102865760405162461bcd60e51b81526004018080602001828103825260288152602001806108426028913960400191505060405180910390fd5b6001600160a01b0381166102cb5760405162461bcd60e51b815260040180806020018281038252602d8152602001806107f5602d913960400191505060405180910390fd5b6001600160a01b0382811660008181526001602052604080822080546001600160a01b0319169486169485179055517fda166be6ba0ebb71be3f83e7d669765de552ea08978bfe3e3e42d54174111b629190a35050565b636cdb3d1360e11b81565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001602052600090815260409020546001600160a01b031681565b6103746107ca565b6001600160a01b031661038561051f565b6001600160a01b0316146103ce576040805162461bcd60e51b81526020600482018190526024820152600080516020610822833981519152604482015290519081900360640190fd5b6001600160a01b03818116600090815260016020526040902054166104245760405162461bcd60e51b815260040180806020018281038252602981526020018061086a6029913960400191505060405180910390fd5b6001600160a01b03811660008181526001602052604080822080546001600160a01b0319169055517f8c3bf4babc197f3db0e7ec65aaf23fc0efb0e689436aeea8514c3f01fd97841f9190a250565b61047b6107ca565b6001600160a01b031661048c61051f565b6001600160a01b0316146104d5576040805162461bcd60e51b81526020600482018190526024820152600080516020610822833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b7f000000000000000000000000000000000000000000000000000000000000000081565b6380ac58cd60e01b81565b6001600160a01b0380821660009081526001602052604090205416806106c357604080516301ffc9a760e01b81526380ac58cd60e01b600482015290516001600160a01b038416916301ffc9a7916024808301926020929190829003018186803b1580156105ca57600080fd5b505afa1580156105de573d6000803e3d6000fd5b505050506040513d60208110156105f457600080fd5b50511561062257507f00000000000000000000000000000000000000000000000000000000000000006106c3565b604080516301ffc9a760e01b8152636cdb3d1360e11b600482015290516001600160a01b038416916301ffc9a7916024808301926020929190829003018186803b15801561066f57600080fd5b505afa158015610683573d6000803e3d6000fd5b505050506040513d602081101561069957600080fd5b5051156106c357507f00000000000000000000000000000000000000000000000000000000000000005b919050565b6106d06107ca565b6001600160a01b03166106e161051f565b6001600160a01b03161461072a576040805162461bcd60e51b81526020600482018190526024820152600080516020610822833981519152604482015290519081900360640190fd5b6001600160a01b03811661076f5760405162461bcd60e51b81526004018080602001828103825260268152602001806107cf6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e65723a205472616e736665724d616e616765722063616e6e6f74206265206e756c6c20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65724f776e65723a20436f6c6c656374696f6e2063616e6e6f74206265206e756c6c20616464726573734f776e65723a20436f6c6c656374696f6e20686173206e6f207472616e73666572206d616e61676572a2646970667358221220c4e23a89a3dc50f209b5d88ad8f9abb3b6a44b0f380832e8c4e00efdf4b06bbf64736f6c63430007060033";

type TransferSelectorNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransferSelectorNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransferSelectorNFT__factory extends ContractFactory {
  constructor(...args: TransferSelectorNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _transferManagerERC721: PromiseOrValue<string>,
    _transferManagerERC1155: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TransferSelectorNFT> {
    return super.deploy(
      _transferManagerERC721,
      _transferManagerERC1155,
      overrides || {}
    ) as Promise<TransferSelectorNFT>;
  }
  override getDeployTransaction(
    _transferManagerERC721: PromiseOrValue<string>,
    _transferManagerERC1155: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _transferManagerERC721,
      _transferManagerERC1155,
      overrides || {}
    );
  }
  override attach(address: string): TransferSelectorNFT {
    return super.attach(address) as TransferSelectorNFT;
  }
  override connect(signer: Signer): TransferSelectorNFT__factory {
    return super.connect(signer) as TransferSelectorNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransferSelectorNFTInterface {
    return new utils.Interface(_abi) as TransferSelectorNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransferSelectorNFT {
    return new Contract(address, _abi, signerOrProvider) as TransferSelectorNFT;
  }
}
