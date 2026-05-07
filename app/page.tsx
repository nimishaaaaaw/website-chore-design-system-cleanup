import { getMetadata, siteConfig } from '@/lib/seo'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/layout/BackToTop'
import { JsonLd } from '@/components/seo/JsonLd'

import dynamic from 'next/dynamic'

// Page Components
import { MainHero } from '@/components/pages/home/MainHero'
import { Stats } from '@/components/pages/home/Stats'

const ProblemSection = dynamic(() => import('@/components/pages/home/ProblemSection').then(mod => mod.ProblemSection))
const AdvantageSection = dynamic(() => import('@/components/pages/home/AdvantageSection').then(mod => mod.AdvantageSection))
const FulfillmentEcosystem = dynamic(() => import('@/components/pages/home/FulfillmentEcosystem').then(mod => mod.FulfillmentEcosystem))
const MarqueeSection = dynamic(() => import('@/components/pages/home/MarqueeSection').then(mod => mod.MarqueeSection))
const GetStartedCTA = dynamic(() => import('@/components/pages/home/GetStartedCTA').then(mod => mod.GetStartedCTA))
const HomeFAQ = dynamic(() => import('@/components/pages/home/HomeFAQ').then(mod => mod.HomeFAQ))

import { faqData } from '@/lib/constants'

export const metadata = getMetadata({
  title: 'Hospital Pharmacy Revenue Optimization',
  description: 'MediKloud provides managed in-house pharmacy operations for independent hospitals. We handle staffing, inventory, and HMS to stop revenue leakage.',
  path: '/',
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MediKloud HMS',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  description: 'Free HMS SaaS and fully managed pharmacy operations for independent hospitals.',
  author: {
    '@type': 'Organization',
    name: 'MediKloud',
    url: siteConfig.url,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Note: Organization and WebSite schemas are already included globally in layout.tsx */}
      <JsonLd data={softwareApplicationSchema} id="software-app-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <Header />

      <main id="main" className="relative">
        {/* 1. Hero — Composition Pattern: Text is delivered in Initial HTML */}
        <MainHero>
          <div className="space-y-6 md:space-y-8">
            <h1 className="mb-5 md:mb-8 text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl">
              <span className="display-headline pb-1 mb-1 md:mb-2">
                Building Fully Managed In-House Pharmacies
              </span>
              <span className="display-headline--sub">
                for Independent Hospitals &amp; Clinics
              </span>
            </h1>
            <p className="hero-subtitle w-full max-w-hero-subtitle mx-auto mb-8 md:mb-10">
              MediKloud sets up, staffs, and runs your hospital pharmacy with zero capital investment. You focus on patients — MediKloud HMS turns lost prescriptions into steady revenue.
            </p>
    

            
          </div>
        </MainHero>

        {/* 2. Stats strip */}
        <Stats />

        {/* 3. Problem — Revenue Leakage funnel */}
        <ProblemSection />

        {/* 4. Advantage Section */}
        <AdvantageSection />

        {/* 5. Bridge — Continuous Care */}
        <FulfillmentEcosystem />

        {/* 7. Social proof marquee */}
        <MarqueeSection />
      </main>

      <GetStartedCTA />

      {/* 8. FAQs */}
      <HomeFAQ />

      <Footer />
      <BackToTop />
    </div>
  )
}