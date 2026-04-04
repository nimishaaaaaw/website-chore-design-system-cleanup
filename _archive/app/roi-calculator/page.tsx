"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ROICalculatorRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to the ROI section on the V2 page
    router.push('/v2#roi')
  }, [router])

  return null
}
