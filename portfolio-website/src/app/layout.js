import './globals.css'
import { Inter, Dancing_Script } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] })

export const metadata = {
  title: "Kshitij's Portfolio",
  description: "I am Kshitij Darwhekar a student in MITAOE. I am a full stack developer and ML enthusiast with a degree in Electronics and Telecommunication engineering. I am passionate about leveraging my expertise in both front-end and back-end technologies to create innovative solutions. With a deep understanding of machine learning algorithms and data analysis, I strive to develop intelligent systems that make a tangible impact." ,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
// 