"use client"

import { motion, AnimatePresence } from "framer-motion"
import { 
  X, CheckCircle, User, Mail, Building2, ChevronDown, 
  Loader2, ShieldCheck, ArrowRight 
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useForm, Resolver } from "react-hook-form"
import * as z from "zod"
import { useContactModal } from "@/hooks/use-contact-modal"
import { trackEvent } from "@/lib/analytics"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

// --- Validation Rules ---
const phoneValidationRules = {
  IN: { regex: /^\d{10}$/, message: "Indian numbers must be exactly 10 digits" },
  US: { regex: /^\d{10}$/, message: "US numbers must be exactly 10 digits" },
  GB: { regex: /^\d{10,11}$/, message: "UK numbers must be 10 or 11 digits" },
  UAE: { regex: /^\d{9}$/, message: "UAE numbers must be exactly 9 digits" },
  SG: { regex: /^\d{8}$/, message: "Singapore numbers must be exactly 8 digits" },
  AU: { regex: /^\d{9}$/, message: "Australian numbers must be exactly 9 digits" },
}

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(5, "Enter a valid phone number"),
  countryCode: z.string(),
  company: z.string().trim().min(2, "Enter organization name"),
}).superRefine((data, ctx) => {
  if (!data.phone) return
  const cleanPhone = data.phone.replace(/[\s-]/g, '')
  const rule = phoneValidationRules[data.countryCode as keyof typeof phoneValidationRules]
  
  if (rule) {
    if (!rule.regex.test(cleanPhone)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: rule.message,
        path: ["phone"],
      })
    }
  } else if (!/^\d{5,15}$/.test(cleanPhone)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Enter a valid phone number",
      path: ["phone"],
    })
  }
})

type ContactFormData = z.infer<typeof contactFormSchema>

// --- Custom Resolver to Bypass Zod 4 Resolver Crashing ---
const resolver: Resolver<ContactFormData> = (values) => {
  try {
    const result = contactFormSchema.safeParse(values)
    if (result.success) {
      return { values: result.data, errors: {} }
    }
    
    // Map Zod errors to RHF errors
    const errors = result.error.issues.reduce((acc, current) => {
      const path = current.path[0] as string
      acc[path] = {
        type: current.code,
        message: current.message,
      }
      return acc
    }, {} as Record<string, { type: string; message: string }>)

    return { values: {}, errors }
  } catch (err) {
    // Fail-safe to prevent runtime overlays
    console.error("Manual Resolver Error:", err)
    return {
      values: {},
      errors: {
        name: { type: "manual", message: "Validation error occurred" }
      }
    }
  }
}

const COUNTRIES = [
  { code: 'IN', name: 'India', dial: '+91', flag: '🇮🇳' },
  { code: 'US', name: 'USA', dial: '+1', flag: '🇺🇸' },
  { code: 'GB', name: 'UK', dial: '+44', flag: '🇬🇧' },
  { code: 'UAE', name: 'UAE', dial: '+971', flag: '🇦🇪' },
  { code: 'SG', name: 'Singapore', dial: '+65', flag: '🇸🇬' },
  { code: 'AU', name: 'Australia', dial: '+61', flag: '🇦🇺' },
]

