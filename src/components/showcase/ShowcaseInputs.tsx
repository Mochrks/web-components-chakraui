import { MpCard, MpInput, MpSelect } from "../"
import { VStack } from "@chakra-ui/react"
import React, { useState } from "react"

const ShowcaseInputs = () => {
  const [selectValue, setSelectValue] = useState("a")

  return (
    <MpCard title="Inputs & Form Controls">
      <VStack spacing={4} align="stretch">
        <MpInput label="Name" placeholder="Enter your name" />
        <MpInput label="Email" type="email" placeholder="you@example.com" />
        <MpInput label="Password" type="password" placeholder="••••••••" />
        <MpSelect
          label="Select Option"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          options={[
            { value: "a", label: "Option A" },
            { value: "b", label: "Option B" },
            { value: "c", label: "Option C" },
          ]}
        />
      </VStack>
    </MpCard>
  )
}
export default ShowcaseInputs
