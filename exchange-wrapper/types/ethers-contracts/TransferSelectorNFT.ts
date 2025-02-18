/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface TransferSelectorNFTInterface extends utils.Interface {
  functions: {
    "INTERFACE_ID_ERC1155()": FunctionFragment;
    "INTERFACE_ID_ERC721()": FunctionFragment;
    "TRANSFER_MANAGER_ERC1155()": FunctionFragment;
    "TRANSFER_MANAGER_ERC721()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferManagerSelectorForCollection(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "addCollectionTransferManager(address,address)": FunctionFragment;
    "removeCollectionTransferManager(address)": FunctionFragment;
    "checkTransferManagerForToken(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "INTERFACE_ID_ERC1155"
      | "INTERFACE_ID_ERC721"
      | "TRANSFER_MANAGER_ERC1155"
      | "TRANSFER_MANAGER_ERC721"
      | "owner"
      | "renounceOwnership"
      | "transferManagerSelectorForCollection"
      | "transferOwnership"
      | "addCollectionTransferManager"
      | "removeCollectionTransferManager"
      | "checkTransferManagerForToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "INTERFACE_ID_ERC1155",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INTERFACE_ID_ERC721",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRANSFER_MANAGER_ERC1155",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRANSFER_MANAGER_ERC721",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferManagerSelectorForCollection",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addCollectionTransferManager",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeCollectionTransferManager",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "checkTransferManagerForToken",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "INTERFACE_ID_ERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INTERFACE_ID_ERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRANSFER_MANAGER_ERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRANSFER_MANAGER_ERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferManagerSelectorForCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCollectionTransferManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeCollectionTransferManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkTransferManagerForToken",
    data: BytesLike
  ): Result;

  events: {
    "CollectionTransferManagerAdded(address,address)": EventFragment;
    "CollectionTransferManagerRemoved(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "CollectionTransferManagerAdded"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "CollectionTransferManagerRemoved"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface CollectionTransferManagerAddedEventObject {
  collection: string;
  transferManager: string;
}
export type CollectionTransferManagerAddedEvent = TypedEvent<
  [string, string],
  CollectionTransferManagerAddedEventObject
>;

export type CollectionTransferManagerAddedEventFilter =
  TypedEventFilter<CollectionTransferManagerAddedEvent>;

export interface CollectionTransferManagerRemovedEventObject {
  collection: string;
}
export type CollectionTransferManagerRemovedEvent = TypedEvent<
  [string],
  CollectionTransferManagerRemovedEventObject
>;

export type CollectionTransferManagerRemovedEventFilter =
  TypedEventFilter<CollectionTransferManagerRemovedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TransferSelectorNFT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TransferSelectorNFTInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    INTERFACE_ID_ERC1155(overrides?: CallOverrides): Promise<[string]>;

    INTERFACE_ID_ERC721(overrides?: CallOverrides): Promise<[string]>;

    TRANSFER_MANAGER_ERC1155(overrides?: CallOverrides): Promise<[string]>;

    TRANSFER_MANAGER_ERC721(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferManagerSelectorForCollection(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * It is meant to be used for exceptions only (e.g., CryptoKitties)
     * Add a transfer manager for a collection
     * @param collection collection address to add specific transfer rule
     */
    addCollectionTransferManager(
      collection: PromiseOrValue<string>,
      transferManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Remove a transfer manager for a collection
     * @param collection collection address to remove exception
     */
    removeCollectionTransferManager(
      collection: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Support for ERC165 interface is checked AFTER custom implementation
     * Check the transfer manager for a token
     * @param collection collection address
     */
    checkTransferManagerForToken(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { transferManager: string }>;
  };

  INTERFACE_ID_ERC1155(overrides?: CallOverrides): Promise<string>;

  INTERFACE_ID_ERC721(overrides?: CallOverrides): Promise<string>;

  TRANSFER_MANAGER_ERC1155(overrides?: CallOverrides): Promise<string>;

  TRANSFER_MANAGER_ERC721(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferManagerSelectorForCollection(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * It is meant to be used for exceptions only (e.g., CryptoKitties)
   * Add a transfer manager for a collection
   * @param collection collection address to add specific transfer rule
   */
  addCollectionTransferManager(
    collection: PromiseOrValue<string>,
    transferManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Remove a transfer manager for a collection
   * @param collection collection address to remove exception
   */
  removeCollectionTransferManager(
    collection: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Support for ERC165 interface is checked AFTER custom implementation
   * Check the transfer manager for a token
   * @param collection collection address
   */
  checkTransferManagerForToken(
    collection: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    INTERFACE_ID_ERC1155(overrides?: CallOverrides): Promise<string>;

    INTERFACE_ID_ERC721(overrides?: CallOverrides): Promise<string>;

    TRANSFER_MANAGER_ERC1155(overrides?: CallOverrides): Promise<string>;

    TRANSFER_MANAGER_ERC721(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferManagerSelectorForCollection(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * It is meant to be used for exceptions only (e.g., CryptoKitties)
     * Add a transfer manager for a collection
     * @param collection collection address to add specific transfer rule
     */
    addCollectionTransferManager(
      collection: PromiseOrValue<string>,
      transferManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Remove a transfer manager for a collection
     * @param collection collection address to remove exception
     */
    removeCollectionTransferManager(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Support for ERC165 interface is checked AFTER custom implementation
     * Check the transfer manager for a token
     * @param collection collection address
     */
    checkTransferManagerForToken(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "CollectionTransferManagerAdded(address,address)"(
      collection?: PromiseOrValue<string> | null,
      transferManager?: PromiseOrValue<string> | null
    ): CollectionTransferManagerAddedEventFilter;
    CollectionTransferManagerAdded(
      collection?: PromiseOrValue<string> | null,
      transferManager?: PromiseOrValue<string> | null
    ): CollectionTransferManagerAddedEventFilter;

    "CollectionTransferManagerRemoved(address)"(
      collection?: PromiseOrValue<string> | null
    ): CollectionTransferManagerRemovedEventFilter;
    CollectionTransferManagerRemoved(
      collection?: PromiseOrValue<string> | null
    ): CollectionTransferManagerRemovedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    INTERFACE_ID_ERC1155(overrides?: CallOverrides): Promise<BigNumber>;

    INTERFACE_ID_ERC721(overrides?: CallOverrides): Promise<BigNumber>;

    TRANSFER_MANAGER_ERC1155(overrides?: CallOverrides): Promise<BigNumber>;

    TRANSFER_MANAGER_ERC721(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferManagerSelectorForCollection(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * It is meant to be used for exceptions only (e.g., CryptoKitties)
     * Add a transfer manager for a collection
     * @param collection collection address to add specific transfer rule
     */
    addCollectionTransferManager(
      collection: PromiseOrValue<string>,
      transferManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Remove a transfer manager for a collection
     * @param collection collection address to remove exception
     */
    removeCollectionTransferManager(
      collection: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Support for ERC165 interface is checked AFTER custom implementation
     * Check the transfer manager for a token
     * @param collection collection address
     */
    checkTransferManagerForToken(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INTERFACE_ID_ERC1155(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INTERFACE_ID_ERC721(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TRANSFER_MANAGER_ERC1155(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TRANSFER_MANAGER_ERC721(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferManagerSelectorForCollection(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * It is meant to be used for exceptions only (e.g., CryptoKitties)
     * Add a transfer manager for a collection
     * @param collection collection address to add specific transfer rule
     */
    addCollectionTransferManager(
      collection: PromiseOrValue<string>,
      transferManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Remove a transfer manager for a collection
     * @param collection collection address to remove exception
     */
    removeCollectionTransferManager(
      collection: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Support for ERC165 interface is checked AFTER custom implementation
     * Check the transfer manager for a token
     * @param collection collection address
     */
    checkTransferManagerForToken(
      collection: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
