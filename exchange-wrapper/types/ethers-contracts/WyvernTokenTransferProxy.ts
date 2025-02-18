/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface WyvernTokenTransferProxyInterface extends utils.Interface {
  functions: {
    "transferFrom(address,address,address,uint256)": FunctionFragment;
    "registry()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "transferFrom" | "registry"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;

  events: {};
}

export interface WyvernTokenTransferProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WyvernTokenTransferProxyInterface;

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
    /**
     * Authenticated contract only
     * Call ERC20 `transferFrom`
     * @param amount Transfer amount
     * @param from From address
     * @param to To address
     * @param token ERC20 token address
     */
    transferFrom(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    registry(overrides?: CallOverrides): Promise<[string]>;
  };

  /**
   * Authenticated contract only
   * Call ERC20 `transferFrom`
   * @param amount Transfer amount
   * @param from From address
   * @param to To address
   * @param token ERC20 token address
   */
  transferFrom(
    token: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  registry(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    /**
     * Authenticated contract only
     * Call ERC20 `transferFrom`
     * @param amount Transfer amount
     * @param from From address
     * @param to To address
     * @param token ERC20 token address
     */
    transferFrom(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registry(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    /**
     * Authenticated contract only
     * Call ERC20 `transferFrom`
     * @param amount Transfer amount
     * @param from From address
     * @param to To address
     * @param token ERC20 token address
     */
    transferFrom(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Authenticated contract only
     * Call ERC20 `transferFrom`
     * @param amount Transfer amount
     * @param from From address
     * @param to To address
     * @param token ERC20 token address
     */
    transferFrom(
      token: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
