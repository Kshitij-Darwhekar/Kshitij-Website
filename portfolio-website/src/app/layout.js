import './globals.css'
import { Inter, Dancing_Script } from 'next/font/google'
import metaimg from "../../public/Meta_Image.jpg"


const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] })

export const metadata = {
  title: " Kshitij's Portfolio ",
  description: `Kshitij Darwhekar is a skilled Celonis Data Engineer with a passion for data-driven insights, specializing in process mining, automation, and delivering impactful solutions to optimize business performance.` ,
  keywords: ["Kshitij Darwhekar","Celonis","Data Engineer","Process Mining","Process Mining Consultant","Full Stack Developer", "Web Development", "Software Projects", "Front-end Design", "Machine Learning", "Coding","Generative AI","Artificial Intelligence", "Portfolio","Skills"],
  author: "Kshitij",
  language: "en-US",
  openGraph: {
    title: " Kshitij's Portfolio ",
    description: `Kshitij Darwhekar is a skilled Celonis Data Engineer with a passion for data-driven insights, specializing in process mining, automation, and delivering impactful solutions to optimize business performance.`,
    image: {metaimg},  // Path to an image for social sharing
    url: "https://kshitijdarwhekar.com"
  },
  twitterCard: {
    card: "summary_large_image",
    creator: "@KshitijDarwhekr",
    title: "Kshitij's Portfolio",
    description: `Kshitij Darwhekar is a skilled Celonis Data Engineer with a passion for data-driven insights, specializing in process mining, automation, and delivering impactful solutions to optimize business performance.`,
    image: {metaimg}  // Path to an image for Twitter sharing
  }
            
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
// 