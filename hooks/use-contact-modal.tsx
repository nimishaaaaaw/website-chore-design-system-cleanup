"use client"

import React, { createContext, useContext, useState, useCallback } from "react"

export interface ModalOverrides {
  badge?: string;
  title?: string;
  description?: string;
  btnText?: string;
  successTitle?: string;
  successDescription?: string;
}

interface ContactModalContextType {
  isOpen: boolean
  overrides?: ModalOverrides
  openModal: (overrides?: ModalOverrides) => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined)

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [overrides, setOverrides] = useState<ModalOverrides | undefined>()

  const openModal = useCallback((newOverrides?: ModalOverrides) => {
    setOverrides(newOverrides)
    setIsOpen(true)
  }, [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <ContactModalContext.Provider value={{ isOpen, overrides, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const context = useContext(ContactModalContext)
  if (context === undefined) {
    throw new Error("useContactModal must be used within a ContactModalProvider")
  }
  return context
}
