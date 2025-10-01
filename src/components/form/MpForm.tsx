"use client"

import PropTypes from "prop-types"
import { useForm, Controller } from "react-hook-form"
import { VStack } from "@chakra-ui/react"
import MpInput from "../ui/MpInput"
import MpSelect from "../ui/MpSelect"
import MpCheckbox from "../ui/MpCheckbox"
import MpButton from "../ui/MpButton"

interface FormField {
  name: string
  label: string
  type: "text" | "email" | "password" | "number" | "select" | "checkbox"
  placeholder?: string
  options?: Array<{ value: string | number; label: string }>
  rules?: any
}

interface MpFormProps {
  fields: FormField[]
  onSubmit: (data: any) => void
  defaultValues?: Record<string, any>
  submitLabel?: string
}

export default function MpForm({ fields, onSubmit, defaultValues = {}, submitLabel = "Submit" }: MpFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} align="stretch">
        {fields.map((field) => (
          <Controller
            key={field.name}
            name={field.name}
            control={control}
            rules={field.rules}
            render={({ field: { onChange, value } }) => {
              if (field.type === "select" && field.options) {
                return (
                  <MpSelect
                    label={field.label}
                    value={value || ""}
                    onChange={onChange}
                    options={field.options}
                    error={errors[field.name]?.message as string}
                  />
                )
              }

              if (field.type === "checkbox") {
                return <MpCheckbox label={field.label} isChecked={!!value} onChange={onChange} />
              }

              return (
                <MpInput
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={value || ""}
                  onChange={onChange}
                  error={errors[field.name]?.message as string}
                />
              )
            }}
          />
        ))}
        <MpButton type="submit" width="full">
          {submitLabel}
        </MpButton>
      </VStack>
    </form>
  )
}

MpForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["text", "email", "password", "number", "select", "checkbox"]).isRequired,
      placeholder: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
          label: PropTypes.string.isRequired,
        }),
      ),
      rules: PropTypes.object,
    }),
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
  submitLabel: PropTypes.string,
}
