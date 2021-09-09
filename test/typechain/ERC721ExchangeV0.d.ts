/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ERC721ExchangeV0Interface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "amountFilled(bytes32)": FunctionFragment;
    "bestBid(bytes32)": FunctionFragment;
    "bid(tuple,uint256,uint256,address,address)": FunctionFragment;
    "canTrade(address)": FunctionFragment;
    "cancel(tuple)": FunctionFragment;
    "claim(tuple)": FunctionFragment;
    "factory()": FunctionFragment;
    "isCancelledOrClaimed(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "amountFilled",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "bestBid", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "bid",
    values: [
      {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "canTrade", values: [string]): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [
      {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [
      {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isCancelledOrClaimed",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "amountFilled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bestBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canTrade", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isCancelledOrClaimed",
    data: BytesLike
  ): Result;

  events: {
    "Bid(bytes32,address,uint256,uint256,address,address)": EventFragment;
    "Cancel(bytes32)": EventFragment;
    "Claim(bytes32,address,uint256,uint256,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Cancel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
}

export class ERC721ExchangeV0 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ERC721ExchangeV0Interface;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    amountFilled(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    bestBid(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, string, string, BigNumber] & {
        bidder: string;
        amount: BigNumber;
        price: BigNumber;
        recipient: string;
        referrer: string;
        blockNumber: BigNumber;
      }
    >;

    "bid((address,address,uint256,uint256,address,address,address,uint256,bytes,uint8,bytes32,bytes32),uint256,uint256,address,address)"(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidAmount: BigNumberish,
      bidPrice: BigNumberish,
      bidRecipient: string,
      bidReferrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "bid((address,address,uint256,uint256,address,address,address,uint256,bytes,uint8,bytes32,bytes32),(bytes32,address,uint256,uint256,address,address,uint8,bytes32,bytes32))"(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidOrder: {
        askHash: BytesLike;
        signer: string;
        amount: BigNumberish;
        price: BigNumberish;
        recipient: string;
        referrer: string;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    canTrade(nft: string, overrides?: CallOverrides): Promise<[boolean]>;

    cancel(
      order: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    isCancelledOrClaimed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  amountFilled(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  bestBid(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, string, string, BigNumber] & {
      bidder: string;
      amount: BigNumber;
      price: BigNumber;
      recipient: string;
      referrer: string;
      blockNumber: BigNumber;
    }
  >;

  "bid((address,address,uint256,uint256,address,address,address,uint256,bytes,uint8,bytes32,bytes32),uint256,uint256,address,address)"(
    askOrder: {
      signer: string;
      token: string;
      tokenId: BigNumberish;
      amount: BigNumberish;
      strategy: string;
      currency: string;
      recipient: string;
      deadline: BigNumberish;
      params: BytesLike;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    bidAmount: BigNumberish,
    bidPrice: BigNumberish,
    bidRecipient: string,
    bidReferrer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "bid((address,address,uint256,uint256,address,address,address,uint256,bytes,uint8,bytes32,bytes32),(bytes32,address,uint256,uint256,address,address,uint8,bytes32,bytes32))"(
    askOrder: {
      signer: string;
      token: string;
      tokenId: BigNumberish;
      amount: BigNumberish;
      strategy: string;
      currency: string;
      recipient: string;
      deadline: BigNumberish;
      params: BytesLike;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    bidOrder: {
      askHash: BytesLike;
      signer: string;
      amount: BigNumberish;
      price: BigNumberish;
      recipient: string;
      referrer: string;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  canTrade(nft: string, overrides?: CallOverrides): Promise<boolean>;

  cancel(
    order: {
      signer: string;
      token: string;
      tokenId: BigNumberish;
      amount: BigNumberish;
      strategy: string;
      currency: string;
      recipient: string;
      deadline: BigNumberish;
      params: BytesLike;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    askOrder: {
      signer: string;
      token: string;
      tokenId: BigNumberish;
      amount: BigNumberish;
      strategy: string;
      currency: string;
      recipient: string;
      deadline: BigNumberish;
      params: BytesLike;
      v: BigNumberish;
      r: BytesLike;
      s: BytesLike;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  isCancelledOrClaimed(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    amountFilled(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bestBid(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, string, string, BigNumber] & {
        bidder: string;
        amount: BigNumber;
        price: BigNumber;
        recipient: string;
        referrer: string;
        blockNumber: BigNumber;
      }
    >;

    "bid((address,address,uint256,uint256,address,address,address,uint256,bytes,uint8,bytes32,bytes32),uint256,uint256,address,address)"(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidAmount: BigNumberish,
      bidPrice: BigNumberish,
      bidRecipient: string,
      bidReferrer: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "bid((address,address,uint256,uint256,address,address,address,uint256,bytes,uint8,bytes32,bytes32),(bytes32,address,uint256,uint256,address,address,uint8,bytes32,bytes32))"(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidOrder: {
        askHash: BytesLike;
        signer: string;
        amount: BigNumberish;
        price: BigNumberish;
        recipient: string;
        referrer: string;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<boolean>;

    canTrade(nft: string, overrides?: CallOverrides): Promise<boolean>;

    cancel(
      order: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    claim(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    isCancelledOrClaimed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Bid(
      hash?: BytesLike | null,
      bidder?: null,
      amount?: null,
      price?: null,
      recipient?: null,
      referrer?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, string],
      {
        hash: string;
        bidder: string;
        amount: BigNumber;
        price: BigNumber;
        recipient: string;
        referrer: string;
      }
    >;

    Cancel(
      hash?: BytesLike | null
    ): TypedEventFilter<[string], { hash: string }>;

    Claim(
      hash?: BytesLike | null,
      bidder?: null,
      amount?: null,
      price?: null,
      recipient?: null,
      referrer?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, string],
      {
        hash: string;
        bidder: string;
        amount: BigNumber;
        price: BigNumber;
        recipient: string;
        referrer: string;
      }
    >;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    amountFilled(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bestBid(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "bid((address,address,uint256,uint256,address,address,address,uint256,bytes,uint8,bytes32,bytes32),uint256,uint256,address,address)"(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidAmount: BigNumberish,
      bidPrice: BigNumberish,
      bidRecipient: string,
      bidReferrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "bid((address,address,uint256,uint256,address,address,address,uint256,bytes,uint8,bytes32,bytes32),(bytes32,address,uint256,uint256,address,address,uint8,bytes32,bytes32))"(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidOrder: {
        askHash: BytesLike;
        signer: string;
        amount: BigNumberish;
        price: BigNumberish;
        recipient: string;
        referrer: string;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    canTrade(nft: string, overrides?: CallOverrides): Promise<BigNumber>;

    cancel(
      order: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    isCancelledOrClaimed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    amountFilled(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bestBid(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "bid((address,address,uint256,uint256,address,address,address,uint256,bytes,uint8,bytes32,bytes32),uint256,uint256,address,address)"(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidAmount: BigNumberish,
      bidPrice: BigNumberish,
      bidRecipient: string,
      bidReferrer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "bid((address,address,uint256,uint256,address,address,address,uint256,bytes,uint8,bytes32,bytes32),(bytes32,address,uint256,uint256,address,address,uint8,bytes32,bytes32))"(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      bidOrder: {
        askHash: BytesLike;
        signer: string;
        amount: BigNumberish;
        price: BigNumberish;
        recipient: string;
        referrer: string;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    canTrade(
      nft: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancel(
      order: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      askOrder: {
        signer: string;
        token: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
        strategy: string;
        currency: string;
        recipient: string;
        deadline: BigNumberish;
        params: BytesLike;
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isCancelledOrClaimed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
