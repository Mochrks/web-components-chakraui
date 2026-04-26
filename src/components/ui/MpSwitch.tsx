"use client"

import { FormControl, FormLabel, Switch, type SwitchProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

export interface MpSwitchProps extends SwitchProps {
  label?: string
}

export default function MpSwitch({ label, colorScheme = "blue", size = "md", ...props }: MpSwitchProps) {
  return (
    <FormControl display="flex" alignItems="center">
      <Switch colorScheme={colorScheme} size={size} {...props} />
      {label && (
        <FormLabel mb="0" ml={3} fontSize="sm">
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
