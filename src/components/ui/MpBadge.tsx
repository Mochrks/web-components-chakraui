"use client"

import type React from "react"

import { Badge } from "@chakra-ui/react"
import PropTypes from "prop-types"

export interface MpBadgeProps {
  children: React.ReactNode
  variant?: "solid" | "subtle" | "outline"
  colorScheme?: string
}

export default function MpBadge({ children, variant = "subtle", colorScheme = "gray" }: MpBadgeProps) {
  return (
    <Badge
      variant={variant}
      colorScheme={colorScheme}
      px={2}
      py={0.5}
      borderRadius="md"
      fontSize="xs"
      fontWeight="medium"
      textTransform="none"
    >
      {children}
    </Badge>
  )
}

MpBadge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["solid", "subtle", "outline"]),
  colorScheme: PropTypes.string,
}
