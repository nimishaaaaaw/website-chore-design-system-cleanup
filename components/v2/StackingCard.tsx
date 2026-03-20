import Image from 'next/image'
import { CheckCircle, Package, TrendingUp, Zap, Clock, Shield, DollarSign, Truck, FlaskConical, CreditCard, Building2, Eye, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getModernCardTheme } from './theme'

type CardTheme = {
  ctaFrom: string
  ctaTo: string
  aura1: string
  aura2: string
  aura3: string
  imgAura: string
  badgeText: string
  icon: string
  bg: string
}

export type Card = {
  id: number
  title: string
  tag: string
  intro?: string
  bullets?: string[]
  description?: string
  image: string
  cta: string
  chips: string[]
  theme: CardTheme
}

export function StackingCard({ card, index }: { card: Card; index: number }) {
  const themeIds = ['clinics', 'mid-hospitals', 'large-networks', 'government'] as const
  const sectionTheme = getModernCardTheme(themeIds[index % themeIds.length])
  return (
    <div
      className={cn(
        'sticky top-[var(--stack-offset)] min-h-[calc(100vh-var(--stack-offset))] flex justify-center bg-transparent items-start'
      )}
      style={{ zIndex: index + 1 }}
    >
      <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div
          className={cn('relative z-10 w-full max-w-6xl rounded-2xl overflow-hidden bg-white transition-all duration-300 min-h-[28rem]')}
          style={{ transform: `translateY(${index * 12}px)`, willChange: 'transform' }}
        >
          <div
            className={cn(
              'relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start p-4 sm:p-6 md:p-8 lg:p-8 rounded-2xl',
              sectionTheme.cardBg
            )}
          >
            <div className="text-neutral-900 flex flex-col h-full min-h-[24rem] py-2">
              {/* Top Section - Tag and Title */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium bg-white border-gray-200',
                      sectionTheme.headerColor
                    )}
                  >
                    <span className="text-sm leading-none">{card.theme.icon}</span>
                    <span className={`leading-none text-transparent bg-clip-text bg-gradient-to-r ${sectionTheme.sidebarGradient}`}>{card.tag}</span>
                  </span>
                </div>

                <h2 className={`text-xl md:text-2xl font-semibold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${sectionTheme.sidebarGradient}`}>{card.title}</h2>
              </div>

              {/* Middle Section - Description */}
              <div className="mb-2">
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl">
                  {'description' in card && card.description ? card.description : card.intro}
                </p>
              </div>

              {/* Bottom Section - Features */}
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {card.chips.map((chip, i) => {
                    // Get relevant icon based on chip content - ensuring unique icons per card
                    const getChipIcon = (chipText: string, chipIndex: number) => {
                      const text = chipText.toLowerCase();

                      // Card 1: Modern Pharmacies at Hospitals
                      if (card.id === 1) {
                        const icons = [Package, Zap, Truck, TrendingUp];
                        return icons[chipIndex] || CheckCircle;
                      }

                      // Card 2: Hospital Management Software
                      if (card.id === 2) {
                        const icons = [Building2, Clock, Shield, Eye];
                        return icons[chipIndex] || CheckCircle;
                      }

                      // Card 3: Virtual Pharmacy & Lab
                      if (card.id === 3) {
                        const icons = [Clock, FlaskConical, Building2, DollarSign];
                        return icons[chipIndex] || CheckCircle;
                      }

                      // Card 4: Smart Kiosks for Faster Service
                      if (card.id === 4) {
                        const icons = [CreditCard, Heart, Shield, Zap];
                        return icons[chipIndex] || CheckCircle;
                      }

                      // Fallback logic for any other cards
                      if (text.includes('stockout') || text.includes('expiry') || text.includes('inventory')) return Package;
                      if (text.includes('tracking') || text.includes('real-time')) return Zap;
                      if (text.includes('delivery') || text.includes('pickup')) return Truck;
                      if (text.includes('profit') || text.includes('margin') || text.includes('revenue')) return TrendingUp;
                      if (text.includes('lab') || text.includes('sample')) return FlaskConical;
                      if (text.includes('check-in') || text.includes('payment')) return CreditCard;
                      if (text.includes('insurance') || text.includes('loan')) return Shield;
                      if (text.includes('system') || text.includes('control')) return Building2;
                      if (text.includes('care') || text.includes('patient')) return Heart;
                      if (text.includes('instant') || text.includes('fast') || text.includes('10-min')) return Clock;
                      if (text.includes('visibility') || text.includes('reports')) return Eye;
                      if (text.includes('cost') || text.includes('operating')) return DollarSign;
                      if (text.includes('hassle') || text.includes('support')) return Zap;
                      if (text.includes('loyalty') || text.includes('program')) return CreditCard;

                      return CheckCircle; // Default icon
                    };

                    const IconComponent = getChipIcon(chip, i);

                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 px-2.5 py-1 text-neutral-800 text-xs"
                      >
                        <IconComponent className={cn('h-3.5 w-3.5', sectionTheme.headerColor)} />
                        <span className="font-medium leading-none">{chip}</span>
                      </span>
                    );
                  })}
                </div>

                {/* CTA Button - Commented out
                <a
                  href="#contact"
                  className={cn(
                    'group inline-flex items-center gap-2 font-semibold text-white px-4 py-2 rounded-full shadow-sm bg-gradient-to-r transition-transform duration-200 hover:-translate-y-0.5',
                    sectionTheme.sidebarGradient
                  )}
                >
                  <span className="text-base leading-tight">{card.cta}</span>
                </a>
                */}
              </div>
            </div>

            <div className="w-full">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[3/2]">
                <Image
                  src={card.image || '/placeholder.svg?height=640&width=960&query=healthcare%20visual'}
                  alt={`${card.title} visual`}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="relative z-[1] object-cover"
                  priority={index === 0}
                />
                {/* Mobile pill nav guard to prevent overlap */}
                <div className="block md:hidden absolute -bottom-6 left-0 right-0 h-10 pointer-events-none bg-gradient-to-b from-transparent to-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



