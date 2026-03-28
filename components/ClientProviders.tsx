"use client"

import { ContactModalProvider } from "@/hooks/use-contact-modal"
import { ContactModal } from "@/components/v2/ContactModal"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ContactModalProvider>
      {children}
      <ContactModal />
    </ContactModalProvider>
  )
}
