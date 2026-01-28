import { MpCard, MpCheckbox, MpSwitch, MpRadioGroup, MpSlider } from "../"
import { VStack, Box, Text } from "@chakra-ui/react"
import React, { useState } from "react"

const ShowcaseSelection = () => {
  const [switchValue, setSwitchValue] = useState(false)
  const [radioValue, setRadioValue] = useState("option1")
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <MpCard title="Selection Controls">
      <VStack spacing={4} align="stretch">
        <MpCheckbox label="I agree to terms and conditions" />
        <MpSwitch label="Enable notifications" isChecked={switchValue} onChange={setSwitchValue} />

        <MpRadioGroup
          label="Choose an option"
          value={radioValue}
          onChange={setRadioValue}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <Box>
          <Text fontSize="sm" fontWeight="500" mb={2}>
            Volume: {sliderValue}%
          </Text>
          <MpSlider value={sliderValue} onChange={(value) => setSliderValue(value as number)} min={0} max={100} />
        </Box>
      </VStack>
    </MpCard>
  )
}
export default ShowcaseSelection
