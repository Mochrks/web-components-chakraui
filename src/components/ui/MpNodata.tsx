"use client"

import { Box, Text, VStack, Image } from "@chakra-ui/react"
import PropTypes from "prop-types"

export default function MpNodata({ message = "No data available" }) {
  return (
    <VStack spacing={2} py={8}>
      <Box maxW="150px" opacity={0.8} textAlign="center">
        <Image
          src="/nodata.png"
          alt="No data illustration"
          fallbackSrc="https://cdn-icons-png.flaticon.com/512/7486/7486744.png"
          transition="all 0.3s"
          _hover={{ transform: "scale(1.05)" }}
        />
      </Box>
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {message}
      </Text>
    </VStack>
  )
}

MpNodata.propTypes = {
  message: PropTypes.string,
}
