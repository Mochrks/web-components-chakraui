import { MpCard, MpAccordion } from "../"
import { VStack } from "@chakra-ui/react"
import React, { useState } from "react"

const ShowcaseAccordion = () => {
  const [accordionExpanded, setAccordionExpanded] = useState("panel1")
  return (
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
  )
}
export default ShowcaseAccordion
