import { MpCard, MpDialog, MpLoading, MpSkeleton, MpNodata, MpDropdown, MpButton } from "../"
import { VStack, HStack, Grid } from "@chakra-ui/react"
import React from "react"

const ShowcaseFeedback = () => {
  return (
    <React.Fragment>
      <MpCard title="Dialog & Dropdown (Feedback)">
        <HStack spacing={4}>
          <MpDialog
            trigger={<MpButton>Open Dialog</MpButton>}
            title="Confirmation"
            footer={<MpButton>Confirm</MpButton>}
          >
            Are you sure?
          </MpDialog>

          <MpDropdown
            label="Options"
            items={[
              { label: "Edit", onClick: () => {} },
              { label: "Delete", isDanger: true },
            ]}
          />
        </HStack>
      </MpCard>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <MpCard title="Loading State">
          <MpLoading />
        </MpCard>
        <MpCard title="No Data State">
          <MpNodata message="No items found" />
        </MpCard>
      </Grid>

      <MpCard title="Skeleton Loaders">
        <VStack spacing={2} align="stretch">
          <MpSkeleton variant="text" width="60%" />
          <MpSkeleton variant="rectangular" height="100px" />
        </VStack>
      </MpCard>
    </React.Fragment>
  )
}
export default ShowcaseFeedback
