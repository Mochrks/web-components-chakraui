"use client"

import type React from "react"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react"
import PropTypes from "prop-types"

interface AccordionItemType {
  id: string
  title: string
  content: React.ReactNode
}

interface MpAccordionProps {
  items: AccordionItemType[]
  expanded?: string
  onChange?: (panel: string) => void
  allowMultiple?: boolean
}

export default function MpAccordion({ items, expanded, onChange, allowMultiple = false }: MpAccordionProps) {
  return (
    <Accordion
      allowMultiple={allowMultiple}
      index={expanded ? items.findIndex((item) => item.id === expanded) : undefined}
      onChange={(index) => {
        if (onChange && typeof index === "number") {
          onChange(items[index]?.id || "")
        }
      }}
    >
      {items.map((item) => (
        <AccordionItem key={item.id} border="1px solid" borderColor="border" borderRadius="md" mb={2}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="500">
                {item.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{item.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

MpAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
  expanded: PropTypes.string,
  onChange: PropTypes.func,
  allowMultiple: PropTypes.bool,
}
