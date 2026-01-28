import { MpCard, MpButton } from "../"
import { VStack, Stack } from "@chakra-ui/react"
import React from "react"

const ShowcaseButtons = () => {
  return (
    <MpCard title="Buttons">
      <VStack spacing={3} align="stretch">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <MpButton>Primary</MpButton>
          <MpButton variant="outline">Outlined</MpButton>
          <MpButton variant="soft">Soft</MpButton>
          <MpButton colorScheme="red">Destructive</MpButton>
        </Stack>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <MpButton variant="ghost">Ghost</MpButton>
          <MpButton variant="link">Link Button</MpButton>
          <MpButton isDisabled>Disabled</MpButton>
          <MpButton size="sm">Small</MpButton>
          <MpButton size="lg">Large</MpButton>
        </Stack>
      </VStack>
    </MpCard>
  )
}
export default ShowcaseButtons
