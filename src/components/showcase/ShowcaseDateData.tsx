import { MpCard, MpDatepicker, MpAutocomplete, MpFieldValue } from "../"
import { VStack, Grid, Box } from "@chakra-ui/react"
import React, { useState } from "react"

const ShowcaseDateData = () => {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [autocompleteValue, setAutocompleteValue] = useState("")

  return (
    <React.Fragment>
      <MpCard title="Date Pickers">
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
          <MpDatepicker selected={date} onSelect={setDate} placeholder="Select Date" />
          <Grid templateColumns="1fr 1fr" gap={2}>
            <MpDatepicker placeholder="Start" />
            <MpDatepicker placeholder="End" />
          </Grid>
        </Grid>
      </MpCard>

      <MpCard title="Autocomplete">
        <MpAutocomplete
          options={[
            { label: "Apple", value: "apple" },
            { label: "Banana", value: "banana" },
            { label: "Cherry", value: "cherry" },
          ]}
          value={autocompleteValue}
          onChange={setAutocompleteValue}
          placeholder="Select Fruit"
        />
      </MpCard>

      <MpCard title="Field Values">
        <VStack align="stretch" spacing={4}>
          <MpFieldValue label="Full Name" value="John Doe" />
          <MpFieldValue label="Email" value="john.doe@example.com" />
          <MpFieldValue label="Role" value="Administrator" />
          <MpFieldValue
            label="Status"
            value={
              <Box as="span" color="green.500">
                Active
              </Box>
            }
          />
        </VStack>
      </MpCard>
    </React.Fragment>
  )
}
export default ShowcaseDateData
