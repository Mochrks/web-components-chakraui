"use client"

import { FormControl, FormLabel, Select, FormErrorMessage, FormHelperText, type SelectProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpSelectProps extends Omit<SelectProps, "error"> {
  label?: string
  options: Array<{ value: string | number; label: string }>
  error?: string | boolean
  helperText?: string
  required?: boolean
}

export default function MpSelect({ label, options, error, helperText, required, ...props }: MpSelectProps) {
  const isError = Boolean(error)
  const errorMessage = typeof error === "string" ? error : helperText

  return (
    <FormControl isInvalid={isError} isRequired={required}>
      {label && <FormLabel>{label}</FormLabel>}
      <Select {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {isError ? (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      ) : helperText ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  )
}

MpSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helperText: PropTypes.string,
  required: PropTypes.bool,
}
