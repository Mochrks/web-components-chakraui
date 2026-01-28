import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
} from "@chakra-ui/react"
import React from "react"

interface StepItem {
  title: string
  description?: string
}

interface MpStepperProps {
  steps: StepItem[]
  activeStep: number
}

const MpStepper: React.FC<MpStepperProps> = ({ steps, activeStep }) => {
  return (
    <Stepper index={activeStep} colorScheme="blue">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            {step.description && <StepDescription>{step.description}</StepDescription>}
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
}

export default MpStepper
