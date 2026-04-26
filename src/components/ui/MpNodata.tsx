"use client"

import { Box, Text, VStack } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpNodataProps {
  message?: string
}

export default function MpNodata({ message = "No data available" }: MpNodataProps) {
  return (
    <VStack spacing={2} py={8}>
      <Box maxW="120px" opacity={0.8}>
        <img
          src="/no-data.png"
          alt="No data illustration"
          style={{ width: "100%", height: "auto" }}
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = "https://cdn-icons-png.flaticon.com/512/7486/7486744.png"
          }}
        />
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
