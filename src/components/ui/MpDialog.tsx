"use client"

import type React from "react"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import PropTypes from "prop-types"

export interface MpDialogProps {
  trigger: React.ReactNode
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full"
}

export default function MpDialog({ trigger, title, children, footer, size = "md" }: MpDialogProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div onClick={onOpen}>{trigger}</div>
      <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <ModalContent>
          <ModalHeader fontSize="lg" fontWeight="semibold">
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContent>
      </Modal>
    </>
  )
}

MpDialog.propTypes = {
  trigger: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
}
