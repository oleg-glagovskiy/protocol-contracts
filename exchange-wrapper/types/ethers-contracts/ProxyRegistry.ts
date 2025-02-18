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

export interface ProxyRegistryInterface extends utils.Interface {
  functions: {
    "pending(address)": FunctionFragment;
    "contracts(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "owner()": FunctionFragment;
    "delegateProxyImplementation()": FunctionFragment;
    "proxies(address)": FunctionFragment;
    "DELAY_PERIOD()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "startGrantAuthentication(address)": FunctionFragment;
    "endGrantAuthentication(address)": FunctionFragment;
    "revokeAuthentication(address)": FunctionFragment;
    "registerProxy()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "pending"
      | "contracts"
      | "renounceOwnership"
      | "owner"
      | "delegateProxyImplementation"
      | "proxies"
      | "DELAY_PERIOD"
      | "transferOwnership"
      | "startGrantAuthentication"
      | "endGrantAuthentication"
      | "revokeAuthentication"
      | "registerProxy"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "pending",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "contracts",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "delegateProxyImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxies",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "DELAY_PERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "startGrantAuthentication",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "endGrantAuthentication",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeAuthentication",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerProxy",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "pending", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contracts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegateProxyImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proxies", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DELAY_PERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startGrantAuthentication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endGrantAuthentication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeAuthentication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerProxy",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipRenounced(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipRenounced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipRenouncedEventObject {
  previousOwner: string;
}
export type OwnershipRenouncedEvent = TypedEvent<
  [string],
  OwnershipRenouncedEventObject
>;

export type OwnershipRenouncedEventFilter =
  TypedEventFilter<OwnershipRenouncedEvent>;

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

export interface ProxyRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProxyRegistryInterface;

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
    pending(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    contracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Allows the current owner to relinquish control of the contract.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    delegateProxyImplementation(overrides?: CallOverrides): Promise<[string]>;

    proxies(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    DELAY_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * ProxyRegistry owner only
     * Start the process to enable access for specified contract. Subject to delay period.
     * @param addr Address to which to grant permissions
     */
    startGrantAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * ProxyRegistry owner only
     * End the process to nable access for specified contract after delay period has passed.
     * @param addr Address to which to grant permissions
     */
    endGrantAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * ProxyRegistry owner only
     * Revoke access for specified contract. Can be done instantly.
     * @param addr Address of which to revoke permissions
     */
    revokeAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Must be called by the user which the proxy is for, creates a new AuthenticatedProxy
     * Register a proxy contract with this registry
     * @returns New AuthenticatedProxy contract
     */
    registerProxy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  pending(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  contracts(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Allows the current owner to relinquish control of the contract.
   */
  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  delegateProxyImplementation(overrides?: CallOverrides): Promise<string>;

  proxies(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  DELAY_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * ProxyRegistry owner only
   * Start the process to enable access for specified contract. Subject to delay period.
   * @param addr Address to which to grant permissions
   */
  startGrantAuthentication(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * ProxyRegistry owner only
   * End the process to nable access for specified contract after delay period has passed.
   * @param addr Address to which to grant permissions
   */
  endGrantAuthentication(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * ProxyRegistry owner only
   * Revoke access for specified contract. Can be done instantly.
   * @param addr Address of which to revoke permissions
   */
  revokeAuthentication(
    addr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Must be called by the user which the proxy is for, creates a new AuthenticatedProxy
   * Register a proxy contract with this registry
   * @returns New AuthenticatedProxy contract
   */
  registerProxy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    pending(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Allows the current owner to relinquish control of the contract.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    delegateProxyImplementation(overrides?: CallOverrides): Promise<string>;

    proxies(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    DELAY_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * ProxyRegistry owner only
     * Start the process to enable access for specified contract. Subject to delay period.
     * @param addr Address to which to grant permissions
     */
    startGrantAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * ProxyRegistry owner only
     * End the process to nable access for specified contract after delay period has passed.
     * @param addr Address to which to grant permissions
     */
    endGrantAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * ProxyRegistry owner only
     * Revoke access for specified contract. Can be done instantly.
     * @param addr Address of which to revoke permissions
     */
    revokeAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Must be called by the user which the proxy is for, creates a new AuthenticatedProxy
     * Register a proxy contract with this registry
     * @returns New AuthenticatedProxy contract
     */
    registerProxy(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipRenounced(address)"(
      previousOwner?: PromiseOrValue<string> | null
    ): OwnershipRenouncedEventFilter;
    OwnershipRenounced(
      previousOwner?: PromiseOrValue<string> | null
    ): OwnershipRenouncedEventFilter;

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
    pending(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Allows the current owner to relinquish control of the contract.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    delegateProxyImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    proxies(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DELAY_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * ProxyRegistry owner only
     * Start the process to enable access for specified contract. Subject to delay period.
     * @param addr Address to which to grant permissions
     */
    startGrantAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * ProxyRegistry owner only
     * End the process to nable access for specified contract after delay period has passed.
     * @param addr Address to which to grant permissions
     */
    endGrantAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * ProxyRegistry owner only
     * Revoke access for specified contract. Can be done instantly.
     * @param addr Address of which to revoke permissions
     */
    revokeAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Must be called by the user which the proxy is for, creates a new AuthenticatedProxy
     * Register a proxy contract with this registry
     * @returns New AuthenticatedProxy contract
     */
    registerProxy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    pending(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contracts(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Allows the current owner to relinquish control of the contract.
     */
    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delegateProxyImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proxies(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DELAY_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * ProxyRegistry owner only
     * Start the process to enable access for specified contract. Subject to delay period.
     * @param addr Address to which to grant permissions
     */
    startGrantAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * ProxyRegistry owner only
     * End the process to nable access for specified contract after delay period has passed.
     * @param addr Address to which to grant permissions
     */
    endGrantAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * ProxyRegistry owner only
     * Revoke access for specified contract. Can be done instantly.
     * @param addr Address of which to revoke permissions
     */
    revokeAuthentication(
      addr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Must be called by the user which the proxy is for, creates a new AuthenticatedProxy
     * Register a proxy contract with this registry
     * @returns New AuthenticatedProxy contract
     */
    registerProxy(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
