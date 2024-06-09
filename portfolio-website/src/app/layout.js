import './globals.css'
import { Inter, Dancing_Script } from 'next/font/google'
import Image from 'next/image'
import kshitij from '../../public/Kshitij_2.png';

const inter = Inter({ subsets: ['latin'] })
const dancingScript = Dancing_Script({ subsets: ['latin'] })

export const metadata = {
  title: "Kshitij's Portfolio",
  description: `Kshitij Darwhekar is Full Stack Web Developer , ML Ehtusiast and Generative AI Enthusiast
  who likes to build beautiful and user friendly websites with React Js and Tailwind Css` ,
  keywords: ["Full Stack Developer", "Web Development", "Software Projects", "Front-end Design", "Machine Learning", "Coding","Generative AI","Artificial IINtelligence", "Portfolio", "Kshitij Darwhekar"],
  author: "Kshitij",
  language: "en-IN",
  openGraph: {
    title: "Kshitij's Portfolio",
    description: `Kshitij Darwhekar is Full Stack Web Developer , ML Ehtusiast and Generative AI Enthusiast
    who likes to build beautiful and user friendly websites with React Js and Tailwind Css`,
    image: "../../public/Meta_Image.png",  // Path to an image for social sharing
    url: "https://kshitijdarwhekar.tech"
  },
  twitterCard: {
    card: "summary_large_image",
    creator: "@KshitijDarwhek1",
    title: "Kshitij's Portfolio",
    description: `Kshitij Darwhekar is Full Stack Web Developer , ML Ehtusiast and Generative AI Enthusiast
    who likes to build beautiful and user friendly websites with React Js and Tailwind Css`,
    image: "../../public/Meta_Image.png"  // Path to an image for Twitter sharing
  }
            
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <meta property="twitter:image" content="Twitter link preview image URL"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
      </head> */}
      <body className={inter.className}>{children}</body>
      

      
    </html>
  )
}
// 