import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Input,
  VStack,
  Box,
  Text,
  useDisclosure,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import React, { useState, useRef } from "react"

interface Option {
  label: string
  value: string
}

interface MpAutocompleteProps {
  options: Option[]
  value?: string
  onChange: (value: string) => void
  placeholder?: string
  isLoading?: boolean
}

const MpAutocomplete: React.FC<MpAutocompleteProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select item...",
  isLoading = false,
}) => {
  const [inputValue, setInputValue] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()))

  const selectedOption = options.find((opt) => opt.value === value)

  const handleSelect = (optionValue: string) => {
    onChange(optionValue)
    onClose()
    setInputValue("")
  }

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={() => {
        onClose()
        setInputValue("")
      }}
      matchWidth
      initialFocusRef={inputRef}
    >
      <PopoverTrigger>
        <InputGroup cursor="pointer" onClick={onOpen}>
          <Input
            value={selectedOption ? selectedOption.label : ""}
            placeholder={placeholder}
            readOnly
            cursor="pointer"
          />
          <InputRightElement>{isLoading ? <Spinner size="sm" /> : <ChevronDownIcon />}</InputRightElement>
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent p={0} maxH="300px" overflowY="auto">
        <Box p={2}>
          <Input
            ref={inputRef}
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            mb={2}
          />
        </Box>
        <PopoverBody p={0}>
          <VStack align="stretch" spacing={0}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <Box
                  key={option.value}
                  px={4}
                  py={2}
                  cursor="pointer"
                  _hover={{ bg: "gray.100" }}
                  bg={option.value === value ? "blue.50" : "transparent"}
                  onClick={() => handleSelect(option.value)}
                >
                  <Text>{option.label}</Text>
                </Box>
              ))
            ) : (
              <Box px={4} py={2}>
                <Text color="gray.500">No results found.</Text>
              </Box>
            )}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default MpAutocomplete
