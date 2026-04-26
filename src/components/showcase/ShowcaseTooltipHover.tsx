import {
  VStack,
  HStack,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Avatar,
  Box,
  Text,
  Badge,
  Button,
} from "@chakra-ui/react"
import { MpCard, MpButton } from "../"
import React from "react"
import { Info, User } from "lucide-react"

const ShowcaseTooltipHover = () => {
  return (
    <MpCard title="Tooltip & Hover Card">
      <VStack spacing={8} align="stretch" py={4}>
        <VStack align="start" spacing={4}>
          <Text fontSize="sm" fontWeight="medium">
            Tooltips
          </Text>
          <HStack spacing={4}>
            <Tooltip label="Delete account" placement="top" hasArrow>
              <Button colorScheme="red" variant="outline">
                Hover Top
              </Button>
            </Tooltip>
            <Tooltip label="Add to wishlist" placement="right" hasArrow>
              <Button colorScheme="pink" variant="outline">
                Hover Right
              </Button>
            </Tooltip>
            <Tooltip label="Share this item" placement="bottom" hasArrow>
              <Button colorScheme="blue" variant="outline">
                Hover Bottom
              </Button>
            </Tooltip>
          </HStack>
        </VStack>

        <VStack align="start" spacing={4}>
          <Text fontSize="sm" fontWeight="medium">
            Hover Cards (Popover)
          </Text>
          <HStack spacing={8}>
            <Popover trigger="hover" placement="top-start">
              <PopoverTrigger>
                <HStack cursor="pointer">
                  <Avatar size="sm" name="John Doe" src="/avatar-john.png" />
                  <Text fontSize="sm" fontWeight="semibold" color="blue.500">
                    @johndoe
                  </Text>
                </HStack>
              </PopoverTrigger>
              <PopoverContent p={4} w="300px" borderRadius="xl">
                <HStack spacing={4} align="start">
                  <Avatar size="md" name="John Doe" src="/avatar-john.png" />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">John Doe</Text>
                    <Text fontSize="xs" color="gray.500">
                      Full-stack developer. Building amazing web experiences with ChakraUI.
                    </Text>
                    <HStack pt={2}>
                      <Badge size="sm" colorScheme="blue">
                        React
                      </Badge>
                      <Badge size="sm" colorScheme="purple">
                        TS
                      </Badge>
                    </HStack>
                  </VStack>
                </HStack>
              </PopoverContent>
            </Popover>

            <Popover trigger="hover" placement="top-start">
              <PopoverTrigger>
                <HStack cursor="pointer">
                  <Avatar size="sm" name="Sarah Design" src="/avatar-sarah.png" />
                  <Text fontSize="sm" fontWeight="semibold" color="blue.500">
                    @sarahdesign
                  </Text>
                </HStack>
              </PopoverTrigger>
              <PopoverContent p={4} w="300px" borderRadius="xl">
                <HStack spacing={4} align="start">
                  <Avatar size="md" name="Sarah Design" src="/avatar-sarah.png" />
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">Sarah Design</Text>
                    <Text fontSize="xs" color="gray.500">
                      UI/UX Designer passionate about creating beautiful interfaces.
                    </Text>
                    <HStack pt={2}>
                      <Badge size="sm" colorScheme="pink">
                        Figma
                      </Badge>
                      <Badge size="sm" colorScheme="orange">
                        Design
                      </Badge>
                    </HStack>
                  </VStack>
                </HStack>
              </PopoverContent>
            </Popover>
          </HStack>
        </VStack>
      </VStack>
    </MpCard>
  )
}

export default ShowcaseTooltipHover
