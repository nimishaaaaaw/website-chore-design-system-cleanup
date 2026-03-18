'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { sendGAEvent } from '@next/third-parties/google'

export function WebVitals() {
    useReportWebVitals((metric) => {
        // Manually send Web Vitals to GA4 as custom events
        // This allows you to see LCP, FID, CLS in your events reports
        if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
            sendGAEvent('event', metric.name, {
                value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value), // Google recommends integers
                event_label: metric.id, // Unique ID for the metric
                non_interaction: true, // Avoid affecting bounce rate
            })
        }
    })

    return null
}
