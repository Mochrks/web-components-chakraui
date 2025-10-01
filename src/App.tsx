"use client"

import { Box, Container, Grid, VStack, HStack, Text, Divider, Code, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { useColorMode } from "./theme/AppThemeProvider"
import {
  MpButton,
  MpCard,
  MpInput,
  MpSelect,
  MpCheckbox,
  MpAlert,
  MpBadge,
  MpTabs,
  MpDialog,
  MpSwitch,
  MpForm,
  MpAccordion,
  MpAvatar,
  MpBreadcrumbs,
  MpChip,
  MpTooltip,
  MpSkeleton,
  MpLoading,
  MpNodata,
  MpRadioGroup,
  MpSlider,
  MpTable,
  MpTypography,
} from "./components"

export default function App() {
  const [selectValue, setSelectValue] = useState("a")
  const [switchValue, setSwitchValue] = useState(false)
  const [radioValue, setRadioValue] = useState("option1")
  const [sliderValue, setSliderValue] = useState(50)
  const [accordionExpanded, setAccordionExpanded] = useState("panel1")
  const { mode, toggleColorMode } = useColorMode()

  const tableRows = [
    { id: 1, name: "Alice Johnson", role: "Admin", status: "Active" },
    { id: 2, name: "Bob Smith", role: "User", status: "Active" },
    { id: 3, name: "Charlie Brown", role: "Editor", status: "Inactive" },
    { id: 4, name: "Diana Prince", role: "User", status: "Active" },
  ]

  const tableColumns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (row: any) => (
        <MpBadge colorScheme={row.status === "Active" ? "green" : "gray"}>{row.status}</MpBadge>
      ),
    },
  ]

  return (
    <Box minH="100vh" bg="chakra-body-bg">
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <HStack justify="space-between" mb={4}>
            <VStack align="start" spacing={1}>
              <MpTypography variant="h3">Showcase Web UI CAKRA-UI Components </MpTypography>
              <Text fontSize="md" color="mutedForeground">
                by @mochrks
              </Text>
            </VStack>
            <MpButton onClick={toggleColorMode}>{mode === "light" ? "🌙 Dark" : "☀️ Light"} Mode</MpButton>
          </HStack>

          {/* typography */}
          <MpCard title="Typography">
            <MpTypography variant="h1">Heading 1</MpTypography>
            <MpTypography variant="h2">Heading 2</MpTypography>
            <MpTypography variant="h3">Heading 3</MpTypography>
            <MpTypography variant="h4">Heading 4</MpTypography>
            <MpTypography variant="h5">Heading 5</MpTypography>
            <MpTypography variant="h6">Heading 6</MpTypography>
            <MpTypography variant="body1">Body 1</MpTypography>
            <MpTypography variant="body2">Body 2</MpTypography>
            <MpTypography variant="subtitle1">Subtitle 1</MpTypography>
            <MpTypography variant="subtitle2">Subtitle 2</MpTypography>
            <MpTypography variant="caption">Caption</MpTypography>
            <MpTypography variant="button">Button</MpTypography>
            <MpTypography variant="overline">Overline</MpTypography>
          </MpCard>
          {/* Breadcrumbs */}
          <MpCard title="Breadcrumbs">
            <MpBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Components", href: "/components" },
                { label: "Showcase" },
              ]}
            />
          </MpCard>

          {/* Alerts Section */}
          <MpCard title="Alerts">
            <VStack spacing={4} align="stretch">
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
                <MpAlert status="info" title="Information" description="This is an informational alert message." />
                <MpAlert status="success" title="Success" description="Your action was completed successfully!" />
                <MpAlert status="warning" title="Warning" description="Please review this warning carefully." />
                <MpAlert status="error" title="Error" description="An error occurred. Please try again." />
              </Grid>
            </VStack>
          </MpCard>

          <Divider />

          {/* Accordion */}
          <MpCard title="Accordion">
            <VStack spacing={4} align="stretch">
              <MpAccordion
                items={[
                  {
                    id: "panel1",
                    title: "What is this component library?",
                    content:
                      "This is a collection of Chakra UI components styled to look like shadcn/ui. It provides a consistent design system with beautiful, accessible components.",
                  },
                  {
                    id: "panel2",
                    title: "How do I use these components?",
                    content:
                      "Simply import the components you need and use them in your React application. Each component follows the same API patterns as Chakra UI with additional shadcn-inspired styling.",
                  },
                  {
                    id: "panel3",
                    title: "Can I customize the theme?",
                    content:
                      "Yes! The theme is fully customizable. You can modify the createShadcnTheme function to adjust colors, typography, spacing, and more to match your brand.",
                  },
                ]}
                expanded={accordionExpanded}
                onChange={(panel) => setAccordionExpanded(panel)}
              />
            </VStack>
          </MpCard>

          <Divider />

          {/* Badges & Chips Section */}
          <MpCard title="Badges & Chip">
            <VStack spacing={4} align="stretch">
              <Stack direction="row" spacing={3} flexWrap="wrap">
                <MpBadge>Default</MpBadge>
                <MpBadge colorScheme="blue">Primary</MpBadge>
                <MpBadge colorScheme="green">Success</MpBadge>
                <MpBadge colorScheme="red">Error</MpBadge>
                <MpBadge colorScheme="orange">Warning</MpBadge>
                <MpBadge variant="outline" colorScheme="purple">
                  Outline
                </MpBadge>
                <MpBadge variant="solid" colorScheme="teal">
                  Solid
                </MpBadge>
              </Stack>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <MpChip label="Chip 1" />
                <MpChip label="Chip 2" colorScheme="blue" />
                <MpChip label="Deletable" onDelete={() => console.log("Delete")} />
                <MpChip label="Clickable" onClick={() => console.log("Click")} colorScheme="green" />
              </Stack>
            </VStack>
          </MpCard>

          <Divider />

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
            {/* Buttons */}
            <MpCard title="Buttons">
              <VStack spacing={3} align="stretch">
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <MpButton>Primary</MpButton>
                  <MpButton variant="outline">Outlined</MpButton>
                  <MpButton variant="soft">Soft</MpButton>
                  <MpButton colorScheme="red">Destructive</MpButton>
                </Stack>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <MpButton variant="ghost">Ghost</MpButton>
                  <MpButton variant="link">Link Button</MpButton>
                  <MpButton isDisabled>Disabled</MpButton>
                  <MpButton size="sm">Small</MpButton>
                  <MpButton size="lg">Large</MpButton>
                </Stack>
              </VStack>
            </MpCard>

            {/* Inputs & Form Controls */}
            <MpCard title="Inputs & Form Controls">
              <VStack spacing={4} align="stretch">
                <MpInput label="Name" placeholder="Enter your name" />
                <MpInput label="Email" type="email" placeholder="you@example.com" />
                <MpInput label="Password" type="password" placeholder="••••••••" />
                <MpSelect
                  label="Select Option"
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  options={[
                    { value: "a", label: "Option A" },
                    { value: "b", label: "Option B" },
                    { value: "c", label: "Option C" },
                  ]}
                />
                <MpCheckbox label="I agree to terms and conditions" />
                <MpSwitch label="Enable notifications" isChecked={switchValue} onChange={setSwitchValue} />
              </VStack>
            </MpCard>

            {/* Avatars & Tooltips */}
            <MpCard title="Avatars & Tooltips">
              <VStack spacing={3} align="start">
                <Stack direction="row" spacing={3}>
                  <MpTooltip title="User Avatar">
                    <MpAvatar name="User" />
                  </MpTooltip>
                  <MpTooltip title="Admin User">
                    <MpAvatar name="Admin" bg="blue.500" />
                  </MpTooltip>
                  <MpTooltip title="Profile Picture">
                    <MpAvatar src="/placeholder.svg?height=40&width=40" />
                  </MpTooltip>
                  <MpTooltip title="Small Avatar">
                    <MpAvatar name="S" size="sm" />
                  </MpTooltip>
                  <MpTooltip title="Large Avatar">
                    <MpAvatar name="L" size="lg" />
                  </MpTooltip>
                </Stack>
                <Text fontSize="sm" color="mutedForeground">
                  Hover over avatars to see tooltips
                </Text>
              </VStack>
            </MpCard>

            {/* Radio & Slider */}
            <MpCard title="Radio Groups & Sliders">
              <VStack spacing={4} align="stretch">
                <MpRadioGroup
                  label="Choose an option"
                  value={radioValue}
                  onChange={setRadioValue}
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                />
                <Box>
                  <Text fontSize="sm" fontWeight="500" mb={2}>
                    Volume: {sliderValue}%
                  </Text>
                  <MpSlider
                    value={sliderValue}
                    onChange={(value) => setSliderValue(value as number)}
                    min={0}
                    max={100}
                  />
                </Box>
              </VStack>
            </MpCard>

            {/* Tabs */}
            <MpCard title="Tabs">
              <MpTabs
                tabs={[
                  {
                    label: "Account",
                    content: (
                      <VStack align="start" spacing={3}>
                        <Text fontSize="sm">Manage your account settings and preferences.</Text>
                        <Code fontSize="xs" p={2} borderRadius="md" w="full">
                          User ID: 12345
                        </Code>
                      </VStack>
                    ),
                  },
                  {
                    label: "Security",
                    content: (
                      <VStack align="start" spacing={3}>
                        <Text fontSize="sm">Configure security settings and two-factor authentication.</Text>
                        <MpButton size="sm">Enable 2FA</MpButton>
                      </VStack>
                    ),
                  },
                  {
                    label: "Notifications",
                    content: (
                      <VStack align="start" spacing={3}>
                        <Text fontSize="sm">Manage your notification preferences.</Text>
                        <MpSwitch label="Email notifications" />
                        <MpSwitch label="Push notifications" />
                      </VStack>
                    ),
                  },
                ]}
              />
            </MpCard>

            {/* Dialog */}
            <MpCard title="Dialog / Modal">
              <VStack spacing={3} align="start">
                <Text fontSize="sm" color="mutedForeground">
                  Click the button below to open a dialog
                </Text>
                <MpDialog
                  trigger={<MpButton>Open Dialog</MpButton>}
                  title="Confirm Action"
                  footer={
                    <HStack spacing={2}>
                      <MpButton variant="outline">Cancel</MpButton>
                      <MpButton>Confirm</MpButton>
                    </HStack>
                  }
                >
                  <Text fontSize="sm">Are you sure you want to perform this action? This cannot be undone.</Text>
                </MpDialog>
              </VStack>
            </MpCard>

            {/* Loading & No Data States */}
            <MpCard title="Loading State">
              <MpLoading />
            </MpCard>

            <MpCard title="No Data State">
              <MpNodata message="No items found" />
            </MpCard>

            {/* Skeleton */}
            <MpCard title="Skeleton Loaders">
              <VStack spacing={2} align="stretch">
                <MpSkeleton variant="text" width="60%" />
                <MpSkeleton variant="text" width="80%" />
                <MpSkeleton variant="rectangular" height="100px" />
                <Stack direction="row" spacing={2}>
                  <MpSkeleton variant="circular" width="40px" height="40px" />
                  <MpSkeleton variant="text" width="100%" />
                </Stack>
              </VStack>
            </MpCard>
          </Grid>

          {/* Table */}
          <MpCard title="Data Table">
            <VStack spacing={4} align="stretch">
              <MpCard>
                <MpTable rows={tableRows} columns={tableColumns} />
              </MpCard>
            </VStack>
          </MpCard>

          {/* Form Example */}
          <MpCard title="Form (react-hook-form)">
            <VStack spacing={4} align="stretch">
              <MpCard>
                <MpForm
                  defaultValues={{ fullName: "", email: "", country: "", agree: false }}
                  fields={[
                    {
                      name: "fullName",
                      label: "Full Name",
                      type: "text",
                      placeholder: "John Doe",
                      rules: { required: "Name is required" },
                    },
                    {
                      name: "email",
                      label: "Email",
                      type: "email",
                      placeholder: "john@example.com",
                      rules: {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      },
                    },
                    {
                      name: "country",
                      label: "Country",
                      type: "select",
                      options: [
                        { value: "", label: "Select a country" },
                        { value: "us", label: "United States" },
                        { value: "uk", label: "United Kingdom" },
                        { value: "ca", label: "Canada" },
                        { value: "id", label: "Indonesia" },
                      ],
                      rules: { required: "Country is required" },
                    },
                    {
                      name: "agree",
                      label: "I agree to the terms and conditions",
                      type: "checkbox",
                      rules: { required: "You must agree to continue" },
                    },
                  ]}
                  onSubmit={(data) => {
                    console.log("[v0] Form submitted:", data)
                    alert(JSON.stringify(data, null, 2))
                  }}
                  submitLabel="Submit Form"
                />
              </MpCard>
            </VStack>
          </MpCard>
        </VStack>
      </Container>
    </Box>
  )
}
