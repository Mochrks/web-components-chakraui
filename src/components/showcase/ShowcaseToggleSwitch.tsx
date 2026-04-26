import { VStack, HStack, Text, Box, useColorMode } from "@chakra-ui/react"
import { MpCard, MpSwitch } from "../"
import React, { useState } from "react"
import { Moon, Sun } from "lucide-react"

const ShowcaseToggleSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [emailNotif, setEmailNotif] = useState(true)
  const [pushNotif, setPushNotif] = useState(false)

  return (
    <MpCard title="Toggle & Switch">
      <VStack spacing={6} align="stretch" py={4}>
        <Box borderWidth="1px" borderRadius="lg" p={4} bg="gray.50" _dark={{ bg: "gray.900", borderColor: "gray.800" }}>
          <VStack align="stretch" spacing={4}>
            <HStack justify="space-between">
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">Dark Mode</Text>
                <Text fontSize="xs" color="gray.500">
                  Toggle system-wide dark appearance
                </Text>
              </VStack>
              <HStack spacing={2}>
                {colorMode === "light" ? <Sun size={18} /> : <Moon size={18} />}
                <MpSwitch isChecked={colorMode === "dark"} onChange={toggleColorMode} colorScheme="blue" />
              </HStack>
            </HStack>

            <HStack justify="space-between">
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">Email Notifications</Text>
                <Text fontSize="xs" color="gray.500">
                  Receive weekly activity reports
                </Text>
              </VStack>
              <MpSwitch isChecked={emailNotif} onChange={() => setEmailNotif(!emailNotif)} colorScheme="green" />
            </HStack>

            <HStack justify="space-between">
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">Push Notifications</Text>
                <Text fontSize="xs" color="gray.500">
                  Instant alerts on your device
                </Text>
              </VStack>
              <MpSwitch colorScheme="blue" />
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </MpCard>
  )
}

export default ShowcaseToggleSwitch
