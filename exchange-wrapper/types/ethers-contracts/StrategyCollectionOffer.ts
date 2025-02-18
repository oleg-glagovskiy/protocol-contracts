/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export declare namespace OrderStructs {
  export type TakerStruct = {
    recipient: PromiseOrValue<string>;
    additionalParameters: PromiseOrValue<BytesLike>;
  };

  export type TakerStructOutput = [string, string] & {
    recipient: string;
    additionalParameters: string;
  };

  export type MakerStruct = {
    quoteType: PromiseOrValue<BigNumberish>;
    globalNonce: PromiseOrValue<BigNumberish>;
    subsetNonce: PromiseOrValue<BigNumberish>;
    orderNonce: PromiseOrValue<BigNumberish>;
    strategyId: PromiseOrValue<BigNumberish>;
    collectionType: PromiseOrValue<BigNumberish>;
    collection: PromiseOrValue<string>;
    currency: PromiseOrValue<string>;
    signer: PromiseOrValue<string>;
    startTime: PromiseOrValue<BigNumberish>;
    endTime: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    itemIds: PromiseOrValue<BigNumberish>[];
    amounts: PromiseOrValue<BigNumberish>[];
    additionalParameters: PromiseOrValue<BytesLike>;
  };

  export type MakerStructOutput = [
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber[],
    BigNumber[],
    string
  ] & {
    quoteType: number;
    globalNonce: BigNumber;
    subsetNonce: BigNumber;
    orderNonce: BigNumber;
    strategyId: BigNumber;
    collectionType: number;
    collection: string;
    currency: string;
    signer: string;
    startTime: BigNumber;
    endTime: BigNumber;
    price: BigNumber;
    itemIds: BigNumber[];
    amounts: BigNumber[];
    additionalParameters: string;
  };
}

export interface StrategyCollectionOfferInterface extends utils.Interface {
  functions: {
    "isLooksRareV2Strategy()": FunctionFragment;
    "executeCollectionStrategyWithTakerAsk((address,bytes),(uint8,uint256,uint256,uint256,uint256,uint8,address,address,address,uint256,uint256,uint256,uint256[],uint256[],bytes))": FunctionFragment;
    "executeCollectionStrategyWithTakerAskWithProof((address,bytes),(uint8,uint256,uint256,uint256,uint256,uint8,address,address,address,uint256,uint256,uint256,uint256[],uint256[],bytes))": FunctionFragment;
    "isMakerOrderValid((uint8,uint256,uint256,uint256,uint256,uint8,address,address,address,uint256,uint256,uint256,uint256[],uint256[],bytes),bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "isLooksRareV2Strategy"
      | "executeCollectionStrategyWithTakerAsk"
      | "executeCollectionStrategyWithTakerAskWithProof"
      | "isMakerOrderValid"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isLooksRareV2Strategy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeCollectionStrategyWithTakerAsk",
    values: [OrderStructs.TakerStruct, OrderStructs.MakerStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeCollectionStrategyWithTakerAskWithProof",
    values: [OrderStructs.TakerStruct, OrderStructs.MakerStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "isMakerOrderValid",
    values: [OrderStructs.MakerStruct, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "isLooksRareV2Strategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeCollectionStrategyWithTakerAsk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeCollectionStrategyWithTakerAskWithProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isMakerOrderValid",
    data: BytesLike
  ): Result;

  events: {};
}

export interface StrategyCollectionOffer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StrategyCollectionOfferInterface;

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
     * This function acts as a safety check for the protocol's owner when adding new execution strategies.
     */
    isLooksRareV2Strategy(overrides?: CallOverrides): Promise<[boolean]>;

    executeCollectionStrategyWithTakerAsk(
      takerAsk: OrderStructs.TakerStruct,
      makerBid: OrderStructs.MakerStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], BigNumber[], boolean] & {
        price: BigNumber;
        itemIds: BigNumber[];
        amounts: BigNumber[];
        isNonceInvalidated: boolean;
      }
    >;

    executeCollectionStrategyWithTakerAskWithProof(
      takerAsk: OrderStructs.TakerStruct,
      makerBid: OrderStructs.MakerStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], BigNumber[], boolean] & {
        price: BigNumber;
        itemIds: BigNumber[];
        amounts: BigNumber[];
        isNonceInvalidated: boolean;
      }
    >;

