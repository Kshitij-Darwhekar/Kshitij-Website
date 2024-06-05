"use client";

import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useForm } from '@formspree/react';
import { Analytics } from '@vercel/analytics/react';
import { useState } from 'react';
import { useRef } from 'react';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube,AiFillGithub,AiFillMediumSquare,AiFillMail} from 'react-icons/ai';
import {BiLogoReact,BiLogoJava,BiLogoPython,BiLogoNodejs, BiLogoSpringBoot,BiLogoMongodb,BiLogoCss3,BiLogoTailwindCss, BiLogoBootstrap, BiLogoHtml5} from 'react-icons/bi'
import {SiApachemaven,SiNumpy,SiPandas,SiMysql} from 'react-icons/si'

import kshitij from '../../public/Kshitij_2.png';
import pizza from '../../public/pizza1.png';
import Traffic from '../../public/Traffic.png';
import FlySmart from '../../public/FlySmart2.png';
import portfolio from '../../public/Portfolio1.png';




const portfolioStyle = {
  layout: 'responsive',
  hover: 'opacity-75',
  
}


export default function Home() {

  const [darkMode, setDarkMode] = useState(true);
  const [state, handleSubmit] = useForm('mrgwzblg');
  const [hover, setHover] = useState(false); // initial false
  
  const onHover = (e) => {
    e.preventDefault();
    setHover(true); // turn true
    console.log("hovered");
  };
  
  const onHoverOver = (e) => {
    e.preventDefault(); // turn false
    setHover(false);
  };

  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  if (state.succeeded) {
  
    return <p className='text-5xl text-cyan-500 justify-center items-center flex py-50'>Submitted Successfully</p>;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
        <main className='bg-white dark:bg-gray-950 scroll-smooth'>
          <section className=' min-h-screen'>
            <nav className='p-10 mb-12 flex justify-between dark:text-white'>
              <h1 className='text-xl font-dancing hover:text-cyan-500 dark:text-white '> <a href='#' className='hover:text-cyan-500'> Hi, I'm Kshitij</a>  </h1>
              <nav className='hidden lg:block md:block'>
                <ul className='flex items-center justify-center flex-row px-2 lg:gap-4 md:gap-4' >
                  <button onClick={() => {aboutRef.current?.scrollIntoView({behavior:'smooth'})}} className='hover:text-cyan-500 text-lg'> About</button>
                  <button onClick={() => {skillsRef.current?.scrollIntoView({behavior: 'smooth'})} } className='hover:text-cyan-500 text-lg'> Skills </button>
                  <button onClick={() => {projectRef.current?.scrollIntoView({behavior: 'smooth'})}} className='hover:text-cyan-500 text-lg'> Portfolio</button>
                  <button onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth' })} } className='hover:text-cyan-500 text-lg'> Contact </button>
                </ul>
              </nav>
              

              
              <ul className='flex items-center justify-end'>
                <li><span className='hover:text-cyan-500 dark:hover:text-cyan-500'> <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-gray-200' /></span> </li>
                <li> <a
                    href="https://drive.google.com/file/d/1SdDB0Xt4q9rrInaFspWdUGcc-_tmMUSZ/view?usp=sharing"
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"> 
                      <button className='bg-gradient-to-r from-cyan-700 to-cyan-500 hover:bg-gradient-to-l from-cyan-700 to from-cyan-500 px-6 py-2 text-white rounded-md ml-8'>Resume </button> </a></li>
              </ul>
              
            </nav>

          
            {/* About */}

            <div className='text-center p-10 ' id='about' ref={aboutRef}>
              <h2 className='text-5xl py-10 text-teal-600 font-medium dark:text-gradient-to-r from-cyan-700 to-cyan-500 md:text-6xl'> 
              
              <Typewriter
                options={{
                  strings: [
                    "Hi I'm Kshitij Darwhekar"
                ],
                  autoStart: true,
                  loop: true,
                  delay: 90, 
                  skipAddStyles: true,
                  deleteSpeed: 50,
                  pauseFor: 1000,
                }} 
              />
              </h2>
               
              <h3 className='text-3xl py-2 dark:text-white md:text-3xl'>Full Stack Developer and ML Enthusiast</h3>
              <p className='text-lg py-5 text-center leading-8 text-gray-800 dark:text-gray-200 md:text-xl max-w-10xl mx-auto'>
               I'm a full stack developer and ML enthusiast with a degree in Electronics and Telecommunication engineering. 
               I'm passionate about leveraging my expertise in both front-end and back-end technologies to create innovative solutions. 
               With a deep understanding of machine learning algorithms and data analysis, I strive to develop intelligent systems that make a tangible impact. 
               Let's connect and embark on an exciting journey together in the realm of technology and innovation!
              </p>
              
              <div className='py-4 text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 '>
                <a href='https://twitter.com/KshitijDarwhek1' className='hover:text-cyan-500'><AiFillTwitterCircle /></a>
                <a href='https://www.linkedin.com/in/kshitij-darwhekar-b15a33191/ '  className='hover:text-cyan-500'><AiFillLinkedin /></a>
                <a href='https://youtube.com/@kshitijdarwhekar'  className='hover:text-cyan-500'><AiFillYoutube /></a>
                <a href='https://github.com/Kshitij-Darwhekar'  className='hover:text-cyan-500'><AiFillGithub /></a>
                <a href='https://medium.com/@kshitijdarwhekar'  className='hover:text-cyan-500'><AiFillMediumSquare/></a>
                <a href='mailto:kshitijdarwhekar@gmail.com'  className='hover:text-cyan-500'><AiFillMail /></a>
              </div>
              <div className='flex items-center justify-center text-center mx-auto overflow-hidden'>
                <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-20 overflow-hidden md:h-96 md:w-96 lg:w-96 lg:h-96'>
                  <Image  src={kshitij} fill={false} />
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}

          <div id='skills' ref={skillsRef} className='p-10'>
              <div>
                <h1 className='text-5xl py-3 text-black dark:text-gray-200'> My Skills</h1>
              </div>
              <div className='text-center p-10 rounded-xl my-10 ss'>

                <h2 className='text-3xl p-7 dark:text-gray-200 md:text-4xl lg:text-5xl'>Languages</h2>
                <div className='flex flex-wrap justify-evenly'>
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoPython className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48' />Python</div>
                  {/* <div className='p-2 text-xl dark:text-gray-200'><BiLogoJavascript className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Java script</div> */}
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoJava className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/> Java</div>
                </div>
    

                <h2 className='text-3xl p-7 dark:text-gray-200 md:text-4xl lg:text-5xl'>Front End</h2>
                <div className='flex flex-wrap justify-evenly'>
                  {/* <div className='p-2 text-xl dark:text-gray-200 '><BiLogoAngular className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48' />Angular</div> */}
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoReact className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>React</div>
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoHtml5 className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>HTML</div>
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoCss3 className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>CSS</div>
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoTailwindCss className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Tailwind CSS</div>
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoBootstrap className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Bootstrap</div>
                </div>

                <h2 className='text-3xl p-7 dark:text-gray-200 md:text-4xl lg:text-5xl'>Back End</h2>
                <div className='flex flex-wrap justify-evenly'>
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoSpringBoot className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/> Spring Boot</div>
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoNodejs className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Node Js</div>
                  {/* <div className='p-2 text-xl dark:text-gray-200'><SiExpress className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/> Express Js</div> */}
                </div>


                <h2 className='text-3xl p-7 dark:text-gray-200 md:text-4xl lg:text-5xl'>Databases</h2>
                <div className='flex flex-wrap justify-evenly'> 
                  <div className='p-2 text-xl dark:text-gray-200'><BiLogoMongodb className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>MongoDB</div>
                  <div className='p-2 text-xl dark:text-gray-200'><SiMysql className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>MySQL</div>
                  
                </div>
                
                
                <h2 className='text-3xl p-7 dark:text-gray-200 md:text-4xl lg:text-5xl'>Other Technologies</h2>
                <div className='flex flex-wrap justify-evenly'>
                  <div className='p-2 text-xl dark:text-gray-200'><SiApachemaven className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/>Maven</div>
                  <div className='p-2 text-xl dark:text-gray-200'><SiNumpy className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/>Numpy</div>
                  <div className='p-2 text-xl dark:text-gray-200'><SiPandas className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/> Pandas</div>
                </div>

              </div>
              
          </div>


  {/* Projects */}

          <section className='p-10' id='projects' ref={projectRef}>
            <div>
              <h3 className='text-5xl py-2 mb-6 dark:text-white'>Portfolio</h3>
              <p className='text-lg py-2 leading-8 text-grey-800 dark:text-gray-200 text-justify'>
              My portfolio is a collection of diverse work samples that reflect my expertise and experience in <span className='text-cyan-500'> Full Stack development and Machine Learning </span> . 
              It includes a range of projects, such as <span className='text-cyan-500'> Pizzeria-react-app , FlySmart , Medical Insurance Premium prediction , Intelligent Traffic Managment System, Portfolio Website </span>  
              each demonstrating my creativity, problem-solving abilities, and professional growth.
              </p>
              <p className='text-lg py-2 leading-8 text-grey-800 dark:text-gray-200 mx-auto text-justify'>
              Through my portfolio, I aim to present the quality of my work and provide potential employers, clients, or collaborators 
              with a comprehensive understanding of my capabilities. 
              It not only highlights my past achievements but also offers insights into my thought process, 
              approach to projects, and overall professional development. By exploring my portfolio, 
              you will gain a deeper understanding of my skills and be able to assess my suitability for your specific needs.
              </p>
            </div>
            
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

              <div className='basis-1/3 flex-1 relative'>
                  {hover &&(
                    <p className='absolute inset-0 flex items-center justify-center text-white '>
                      Click to Chekout Github Repo
                    </p> )}
                <a href='https://github.com/Kshitij-Darwhekar/pizzeria-react-app' className='relative opacity-100 hover:opacity-50 transition-opacity duration-150'>
                  <Image src={pizza} className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300' width={'100%'} height={'100%'} style={portfolioStyle} title='Click to Checkout code on Github' onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)}/>
                </a>
              </div>
              <div className='basis-1/3 flex-1 relative'>
                  {hover &&(
                    <p className='absolute inset-0 flex items-center justify-center text-white '>
                      Click to Chekout Github Repo
                    </p> )}
                <a href='https://github.com/Kshitij-Darwhekar/kshitijdarwhekar.io' className='relative opacity-100 hover:opacity-50 transition-opacity duration-150'>
                  <Image src={portfolio} className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300' width={'100%'} height={'100%'} style={portfolioStyle} title='Click to Checkout code on Github' onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)}/>
                </a>
              </div>
              <div className='basis-1/3 flex-1 relative'>
                  {hover &&(
                    <p className='absolute inset-0 flex items-center justify-center text-white '>
                      Click to Checkout Github Repo
                    </p> )}
                <a href='https://github.com/WebDesgns/Flight-Management-System' className='relative opacity-100 hover:opacity-50 transition-opacity duration-150'>
                  <Image src={FlySmart} className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300' width={'100%'} height={'100%'} style={portfolioStyle} title='Click to Checkout Code on Github' onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)}/>
                </a>
              </div>
              <div className='basis-1/3 flex-1 relative'>
                {hover &&(
                    <p className='absolute inset-0 flex items-center justify-center text-white '>
                      Click to Checkout Github Repo
                    </p> )}
                <a href='https://github.com/Kshitij-Darwhekar/Intelligent-Traffic-Managment-System-Using-Computer-Vision' className='relative opacity-100 hover:opacity-50 transition-opacity duration-150'>
                  <Image src={Traffic} className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300' width={'100%'} height={'100%'} style={portfolioStyle} title='Click to Checkout code on Github' onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)}/>
                </a> 
              </div>
            </div>
      </section>

{/* Contact Me Form */}

        <section className='p-10' id='contact' ref={contactRef}>
          <h1 className='text-5xl dark:text-gray-200 py-5'>Contact Me</h1>
            <form onSubmit={handleSubmit} className='p-3'>
              <label htmlFor='name' className='dark:text-gray-200 '>Name</label>
              <input type='text' id='name' className='my-2 border-2 border-cyan-500 p-2 rounded-lg w-full dark:border-cyan-500 dark:bg-black dark:text-gray-200'/>
              <label htmlFor='email' className='dark:text-gray-200 '>Email</label>
              <input type='email' id='email' className='my-2 border-2 border-cyan-500 p-2 rounded-lg w-full dark:border-cyan-500 dark:bg-black dark:text-gray-200 '/>
              <label htmlFor='message' className='dark:text-gray-200 '>Message</label>
              <textarea name='message' id='message' cols='30' rows='10' className='my-2 border-2 border-cyan-500  p-2 py-4 rounded-lg w-full dark:border-cyan-500 dark:bg-black dark:text-gray-200 '></textarea>
              <button disabled={state.submitting} className='bg-gradient-to-r from-cyan-700 to-cyan-500 my-2 text-white px-4 py-2 rounded-lg'>Submit</button>
            </form>  
        </section>
      </main>
      <Analytics/>
    </div>
    
  )
}
