"use client"

import { FormControl, FormLabel, Input, FormErrorMessage, FormHelperText, type InputProps } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { forwardRef } from "react"

interface MpInputProps extends Omit<InputProps, "error"> {
  label?: string
  error?: string | boolean
  helperText?: string
  required?: boolean
}

const MpInput = forwardRef<HTMLInputElement, MpInputProps>(({ label, error, helperText, required, ...props }, ref) => {
  const isError = Boolean(error)
  const errorMessage = typeof error === "string" ? error : helperText

  return (
    <FormControl isInvalid={isError} isRequired={required}>
      {label && <FormLabel>{label}</FormLabel>}
      <Input ref={ref} {...props} />
      {isError ? (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      ) : helperText ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  )
})

MpInput.displayName = "MpInput"

MpInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  helperText: PropTypes.string,
  required: PropTypes.bool,
}

export default MpInput
