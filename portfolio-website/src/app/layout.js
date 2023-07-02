import './globals.css'
import { Inter, Dancing_Script } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] })

export const metadata = {
  title: "Kshitij's Portfolio",
  description: "Explore the diverse creations of a skilled full stack developer. Discover a showcase of innovative web and software projects on my portfolio website. From front-end design to back-end development, witness the power of seamless integration and captivating user experiences. Unleash the potential of technology and witness the artistry of coding. Visit now and embark on a journey through my digital world."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
// 