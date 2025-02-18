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
  PayableOverrides,
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

export declare namespace Ix2y2 {
  export type OrderItemStruct = {
    price: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<BytesLike>;
  };

  export type OrderItemStructOutput = [BigNumber, string] & {
    price: BigNumber;
    data: string;
  };

  export type OrderStruct = {
    salt: PromiseOrValue<BigNumberish>;
    user: PromiseOrValue<string>;
    network: PromiseOrValue<BigNumberish>;
    intent: PromiseOrValue<BigNumberish>;
    delegateType: PromiseOrValue<BigNumberish>;
    deadline: PromiseOrValue<BigNumberish>;
    currency: PromiseOrValue<string>;
    dataMask: PromiseOrValue<BytesLike>;
    items: Ix2y2.OrderItemStruct[];
    r: PromiseOrValue<BytesLike>;
    s: PromiseOrValue<BytesLike>;
    v: PromiseOrValue<BigNumberish>;
    signVersion: PromiseOrValue<BigNumberish>;
  };

  export type OrderStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    Ix2y2.OrderItemStructOutput[],
    string,
    string,
    number,
    number
  ] & {
    salt: BigNumber;
    user: string;
    network: BigNumber;
    intent: BigNumber;
    delegateType: BigNumber;
    deadline: BigNumber;
    currency: string;
    dataMask: string;
    items: Ix2y2.OrderItemStructOutput[];
    r: string;
    s: string;
    v: number;
    signVersion: number;
  };

  export type FeeStruct = {
    percentage: PromiseOrValue<BigNumberish>;
    to: PromiseOrValue<string>;
  };

  export type FeeStructOutput = [BigNumber, string] & {
    percentage: BigNumber;
    to: string;
  };

  export type SettleDetailStruct = {
    op: PromiseOrValue<BigNumberish>;
    orderIdx: PromiseOrValue<BigNumberish>;
    itemIdx: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    itemHash: PromiseOrValue<BytesLike>;
    executionDelegate: PromiseOrValue<string>;
    dataReplacement: PromiseOrValue<BytesLike>;
    bidIncentivePct: PromiseOrValue<BigNumberish>;
    aucMinIncrementPct: PromiseOrValue<BigNumberish>;
    aucIncDurationSecs: PromiseOrValue<BigNumberish>;
    fees: Ix2y2.FeeStruct[];
  };

  export type SettleDetailStructOutput = [
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    Ix2y2.FeeStructOutput[]
  ] & {
    op: number;
    orderIdx: BigNumber;
    itemIdx: BigNumber;
    price: BigNumber;
    itemHash: string;
    executionDelegate: string;
    dataReplacement: string;
    bidIncentivePct: BigNumber;
    aucMinIncrementPct: BigNumber;
    aucIncDurationSecs: BigNumber;
    fees: Ix2y2.FeeStructOutput[];
  };

  export type SettleSharedStruct = {
    salt: PromiseOrValue<BigNumberish>;
    deadline: PromiseOrValue<BigNumberish>;
    amountToEth: PromiseOrValue<BigNumberish>;
    amountToWeth: PromiseOrValue<BigNumberish>;
    user: PromiseOrValue<string>;
    canFail: PromiseOrValue<boolean>;
  };

  export type SettleSharedStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    boolean
  ] & {
    salt: BigNumber;
    deadline: BigNumber;
    amountToEth: BigNumber;
    amountToWeth: BigNumber;
    user: string;
    canFail: boolean;
  };

  export type RunInputStruct = {
    orders: Ix2y2.OrderStruct[];
    details: Ix2y2.SettleDetailStruct[];
    shared: Ix2y2.SettleSharedStruct;
    r: PromiseOrValue<BytesLike>;
    s: PromiseOrValue<BytesLike>;
    v: PromiseOrValue<BigNumberish>;
  };

  export type RunInputStructOutput = [
    Ix2y2.OrderStructOutput[],
    Ix2y2.SettleDetailStructOutput[],
    Ix2y2.SettleSharedStructOutput,
    string,
    string,
    number
  ] & {
    orders: Ix2y2.OrderStructOutput[];
    details: Ix2y2.SettleDetailStructOutput[];
    shared: Ix2y2.SettleSharedStructOutput;
    r: string;
    s: string;
    v: number;
  };
}

export interface Ix2y2Interface extends utils.Interface {
  functions: {
    "run(((uint256,address,uint256,uint256,uint256,uint256,address,bytes,(uint256,bytes)[],bytes32,bytes32,uint8,uint8)[],(uint8,uint256,uint256,uint256,bytes32,address,bytes,uint256,uint256,uint256,(uint256,address)[])[],(uint256,uint256,uint256,uint256,address,bool),bytes32,bytes32,uint8))": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "run"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "run",
    values: [Ix2y2.RunInputStruct]
  ): string;

  decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;

  events: {};
}

export interface Ix2y2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Ix2y2Interface;

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
    run(
      input: Ix2y2.RunInputStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  run(
    input: Ix2y2.RunInputStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    run(input: Ix2y2.RunInputStruct, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    run(
      input: Ix2y2.RunInputStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    run(
      input: Ix2y2.RunInputStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