export function ContactModal() {
  const { isOpen, closeModal, overrides } = useContactModal()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const nameInputRef = useRef<HTMLInputElement | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver, // Using the custom manual resolver
    mode: "onBlur",
    defaultValues: {
      countryCode: 'IN',
      phone: '',
    }
  })

  const selectedCountryCode = watch('countryCode')
  const selectedCountry = COUNTRIES.find(c => c.code === selectedCountryCode) || COUNTRIES[0]

  useEffect(() => {
    if (isOpen && nameInputRef.current) {
      setTimeout(() => nameInputRef.current?.focus(), 250)
    }
  }, [isOpen])

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', `${selectedCountry.dial} ${data.phone}`)
      formData.append('company', data.company)
      formData.append('_subject', `New Lead: ${data.name} from ${data.company}`)

      const response = await fetch('https://formspree.io/f/xrbkovkg', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      })

      if (response.ok) {
        trackEvent('submit', 'lead_generation', 'contact_modal')
        setFormSubmitted(true)
        toast.success("Request received!")
        reset()
      } else {
        toast.error("Submitting failed. Please try again.")
      }
    } catch {
      toast.error("Network error. Check your connection.")
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
          
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 15 }} transition={{ type: "spring", damping: 30, stiffness: 400 }} className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-[0_32px_128px_-16px_rgba(0,0,0,0.2)] overflow-hidden border border-slate-100 z-[110]">
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />
            
            <button onClick={closeModal} className="absolute top-8 right-8 p-2.5 rounded-full bg-slate-50 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all active:scale-90 z-10">
              <X size={18} strokeWidth={2.5} />
            </button>

            <div className="p-6 sm:p-10">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.div key="form" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <div className="mb-8 text-center sm:text-left">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-4 rounded-full bg-blue-50 border border-blue-100/50 text-blue-600 text-[9px] font-black uppercase tracking-widest leading-none">
                        <div className="w-1 h-1 rounded-full bg-blue-600 animate-pulse" />
                        {overrides?.badge || "Partnership"}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-[1.15] mb-2.5 tracking-tight">{overrides?.title || "Stop your pharmacy leakage."}</h2>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{overrides?.description || "Book a free audit to see exactly how much revenue your hospital is losing to external chain pharmacies."}</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 pointer-events-none">Full Name *</label>
                        <div className="relative group">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"><User size={16} strokeWidth={2.5} /></div>
                          <input {...register('name')} ref={(e) => { register('name').ref(e); nameInputRef.current = e; }} type="text" placeholder="John Doe" className={cn("w-full pl-11 pr-4 py-3 bg-slate-50/50 border rounded-xl text-slate-900 text-sm font-medium transition-all outline-none", errors.name ? "border-red-200 bg-red-50/50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300")} />
                        </div>
                        {errors.name && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-[10px] font-bold text-red-500 ml-1 overflow-hidden">{errors.name.message}</motion.p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 pointer-events-none">Phone Number *</label>
                        <div className={cn("flex items-stretch bg-slate-50/50 border rounded-xl transition-all h-[46px] group", errors.phone ? "border-red-200 bg-red-50/50 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-500/10" : "border-slate-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 hover:border-slate-300")}>
                          <div className="relative flex items-center px-3 border-r border-slate-200/60 transition-colors group-focus-within:border-blue-200/50 min-w-[90px] justify-center hover:bg-slate-100 rounded-l-xl cursor-pointer">
                            <select {...register('countryCode')} className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full">{COUNTRIES.map(c => (<option key={c.code} value={c.code}>{c.dial} ({c.name})</option>))}</select>
                            <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700"><span>{selectedCountry.flag}</span> <span>{selectedCountry.dial}</span> <ChevronDown size={14} className="text-slate-400" /></div>
                          </div>
                          <input {...register('phone')} type="tel" placeholder="Enter mobile number" className="flex-1 px-4 bg-transparent border-none text-slate-900 text-sm font-medium outline-none placeholder:text-slate-300 w-full" />
                        </div>
                        {errors.phone && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-[10px] font-bold text-red-500 ml-1 overflow-hidden">{errors.phone.message}</motion.p>}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 pointer-events-none">Work Email *</label>
                        <div className="relative group">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"><Mail size={16} strokeWidth={2.5} /></div>
                          <input {...register('email')} type="email" placeholder="john@hospital.com" className={cn("w-full pl-11 pr-4 py-3 bg-slate-50/50 border rounded-xl text-slate-900 text-sm font-medium transition-all outline-none", errors.email ? "border-red-200 bg-red-50/50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300")} />
                        </div>
                        {errors.email && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-[10px] font-bold text-red-500 ml-1 overflow-hidden">{errors.email.message}</motion.p>}
                      </div>

                      {/* Company */}
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1 pointer-events-none">Hospital/Clinic Name *</label>
                        <div className="relative group">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors"><Building2 size={16} strokeWidth={2.5} /></div>
                          <input {...register('company')} type="text" placeholder="Enter organization name" className={cn("w-full pl-11 pr-4 py-3 bg-slate-50/50 border rounded-xl text-slate-900 text-sm font-medium transition-all outline-none", errors.company ? "border-red-200 bg-red-50/50 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300")} />
                        </div>
                        {errors.company && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="text-[10px] font-bold text-red-500 ml-1 overflow-hidden">{errors.company.message}</motion.p>}
                      </div>

                      <div className="pt-4 relative">
                        <button type="submit" disabled={isSubmitting} className="w-full relative group bg-blue-600 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none overflow-hidden">
                          <span className={cn("flex items-center justify-center gap-2 transition-all duration-300", isSubmitting ? "opacity-0 scale-90" : "opacity-100 scale-100")}>
                            {overrides?.btnText || "Book My Free Audit"} <ArrowRight size={16} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
                          </span>
                          {isSubmitting && <div className="absolute inset-0 flex items-center justify-center"><Loader2 className="w-5 h-5 animate-spin" /></div>}
                        </button>
                      </div>

                      <div className="flex items-center justify-center gap-2 pt-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">
                        <ShieldCheck size={12} className="text-emerald-500" /> Secure & confidential
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <SuccessView 
                    onClose={() => { 
                      closeModal(); 
                      setTimeout(() => setFormSubmitted(false), 500); 
                    }} 
                    successTitle={overrides?.successTitle}
                    successDescription={overrides?.successDescription}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function SuccessView({ 
  onClose, 
  successTitle, 
  successDescription 
}: { 
  onClose: () => void; 
  successTitle?: string;
  successDescription?: string;
}) {
  const [timeLeft, setTimeLeft] = useState(5)
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 0.1)), 100)
    const autoClose = setTimeout(onClose, 5000)
    return () => { clearInterval(timer); clearTimeout(autoClose); }
  }, [onClose])
  const progress = (timeLeft / 5) * 100
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center py-6 sm:py-10">
      <div className="relative mb-8">
        <motion.div initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }} className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl relative z-10"><CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" strokeWidth={2.5} /></motion.div>
        <div className="absolute -inset-8 bg-blue-500/10 rounded-full -z-10 blur-3xl" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight text-slate-900">
        {successTitle || "All Set!"}
      </h2>
      <p className="text-slate-500 mb-8 max-w-[300px] leading-relaxed text-base font-medium">
        {successDescription || (
          <>Our audit team will reach out within <span className="text-blue-600 font-bold">24 hours</span> to start your recovery plan.</>
        )}
      </p>
      <div className="w-full max-w-[180px] flex flex-col items-center gap-4">
        <button onClick={onClose} className="group relative w-full py-3 bg-slate-900 text-white text-xs font-bold rounded-xl overflow-hidden hover:bg-slate-800 transition-all active:scale-[0.98] shadow-lg shadow-slate-900/20">
          <span className="relative z-10 flex items-center justify-center gap-2">Return to Site <X size={14} strokeWidth={2.5} /></span>
          <div className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
        </button>
        <div className="flex items-center gap-2 text-[9px] text-slate-400 font-bold uppercase tracking-widest"><div className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />Closing in {Math.ceil(timeLeft)}s</div>
      </div>
    </motion.div>
  )
}
