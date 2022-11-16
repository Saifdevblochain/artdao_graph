// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Announcewinner extends ethereum.Event {
  get params(): Announcewinner__Params {
    return new Announcewinner__Params(this);
  }
}

export class Announcewinner__Params {
  _event: Announcewinner;

  constructor(event: Announcewinner) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _NFT(): Announcewinner_NFTStruct {
    return changetype<Announcewinner_NFTStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Announcewinner_NFTStruct extends ethereum.Tuple {
  get uri(): string {
    return this[0].toString();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get title(): string {
    return this[2].toString();
  }

  get description(): string {
    return this[3].toString();
  }

  get approvedVotes(): i32 {
    return this[4].toI32();
  }

  get rejectedVotes(): i32 {
    return this[5].toI32();
  }

  get votes(): BigInt {
    return this[6].toBigInt();
  }

  get isApprovedByCommittee(): boolean {
    return this[7].toBoolean();
  }
}

export class CommitteeVote extends ethereum.Event {
  get params(): CommitteeVote__Params {
    return new CommitteeVote__Params(this);
  }
}

export class CommitteeVote__Params {
  _event: CommitteeVote;

  constructor(event: CommitteeVote) {
    this._event = event;
  }

  get _address(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get decision(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get _NFT(): CommitteeVote_NFTStruct {
    return changetype<CommitteeVote_NFTStruct>(
      this._event.parameters[3].value.toTuple()
    );
  }
}

export class CommitteeVote_NFTStruct extends ethereum.Tuple {
  get uri(): string {
    return this[0].toString();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get title(): string {
    return this[2].toString();
  }

  get description(): string {
    return this[3].toString();
  }

  get approvedVotes(): i32 {
    return this[4].toI32();
  }

  get rejectedVotes(): i32 {
    return this[5].toI32();
  }

  get votes(): BigInt {
    return this[6].toBigInt();
  }

  get isApprovedByCommittee(): boolean {
    return this[7].toBoolean();
  }
}

export class NftAdded extends ethereum.Event {
  get params(): NftAdded__Params {
    return new NftAdded__Params(this);
  }
}

export class NftAdded__Params {
  _event: NftAdded;

  constructor(event: NftAdded) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _nft(): NftAdded_nftStruct {
    return changetype<NftAdded_nftStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }

  get uploadTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get expireTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NftAdded_nftStruct extends ethereum.Tuple {
  get uri(): string {
    return this[0].toString();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get title(): string {
    return this[2].toString();
  }

  get description(): string {
    return this[3].toString();
  }

  get approvedVotes(): i32 {
    return this[4].toI32();
  }

  get rejectedVotes(): i32 {
    return this[5].toI32();
  }

  get votes(): BigInt {
    return this[6].toBigInt();
  }

  get isApprovedByCommittee(): boolean {
    return this[7].toBoolean();
  }
}

export class NftApproved extends ethereum.Event {
  get params(): NftApproved__Params {
    return new NftApproved__Params(this);
  }
}

export class NftApproved__Params {
  _event: NftApproved;

  constructor(event: NftApproved) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _NFT(): NftApproved_NFTStruct {
    return changetype<NftApproved_NFTStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }

  get startTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get expireTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NftApproved_NFTStruct extends ethereum.Tuple {
  get uri(): string {
    return this[0].toString();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get title(): string {
    return this[2].toString();
  }

  get description(): string {
    return this[3].toString();
  }

  get approvedVotes(): i32 {
    return this[4].toI32();
  }

  get rejectedVotes(): i32 {
    return this[5].toI32();
  }

  get votes(): BigInt {
    return this[6].toBigInt();
  }

  get isApprovedByCommittee(): boolean {
    return this[7].toBoolean();
  }
}

export class PublicVote extends ethereum.Event {
  get params(): PublicVote__Params {
    return new PublicVote__Params(this);
  }
}

export class PublicVote__Params {
  _event: PublicVote;

  constructor(event: PublicVote) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _NFT(): PublicVote_NFTStruct {
    return changetype<PublicVote_NFTStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class PublicVote_NFTStruct extends ethereum.Tuple {
  get uri(): string {
    return this[0].toString();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get title(): string {
    return this[2].toString();
  }

  get description(): string {
    return this[3].toString();
  }

  get approvedVotes(): i32 {
    return this[4].toI32();
  }

  get rejectedVotes(): i32 {
    return this[5].toI32();
  }

  get votes(): BigInt {
    return this[6].toBigInt();
  }

  get isApprovedByCommittee(): boolean {
    return this[7].toBoolean();
  }
}

export class designDao__nftStoreResult {
  value0: string;
  value1: Address;
  value2: string;
  value3: string;
  value4: i32;
  value5: i32;
  value6: BigInt;
  value7: boolean;

  constructor(
    value0: string,
    value1: Address,
    value2: string,
    value3: string,
    value4: i32,
    value5: i32,
    value6: BigInt,
    value7: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    map.set(
      "value5",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value5))
    );
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromBoolean(this.value7));
    return map;
  }

  getUri(): string {
    return this.value0;
  }

  getOwner(): Address {
    return this.value1;
  }

  getTitle(): string {
    return this.value2;
  }

  getDescription(): string {
    return this.value3;
  }

  getApprovedVotes(): i32 {
    return this.value4;
  }

  getRejectedVotes(): i32 {
    return this.value5;
  }

  getVotes(): BigInt {
    return this.value6;
  }

  getIsApprovedByCommittee(): boolean {
    return this.value7;
  }
}

export class designDao extends ethereum.SmartContract {
  static bind(address: Address): designDao {
    return new designDao("designDao", address);
  }

  Committee(param0: Address): boolean {
    let result = super.call("Committee", "Committee(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_Committee(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("Committee", "Committee(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  committeeMembersCounter(): i32 {
    let result = super.call(
      "committeeMembersCounter",
      "committeeMembersCounter():(uint8)",
      []
    );

    return result[0].toI32();
  }

  try_committeeMembersCounter(): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "committeeMembersCounter",
      "committeeMembersCounter():(uint8)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  committeeVoteCheck(param0: BigInt, param1: Address): i32 {
    let result = super.call(
      "committeeVoteCheck",
      "committeeVoteCheck(uint256,address):(uint8)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return result[0].toI32();
  }

  try_committeeVoteCheck(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "committeeVoteCheck",
      "committeeVoteCheck(uint256,address):(uint8)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  expireTime(): BigInt {
    let result = super.call("expireTime", "expireTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_expireTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("expireTime", "expireTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftStore(param0: BigInt): designDao__nftStoreResult {
    let result = super.call(
      "nftStore",
      "nftStore(uint256):(string,address,string,string,uint8,uint8,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new designDao__nftStoreResult(
      result[0].toString(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toString(),
      result[4].toI32(),
      result[5].toI32(),
      result[6].toBigInt(),
      result[7].toBoolean()
    );
  }

  try_nftStore(param0: BigInt): ethereum.CallResult<designDao__nftStoreResult> {
    let result = super.tryCall(
      "nftStore",
      "nftStore(uint256):(string,address,string,string,uint8,uint8,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new designDao__nftStoreResult(
        value[0].toString(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toString(),
        value[4].toI32(),
        value[5].toI32(),
        value[6].toBigInt(),
        value[7].toBoolean()
      )
    );
  }

  nftTime(param0: BigInt): BigInt {
    let result = super.call("nftTime", "nftTime(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_nftTime(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nftTime", "nftTime(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  voteCheck(param0: BigInt, param1: Address): boolean {
    let result = super.call("voteCheck", "voteCheck(uint256,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(param0),
      ethereum.Value.fromAddress(param1)
    ]);

    return result[0].toBoolean();
  }

  try_voteCheck(param0: BigInt, param1: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "voteCheck",
      "voteCheck(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddComitteMemberBatchCall extends ethereum.Call {
  get inputs(): AddComitteMemberBatchCall__Inputs {
    return new AddComitteMemberBatchCall__Inputs(this);
  }

  get outputs(): AddComitteMemberBatchCall__Outputs {
    return new AddComitteMemberBatchCall__Outputs(this);
  }
}

export class AddComitteMemberBatchCall__Inputs {
  _call: AddComitteMemberBatchCall;

  constructor(call: AddComitteMemberBatchCall) {
    this._call = call;
  }

  get _addresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class AddComitteMemberBatchCall__Outputs {
  _call: AddComitteMemberBatchCall;

  constructor(call: AddComitteMemberBatchCall) {
    this._call = call;
  }
}

export class AddCommitteeMemberCall extends ethereum.Call {
  get inputs(): AddCommitteeMemberCall__Inputs {
    return new AddCommitteeMemberCall__Inputs(this);
  }

  get outputs(): AddCommitteeMemberCall__Outputs {
    return new AddCommitteeMemberCall__Outputs(this);
  }
}

export class AddCommitteeMemberCall__Inputs {
  _call: AddCommitteeMemberCall;

  constructor(call: AddCommitteeMemberCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddCommitteeMemberCall__Outputs {
  _call: AddCommitteeMemberCall;

  constructor(call: AddCommitteeMemberCall) {
    this._call = call;
  }
}

export class AddNftsCall extends ethereum.Call {
  get inputs(): AddNftsCall__Inputs {
    return new AddNftsCall__Inputs(this);
  }

  get outputs(): AddNftsCall__Outputs {
    return new AddNftsCall__Outputs(this);
  }
}

export class AddNftsCall__Inputs {
  _call: AddNftsCall;

  constructor(call: AddNftsCall) {
    this._call = call;
  }

  get _NFT(): AddNftsCall_NFTStruct {
    return changetype<AddNftsCall_NFTStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class AddNftsCall__Outputs {
  _call: AddNftsCall;

  constructor(call: AddNftsCall) {
    this._call = call;
  }
}

export class AddNftsCall_NFTStruct extends ethereum.Tuple {
  get uri(): string {
    return this[0].toString();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get title(): string {
    return this[2].toString();
  }

  get description(): string {
    return this[3].toString();
  }

  get approvedVotes(): i32 {
    return this[4].toI32();
  }

  get rejectedVotes(): i32 {
    return this[5].toI32();
  }

  get votes(): BigInt {
    return this[6].toBigInt();
  }

  get isApprovedByCommittee(): boolean {
    return this[7].toBoolean();
  }
}

export class RemoveNftFromVoteCall extends ethereum.Call {
  get inputs(): RemoveNftFromVoteCall__Inputs {
    return new RemoveNftFromVoteCall__Inputs(this);
  }

  get outputs(): RemoveNftFromVoteCall__Outputs {
    return new RemoveNftFromVoteCall__Outputs(this);
  }
}

export class RemoveNftFromVoteCall__Inputs {
  _call: RemoveNftFromVoteCall;

  constructor(call: RemoveNftFromVoteCall) {
    this._call = call;
  }

  get index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveNftFromVoteCall__Outputs {
  _call: RemoveNftFromVoteCall;

  constructor(call: RemoveNftFromVoteCall) {
    this._call = call;
  }
}

export class VoteByCommitteeCall extends ethereum.Call {
  get inputs(): VoteByCommitteeCall__Inputs {
    return new VoteByCommitteeCall__Inputs(this);
  }

  get outputs(): VoteByCommitteeCall__Outputs {
    return new VoteByCommitteeCall__Outputs(this);
  }
}

export class VoteByCommitteeCall__Inputs {
  _call: VoteByCommitteeCall;

  constructor(call: VoteByCommitteeCall) {
    this._call = call;
  }

  get index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get decision(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class VoteByCommitteeCall__Outputs {
  _call: VoteByCommitteeCall;

  constructor(call: VoteByCommitteeCall) {
    this._call = call;
  }
}

export class VoteNftsCall extends ethereum.Call {
  get inputs(): VoteNftsCall__Inputs {
    return new VoteNftsCall__Inputs(this);
  }

  get outputs(): VoteNftsCall__Outputs {
    return new VoteNftsCall__Outputs(this);
  }
}

export class VoteNftsCall__Inputs {
  _call: VoteNftsCall;

  constructor(call: VoteNftsCall) {
    this._call = call;
  }

  get index(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class VoteNftsCall__Outputs {
  _call: VoteNftsCall;

  constructor(call: VoteNftsCall) {
    this._call = call;
  }
}
