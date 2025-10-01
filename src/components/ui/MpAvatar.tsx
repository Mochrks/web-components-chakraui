"use client"

import { Avatar, type AvatarProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpAvatarProps extends AvatarProps {
  src?: string
  name?: string
}

export default function MpAvatar({ src, name, ...props }: MpAvatarProps) {
  return <Avatar src={src} name={name} {...props} />
}

MpAvatar.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
}
