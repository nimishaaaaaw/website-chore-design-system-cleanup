"use client"

import { ContactModalProvider } from "@/hooks/use-contact-modal"
import { ContactModal } from "@/components/shared/ContactModal"
import { Toaster } from "sonner"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ContactModalProvider>
      {children}
      <ContactModal />
      <Toaster position="top-center" richColors />
    </ContactModalProvider>
  )
}
