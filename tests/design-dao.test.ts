import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { Announcewinner } from "../generated/schema"
import { Announcewinner as AnnouncewinnerEvent } from "../generated/designDao/designDao"
import { handleAnnouncewinner } from "../src/design-dao"
import { createAnnouncewinnerEvent } from "./design-dao-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let index = BigInt.fromI32(234)
    let _NFT = "ethereum.Tuple Not implemented"
    let timestamp = BigInt.fromI32(234)
    let newAnnouncewinnerEvent = createAnnouncewinnerEvent(
      index,
      _NFT,
      timestamp
    )
    handleAnnouncewinner(newAnnouncewinnerEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Announcewinner created and stored", () => {
    assert.entityCount("Announcewinner", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Announcewinner",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "index",
      "234"
    )
    assert.fieldEquals(
      "Announcewinner",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_NFT",
      "ethereum.Tuple Not implemented"
    )
    assert.fieldEquals(
      "Announcewinner",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
