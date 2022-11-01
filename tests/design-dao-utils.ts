import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Announcewinner,
  CommitteeVote,
  NftAdded,
  NftApproved,
  PublicVote
} from "../generated/designDao/designDao"

export function createAnnouncewinnerEvent(
  index: BigInt,
  _NFT: ethereum.Tuple,
  timestamp: BigInt
): Announcewinner {
  let announcewinnerEvent = changetype<Announcewinner>(newMockEvent())

  announcewinnerEvent.parameters = new Array()

  announcewinnerEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  announcewinnerEvent.parameters.push(
    new ethereum.EventParam("_NFT", ethereum.Value.fromTuple(_NFT))
  )
  announcewinnerEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return announcewinnerEvent
}

export function createCommitteeVoteEvent(
  _address: Address,
  index: BigInt,
  decision: boolean,
  _NFT: ethereum.Tuple
): CommitteeVote {
  let committeeVoteEvent = changetype<CommitteeVote>(newMockEvent())

  committeeVoteEvent.parameters = new Array()

  committeeVoteEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  committeeVoteEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  committeeVoteEvent.parameters.push(
    new ethereum.EventParam("decision", ethereum.Value.fromBoolean(decision))
  )
  committeeVoteEvent.parameters.push(
    new ethereum.EventParam("_NFT", ethereum.Value.fromTuple(_NFT))
  )

  return committeeVoteEvent
}

export function createNftAddedEvent(
  index: BigInt,
  _nft: ethereum.Tuple,
  uploadTime: BigInt,
  expireTime: BigInt
): NftAdded {
  let nftAddedEvent = changetype<NftAdded>(newMockEvent())

  nftAddedEvent.parameters = new Array()

  nftAddedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  nftAddedEvent.parameters.push(
    new ethereum.EventParam("_nft", ethereum.Value.fromTuple(_nft))
  )
  nftAddedEvent.parameters.push(
    new ethereum.EventParam(
      "uploadTime",
      ethereum.Value.fromUnsignedBigInt(uploadTime)
    )
  )
  nftAddedEvent.parameters.push(
    new ethereum.EventParam(
      "expireTime",
      ethereum.Value.fromUnsignedBigInt(expireTime)
    )
  )

  return nftAddedEvent
}

export function createNftApprovedEvent(
  index: BigInt,
  _NFT: ethereum.Tuple,
  startTime: BigInt,
  expireTime: BigInt
): NftApproved {
  let nftApprovedEvent = changetype<NftApproved>(newMockEvent())

  nftApprovedEvent.parameters = new Array()

  nftApprovedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  nftApprovedEvent.parameters.push(
    new ethereum.EventParam("_NFT", ethereum.Value.fromTuple(_NFT))
  )
  nftApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  nftApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "expireTime",
      ethereum.Value.fromUnsignedBigInt(expireTime)
    )
  )

  return nftApprovedEvent
}

export function createPublicVoteEvent(
  sender: Address,
  index: BigInt,
  _NFT: ethereum.Tuple
): PublicVote {
  let publicVoteEvent = changetype<PublicVote>(newMockEvent())

  publicVoteEvent.parameters = new Array()

  publicVoteEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  publicVoteEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  publicVoteEvent.parameters.push(
    new ethereum.EventParam("_NFT", ethereum.Value.fromTuple(_NFT))
  )

  return publicVoteEvent
}
