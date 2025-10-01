"use client"

import type React from "react"
import { Alert, AlertIcon, AlertTitle, AlertDescription, Box } from "@chakra-ui/react"
import PropTypes from "prop-types"

export interface MpAlertProps {
  status?: "info" | "warning" | "success" | "error"
  title?: string
  description?: string
  children?: React.ReactNode
}

export default function MpAlert({ status = "info", title, description, children }: MpAlertProps) {
  return (
    <Alert status={status} variant="subtle">
      <AlertIcon />
      <Box flex="1">
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
        {children}
      </Box>
    </Alert>
  )
}

MpAlert.propTypes = {
  status: PropTypes.oneOf(["info", "warning", "success", "error"]),
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
}