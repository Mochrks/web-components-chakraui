"use client"

import { Spinner, Center, type SpinnerProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpLoadingProps extends SpinnerProps {
  fullScreen?: boolean
}

export default function MpLoading({ fullScreen = false, ...props }: MpLoadingProps) {
  if (fullScreen) {
    return (
      <Center h="100vh">
        <Spinner size="xl" thickness="4px" speed="0.65s" color="primary" {...props} />
      </Center>
    )
  }

  return <Spinner thickness="4px" speed="0.65s" color="primary" {...props} />
}

MpLoading.propTypes = {
  fullScreen: PropTypes.bool,
}
