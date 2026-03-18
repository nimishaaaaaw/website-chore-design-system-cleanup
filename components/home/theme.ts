export const getModernCardTheme = (sectionId: string) => {
  switch (sectionId) {
    case 'clinics': // 1. Internal Losses
      return {
        cardBg: 'bg-slate-50 border border-slate-100',
        headerColor: 'text-slate-900',
        featureCardBg: 'bg-white',
        featureCardBorder: 'border-slate-200',
        iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
        iconShadow: 'shadow-sm shadow-blue-500/20',
        sidebarGradient: 'from-blue-600 to-blue-700'
      }
    case 'mid-hospitals': // 2. Procurement Costs
      return {
        cardBg: 'bg-slate-50 border border-slate-100',
        headerColor: 'text-slate-900',
        featureCardBg: 'bg-white',
        featureCardBorder: 'border-slate-200',
        iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
        iconShadow: 'shadow-sm shadow-indigo-500/20',
        sidebarGradient: 'from-indigo-600 to-indigo-700'
      }
    case 'large-networks': // 3. Prescription Leakage
      return {
        cardBg: 'bg-slate-50 border border-slate-100',
        headerColor: 'text-slate-900',
        featureCardBg: 'bg-white',
        featureCardBorder: 'border-slate-200',
        iconBg: 'bg-gradient-to-br from-sky-500 to-blue-500',
        iconShadow: 'shadow-sm shadow-sky-500/20',
        sidebarGradient: 'from-sky-600 to-blue-600'
      }
    case 'government': // 4. Chronic Refills
      return {
        cardBg: 'bg-slate-50 border border-slate-100',
        headerColor: 'text-slate-900',
        featureCardBg: 'bg-white',
        featureCardBorder: 'border-slate-200',
        iconBg: 'bg-gradient-to-br from-blue-600 to-indigo-700',
        iconShadow: 'shadow-sm shadow-blue-500/20',
        sidebarGradient: 'from-blue-700 to-indigo-800'
      }
    default:
      return {
        cardBg: 'bg-slate-50 border border-slate-100',
        headerColor: 'text-slate-900',
        featureCardBg: 'bg-white',
        featureCardBorder: 'border-slate-200',
        iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
        iconShadow: 'shadow-sm shadow-blue-500/20',
        sidebarGradient: 'from-blue-600 to-blue-700'
      }
  }
}