    isMakerOrderValid(
      makerBid: OrderStructs.MakerStruct,
      functionSelector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { isValid: boolean; errorSelector: string }>;
  };

  /**
   * This function acts as a safety check for the protocol's owner when adding new execution strategies.
   */
  isLooksRareV2Strategy(overrides?: CallOverrides): Promise<boolean>;

  executeCollectionStrategyWithTakerAsk(
    takerAsk: OrderStructs.TakerStruct,
    makerBid: OrderStructs.MakerStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber[], BigNumber[], boolean] & {
      price: BigNumber;
      itemIds: BigNumber[];
      amounts: BigNumber[];
      isNonceInvalidated: boolean;
    }
  >;

  executeCollectionStrategyWithTakerAskWithProof(
    takerAsk: OrderStructs.TakerStruct,
    makerBid: OrderStructs.MakerStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber[], BigNumber[], boolean] & {
      price: BigNumber;
      itemIds: BigNumber[];
      amounts: BigNumber[];
      isNonceInvalidated: boolean;
    }
  >;

  isMakerOrderValid(
    makerBid: OrderStructs.MakerStruct,
    functionSelector: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { isValid: boolean; errorSelector: string }>;

  callStatic: {
    /**
     * This function acts as a safety check for the protocol's owner when adding new execution strategies.
     */
    isLooksRareV2Strategy(overrides?: CallOverrides): Promise<boolean>;

    executeCollectionStrategyWithTakerAsk(
      takerAsk: OrderStructs.TakerStruct,
      makerBid: OrderStructs.MakerStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], BigNumber[], boolean] & {
        price: BigNumber;
        itemIds: BigNumber[];
        amounts: BigNumber[];
        isNonceInvalidated: boolean;
      }
    >;

    executeCollectionStrategyWithTakerAskWithProof(
      takerAsk: OrderStructs.TakerStruct,
      makerBid: OrderStructs.MakerStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], BigNumber[], boolean] & {
        price: BigNumber;
        itemIds: BigNumber[];
        amounts: BigNumber[];
        isNonceInvalidated: boolean;
      }
    >;

    isMakerOrderValid(
      makerBid: OrderStructs.MakerStruct,
      functionSelector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { isValid: boolean; errorSelector: string }>;
  };

  filters: {};

  estimateGas: {
    /**
     * This function acts as a safety check for the protocol's owner when adding new execution strategies.
     */
    isLooksRareV2Strategy(overrides?: CallOverrides): Promise<BigNumber>;

    executeCollectionStrategyWithTakerAsk(
      takerAsk: OrderStructs.TakerStruct,
      makerBid: OrderStructs.MakerStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeCollectionStrategyWithTakerAskWithProof(
      takerAsk: OrderStructs.TakerStruct,
      makerBid: OrderStructs.MakerStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isMakerOrderValid(
      makerBid: OrderStructs.MakerStruct,
      functionSelector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * This function acts as a safety check for the protocol's owner when adding new execution strategies.
     */
    isLooksRareV2Strategy(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeCollectionStrategyWithTakerAsk(
      takerAsk: OrderStructs.TakerStruct,
      makerBid: OrderStructs.MakerStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeCollectionStrategyWithTakerAskWithProof(
      takerAsk: OrderStructs.TakerStruct,
      makerBid: OrderStructs.MakerStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isMakerOrderValid(
      makerBid: OrderStructs.MakerStruct,
      functionSelector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
