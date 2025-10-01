"use client"

import type React from "react"

import { Button, type ButtonProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpButtonProps extends ButtonProps {
  children: React.ReactNode
}

export default function MpButton({ children, ...props }: MpButtonProps) {
  return <Button {...props}>{children}</Button>
}

MpButton.propTypes = {
  children: PropTypes.node.isRequired,
}
