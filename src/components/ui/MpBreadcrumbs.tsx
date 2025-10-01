"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import PropTypes from "prop-types"

interface BreadcrumbItemType {
  label: string
  href?: string
}

interface MpBreadcrumbsProps {
  items: BreadcrumbItemType[]
}

export default function MpBreadcrumbs({ items }: MpBreadcrumbsProps) {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      {items.map((item, index) => (
        <BreadcrumbItem key={index} isCurrentPage={!item.href}>
          {item.href ? (
            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
          ) : (
            <BreadcrumbLink>{item.label}</BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

MpBreadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    }),
  ).isRequired,
}
