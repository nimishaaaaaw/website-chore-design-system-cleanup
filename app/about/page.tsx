import { getMetadata, getBreadcrumbSchema } from '@/lib/seo'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackToTop } from '@/components/layout/BackToTop'
import { JsonLd } from '@/components/seo/JsonLd'

// About Sections
import { AboutHero } from '@/components/pages/about/AboutHero'
import { OriginStory } from '@/components/pages/about/OriginStory'
import { UrgencySection } from '@/components/pages/about/UrgencySection'
import { VisionMission } from '@/components/pages/about/VisionMission'
import { TeamSection } from '@/components/pages/about/TeamSection'
import { AboutCTA } from '@/components/pages/about/AboutCTA'

export const metadata = getMetadata({
  title: 'About MediKloud | India\'s First Tech-Driven Managed Pharmacy Operator',
  description: 'Learn how MediKloud was founded to solve revenue leakage in Indian hospitals. We partner with clinics and hospitals to run their pharmacy operations with zero capex.',
  path: '/about',
})

export default function AboutPage() {
  const breadcrumbData = getBreadcrumbSchema([
    { name: 'Home', item: '/' },
    { name: 'About', item: '/about' },
  ]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <JsonLd id="ld-breadcrumb" data={breadcrumbData} />
      
      <Header />

      <main id="main">
        {/* 1. Hero — Composition Pattern */}
        <AboutHero>
          <div className="space-y-6 md:space-y-8">
            <h1 className="mb-20 text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl">
              <span
                className="block font-bold leading-[1.1] tracking-tighter bg-gradient-display bg-clip-text text-transparent pb-3 mb-4 md:mb-8"
                style={{ color: '#4F46E5' }}
              >
                Elevating hospitals & clinics in India with tech & Ops infrastructure
              </span>
              <span className="block text-h2 sm:text-h1 font-bold leading-[1.1] tracking-tight text-slate-700">
                so patients become the true beneficiaries
              </span>
            </h1>
            <p className="hero-subtitle max-w-[800px] mx-auto">
              We provide the managed operations and tech that allow independent providers to bypass the supply chain struggle and focus entirely on healing their patients.
            </p>
          </div>
        </AboutHero>

        {/* 2. Origin Story — Personal Narrative */}
        <OriginStory />

        {/* 3. The Compounding Crisis — Urgency */}
        <UrgencySection />

        {/* 4. Vision & Mission — Foundation */}
        <VisionMission />

        {/* 5. Team — The Builders */}
        <TeamSection />
      </main>

      <AboutCTA />

      <Footer />
      <BackToTop />
    </div>
  );
}
