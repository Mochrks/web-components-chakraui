import { HStack, Text, IconButton, Button } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import React from "react"

interface MpPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const MpPagination: React.FC<MpPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <HStack spacing={2} justify="center" mt={4}>
      <IconButton
        aria-label="Previous page"
        icon={<ChevronLeftIcon />}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        isDisabled={currentPage === 1}
        size="sm"
        variant="outline"
      />
      <Text fontSize="sm">
        Page {currentPage} of {totalPages}
      </Text>
      <IconButton
        aria-label="Next page"
        icon={<ChevronRightIcon />}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        isDisabled={currentPage === totalPages}
        size="sm"
        variant="outline"
      />
    </HStack>
  )
}

export default MpPagination
