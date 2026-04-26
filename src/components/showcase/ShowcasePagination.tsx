import { VStack, Text, Box, Code } from "@chakra-ui/react"
import { MpCard, MpPagination } from "../"
import React, { useState } from "react"

const ShowcasePagination = () => {
  const [page, setPage] = useState(1)
  const totalPages = 10

  return (
    <MpCard title="Pagination & Data Navigation">
      <VStack spacing={8} align="stretch" py={4}>
        <Box>
          <Text mb={4} fontWeight="medium">
            Standard Pagination
          </Text>
          <MpPagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          <Text mt={3} fontSize="sm" color="gray.500">
            Current page: <Code>{page}</Code>
          </Text>
        </Box>

        <Box>
          <Text mb={4} fontWeight="medium">
            Smaller Pagination
          </Text>
          <MpPagination currentPage={page} totalPages={5} onPageChange={setPage} />
        </Box>
      </VStack>
    </MpCard>
  )
}

export default ShowcasePagination
