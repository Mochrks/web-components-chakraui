"use client"

import { Tag, TagLabel, TagCloseButton, type TagProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpChipProps extends TagProps {
  label: string
  onDelete?: () => void
  onClick?: () => void
}

export default function MpChip({ label, onDelete, onClick, ...props }: MpChipProps) {
  return (
    <Tag
      size="md"
      borderRadius="md"
      variant="subtle"
      cursor={onClick ? "pointer" : "default"}
      onClick={onClick}
      {...props}
    >
      <TagLabel>{label}</TagLabel>
      {onDelete && <TagCloseButton onClick={onDelete} />}
    </Tag>
  )
}

MpChip.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
}
