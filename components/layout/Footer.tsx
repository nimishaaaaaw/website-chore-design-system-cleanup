import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white text-slate-900 pt-16 pb-8 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block transition-transform hover:scale-105 active:scale-95 duration-200">
              <Image 
                src="/medikloud-logo-primary.webp" 
                alt="MediKloud Logo" 
                width={180} 
                height={36} 
                className="h-auto w-[180px]" 
              />
            </Link>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-sm">
              India's first tech-driven fully managed hospital pharmacy. Building the operating backbone for independent hospital and clinic pharmacies across India.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Solutions</h3>
            <ul className="space-y-3">
              {[
                { name: 'Managed Pharmacy', href: '/products/managed-pharmacy' },
                { name: 'Virtual Pharmacy', href: '/products/virtual-pharmacy' },
                { name: 'Hospital Management', href: '/products/hospital-management-system' },
                { name: 'Refill Engine', href: '/products/refill-engine' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-normal">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Locations</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <ul className="space-y-3">
                {['Visakhapatnam', 'Hyderabad', 'Bengaluru', 'Chennai'].map((city) => (
                  <li key={city} className="text-slate-600 text-sm font-normal hover:text-blue-600 cursor-default transition-colors">
                    {city}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {['Mumbai', 'Delhi', 'Pune'].map((city) => (
                  <li key={city} className="text-slate-600 text-sm font-normal hover:text-blue-600 cursor-default transition-colors">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Company</h3>
            <ul className="space-y-3">
              {['About', 'Blogs'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-normal">
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/security" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-normal">
                  Security
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-xs font-normal text-slate-500">
            <span>© 2026 MediKloud</span>
            <span className="hidden md:inline text-slate-300">·</span>
            <span>Made with ❤️ in Vizag</span>
            <span className="hidden md:inline text-slate-300">·</span>
            <a href="mailto:hello@medikloud.com" className="hover:text-blue-600 transition-colors">hello@medikloud.com</a>
            <span className="hidden md:inline text-slate-300">·</span>
            <a href="tel:+917702670993" className="hover:text-blue-600 transition-colors whitespace-nowrap">+91 770 267 0993</a>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://www.linkedin.com/company/medikloud" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.729C24 .774 23.204 0 22.225 0z" />
              </svg>
            </Link>
            <Link href="https://x.com/MediKloud" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </Link>
            <div className="w-px h-4 bg-slate-200 hidden md:block"></div>
            <Link href="/privacy-policy" className="text-u-xs font-semibold text-slate-400 hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="text-u-xs font-semibold text-slate-400 hover:text-slate-900 transition-colors">Terms</Link>
            <Link href="/return-policy" className="text-u-xs font-semibold text-slate-400 hover:text-slate-900 transition-colors">Returns</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
