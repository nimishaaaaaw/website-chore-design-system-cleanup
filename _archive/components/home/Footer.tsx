import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-white"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="group">
            <div className="flex items-center space-x-3 mb-6">
              <Image src="/CG_MK_Logo_trimmed.png" alt="MediKloud Logo" width={240} height={48} sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 240px" className="h-auto w-[160px] sm:w-[200px] md:w-[240px] group-hover:scale-110 transition-transform duration-700" />
            </div>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">Building the AI‑powered backbone for modern Indian healthcare.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Solutions</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="leading-relaxed">Tech‑First Pharmacies</li>
              <li className="leading-relaxed">On‑Tap Pharmacy & Lab</li>
              <li className="leading-relaxed">AI‑Powered HMS</li>
              <li className="leading-relaxed">Patient Self‑Service Kiosks</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Technology</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="leading-relaxed">AI Agents for Hospital Ops</li>
              <li className="leading-relaxed">EHR/EMR Integration</li>
              <li className="leading-relaxed">Data Security & Compliance</li>
              <li className="leading-relaxed">Dashboards & Insights</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Company</h3>
            <ul className="space-y-3 text-gray-600 mb-4">
              <li className="leading-relaxed">Email: hello@medikloud.com</li>
              <li className="leading-relaxed">Phone: +91-7702670993</li>
            </ul>
            <div className="flex items-center space-x-4 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.2 2.4-2.4 5-2.4 5.4 0 6.4 3.5 6.4 8v9.2h-5V17c0-2.1 0-4.8-3-4.8s-3.5 2.3-3.5 4.7v7.1H7.5V8z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M21.543 2.797c-.77.342-1.597.572-2.463.676a4.302 4.302 0 0 0 1.884-2.37 8.726 8.726 0 0 1-2.73 1.043 4.278 4.278 0 0 0-7.313 3.903 12.145 12.145 0 0 1-8.812-4.47 4.26 4.26 0 0 0-.579 2.15 4.28 4.28 0 0 0 1.905 3.564 4.257 4.257 0 0 1-1.937-.535v.053a4.28 4.28 0 0 0 3.433 4.192 4.295 4.295 0 0 1-1.13.15c-.276 0-.543-.026-.805-.077a4.282 4.282 0 0 0 3.997 2.974 8.59 8.59 0 0 1-6.323 1.771 12.11 12.11 0 0 0 6.56 1.926c7.872 0 12.18-6.518 12.18-12.172 0-.185-.004-.369-.012-.552a8.688 8.688 0 0 0 2.137-2.213z" /></svg>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="hover:text-gray-900 transition-colors duration-300 leading-relaxed">&copy; 2026 MediKloud. For Happier Patients and More Efficient Hospitals. | <a href="/privacy-policy" className="text-cyan-700 underline underline-offset-2 decoration-2 hover:text-cyan-800">Privacy Policy</a> | <a href="/terms-of-service" className="text-cyan-700 underline underline-offset-2 decoration-2 hover:text-cyan-800">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  )
}



