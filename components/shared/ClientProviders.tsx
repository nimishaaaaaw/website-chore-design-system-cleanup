"use client"

import { ContactModalProvider } from "@/hooks/use-contact-modal"
import dynamic from "next/dynamic"
import { Toaster } from "sonner"

const ContactModal = dynamic(
  () => import("@/components/shared/ContactModal").then((mod) => mod.ContactModal),
  { ssr: false }
)

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ContactModalProvider>
      {children}
      <ContactModal />
      <Toaster position="top-center" richColors />
    </ContactModalProvider>
  )
}
