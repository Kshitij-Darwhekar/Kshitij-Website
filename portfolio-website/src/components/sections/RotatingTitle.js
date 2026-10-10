'use client'

import Typewriter from 'typewriter-effect'

export default function RotatingTitle() {
  return (
    <Typewriter
      options={{
        strings: [
          'RPA at Enterprise Scale',
          'Python-Based AI Automation',
          'Agentic AI & AI Agents',
          'Process Mining with Celonis',
        ],
        autoStart: true,
        loop: true,
        delay: 90,
        skipAddStyles: true,
        deleteSpeed: 50,
        pauseFor: 1000,
      }}
    />
  )
}
