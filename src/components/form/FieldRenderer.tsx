"use client"

import PropTypes from "prop-types"
import MpInput from "../ui/MpInput"
import MpSelect from "../ui/MpSelect"
import MpCheckbox from "../ui/MpCheckbox"

interface FieldRendererProps {
  field: {
    name: string
    label: string
    type: string
    value?: any
    onChange?: (value: any) => void
    options?: Array<{ value: string | number; label: string }>
    placeholder?: string
    required?: boolean
    inputProps?: any
  }
  register?: any
  control?: any
  errors?: Record<string, any>
}

export default function FieldRenderer({ field, register, control, errors }: FieldRendererProps) {
  const common = { name: field.name, label: field.label, required: field.required }
  const err = errors?.[field.name]?.message

  switch (field.type) {
    case "select":
      return (
        <MpSelect
          label={field.label}
          value={field.value}
          onChange={(e) => field.onChange?.(e.target.value)}
          options={field.options || []}
          error={!!err}
          helperText={err}
          {...field.inputProps}
        />
      )
    case "checkbox":
      return (
        <MpCheckbox
          label={field.label}
          isChecked={field.value || false}
          onChange={(e) => field.onChange?.(e.target.checked)}
          {...field.inputProps}
        />
      )
    default:
      return (
        <MpInput
          {...common}
          {...register?.(field.name)}
          error={err}
          helperText={err}
          placeholder={field.placeholder}
          {...field.inputProps}
        />
      )
  }
}

FieldRenderer.propTypes = {
  field: PropTypes.object.isRequired,
  register: PropTypes.func,
  control: PropTypes.any,
  errors: PropTypes.object,
}
