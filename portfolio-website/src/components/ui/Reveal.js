'use client'

import { useInView } from '@/hooks/useInView'

export default function Reveal({ children, className = '' }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
    >
      {children}
    </div>
  )
}
