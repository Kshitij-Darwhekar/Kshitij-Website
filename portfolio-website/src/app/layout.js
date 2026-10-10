import './globals.css'
import { Inter } from 'next/font/google'
import metaimg from "../../public/Meta_Image.jpg"

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  themeColor: '#0f172a',
}

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}else if(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})();`

const description = "Kshitij Darwhekar is an Automation & AI-focused engineer at IBM, building RPA automations, agentic AI workflows, and intelligent automation on top of Automation Anywhere 360 — with hands-on experience in Celonis process mining, Python-based AI agents, and SAP automation at enterprise scale."

export const metadata = {
  metadataBase: new URL("https://kshitijdarwhekar.com"),
  title: " Kshitij's Portfolio ",
  description,
  keywords: ["Kshitij Darwhekar", "RPA", "Robotic Process Automation", "Automation Anywhere", "Agentic AI", "AI Agents", "Generative AI", "Celonis", "Process Mining", "Intelligent Automation", "Python", "SAP Automation", "IBM", "Portfolio"],
  authors: [{ name: "Kshitij Darwhekar" }],
  openGraph: {
    title: " Kshitij's Portfolio ",
    description,
    url: "https://kshitijdarwhekar.com",
    images: [{ url: metaimg.src, width: metaimg.width, height: metaimg.height, alt: "Kshitij Darwhekar" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@KshitijDarwhekr",
    title: "Kshitij's Portfolio",
    description,
    images: [metaimg.src],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
// 