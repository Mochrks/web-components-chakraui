"use client"

import { FormControl, FormLabel, RadioGroup, Radio, Stack, type RadioGroupProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface RadioOption {
  value: string
  label: string
}

interface MpRadioGroupProps extends Omit<RadioGroupProps, "children"> {
  label?: string
  options: RadioOption[]
}

export default function MpRadioGroup({ label, options, ...props }: MpRadioGroupProps) {
  return (
    <FormControl>
      {label && <FormLabel fontWeight="500">{label}</FormLabel>}
      <RadioGroup {...props}>
        <Stack spacing={2}>
          {options.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  )
}

MpRadioGroup.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
}
