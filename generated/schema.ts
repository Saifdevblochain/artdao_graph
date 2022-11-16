// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CommitteeDecision extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CommitteeDecision entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CommitteeDecision must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CommitteeDecision", id.toString(), this);
    }
  }

  static load(id: string): CommitteeDecision | null {
    return changetype<CommitteeDecision | null>(
      store.get("CommitteeDecision", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get decision(): boolean {
    let value = this.get("decision");
    return value!.toBoolean();
  }

  set decision(value: boolean) {
    this.set("decision", Value.fromBoolean(value));
  }
}

export class Announcewinner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Announcewinner entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Announcewinner must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Announcewinner", id.toString(), this);
    }
  }

  static load(id: string): Announcewinner | null {
    return changetype<Announcewinner | null>(store.get("Announcewinner", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get _NFT_uri(): string {
    let value = this.get("_NFT_uri");
    return value!.toString();
  }

  set _NFT_uri(value: string) {
    this.set("_NFT_uri", Value.fromString(value));
  }

  get _NFT_owner(): Bytes {
    let value = this.get("_NFT_owner");
    return value!.toBytes();
  }

  set _NFT_owner(value: Bytes) {
    this.set("_NFT_owner", Value.fromBytes(value));
  }

  get _NFT_title(): string {
    let value = this.get("_NFT_title");
    return value!.toString();
  }

  set _NFT_title(value: string) {
    this.set("_NFT_title", Value.fromString(value));
  }

  get _NFT_description(): string {
    let value = this.get("_NFT_description");
    return value!.toString();
  }

  set _NFT_description(value: string) {
    this.set("_NFT_description", Value.fromString(value));
  }

  get _NFT_approvedVotes(): i32 {
    let value = this.get("_NFT_approvedVotes");
    return value!.toI32();
  }

  set _NFT_approvedVotes(value: i32) {
    this.set("_NFT_approvedVotes", Value.fromI32(value));
  }

  get _NFT_rejectedVotes(): i32 {
    let value = this.get("_NFT_rejectedVotes");
    return value!.toI32();
  }

  set _NFT_rejectedVotes(value: i32) {
    this.set("_NFT_rejectedVotes", Value.fromI32(value));
  }

  get _NFT_votes(): BigInt {
    let value = this.get("_NFT_votes");
    return value!.toBigInt();
  }

  set _NFT_votes(value: BigInt) {
    this.set("_NFT_votes", Value.fromBigInt(value));
  }

  get _NFT_isApprovedByCommittee(): boolean {
    let value = this.get("_NFT_isApprovedByCommittee");
    return value!.toBoolean();
  }

  set _NFT_isApprovedByCommittee(value: boolean) {
    this.set("_NFT_isApprovedByCommittee", Value.fromBoolean(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class CommitteeVote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CommitteeVote entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CommitteeVote must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CommitteeVote", id.toString(), this);
    }
  }

  static load(id: string): CommitteeVote | null {
    return changetype<CommitteeVote | null>(store.get("CommitteeVote", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _address(): Bytes {
    let value = this.get("_address");
    return value!.toBytes();
  }

  set _address(value: Bytes) {
    this.set("_address", Value.fromBytes(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get decision(): boolean {
    let value = this.get("decision");
    return value!.toBoolean();
  }

  set decision(value: boolean) {
    this.set("decision", Value.fromBoolean(value));
  }

  get _NFT_uri(): string {
    let value = this.get("_NFT_uri");
    return value!.toString();
  }

  set _NFT_uri(value: string) {
    this.set("_NFT_uri", Value.fromString(value));
  }

  get _NFT_owner(): Bytes {
    let value = this.get("_NFT_owner");
    return value!.toBytes();
  }

  set _NFT_owner(value: Bytes) {
    this.set("_NFT_owner", Value.fromBytes(value));
  }

  get _NFT_title(): string {
    let value = this.get("_NFT_title");
    return value!.toString();
  }

  set _NFT_title(value: string) {
    this.set("_NFT_title", Value.fromString(value));
  }

  get _NFT_description(): string {
    let value = this.get("_NFT_description");
    return value!.toString();
  }

  set _NFT_description(value: string) {
    this.set("_NFT_description", Value.fromString(value));
  }

  get _NFT_approvedVotes(): i32 {
    let value = this.get("_NFT_approvedVotes");
    return value!.toI32();
  }

  set _NFT_approvedVotes(value: i32) {
    this.set("_NFT_approvedVotes", Value.fromI32(value));
  }

  get _NFT_rejectedVotes(): i32 {
    let value = this.get("_NFT_rejectedVotes");
    return value!.toI32();
  }

  set _NFT_rejectedVotes(value: i32) {
    this.set("_NFT_rejectedVotes", Value.fromI32(value));
  }

  get _NFT_votes(): BigInt {
    let value = this.get("_NFT_votes");
    return value!.toBigInt();
  }

  set _NFT_votes(value: BigInt) {
    this.set("_NFT_votes", Value.fromBigInt(value));
  }

  get _NFT_isApprovedByCommittee(): boolean {
    let value = this.get("_NFT_isApprovedByCommittee");
    return value!.toBoolean();
  }

  set _NFT_isApprovedByCommittee(value: boolean) {
    this.set("_NFT_isApprovedByCommittee", Value.fromBoolean(value));
  }
}

export class NftAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NftAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NftAdded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NftAdded", id.toString(), this);
    }
  }

  static load(id: string): NftAdded | null {
    return changetype<NftAdded | null>(store.get("NftAdded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get _nft_uri(): string {
    let value = this.get("_nft_uri");
    return value!.toString();
  }

  set _nft_uri(value: string) {
    this.set("_nft_uri", Value.fromString(value));
  }

  get _nft_owner(): Bytes {
    let value = this.get("_nft_owner");
    return value!.toBytes();
  }

  set _nft_owner(value: Bytes) {
    this.set("_nft_owner", Value.fromBytes(value));
  }

  get _nft_title(): string {
    let value = this.get("_nft_title");
    return value!.toString();
  }

  set _nft_title(value: string) {
    this.set("_nft_title", Value.fromString(value));
  }

  get _nft_description(): string {
    let value = this.get("_nft_description");
    return value!.toString();
  }

  set _nft_description(value: string) {
    this.set("_nft_description", Value.fromString(value));
  }

  get _nft_approvedVotes(): i32 {
    let value = this.get("_nft_approvedVotes");
    return value!.toI32();
  }

  set _nft_approvedVotes(value: i32) {
    this.set("_nft_approvedVotes", Value.fromI32(value));
  }

  get _nft_rejectedVotes(): i32 {
    let value = this.get("_nft_rejectedVotes");
    return value!.toI32();
  }

  set _nft_rejectedVotes(value: i32) {
    this.set("_nft_rejectedVotes", Value.fromI32(value));
  }

  get _nft_votes(): BigInt {
    let value = this.get("_nft_votes");
    return value!.toBigInt();
  }

  set _nft_votes(value: BigInt) {
    this.set("_nft_votes", Value.fromBigInt(value));
  }

  get _nft_isApprovedByCommittee(): boolean {
    let value = this.get("_nft_isApprovedByCommittee");
    return value!.toBoolean();
  }

  set _nft_isApprovedByCommittee(value: boolean) {
    this.set("_nft_isApprovedByCommittee", Value.fromBoolean(value));
  }

  get uploadTime(): BigInt {
    let value = this.get("uploadTime");
    return value!.toBigInt();
  }

  set uploadTime(value: BigInt) {
    this.set("uploadTime", Value.fromBigInt(value));
  }

  get expireTime(): BigInt {
    let value = this.get("expireTime");
    return value!.toBigInt();
  }

  set expireTime(value: BigInt) {
    this.set("expireTime", Value.fromBigInt(value));
  }

  get adminVotes(): Array<string> {
    let value = this.get("adminVotes");
    return value!.toStringArray();
  }

  set adminVotes(value: Array<string>) {
    this.set("adminVotes", Value.fromStringArray(value));
  }

  get publicVotes(): Array<Bytes> {
    let value = this.get("publicVotes");
    return value!.toBytesArray();
  }

  set publicVotes(value: Array<Bytes>) {
    this.set("publicVotes", Value.fromBytesArray(value));
  }
}

export class NftApproved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NftApproved entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NftApproved must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NftApproved", id.toString(), this);
    }
  }

  static load(id: string): NftApproved | null {
    return changetype<NftApproved | null>(store.get("NftApproved", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get _NFT_uri(): string {
    let value = this.get("_NFT_uri");
    return value!.toString();
  }

  set _NFT_uri(value: string) {
    this.set("_NFT_uri", Value.fromString(value));
  }

  get _NFT_owner(): Bytes {
    let value = this.get("_NFT_owner");
    return value!.toBytes();
  }

  set _NFT_owner(value: Bytes) {
    this.set("_NFT_owner", Value.fromBytes(value));
  }

  get _NFT_title(): string {
    let value = this.get("_NFT_title");
    return value!.toString();
  }

  set _NFT_title(value: string) {
    this.set("_NFT_title", Value.fromString(value));
  }

  get _NFT_description(): string {
    let value = this.get("_NFT_description");
    return value!.toString();
  }

  set _NFT_description(value: string) {
    this.set("_NFT_description", Value.fromString(value));
  }

  get _NFT_approvedVotes(): i32 {
    let value = this.get("_NFT_approvedVotes");
    return value!.toI32();
  }

  set _NFT_approvedVotes(value: i32) {
    this.set("_NFT_approvedVotes", Value.fromI32(value));
  }

  get _NFT_rejectedVotes(): i32 {
    let value = this.get("_NFT_rejectedVotes");
    return value!.toI32();
  }

  set _NFT_rejectedVotes(value: i32) {
    this.set("_NFT_rejectedVotes", Value.fromI32(value));
  }

  get _NFT_votes(): BigInt {
    let value = this.get("_NFT_votes");
    return value!.toBigInt();
  }

  set _NFT_votes(value: BigInt) {
    this.set("_NFT_votes", Value.fromBigInt(value));
  }

  get _NFT_isApprovedByCommittee(): boolean {
    let value = this.get("_NFT_isApprovedByCommittee");
    return value!.toBoolean();
  }

  set _NFT_isApprovedByCommittee(value: boolean) {
    this.set("_NFT_isApprovedByCommittee", Value.fromBoolean(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value!.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get expireTime(): BigInt {
    let value = this.get("expireTime");
    return value!.toBigInt();
  }

  set expireTime(value: BigInt) {
    this.set("expireTime", Value.fromBigInt(value));
  }
}

export class PublicVote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PublicVote entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PublicVote must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PublicVote", id.toString(), this);
    }
  }

  static load(id: string): PublicVote | null {
    return changetype<PublicVote | null>(store.get("PublicVote", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get _NFT_uri(): string {
    let value = this.get("_NFT_uri");
    return value!.toString();
  }

  set _NFT_uri(value: string) {
    this.set("_NFT_uri", Value.fromString(value));
  }

  get _NFT_owner(): Bytes {
    let value = this.get("_NFT_owner");
    return value!.toBytes();
  }

  set _NFT_owner(value: Bytes) {
    this.set("_NFT_owner", Value.fromBytes(value));
  }

  get _NFT_title(): string {
    let value = this.get("_NFT_title");
    return value!.toString();
  }

  set _NFT_title(value: string) {
    this.set("_NFT_title", Value.fromString(value));
  }

  get _NFT_description(): string {
    let value = this.get("_NFT_description");
    return value!.toString();
  }

  set _NFT_description(value: string) {
    this.set("_NFT_description", Value.fromString(value));
  }

  get _NFT_approvedVotes(): i32 {
    let value = this.get("_NFT_approvedVotes");
    return value!.toI32();
  }

  set _NFT_approvedVotes(value: i32) {
    this.set("_NFT_approvedVotes", Value.fromI32(value));
  }

  get _NFT_rejectedVotes(): i32 {
    let value = this.get("_NFT_rejectedVotes");
    return value!.toI32();
  }

  set _NFT_rejectedVotes(value: i32) {
    this.set("_NFT_rejectedVotes", Value.fromI32(value));
  }

  get _NFT_votes(): BigInt {
    let value = this.get("_NFT_votes");
    return value!.toBigInt();
  }

  set _NFT_votes(value: BigInt) {
    this.set("_NFT_votes", Value.fromBigInt(value));
  }

  get _NFT_isApprovedByCommittee(): boolean {
    let value = this.get("_NFT_isApprovedByCommittee");
    return value!.toBoolean();
  }

  set _NFT_isApprovedByCommittee(value: boolean) {
    this.set("_NFT_isApprovedByCommittee", Value.fromBoolean(value));
  }
}
