"use client"

import { FormControl, FormLabel, Switch } from "@chakra-ui/react"
import PropTypes from "prop-types"

export interface MpSwitchProps {
  label?: string
  isChecked?: boolean
  onChange?: (checked: boolean) => void
  isDisabled?: boolean
}

export default function MpSwitch({ label, isChecked, onChange, isDisabled }: MpSwitchProps) {
  return (
    <FormControl display="flex" alignItems="center">
      <Switch
        isChecked={isChecked}
        onChange={(e) => onChange?.(e.target.checked)}
        isDisabled={isDisabled}
        colorScheme="blue"
        size="md"
      />
      {label && (
        <FormLabel htmlFor="switch" mb="0" ml={3} fontSize="sm">
          {label}
        </FormLabel>
      )}
    </FormControl>
  )
}

MpSwitch.propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
}
