"use client"

import { Skeleton, type SkeletonProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpSkeletonProps extends SkeletonProps {
  variant?: "text" | "rectangular" | "circular"
}

export default function MpSkeleton({ variant = "text", ...props }: MpSkeletonProps) {
  const getSkeletonProps = () => {
    switch (variant) {
      case "circular":
        return { borderRadius: "full" }
      case "rectangular":
        return { borderRadius: "md" }
      default:
        return { height: "20px", borderRadius: "md" }
    }
  }

  return <Skeleton {...getSkeletonProps()} {...props} />
}

MpSkeleton.propTypes = {
  variant: PropTypes.oneOf(["text", "rectangular", "circular"]),
}
