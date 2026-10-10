'use client'

import { useEffect, useRef } from 'react'

export default function CursorTorch() {
  const ref = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointerFine = window.matchMedia('(pointer: fine)').matches
    const el = ref.current
    if (!el || reduced || !pointerFine) return

    const handleMove = (e) => {
      el.style.setProperty('--mx', `${e.clientX}px`)
      el.style.setProperty('--my', `${e.clientY}px`)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    el.classList.add('cursor-torch-active')

    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return <div ref={ref} className="cursor-torch" aria-hidden="true" />
}
