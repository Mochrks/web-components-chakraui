import {
  VStack,
  HStack,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Avatar,
  Box,
  Text,
  Badge,
} from "@chakra-ui/react"
import { MpCard, MpButton } from "../"
import React from "react"
import { Menu, Settings, User, Bell } from "lucide-react"

const ShowcaseSheetDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState<"right" | "left" | "top" | "bottom">("right")

  const openDrawer = (p: any) => {
    setPlacement(p)
    onOpen()
  }

  return (
    <MpCard title="Sheet / Side Panel (Drawer)">
      <VStack spacing={6} align="stretch">
        <VStack align="start" spacing={3}>
          <Text fontSize="sm" fontWeight="medium">
            Drawer Placements
          </Text>
          <HStack spacing={3} flexWrap="wrap">
            <MpButton variant="outline" onClick={() => openDrawer("right")} leftIcon={<Menu size={18} />}>
              Right Sheet
            </MpButton>
            <MpButton variant="outline" onClick={() => openDrawer("left")} leftIcon={<Menu size={18} />}>
              Left Sheet
            </MpButton>
            <MpButton variant="outline" onClick={() => openDrawer("top")}>
              Top Sheet
            </MpButton>
            <MpButton variant="outline" onClick={() => openDrawer("bottom")}>
              Bottom Sheet
            </MpButton>
          </HStack>
        </VStack>

        <Drawer isOpen={isOpen} placement={placement} onClose={onClose} size="sm">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              {placement === "right" ? "Edit Profile" : "Application Menu"}
            </DrawerHeader>

            <DrawerBody>
              {placement === "right" ? (
                <VStack spacing={6} pt={4}>
                  <Box position="relative">
                    <Avatar size="2xl" name="John Doe" src="/avatar-john.png" />
                    <MpButton size="sm" position="absolute" bottom={0} right={0} borderRadius="full" colorScheme="blue">
                      <Settings size={16} />
                    </MpButton>
                  </Box>
                  <VStack w="full" spacing={4} align="start">
                    <Box w="full">
                      <Text mb={2} fontSize="sm" fontWeight="medium">
                        Full Name
                      </Text>
                      <Input defaultValue="John Doe" />
                    </Box>
                    <Box w="full">
                      <Text mb={2} fontSize="sm" fontWeight="medium">
                        Username
                      </Text>
                      <Input defaultValue="@johndoe" />
                    </Box>
                  </VStack>
                </VStack>
              ) : (
                <VStack spacing={2} pt={4} align="stretch">
                  <Button variant="ghost" justifyContent="start" leftIcon={<User size={18} />}>
                    Profile
                  </Button>
                  <Button variant="ghost" justifyContent="start" leftIcon={<Bell size={18} />}>
                    Notifications{" "}
                    <Badge ml="auto" colorScheme="red">
                      4
                    </Badge>
                  </Button>
                  <Button variant="ghost" justifyContent="start" leftIcon={<Settings size={18} />}>
                    Settings
                  </Button>
                </VStack>
              )}
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <MpButton>Save Changes</MpButton>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </VStack>
    </MpCard>
  )
}

export default ShowcaseSheetDrawer
