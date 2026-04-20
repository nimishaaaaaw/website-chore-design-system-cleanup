import { getMetadata, siteConfig } from '@/lib/seo'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/layout/BackToTop'
import { JsonLd } from '@/components/seo/JsonLd'

// Page Components
import { MainHero } from '@/components/pages/home/MainHero'
import { Stats } from '@/components/pages/home/Stats'
import { ProblemSection } from '@/components/pages/home/ProblemSection'
import { FulfillmentEcosystem } from '@/components/pages/home/FulfillmentEcosystem'
import { AdvantageSection } from '@/components/pages/home/AdvantageSection'
import { HomeFAQ } from '@/components/pages/home/HomeFAQ'
import { MarqueeSection } from '@/components/pages/home/MarqueeSection'
import { GetStartedCTA } from '@/components/pages/home/GetStartedCTA'

import { faqData } from '@/lib/constants'

export const metadata = getMetadata({
  title: 'Hospital Pharmacy Revenue Optimization & Managed Operations',
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
              <span
                className="block font-bold leading-[1.1] tracking-tighter bg-gradient-display bg-clip-text text-transparent pb-3 mb-2 md:mb-4"
                style={{ color: '#4F46E5' }}
              >
                Building Fully Managed In-House Pharmacies
              </span>
              <span className="block text-h2 sm:text-h1 font-bold leading-[1.1] tracking-tight text-slate-700">
                for Independent Hospitals &amp; Clinics
              </span>
            </h1>
            <p className="hero-subtitle max-w-[800px] mx-auto mb-8 md:mb-10">
              We set up, staff, and run your hospital pharmacy with zero capital investment. You focus on patients — we turn lost prescriptions into steady revenue.
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
