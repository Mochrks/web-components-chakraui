"use client"

import type React from "react"
import { Tooltip, type TooltipProps, Box } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpTooltipProps extends Omit<TooltipProps, "children"> {
  title: string
  children: React.ReactElement
}

export default function MpTooltip({ title, children, ...props }: MpTooltipProps) {
  return (
    <Tooltip
      label={title}
      hasArrow
      bg="background"
      color="foreground"
      border="1px solid"
      borderColor="border"
      borderRadius="md"
      px={3}
      py={2}
      {...props}
    >
      <Box display="inline-block">
        {children}
      </Box>
    </Tooltip>
  )
}

MpTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}