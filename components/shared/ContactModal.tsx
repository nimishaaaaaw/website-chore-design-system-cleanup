"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import { useContactModal } from "@/hooks/use-contact-modal"
import { trackEvent } from "@/lib/analytics"

export function ContactModal() {
  const { isOpen, closeModal, overrides } = useContactModal()
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-slate-900/70"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
                >
                  <div className="absolute top-4 right-4 z-10">
                    <Dialog.Close asChild>
                      <button 
                        className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
                        aria-label="Close"
                      >
                        <X size={20} />
                      </button>
                    </Dialog.Close>
                  </div>

                  <div className="p-8">
                    <AnimatePresence mode="wait">
                      {!formSubmitted ? (
                        <motion.div
                          key="form"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                        >
                          <div className="mb-8">
                            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                              {overrides?.badge || "Book a Demo"}
                            </div>
                            <Dialog.Title className="text-3xl font-bold text-slate-900 leading-tight">
                              {overrides?.title || "Start your pharmacy recovery plan."}
                            </Dialog.Title>
                            <Dialog.Description className="sr-only">
                              {overrides?.description || "Fill out the form below to book a free pharmacy audit with our experts."}
                            </Dialog.Description>
                          </div>

                          <form
                            onSubmit={async (e) => {
                              e.preventDefault()
                              const form = e.target as HTMLFormElement
                              const formData = new FormData(form)
                              const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement | null
                              if (submitButton) submitButton.disabled = true
                              try {
                                const response = await fetch('https://formspree.io/f/xrbkovkg', { 
                                  method: 'POST', 
                                  body: formData, 
                                  headers: { Accept: 'application/json' } 
                                })
                                if (response.ok) {
                                  trackEvent('submit', 'lead_generation', 'contact_modal')
                                  setFormSubmitted(true)
                                  form.reset()
                                } else {
                                  alert('There was an issue submitting the form. Please try again.')
                                }
                              } catch {
                                alert('Network error. Please try again later.')
                              } finally {
                                if (submitButton) submitButton.disabled = false
                              }
                            }}
                            className="space-y-4"
                          >
                            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="modalName" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">
                                  Your Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="text"
                                  id="modalName"
                                  name="name"
                                  required
                                  placeholder="John Doe"
                                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                />
                              </div>
                              <div>
                                <label htmlFor="modalPhone" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">
                                  Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                  type="tel"
                                  id="modalPhone"
                                  name="phone"
                                  required
                                  placeholder="+91 00000 00000"
                                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                />
                              </div>
                            </div>

                            <div>
                              <label htmlFor="modalEmail" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">
                                Work Email <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="email"
                                id="modalEmail"
                                name="email"
                                required
                                placeholder="john@hospital.com"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                              />
                            </div>

                            <div>
                              <label htmlFor="modalOrg" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 ml-1">
                                Hospital/Clinic Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="modalOrg"
                                name="company"
                                required
                                placeholder="Enter organization name"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                              />
                            </div>

                            <div className="pt-2">
                              <button 
                                type="submit" 
                                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50"
                              >
                                {overrides?.btnText || "Book My Free Audit"}
                              </button>
                              <p className="text-[10px] text-center text-slate-400 mt-4 leading-relaxed">
                                By clicking, you agree to our privacy policy and terms. Our team will contact you within 24 hours.
                              </p>
                            </div>
                          </form>
                        </motion.div>
                      ) : (
                        <SuccessView onClose={() => {
                          closeModal()
                          setTimeout(() => setFormSubmitted(false), 500)
                        }} />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

function SuccessView({ onClose }: { onClose: () => void }) {
  const [timeLeft, setTimeLeft] = useState(5)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 0.1))
    }, 100)

    const autoClose = setTimeout(onClose, 5000)

    return () => {
      clearInterval(timer)
      clearTimeout(autoClose)
    }
  }, [onClose])

  const progress = (timeLeft / 5) * 100

  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center text-center py-12"
    >
      <div className="relative mb-10">
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
          className="w-28 h-28 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 rounded-3xl flex items-center justify-center shadow-lg relative z-10"
        >
          <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
        </motion.div>
        <div className="absolute -inset-6 bg-blue-500/5 rounded-full -z-10 blur-xl" />
      </div>

      <h2 className="text-4xl font-black mb-4 tracking-tight text-slate-900">
        Request Received!
      </h2>
      
      <p className="text-slate-500 mb-12 max-w-[340px] leading-relaxed text-lg">
        One of our experts will contact you within <span className="text-blue-600 font-bold">24 hours</span> to schedule your audit.
      </p>

      <div className="w-full max-w-[200px] flex flex-col items-center gap-6">
        <button
          onClick={onClose}
          className="group relative w-full py-3 bg-slate-900 text-white text-sm font-bold rounded-xl overflow-hidden hover:bg-slate-800 transition-all active:scale-[0.98]"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Close Now <X size={14} />
          </span>
          {/* Progress Bar — Timer-driven */}
          <div 
            className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </button>

        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          <div className="w-1 h-1 rounded-full bg-slate-300" />
          Auto-closing in {Math.ceil(timeLeft)}s
        </div>
      </div>
    </motion.div>
  )
}
