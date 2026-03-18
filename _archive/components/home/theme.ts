export const getModernCardTheme = (sectionId: string) => {
  switch (sectionId) {
    case 'clinics':
      return {
        cardBg: 'bg-gradient-to-br from-cyan-100/90 via-blue-100/80 to-indigo-100/90',
        headerColor: 'text-cyan-800',
        featureCardBg: 'bg-white/90',
        featureCardBorder: 'border-cyan-200/60',
        iconBg: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500',
        iconShadow: 'shadow-cyan-500/30',
        sidebarGradient: 'from-cyan-600 to-blue-600'
      }
    case 'mid-hospitals':
      return {
        cardBg: 'bg-gradient-to-br from-violet-100/90 via-purple-100/80 to-fuchsia-100/90',
        headerColor: 'text-violet-800',
        featureCardBg: 'bg-white/90',
        featureCardBorder: 'border-violet-200/60',
        iconBg: 'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500',
        iconShadow: 'shadow-violet-500/30',
        sidebarGradient: 'from-violet-600 to-purple-600'
      }
    case 'large-networks':
      return {
        cardBg: 'bg-gradient-to-br from-teal-100/90 via-emerald-100/80 to-green-100/90',
        headerColor: 'text-teal-800',
        featureCardBg: 'bg-white/90',
        featureCardBorder: 'border-teal-200/60',
        iconBg: 'bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500',
        iconShadow: 'shadow-teal-500/30',
        sidebarGradient: 'from-teal-600 to-emerald-600'
      }
    case 'government':
      return {
        cardBg: 'bg-gradient-to-br from-orange-100/90 via-amber-100/80 to-yellow-100/90',
        headerColor: 'text-orange-800',
        featureCardBg: 'bg-white/90',
        featureCardBorder: 'border-orange-200/60',
        iconBg: 'bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500',
        iconShadow: 'shadow-orange-500/30',
        sidebarGradient: 'from-orange-600 to-amber-600'
      }
    default:
      return {
        cardBg: 'bg-gradient-to-br from-slate-100/90 via-gray-100/80 to-zinc-100/90',
        headerColor: 'text-slate-800',
        featureCardBg: 'bg-white/90',
        featureCardBorder: 'border-slate-200/60',
        iconBg: 'bg-gradient-to-br from-slate-500 via-gray-500 to-zinc-500',
        iconShadow: 'shadow-slate-500/30',
        sidebarGradient: 'from-slate-600 to-gray-600'
      }
  }
}



