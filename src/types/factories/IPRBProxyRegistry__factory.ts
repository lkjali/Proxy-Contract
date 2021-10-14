/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPRBProxyRegistry,
  IPRBProxyRegistryInterface,
} from "../IPRBProxyRegistry";

const _abi = [
  {
    inputs: [],
    name: "deploy",
    outputs: [
      {
        internalType: "address payable",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "deployFor",
    outputs: [
      {
        internalType: "address payable",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IPRBProxyFactory",
        name: "proxyFactory",
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
        name: "owner",
        type: "address",
      },
    ],
    name: "getCurrentProxy",
    outputs: [
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPRBProxyRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IPRBProxyRegistryInterface {
    return new utils.Interface(_abi) as IPRBProxyRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPRBProxyRegistry {
    return new Contract(address, _abi, signerOrProvider) as IPRBProxyRegistry;
  }
}