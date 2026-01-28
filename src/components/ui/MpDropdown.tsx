import { Menu, MenuButton, MenuList, MenuItem, Button, IconButton, MenuDivider, MenuGroup } from "@chakra-ui/react"
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons"
import React from "react"

interface DropdownItem {
  label: string
  onClick?: () => void
  icon?: React.ReactElement
  command?: string
  isDanger?: boolean
}

interface MpDropdownProps {
  label?: string | React.ReactNode
  items?: DropdownItem[]
  icon?: React.ReactElement
  children?: React.ReactNode
  variant?: "solid" | "outline" | "ghost"
}

const MpDropdown: React.FC<MpDropdownProps> = ({ label, items, icon, children, variant = "solid" }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={!icon && <ChevronDownIcon />} leftIcon={icon} variant={variant}>
        {label}
        {children}
      </MenuButton>
      <MenuList>
        {items &&
          items.map((item, index) => (
            <MenuItem
              key={index}
              onClick={item.onClick}
              icon={item.icon}
              command={item.command}
              color={item.isDanger ? "red.500" : undefined}
            >
              {item.label}
            </MenuItem>
          ))}
        {!items && children}
      </MenuList>
    </Menu>
  )
}

export default MpDropdown
