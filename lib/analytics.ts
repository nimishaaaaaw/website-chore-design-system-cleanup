import { sendGAEvent } from '@next/third-parties/google'

export function trackEvent(action: string, category: string, label?: string, value?: number) {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
        sendGAEvent('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}
