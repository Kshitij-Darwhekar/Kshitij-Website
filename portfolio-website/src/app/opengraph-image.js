import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0f172a',
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(45,212,191,0.25), transparent 45%), radial-gradient(circle at 85% 85%, rgba(139,124,246,0.25), transparent 45%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 40,
            fontWeight: 700,
            color: '#2dd4bf',
            letterSpacing: '-1px',
            marginBottom: 36,
          }}
        >
          <span style={{ color: '#2dd4bf' }}>~/</span>
          <span style={{ color: '#e2e8f0' }}>kshit</span>
          <span style={{ color: '#2dd4bf' }}>_</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 60,
            fontWeight: 700,
            color: '#f1f5f9',
            lineHeight: 1.15,
            marginBottom: 28,
          }}
        >
          <span>Kshitij Darwhekar</span>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 32,
            color: '#94a3b8',
            marginBottom: 44,
          }}
        >
          Automation &amp; AI Engineer
        </div>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {['RPA', 'Agentic AI', 'Automation Anywhere', 'Celonis', 'Python'].map((tag) => (
            <div
              key={tag}
              style={{
                display: 'flex',
                padding: '10px 22px',
                borderRadius: 10,
                border: '1px solid rgba(45,212,191,0.4)',
                color: '#2dd4bf',
                fontSize: 24,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
