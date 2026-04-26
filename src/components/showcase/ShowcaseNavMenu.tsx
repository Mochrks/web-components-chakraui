import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Image,
} from "@chakra-ui/react"
import { MpCard } from "../"
import React from "react"
import { ChevronRight } from "lucide-react"

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Getting Started",
    children: [
      {
        label: "Installation",
        subLabel: "How to install Chakra UI in your project",
        href: "#",
      },
      {
        label: "Core Concepts",
        subLabel: "Understand the design philosophy",
        href: "#",
      },
      {
        label: "Theming",
        subLabel: "Learn how to customize your theme",
        href: "#",
      },
    ],
  },
  {
    label: "Components",
    children: [
      {
        label: "Layout",
        subLabel: "Box, Flex, Grid, Stack and more",
        href: "#",
      },
      {
        label: "Forms",
        subLabel: "Input, Select, Checkbox and more",
        href: "#",
      },
      {
        label: "Data Display",
        subLabel: "Table, Badge, Card and more",
        href: "#",
      },
    ],
  },
  {
    label: "Templates",
    href: "#",
  },
]

const ShowcaseNavMenu = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200")
  const linkHoverColor = useColorModeValue("gray.800", "white")
  const popoverContentBgColor = useColorModeValue("white", "gray.800")

  return (
    <MpCard title="Navigation Menu (Mega Menu)">
      <Flex h={16} alignItems={"center"} px={4}>
        <Stack direction={"row"} spacing={4}>
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href ?? "#"}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Link>
                </PopoverTrigger>

                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={"xl"}
                    minW={"sm"}
                  >
                    <SimpleGrid columns={2} spacing={4}>
                      <Box
                        gridColumn="span 1"
                        position="relative"
                        overflow="hidden"
                        borderRadius="md"
                        bg="blue.500"
                        color="white"
                        p={4}
                        display={{ base: "none", md: "block" }}
                      >
                        <Image
                          src="/featured-menu.png"
                          fallbackSrc="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80"
                          alt="Featured"
                          position="absolute"
                          inset={0}
                          w="full"
                          h="full"
                          objectFit="cover"
                          opacity={0.4}
                        />
                        <Box position="relative">
                          <Text fontWeight="bold" mb={1}>
                            Featured Item
                          </Text>
                          <Text fontSize="xs">Discover our latest premium components.</Text>
                        </Box>
                      </Box>
                      <Stack spacing={0}>
                        {navItem.children.map((child) => (
                          <DesktopSubNav key={child.label} {...child} />
                        ))}
                      </Stack>
                    </SimpleGrid>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
        </Stack>
      </Flex>
    </MpCard>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text transition={"all .3s ease"} _groupHover={{ color: "blue.500" }} fontWeight={500} fontSize="sm">
            {label}
          </Text>
          <Text fontSize={"xs"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"blue.500"} w={5} h={5} as={ChevronRight} />
        </Flex>
      </Stack>
    </Link>
  )
}

import { SimpleGrid } from "@chakra-ui/react"
export default ShowcaseNavMenu
