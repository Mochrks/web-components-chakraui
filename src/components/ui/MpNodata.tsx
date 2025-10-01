"use client"

import { Box, Text, VStack } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpNodataProps {
  message?: string
}

export default function MpNodata({ message = "No data available" }: MpNodataProps) {
  return (
    <VStack spacing={2} py={8}>
      <Box fontSize="4xl" opacity={0.3}>
        📭
      </Box>
      <Text color="mutedForeground" fontSize="sm">
        {message}
      </Text>
    </VStack>
  )
}

MpNodata.propTypes = {
  message: PropTypes.string,
}
