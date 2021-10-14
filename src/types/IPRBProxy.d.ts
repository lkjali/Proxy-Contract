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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IPRBProxyInterface extends ethers.utils.Interface {
  functions: {
    "execute(address,bytes)": FunctionFragment;
    "getPermission(address,address,bytes4)": FunctionFragment;
    "minGasReserve()": FunctionFragment;
    "owner()": FunctionFragment;
    "setMinGasReserve(uint256)": FunctionFragment;
    "setPermission(address,address,bytes4,bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPermission",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "minGasReserve",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setMinGasReserve",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPermission",
    values: [string, string, BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minGasReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinGasReserve",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Execute(address,bytes,bytes)": EventFragment;
    "TransferOwnership(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Execute"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferOwnership"): EventFragment;
}

export type ExecuteEvent = TypedEvent<
  [string, string, string] & { target: string; data: string; response: string }
>;

export type TransferOwnershipEvent = TypedEvent<
  [string, string] & { oldOwner: string; newOwner: string }
>;

export class IPRBProxy extends BaseContract {
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

  interface: IPRBProxyInterface;

  functions: {
    execute(
      target: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPermission(
      envoy: string,
      target: string,
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    minGasReserve(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setMinGasReserve(
      newMinGasReserve: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPermission(
      envoy: string,
      target: string,
      selector: BytesLike,
      permission: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  execute(
    target: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPermission(
    envoy: string,
    target: string,
    selector: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  minGasReserve(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  setMinGasReserve(
    newMinGasReserve: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPermission(
    envoy: string,
    target: string,
    selector: BytesLike,
    permission: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    execute(
      target: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getPermission(
      envoy: string,
      target: string,
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    minGasReserve(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    setMinGasReserve(
      newMinGasReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPermission(
      envoy: string,
      target: string,
      selector: BytesLike,
      permission: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Execute(address,bytes,bytes)"(
      target?: string | null,
      data?: null,
      response?: null
    ): TypedEventFilter<
      [string, string, string],
      { target: string; data: string; response: string }
    >;

    Execute(
      target?: string | null,
      data?: null,
      response?: null
    ): TypedEventFilter<
      [string, string, string],
      { target: string; data: string; response: string }
    >;

    "TransferOwnership(address,address)"(
      oldOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldOwner: string; newOwner: string }
    >;

    TransferOwnership(
      oldOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { oldOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    execute(
      target: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPermission(
      envoy: string,
      target: string,
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minGasReserve(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setMinGasReserve(
      newMinGasReserve: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPermission(
      envoy: string,
      target: string,
      selector: BytesLike,
      permission: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      target: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPermission(
      envoy: string,
      target: string,
      selector: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minGasReserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMinGasReserve(
      newMinGasReserve: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPermission(
      envoy: string,
      target: string,
      selector: BytesLike,
      permission: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
