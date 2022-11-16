import {
  Announcewinner as AnnouncewinnerEvent,
  CommitteeVote as CommitteeVoteEvent,
  NftAdded as NftAddedEvent,
  NftApproved as NftApprovedEvent,
  PublicVote as PublicVoteEvent
} from "../generated/designDao/designDao"
import {
  CommitteeDecision,
  Announcewinner,
  CommitteeVote,
  NftAdded,
  NftApproved,
  PublicVote
} from "../generated/schema"

export function handleAnnouncewinner(event: AnnouncewinnerEvent): void {
  let entity = new Announcewinner(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.index = event.params.index
  entity._NFT_uri = event.params._NFT.uri
  entity._NFT_owner = event.params._NFT.owner
  entity._NFT_title = event.params._NFT.title
  entity._NFT_description = event.params._NFT.description
  entity._NFT_approvedVotes = event.params._NFT.approvedVotes
  entity._NFT_rejectedVotes = event.params._NFT.rejectedVotes
  entity._NFT_votes = event.params._NFT.votes
  entity._NFT_isApprovedByCommittee = event.params._NFT.isApprovedByCommittee
  entity.timestamp = event.params.timestamp
  entity.save()
}

export function handleCommitteeVote(event: CommitteeVoteEvent): void {
  let entity = new CommitteeVote(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._address = event.params._address
  entity.index = event.params.index
  entity.decision = event.params.decision
  entity._NFT_uri = event.params._NFT.uri
  entity._NFT_owner = event.params._NFT.owner
  entity._NFT_title = event.params._NFT.title
  entity._NFT_description = event.params._NFT.description
  entity._NFT_approvedVotes = event.params._NFT.approvedVotes
  entity._NFT_rejectedVotes = event.params._NFT.rejectedVotes
  entity._NFT_votes = event.params._NFT.votes
  entity._NFT_isApprovedByCommittee = event.params._NFT.isApprovedByCommittee
  entity.save()

  let id = event.params.index.toString()
  let nft = NftAdded.load(id);
  if (nft) {
    nft._nft_approvedVotes = event.params._NFT.approvedVotes
    nft._nft_rejectedVotes = event.params._NFT.rejectedVotes
    nft._nft_votes = event.params._NFT.votes
    nft._nft_isApprovedByCommittee = event.params._NFT.isApprovedByCommittee

    // saving committeeDecision object
    let _id = event.params._address.toHexString().concat("-").concat(event.params.index.toString())
    let cd = new CommitteeDecision(_id)
    cd.address = event.params._address
    cd.decision = event.params.decision
    cd.save()

    // pushing committeeDecision as a string to an array
    let voters = nft.adminVotes
    let committeeDecision = 
      event.params._address.toHexString().concat(",")
      .concat(event.params.decision.toString())
    voters.push(committeeDecision)
    nft.adminVotes = voters

    nft.save()
  }
}

export function handleNftAdded(event: NftAddedEvent): void {
  let entity = new NftAdded(
    event.params.index.toString()
  )
  entity.index = event.params.index
  entity._nft_uri = event.params._nft.uri
  entity._nft_owner = event.params._nft.owner
  entity._nft_title = event.params._nft.title
  entity._nft_description = event.params._nft.description
  entity._nft_approvedVotes = event.params._nft.approvedVotes
  entity._nft_rejectedVotes = event.params._nft.rejectedVotes
  entity._nft_votes = event.params._nft.votes
  entity._nft_isApprovedByCommittee = event.params._nft.isApprovedByCommittee
  entity.uploadTime = event.params.uploadTime
  entity.expireTime = event.params.expireTime
  entity.adminVotes = []
  entity.publicVotes = []
  entity.save()
}

export function handleNftApproved(event: NftApprovedEvent): void {
  let entity = new NftApproved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.index = event.params.index
  entity._NFT_uri = event.params._NFT.uri
  entity._NFT_owner = event.params._NFT.owner
  entity._NFT_title = event.params._NFT.title
  entity._NFT_description = event.params._NFT.description
  entity._NFT_approvedVotes = event.params._NFT.approvedVotes
  entity._NFT_rejectedVotes = event.params._NFT.rejectedVotes
  entity._NFT_votes = event.params._NFT.votes
  entity._NFT_isApprovedByCommittee = event.params._NFT.isApprovedByCommittee
  entity.startTime = event.params.startTime
  entity.expireTime = event.params.expireTime
  entity.save()
}

export function handlePublicVote(event: PublicVoteEvent): void {
  let entity = new PublicVote(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.index = event.params.index
  entity._NFT_uri = event.params._NFT.uri
  entity._NFT_owner = event.params._NFT.owner
  entity._NFT_title = event.params._NFT.title
  entity._NFT_description = event.params._NFT.description
  entity._NFT_approvedVotes = event.params._NFT.approvedVotes
  entity._NFT_rejectedVotes = event.params._NFT.rejectedVotes
  entity._NFT_votes = event.params._NFT.votes
  entity._NFT_isApprovedByCommittee = event.params._NFT.isApprovedByCommittee
  
  let idPublicVotes= event.params.index.toString()
  let pv = NftAdded.load(idPublicVotes);
  if(pv){
    pv._nft_votes = event.params._NFT.votes

    let publicVoters= pv.publicVotes
    publicVoters.push(event.params.sender)
    pv.publicVotes=publicVoters

    pv.save()
  }
  entity.save()
}
