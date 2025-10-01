"use client"

import { Checkbox, type CheckboxProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpCheckboxProps extends CheckboxProps {
  label?: string
}

export default function MpCheckbox({ label, ...props }: MpCheckboxProps) {
  return <Checkbox {...props}>{label}</Checkbox>
}

MpCheckbox.propTypes = {
  label: PropTypes.string,
}
