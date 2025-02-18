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

export interface MerkleValidatorInterface extends utils.Interface {
  functions: {
    "matchERC721UsingCriteria(address,address,address,uint256,bytes32,bytes32[])": FunctionFragment;
    "matchERC721WithSafeTransferUsingCriteria(address,address,address,uint256,bytes32,bytes32[])": FunctionFragment;
    "matchERC1155UsingCriteria(address,address,address,uint256,uint256,bytes32,bytes32[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "matchERC721UsingCriteria"
      | "matchERC721WithSafeTransferUsingCriteria"
      | "matchERC1155UsingCriteria"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "matchERC721UsingCriteria",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "matchERC721WithSafeTransferUsingCriteria",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "matchERC1155UsingCriteria",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "matchERC721UsingCriteria",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "matchERC721WithSafeTransferUsingCriteria",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "matchERC1155UsingCriteria",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MerkleValidator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MerkleValidatorInterface;

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
     * Match an ERC721 order, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param from The account to transfer the ERC721 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC721 token to.
     * @param token The ERC721 token to transfer.
     * @param tokenId The ERC721 tokenId to transfer.
     */
    matchERC721UsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Match an ERC721 order using `safeTransferFrom`, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param from The account to transfer the ERC721 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC721 token to.
     * @param token The ERC721 token to transfer.
     * @param tokenId The ERC721 tokenId to transfer.
     */
    matchERC721WithSafeTransferUsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Match an ERC1155 order, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param amount The amount of ERC1155 tokens with the given tokenId to transfer.
     * @param from The account to transfer the ERC1155 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC1155 token to.
     * @param token The ERC1155 token to transfer.
     * @param tokenId The ERC1155 tokenId to transfer.
     */
    matchERC1155UsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * Match an ERC721 order, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
   * @param from The account to transfer the ERC721 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
   * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
   * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
   * @param to The account to transfer the ERC721 token to.
   * @param token The ERC721 token to transfer.
   * @param tokenId The ERC721 tokenId to transfer.
   */
  matchERC721UsingCriteria(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    root: PromiseOrValue<BytesLike>,
    proof: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Match an ERC721 order using `safeTransferFrom`, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
   * @param from The account to transfer the ERC721 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
   * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
   * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
   * @param to The account to transfer the ERC721 token to.
   * @param token The ERC721 token to transfer.
   * @param tokenId The ERC721 tokenId to transfer.
   */
  matchERC721WithSafeTransferUsingCriteria(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    root: PromiseOrValue<BytesLike>,
    proof: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Match an ERC1155 order, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
   * @param amount The amount of ERC1155 tokens with the given tokenId to transfer.
   * @param from The account to transfer the ERC1155 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
   * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
   * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
   * @param to The account to transfer the ERC1155 token to.
   * @param token The ERC1155 token to transfer.
   * @param tokenId The ERC1155 tokenId to transfer.
   */
  matchERC1155UsingCriteria(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    root: PromiseOrValue<BytesLike>,
    proof: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Match an ERC721 order, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param from The account to transfer the ERC721 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC721 token to.
     * @param token The ERC721 token to transfer.
     * @param tokenId The ERC721 tokenId to transfer.
     */
    matchERC721UsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Match an ERC721 order using `safeTransferFrom`, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param from The account to transfer the ERC721 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC721 token to.
     * @param token The ERC721 token to transfer.
     * @param tokenId The ERC721 tokenId to transfer.
     */
    matchERC721WithSafeTransferUsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Match an ERC1155 order, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param amount The amount of ERC1155 tokens with the given tokenId to transfer.
     * @param from The account to transfer the ERC1155 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC1155 token to.
     * @param token The ERC1155 token to transfer.
     * @param tokenId The ERC1155 tokenId to transfer.
     */
    matchERC1155UsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    /**
     * Match an ERC721 order, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param from The account to transfer the ERC721 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC721 token to.
     * @param token The ERC721 token to transfer.
     * @param tokenId The ERC721 tokenId to transfer.
     */
    matchERC721UsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Match an ERC721 order using `safeTransferFrom`, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param from The account to transfer the ERC721 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC721 token to.
     * @param token The ERC721 token to transfer.
     * @param tokenId The ERC721 tokenId to transfer.
     */
    matchERC721WithSafeTransferUsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Match an ERC1155 order, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param amount The amount of ERC1155 tokens with the given tokenId to transfer.
     * @param from The account to transfer the ERC1155 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC1155 token to.
     * @param token The ERC1155 token to transfer.
     * @param tokenId The ERC1155 tokenId to transfer.
     */
    matchERC1155UsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Match an ERC721 order, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param from The account to transfer the ERC721 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC721 token to.
     * @param token The ERC721 token to transfer.
     * @param tokenId The ERC721 tokenId to transfer.
     */
    matchERC721UsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Match an ERC721 order using `safeTransferFrom`, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param from The account to transfer the ERC721 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC721 token to.
     * @param token The ERC721 token to transfer.
     * @param tokenId The ERC721 tokenId to transfer.
     */
    matchERC721WithSafeTransferUsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Match an ERC1155 order, ensuring that the supplied proof demonstrates inclusion of the tokenId in the associated merkle root.
     * @param amount The amount of ERC1155 tokens with the given tokenId to transfer.
     * @param from The account to transfer the ERC1155 token from — this token must first be approved on the seller's AuthenticatedProxy contract.
     * @param proof A proof that the supplied tokenId is contained within the associated merkle root. Must be length 0 if root is not set.
     * @param root A merkle root derived from each valid tokenId — set to 0 to indicate a collection-level or tokenId-specific order.
     * @param to The account to transfer the ERC1155 token to.
     * @param token The ERC1155 token to transfer.
     * @param tokenId The ERC1155 tokenId to transfer.
     */
    matchERC1155UsingCriteria(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      root: PromiseOrValue<BytesLike>,
      proof: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
