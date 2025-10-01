"use client"

import type React from "react"

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import PropTypes from "prop-types"

export interface MpTabsProps {
  tabs: Array<{
    label: string
    content: React.ReactNode
  }>
  defaultIndex?: number
}

export default function MpTabs({ tabs, defaultIndex = 0 }: MpTabsProps) {
  return (
    <Tabs defaultIndex={defaultIndex} variant="enclosed">
      <TabList borderBottomWidth="1px" borderColor="chakra-border-color">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            _selected={{
              color: "blue.600",
              borderColor: "chakra-border-color",
              borderBottomColor: "chakra-body-bg",
              fontWeight: "semibold",
            }}
            _dark={{
              _selected: {
                color: "blue.400",
              },
            }}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} px={0} py={4}>
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

MpTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
  defaultIndex: PropTypes.number,
}
