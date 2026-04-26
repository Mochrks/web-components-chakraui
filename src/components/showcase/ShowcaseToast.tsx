import { VStack, HStack, Button, useToast } from "@chakra-ui/react"
import { MpCard, MpButton } from "../"
import React from "react"
import { toast as sonnerToast } from "sonner"
import { CheckCircle2, AlertCircle, Info, Bell } from "lucide-react"

const ShowcaseToast = () => {
  const chakraToast = useToast()

  const showSonner = (type: "success" | "error" | "info" | "warning") => {
    sonnerToast[type](`${type.charAt(0).toUpperCase() + type.slice(1)}!`, {
      description: `This is a premium ${type} notification.`,
    })
  }

  return (
    <MpCard title="Toast / Notifications">
      <VStack spacing={6} align="stretch">
        <VStack align="start" spacing={3}>
          <HStack spacing={3} flexWrap="wrap">
            <MpButton colorScheme="green" leftIcon={<CheckCircle2 size={18} />} onClick={() => showSonner("success")}>
              Success Toast
            </MpButton>
            <MpButton colorScheme="red" leftIcon={<AlertCircle size={18} />} onClick={() => showSonner("error")}>
              Error Toast
            </MpButton>
            <MpButton colorScheme="orange" leftIcon={<AlertCircle size={18} />} onClick={() => showSonner("warning")}>
              Warning Toast
            </MpButton>
            <MpButton colorScheme="blue" leftIcon={<Info size={18} />} onClick={() => showSonner("info")}>
              Info Toast
            </MpButton>
          </HStack>
        </VStack>

        <VStack align="start" spacing={3}>
          <Text fontSize="sm" fontWeight="medium">
            Chakra UI Toast Variants
          </Text>
          <HStack spacing={3} flexWrap="wrap">
            <Button
              onClick={() =>
                chakraToast({
                  title: "Account created.",
                  description: "We've created your account for you.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                })
              }
            >
              Show Success
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                chakraToast({
                  title: "Update Available",
                  description: "A new version of the app is ready.",
                  status: "info",
                  duration: 3000,
                  isClosable: true,
                  position: "top-right",
                })
              }
            >
              Top Right Info
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </MpCard>
  )
}

import { Text } from "@chakra-ui/react"
export default ShowcaseToast
