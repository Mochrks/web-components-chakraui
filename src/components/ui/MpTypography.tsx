"use client"

import { Text, type TextProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpTypographyProps extends TextProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "subtitle1" | "subtitle2" | "caption" | "button" | "overline"
}

export default function MpTypography({ variant = "body1", children, ...props }: MpTypographyProps) {
  const getVariantProps = () => {
    switch (variant) {
      case "h1":
        return { fontSize: "5xl", fontWeight: "bold", as: "h1" }
      case "h2":
        return { fontSize: "4xl", fontWeight: "bold", as: "h2" }
      case "h3":
        return { fontSize: "3xl", fontWeight: "semibold", as: "h3" }
      case "h4":
        return { fontSize: "2xl", fontWeight: "semibold", as: "h4" }
      case "h5":
        return { fontSize: "xl", fontWeight: "semibold", as: "h5" }
      case "h6":
        return { fontSize: "lg", fontWeight: "semibold", as: "h6" }
      case "subtitle1":
        return { fontSize: "lg", fontWeight: "medium" }
      case "subtitle2":
        return { fontSize: "md", fontWeight: "medium" }
      case "body2":
        return { fontSize: "sm" }
      case "button":
        return {
          fontSize: "sm",
          fontWeight: "medium",
          textTransform: "uppercase",
          letterSpacing: "wide"
        }
      case "caption":
        return {
          fontSize: "xs",
          fontWeight: "normal",
          color: "gray.600"
        }
      case "overline":
        return {
          fontSize: "xs",
          fontWeight: "medium",
          textTransform: "uppercase",
          letterSpacing: "wider",
          lineHeight: "none"
        }
      default:
        return { fontSize: "md" }
    }
  }

  return (
    <Text {...getVariantProps()} {...props}>
      {children}
    </Text>
  )
}

MpTypography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2", "subtitle1", "subtitle2", "caption", "button", "overline"]),
  children: PropTypes.node,
}