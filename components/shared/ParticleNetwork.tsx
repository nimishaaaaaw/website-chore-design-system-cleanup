"use client"

import React, { useEffect, useRef } from 'react'
import { v2VisualTokens } from '@/components/theme'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseOpacity: number
  type: 'node' | 'cross' | 'capsule'
  angle: number
  rotSpeed: number
  color: string
}

export function ParticleNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const PARTICLE_COUNT = 30
    const CONNECT_DIST = 90
    const MOUSE_RADIUS = 280

    // Store mouse coordinates
    const mouse = { x: -9999, y: -9999 }

    // Brand color palette (Blue to Teal)
    const COLORS = [
      '37, 99, 235',  // blue-600
      '59, 130, 246', // blue-500
      '99, 102, 241', // indigo-500
      '14, 165, 233', // sky-500
      '16, 185, 129', // emerald-500 (health)
    ]

    const initParticles = (w: number, h: number) => {
      particles = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const rand = Math.random()
        let type: Particle['type'] = 'node'
        if (rand > 0.8) type = 'cross'     // 20% crosses
        else if (rand > 0.5) type = 'capsule' // 30% pills

        // Random color from palette
        const color = COLORS[Math.floor(Math.random() * COLORS.length)]

        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.8, // Slightly faster
          vy: (Math.random() - 0.5) * 0.8,
          size: type === 'node' ? Math.random() * 2 + 2 : Math.random() * 6 + 6, // larger custom shapes
          baseOpacity: Math.random() * 0.4 + 0.3, // Much higher opacity (0.3 to 0.7)
          type,
          angle: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.03,
          color,
        })
      }
    }

    const resizeCanvas = () => {
      // Use offsetWidth to get exact pixel dimensions of the container
      const w = container.offsetWidth
      const h = container.offsetHeight

      // Handle ResizeObserver 0-dimension edge case
      if (w === 0 || h === 0) return

      // Set internal resolution (handle retina displays)
      const dpr = window.devicePixelRatio || 1
      canvas.width = w * dpr
      canvas.height = h * dpr

      // Set CSS display dimensions
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`

      // Scale context to match DPR
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      initParticles(w, h)
    }

    // Initial sizing
    resizeCanvas()

    // Draw frame
    const draw = () => {
      const w = container.offsetWidth
      const h = container.offsetHeight

      if (w === 0 || h === 0) {
        animationFrameId = requestAnimationFrame(draw)
        return
      }

      ctx.clearRect(0, 0, w, h)

      // 1. Draw Network Connections FIRST (so they sit behind particles)
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pA = particles[i]
          const pB = particles[j]
          const dx = pA.x - pB.x
          const dy = pA.y - pB.y
          const distSq = dx * dx + dy * dy
          
          if (distSq < CONNECT_DIST * CONNECT_DIST) {
            const dist = Math.sqrt(distSq)
            const opacity = (1 - (dist / CONNECT_DIST)) * 0.25 // Faint network lines
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})` // Slate-400
            ctx.beginPath()
            ctx.moveTo(pA.x, pA.y)
            ctx.lineTo(pB.x, pB.y)
            ctx.stroke()
          }
        }
      }

      // 2. Update and draw particles
      const centerX = w / 2
      const centerY = h / 2
      const REPEL_RADIUS_X = w * 0.35 // Large horizontal avoidance
      const REPEL_RADIUS_Y = h * 0.45 // Even larger vertical avoidance for long text

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Damping & basic movement
        p.vx *= 0.99
        p.vy *= 0.99
        
        // Return to minimum drift speed
        if (Math.abs(p.vx) < 0.15) p.vx += p.vx > 0 ? 0.02 : -0.02
        if (Math.abs(p.vy) < 0.15) p.vy += p.vy > 0 ? 0.02 : -0.02

        // --- NEW: Central Repulsion (Keep text area clear) ---
        const dxCenter = p.x - centerX
        const dyCenter = p.y - centerY
        // Elliptical distance check
        const normX = dxCenter / REPEL_RADIUS_X
        const normY = dyCenter / REPEL_RADIUS_Y
        const distCenterSq = normX * normX + normY * normY
        
        if (distCenterSq < 1) {
          const distCenter = Math.sqrt(distCenterSq)
          const force = (1 - distCenter) * 0.12 // Subtle outwards push
          p.vx += (dxCenter / (distCenter * REPEL_RADIUS_X || 1)) * force
          p.vy += (dyCenter / (distCenter * REPEL_RADIUS_Y || 1)) * force
        }
        // -----------------------------------------------------

        // Mouse Interaction (Crisper organic push)
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        let hoverOpacityBoost = 0
        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          p.vx += (dx / dist) * force * 0.3
          p.vy += (dy / dist) * force * 0.3
          hoverOpacityBoost = force * 0.4 
        }

        // Apply velocity & rotation
        p.x += p.vx
        p.y += p.vy
        p.angle += p.rotSpeed

        // Smooth screen wrapping
        const pad = 50
        if (p.x < -pad) p.x = w + pad
        if (p.x > w + pad) p.x = -pad
        if (p.y < -pad) p.y = h + pad
        if (p.y > h + pad) p.y = -pad

        // Draw Medical/Health Shapes
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)

        const finalOpacity = Math.min(1, p.baseOpacity + hoverOpacityBoost)
        
        ctx.fillStyle = `rgba(${p.color}, ${finalOpacity})`
        ctx.strokeStyle = `rgba(${p.color}, ${finalOpacity})`

        if (p.type === 'cross') {
          // Sharp medical cross ✚
          const s = p.size * 0.8
          const thick = p.size * 0.4
          ctx.beginPath()
          ctx.rect(-s, -thick/2, s*2, thick)
          ctx.rect(-thick/2, -s, thick, s*2)
          ctx.fill()
        } else if (p.type === 'capsule') {
          // Solid Pill / Capsule shape
          const width = p.size * 2.2
          const height = p.size * 1.1
          ctx.beginPath()
          ctx.roundRect(-width/2, -height/2, width, height, height/2)
          ctx.fill()
        } else {
          // Solid node (Circle)
          ctx.beginPath()
          ctx.arc(0, 0, p.size, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
      }

      // Draw Mouse Cursor Glow (Brighter, wider aura)
      if (mouse.x > 0 && mouse.y > 0 && mouse.x < w && mouse.y < h) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_RADIUS)
        gradient.addColorStop(0, `${v2VisualTokens.colors.particleColor}1F`) // 0.12 opacity
        gradient.addColorStop(0.4, `${v2VisualTokens.colors.particleColor}0F`) // 0.06 opacity
        gradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, MOUSE_RADIUS, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    // Setup pure DOM event listeners
    const handleResize = () => requestAnimationFrame(resizeCanvas)
    
    // Listen to mouse on the section so it tracks anywhere in the hero
    const section = container.closest('section') || container
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const handleMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }

    window.addEventListener('resize', handleResize)
    section.addEventListener('mousemove', handleMouseMove)
    section.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      section.removeEventListener('mousemove', handleMouseMove)
      section.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" 
      style={{ 
        zIndex: 0,
        // Stronger mask: ensuring center zone remains clear for high-contrast text
        WebkitMaskImage: 'radial-gradient(ellipse 35% 65% at center, transparent 15%, black 60%)',
        maskImage: 'radial-gradient(ellipse 35% 65% at center, transparent 15%, black 60%)'
      }} 
      aria-hidden="true"
    >
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full"
      />
    </div>
  )
}
