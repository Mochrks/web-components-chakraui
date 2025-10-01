"use client"

import type React from "react"

import { Card, CardHeader, CardBody, Heading, type CardProps } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface MpCardProps extends CardProps {
  title?: string
  children: React.ReactNode
}

export default function MpCard({ title, children, ...props }: MpCardProps) {
  return (
    <Card {...props}>
      {title && (
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
    </Card>
  )
}

MpCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}
