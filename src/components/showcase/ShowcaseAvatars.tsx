import { MpCard, MpAvatar, MpTooltip } from "../"
import { VStack, Stack, Text } from "@chakra-ui/react"
import React from "react"

const ShowcaseAvatars = () => {
  return (
    <MpCard title="Avatars & Tooltips">
      <VStack spacing={3} align="start">
        <Stack direction="row" spacing={3}>
          <MpTooltip title="User Avatar">
            <MpAvatar name="User" />
          </MpTooltip>
          <MpTooltip title="Admin User">
            <MpAvatar name="Admin" bg="blue.500" />
          </MpTooltip>
          <MpTooltip title="Profile Picture">
            <MpAvatar src="/placeholder.svg?height=40&width=40" />
          </MpTooltip>
          <MpTooltip title="Small Avatar">
            <MpAvatar name="S" size="sm" />
          </MpTooltip>
          <MpTooltip title="Large Avatar">
            <MpAvatar name="L" size="lg" />
          </MpTooltip>
        </Stack>
        <Text fontSize="sm" color="mutedForeground">
          Hover over avatars to see tooltips
        </Text>
      </VStack>
    </MpCard>
  )
}
export default ShowcaseAvatars
