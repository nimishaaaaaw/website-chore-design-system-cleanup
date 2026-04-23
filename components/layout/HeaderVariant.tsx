"use client"

import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  variant: 'navy' | 'teal' | 'slate' | 'indigo'
  title: string
}

const styles = {
  navy: {
    bg: "bg-white",
    border: "border-blue-100",
    text: "text-blue-900",
    hoverText: "hover:text-blue-600",
    underline: "bg-blue-600",
    button: "bg-blue-700 hover:bg-blue-800 text-white"
  },
  teal: {
    bg: "bg-white",
    border: "border-teal-100",
    text: "text-slate-800",
    hoverText: "hover:text-teal-600",
    underline: "bg-teal-600",
    button: "bg-teal-600 hover:bg-teal-700 text-white"
  },
  slate: {
    bg: "bg-slate-50",
    border: "border-slate-200",
    text: "text-slate-900",
    hoverText: "hover:text-slate-600",
    underline: "bg-slate-400",
    button: "bg-slate-900 hover:bg-black text-white"
  },
  indigo: {
    bg: "bg-white",
    border: "border-indigo-50",
    text: "text-indigo-950",
    hoverText: "hover:text-indigo-600",
    underline: "bg-indigo-500",
    button: "bg-indigo-600 hover:bg-indigo-700 text-white"
  }
}

export function HeaderVariant({ variant, title }: HeaderProps) {
  const s = styles[variant]

  return (
    <div className="w-full mb-20 border rounded-xl overflow-hidden shadow-sm">
      <div className="bg-gray-100 px-4 py-2 border-b text-xs font-mono text-gray-500 flex justify-between items-center">
        <span>Option: {title} ({variant} palette)</span>
        <span className="bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-400">Preview Only</span>
      </div>
      <header className={`relative w-full ${s.bg} border-b ${s.border} z-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 w-48">
              <Link href="#">
                <Image
                  src="/Logos/medikloud-logo-primary.webp" 
                  alt="MediKloud Logo" 
                  className="w-[120px] h-auto"
                  width={1536}
                  height={1024}
                  sizes="120px"
                />
              </Link>
            </div>

            {/* Navigation - Centered */}
            <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
              {['Products', 'Solutions', 'About Us', 'Blogs'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className={`group relative py-1 text-sm font-semibold ${s.text} ${s.hoverText} transition-colors no-underline`}
                >
                  {item}
                  <span className={`absolute left-0 -bottom-1 h-[2px] w-full ${s.underline} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
                </Link>
              ))}
            </nav>

            {/* CTA - Right */}
            <div className="flex-shrink-0 w-48 flex justify-end">
              <button className={`${s.button} px-5 py-2 text-sm font-bold rounded-lg transition-all shadow-sm`}>
                Talk to us
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
