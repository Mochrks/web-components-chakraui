import { MpCard, MpAlert } from "../"
import { Grid, VStack } from "@chakra-ui/react"
import React from "react"

const ShowcaseAlerts = () => {
  return (
    <MpCard title="Alerts">
      <VStack spacing={4} align="stretch">
        <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={4}>
          <MpAlert
            status="info"
            title="Info Alert"
            description="This is an informational message with shadcn-like styling."
          />
          <MpAlert status="success" title="" description="Operation completed successfully!" />
          <MpAlert status="warning" title="" description="Please review your settings before proceeding." />
          <MpAlert status="error" title="" description="An error occurred. Please try again." />
        </Grid>
      </VStack>
    </MpCard>
  )
}

export default ShowcaseAlerts
