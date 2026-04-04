"use client"

import { ContactModalProvider } from "@/hooks/use-contact-modal"
import { ContactModal } from "@/components/shared/ContactModal"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ContactModalProvider>
      {children}
      <ContactModal />
    </ContactModalProvider>
  )
}
