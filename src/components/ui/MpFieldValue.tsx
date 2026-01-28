import { Box, Text } from "@chakra-ui/react"
import React from "react"

interface MpFieldValueProps {
  label: string
  value: React.ReactNode
}

const MpFieldValue: React.FC<MpFieldValueProps> = ({ label, value }) => {
  return (
    <Box>
      <Text fontSize="sm" color="gray.500" mb={1}>
        {label}
      </Text>
      <Text fontSize="md" fontWeight="medium">
        {value}
      </Text>
    </Box>
  )
}

export default MpFieldValue
