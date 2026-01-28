import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react"
import { CalendarIcon } from "@chakra-ui/icons"
import { format } from "date-fns"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import React, { useState } from "react"

interface MpDatepickerProps {
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  placeholder?: string
  dateFormat?: string
}

const MpDatepicker: React.FC<MpDatepickerProps> = ({
  selected,
  onSelect,
  placeholder = "Pick a date",
  dateFormat = "PPP",
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDaySelect = (date: Date | undefined) => {
    if (onSelect) {
      onSelect(date)
    }
    // Optional: close on select
    // onClose();
  }

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} placement="bottom-start">
      <PopoverTrigger>
        <InputGroup>
          <Input
            value={selected ? format(selected, dateFormat) : ""}
            placeholder={placeholder}
            readOnly
            cursor="pointer"
          />
          <InputRightElement>
            <IconButton aria-label="Open calendar" icon={<CalendarIcon />} size="sm" variant="ghost" onClick={onOpen} />
          </InputRightElement>
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent width="auto" p={0}>
        <PopoverBody p={0}>
          <Box p={2}>
            <DayPicker mode="single" selected={selected} onSelect={handleDaySelect} showOutsideDays />
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default MpDatepicker
