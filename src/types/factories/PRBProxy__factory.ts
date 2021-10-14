/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PRBProxy, PRBProxyInterface } from "../PRBProxy";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "PRBProxy__ExecutionNotAuthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "PRBProxy__ExecutionReverted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "PRBProxy__NotOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "originalOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "PRBProxy__OwnerChanged",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "PRBProxy__TargetInvalid",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    name: "Execute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "TransferOwnership",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "envoy",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "getPermission",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minGasReserve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    inputs: [
      {
        internalType: "uint256",
        name: "newMinGasReserve",
        type: "uint256",
      },
    ],
    name: "setMinGasReserve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "envoy",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "permission",
        type: "bool",
      },
    ],
    name: "setPermission",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611388600155600080546001600160a01b0319163390811782556040519091907f5c486528ec3e3f0ea91181cff8116f02bfa350e03b8b6f12e00765adbb5af85c908290a3610857806100656000396000f3fe6080604052600436106100745760003560e01c80639d1595681161004e5780639d15956814610103578063da8d882c14610127578063e64624fa14610193578063f2fde38b146101b357600080fd5b806309924a40146100805780631cff79cd146100a25780638da5cb5b146100cb57600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b506100a061009b3660046105c4565b6101d3565b005b6100b56100b03660046105f9565b61021d565b6040516100c291906106c9565b60405180910390f35b3480156100d757600080fd5b506000546100eb906001600160a01b031681565b6040516001600160a01b0390911681526020016100c2565b34801561010f57600080fd5b5061011960015481565b6040519081526020016100c2565b34801561013357600080fd5b506101836101423660046106fb565b6001600160a01b0392831660009081526002602090815260408083209490951682529283528381206001600160e01b03199290921681529152205460ff1690565b60405190151581526020016100c2565b34801561019f57600080fd5b506100a06101ae36600461073e565b610491565b3480156101bf57600080fd5b506100a06101ce366004610799565b610521565b6000546001600160a01b031633146102185760005460405163ac976e3960e01b81526001600160a01b0390911660048201523360248201526044015b60405180910390fd5b600155565b6000546060906001600160a01b031633146102d2573360009081526002602090815260408083206001600160a01b0388168452825280832086356001600160e01b03198116855292529091205460ff166102d0576000546040517fa2ee03b80000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015233602482015290861660448201526001600160e01b03198216606482015260840161020f565b505b833b80610316576040517f29ba3bdf0000000000000000000000000000000000000000000000000000000081526001600160a01b038616600482015260240161020f565b600080546001546001600160a01b0390911691905a61033591906107b4565b90506000876001600160a01b03168288886040516103549291906107f2565b6000604051808303818686f4925050503d8060008114610390576040519150601f19603f3d011682016040523d82523d6000602084013e610395565b606091505b506000549096509091506001600160a01b038481169116146103fa576000546040517fbcac60ce0000000000000000000000000000000000000000000000000000000081526001600160a01b038086166004830152909116602482015260440161020f565b876001600160a01b03167fb24ebe141c5f2a744b103bea65fce6c40e0dc65d7341d092c09b160f4044799088888860405161043793929190610802565b60405180910390a280610486578451156104545784518086602001fd5b6040517fe336368800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050509392505050565b6000546001600160a01b031633146104d15760005460405163ac976e3960e01b81526001600160a01b03909116600482015233602482015260440161020f565b6001600160a01b0393841660009081526002602090815260408083209590961682529384528481206001600160e01b03199390931681529190925291909120805460ff1916911515919091179055565b6000546001600160a01b031633146105615760005460405163ac976e3960e01b81526001600160a01b03909116600482015233602482015260440161020f565b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081178255604051909182917f5c486528ec3e3f0ea91181cff8116f02bfa350e03b8b6f12e00765adbb5af85c9190a350565b6000602082840312156105d657600080fd5b5035919050565b80356001600160a01b03811681146105f457600080fd5b919050565b60008060006040848603121561060e57600080fd5b610617846105dd565b9250602084013567ffffffffffffffff8082111561063457600080fd5b818601915086601f83011261064857600080fd5b81358181111561065757600080fd5b87602082850101111561066957600080fd5b6020830194508093505050509250925092565b6000815180845260005b818110156106a257602081850181015186830182015201610686565b818111156106b4576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006106dc602083018461067c565b9392505050565b80356001600160e01b0319811681146105f457600080fd5b60008060006060848603121561071057600080fd5b610719846105dd565b9250610727602085016105dd565b9150610735604085016106e3565b90509250925092565b6000806000806080858703121561075457600080fd5b61075d856105dd565b935061076b602086016105dd565b9250610779604086016106e3565b91506060850135801515811461078e57600080fd5b939692955090935050565b6000602082840312156107ab57600080fd5b6106dc826105dd565b6000828210156107ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b8183823760009101908152919050565b60408152826040820152828460608301376000606084830101526000601f19601f85011682016060838203016020840152610840606082018561067c565b969550505050505056fea164736f6c6343000809000a";

export class PRBProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PRBProxy> {
    return super.deploy(overrides || {}) as Promise<PRBProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PRBProxy {
    return super.attach(address) as PRBProxy;
  }
  connect(signer: Signer): PRBProxy__factory {
    return super.connect(signer) as PRBProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PRBProxyInterface {
    return new utils.Interface(_abi) as PRBProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PRBProxy {
    return new Contract(address, _abi, signerOrProvider) as PRBProxy;
  }
}
