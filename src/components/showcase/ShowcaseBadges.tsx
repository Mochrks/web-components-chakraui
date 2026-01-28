import { MpCard, MpBadge, MpChip } from "../"
import { VStack, Stack } from "@chakra-ui/react"
import React from "react"

const ShowcaseBadges = () => {
  return (
    <MpCard title="Badges & Chips">
      <VStack spacing={4} align="stretch">
        <Stack direction="row" spacing={3} flexWrap="wrap">
          <MpBadge>Default</MpBadge>
          <MpBadge colorScheme="blue">Primary</MpBadge>
          <MpBadge colorScheme="green">Success</MpBadge>
          <MpBadge colorScheme="red">Error</MpBadge>
          <MpBadge colorScheme="orange">Warning</MpBadge>
          <MpBadge variant="outline" colorScheme="purple">
            Outline
          </MpBadge>
          <MpBadge variant="solid" colorScheme="teal">
            Solid
          </MpBadge>
        </Stack>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <MpChip label="Chip 1" />
          <MpChip label="Chip 2" colorScheme="blue" />
          <MpChip label="Deletable" onDelete={() => console.log("Delete")} />
          <MpChip label="Clickable" onClick={() => console.log("Click")} colorScheme="green" />
        </Stack>
      </VStack>
    </MpCard>
  )
}
export default ShowcaseBadges
