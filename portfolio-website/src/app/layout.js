import './globals.css'
import { Inter, Dancing_Script } from 'next/font/google'
import metaimg from "../../public/Meta_Image.jpg"


const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] })

export const metadata = {
  title: "Kshitij's Portfolio",
  description: `Kshitij Darwhekar is Full Stack Web Developer , ML Ehtusiast and Generative AI Enthusiast who likes to build beautiful and user friendly websites with React Js and Tailwind Css` ,
  keywords: ["Full Stack Developer", "Web Development", "Software Projects", "Front-end Design", "Machine Learning", "Coding","Generative AI","Artificial Intelligence", "Portfolio", "Kshitij Darwhekar"],
  author: "Kshitij",
  language: "en-US",
  openGraph: {
    title: "Kshitij's Portfolio",
    description: `Kshitij Darwhekar is Full Stack Web Developer , ML Ehtusiast and Generative AI Enthusiast who likes to build beautiful and user friendly websites with React Js and Tailwind Css`,
    image: {metaimg},  // Path to an image for social sharing
    url: "https://kshitijdarwhekar.tech"
  },
  twitterCard: {
    card: "summary_large_image",
    creator: "@KshitijDarwhek1",
    title: "Kshitij's Portfolio",
    description: `Kshitij Darwhekar is Full Stack Web Developer , ML Ehtusiast and Generative AI Enthusiast who likes to build beautiful and user friendly websites with React Js and Tailwind Css`,
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