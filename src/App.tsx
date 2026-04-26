"use client"

import { Box, Container, VStack, HStack, Text, Divider, SimpleGrid } from "@chakra-ui/react"
import { useColorMode } from "./theme/AppThemeProvider"
import { MpButton, MpTypography } from "./components"
import ShowcaseTypography from "./components/showcase/ShowcaseTypography"
import ShowcaseBreadcrumbs from "./components/showcase/ShowcaseBreadcrumbs"
import ShowcaseAlerts from "./components/showcase/ShowcaseAlerts"
import ShowcaseAccordion from "./components/showcase/ShowcaseAccordion"
import ShowcaseBadges from "./components/showcase/ShowcaseBadges"
import ShowcaseButtons from "./components/showcase/ShowcaseButtons"
import ShowcaseAvatars from "./components/showcase/ShowcaseAvatars"
import ShowcaseInputs from "./components/showcase/ShowcaseInputs"
import ShowcaseSelection from "./components/showcase/ShowcaseSelection"
import ShowcaseDateData from "./components/showcase/ShowcaseDateData"
import ShowcaseNavigation from "./components/showcase/ShowcaseNavigation"
import ShowcaseFeedback from "./components/showcase/ShowcaseFeedback"
import ShowcaseDataDisplay from "./components/showcase/ShowcaseDataDisplay"
import ShowcaseForm from "./components/showcase/ShowcaseForm"
import ShowcaseToast from "./components/showcase/ShowcaseToast"
import ShowcaseCards from "./components/showcase/ShowcaseCards"
import ShowcaseCarousel from "./components/showcase/ShowcaseCarousel"
import ShowcaseCharts from "./components/showcase/ShowcaseCharts"
import ShowcasePagination from "./components/showcase/ShowcasePagination"
import ShowcaseNavMenu from "./components/showcase/ShowcaseNavMenu"
import ShowcaseSheetDrawer from "./components/showcase/ShowcaseSheetDrawer"
import ShowcaseTooltipHover from "./components/showcase/ShowcaseTooltipHover"
import ShowcaseOTPInput from "./components/showcase/ShowcaseOTPInput"
import ShowcaseToggleSwitch from "./components/showcase/ShowcaseToggleSwitch"
import { Toaster } from "sonner"
export default function App() {
  const { mode, toggleColorMode } = useColorMode()

  return (
    <Box minH="100vh" bg="chakra-body-bg">
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <HStack justify="space-between">
            <VStack align="start" spacing={1}>
              <MpTypography variant="h3">Showcase Web UI CAKRA-UI Components</MpTypography>
              <Text fontSize="md" color="mutedForeground">
                by @mochrks
              </Text>
            </VStack>
            <MpButton onClick={toggleColorMode}>{mode === "light" ? "🌙 Dark" : "☀️ Light"} Mode</MpButton>
          </HStack>
          <ShowcaseTypography />
          <ShowcaseBreadcrumbs />
          <ShowcaseAlerts />
          <Divider />
          <ShowcaseAccordion />
          <ShowcaseBadges />
          <ShowcaseButtons />
          <ShowcaseAvatars />
          <ShowcaseInputs />
          <ShowcaseSelection />
          <ShowcaseDateData />
          <Divider />
          <ShowcaseNavigation />
          <ShowcaseFeedback />
          <ShowcaseDataDisplay />
          <ShowcaseForm />
          <VStack spacing={16} align="stretch">
            <ShowcaseToast />
            <ShowcaseCards />
            <ShowcaseNavMenu />
            <ShowcaseCarousel />
            <ShowcaseCharts />
            <ShowcasePagination />
            <ShowcaseSheetDrawer />
            <ShowcaseTooltipHover />
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <ShowcaseOTPInput />
              <ShowcaseToggleSwitch />
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
      <Toaster richColors />
    </Box>
  )
}
