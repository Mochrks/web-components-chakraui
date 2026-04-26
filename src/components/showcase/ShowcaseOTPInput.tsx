import { VStack, HStack, PinInput, PinInputField, Text, Box, Heading } from "@chakra-ui/react"
import { MpCard, MpButton } from "../"
import React, { useState } from "react"

const ShowcaseOTPInput = () => {
  const [otp, setOtp] = useState("")

  return (
    <MpCard title="OTP / Verification Code">
      <VStack spacing={8} align="stretch" py={4}>
        <Box>
          <Heading size="sm" mb={4}>
            4-Digit Verification
          </Heading>
          <HStack>
            <PinInput size="lg" otp onComplete={(v) => setOtp(v)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Text mt={3} fontSize="sm" color="gray.500">
            Entered code:{" "}
            <Text as="span" fontWeight="bold" color="blue.500">
              {otp || "—"}
            </Text>
          </Text>
        </Box>

        <Box>
          <Heading size="sm" mb={4}>
            6-Digit Secure Code
          </Heading>
          <HStack>
            <PinInput size="lg" type="number" mask>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </Box>

        <MpButton w="full">Verify Code</MpButton>
      </VStack>
    </MpCard>
  )
}

export default ShowcaseOTPInput
