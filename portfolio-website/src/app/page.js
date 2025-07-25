"use client";


import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { useForm, ValidationError } from '@formspree/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from '@next/third-parties/google'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube,AiFillGithub,AiFillMediumSquare,AiFillMail,AiOutlineCoffee} from 'react-icons/ai';
import {BiSolidCoffeeTogo ,BiLogoReact,BiLogoJava,BiLogoPython,BiLogoNodejs, BiLogoSpringBoot,BiLogoMongodb,BiLogoCss3,BiLogoTailwindCss, BiLogoBootstrap, BiLogoHtml5, BiLogoPostgresql} from 'react-icons/bi'
import {SiApachemaven,SiNumpy,SiPandas,SiMysql, SiDocker, SiSqlite,SiApachespark,SiApacheairflow,SiApachehive,SiApachekafka,SiBuymeacoffee} from 'react-icons/si'
import { TbBrandSnowflake } from "react-icons/tb";

import kshitij from '../../public/Kshitij_Formal.jpg';
import pizza from '../../public/pizza1.png';
import Traffic from '../../public/Traffic.png';
import FlySmart from '../../public/FlySmart2.png';
import portfolio from '../../public/Portfolio1.png';
import radplants from '../../public/radplants.png'
import lifeorganics from "../../public/Life_Organics.png"


const portfolioStyle = {
  layout: 'responsive',
  hover: 'opacity-75',
  
}

export const viewport = {
  themeColor: '#0f172a',
}


export default function Home() {

  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const [darkMode, setDarkMode] = useState(true);
  const [state, handleSubmit] = useForm(`${formspreeEndpoint}`);
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

  // Custom handleSubmit to include honeypot check
  const customHandleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);

    // Check honeypot field
    if (data.get('website')) {
      // Honeypot field is filled, so it's a bot submission
      return;
    }

    handleSubmit(event);
  };



  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  const imagePaths = [

    '/Kshitij_Formal.jpg',
    // '/Kshitij_Ghibli.png',
    // '/Kshitij_2.png',
    // '/Kshitij.png',

  ];
    
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    setSelectedImage(imagePaths[randomIndex]);
  }, []);

  if (!selectedImage) return null;
  

  if (state.succeeded) {
  
    return <p className='text-2xl text-teal-500 justify-center items-center flex py-50 md:text-5xl lg:text-5xl'> Submitted Successfully </p>;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
        <main className='bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-slate-400 scroll-smooth antialiased leading-relaxed font-poppins selection:bg-teal-500 selection:text-teal-700'>
          <section className=' min-h-screen'>
            <nav className='p-10 mb-12 flex justify-between dark:text-slate-400'>
              <h1 className='text-xl py-4 font-dancing hover:text-teal-500 dark:text-slate-400 '> <a href='https://mr.wikipedia.org/wiki/%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%A4%E0%A4%BF%E0%A4%9C' className='hover:text-teal-500'> Hi, I'm Kshitij</a>  </h1>
              <nav className='hidden lg:block md:block'>
                
                <ul className='flex items-center justify-center flex-row px-2 py-4 lg:gap-4 lg:py-4 md:gap-4 md:py-4' >
                  <button onClick={() => {aboutRef.current?.scrollIntoView({behavior:'smooth'})}} className='hover:text-teal-500 text-lg'> About</button>
                  <button onClick={() => {experienceRef.current?.scrollIntoView({behavior: 'smooth' })} } className='hover:text-teal-500 text-lg'> Experience </button>
                  <button onClick={() => {skillsRef.current?.scrollIntoView({behavior: 'smooth'})} } className='hover:text-teal-500 text-lg'> Skills </button>
                  <button onClick={() => {projectRef.current?.scrollIntoView({behavior: 'smooth'})}} className='hover:text-teal-500 text-lg'> Portfolio</button>
                  <button onClick={() => {contactRef.current?.scrollIntoView({behavior: 'smooth' })} } className='hover:text-teal-500 text-lg'> Contact </button>
                </ul>
               
              </nav>
              <ul className='flex items-center justify-end'>
                <li><span className=''> <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer mr-5 text-2xl dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-500' /></span> </li>
                <li> 
                  <a
                    href="https://drive.google.com/file/d/1SdDB0Xt4q9rrInaFspWdUGcc-_tmMUSZ/view?usp=sharing" // https://drive.google.com/file/d/1SdDB0Xt4q9rrInaFspWdUGcc-_tmMUSZ/view?usp=sharing
                    alt="alt text"
                    target="_blank"
                    rel="noopener noreferrer"> 
                      {/* <button className='bg-gradient-to-r from-teal-700 to-teal-500 hover:bg-gradient-to-l px-6 py-2 dark:text-slate-200 rounded-md ml-8'> Resume </button>  */}
                      <div className=' pt-1'>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 mx-4 overflow-hidden text-sm font-medium text-slate-900 rounded-lg group bg-gradient-to-br from-teal-700 to-teal-500 group-hover:from-teal-500 group-hover:to-teal-500 hover:text-slate-200 dark:text-slate-200 focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:text-slate-200 bg-slate-200 dark:bg-slate-900 rounded-md group-hover:bg-opacity-0">
                              Resume
                            </span>
                        </button>
                      </div>   
                    </a>
                </li>
              </ul>
            </nav>


            {/* Landing Page */}

            <div className='text-center p-10 '>
              <div className='flex flex-col items-center justify-center gap-y-5'>
                <h2 className='text-6xl text-slate-900 font-medium dark:text-slate-400 md:text-7xl lg:text-8xl text-center'>Hi I'm <span className='text-teal-500 dark:text-teal-500'>Kshitij</span> <span className='text-teal-500 dark:text-teal-500 p-4 md:p-0 lg:p-0'>Darwhekar</span> </h2>
                <h2 className='text-3xl py-5 px-3 text-teal-500/75 font-medium dark:text-teal-500/75 md:text-5xl lg:text-5xl text-center'> 
                <Typewriter
                  options={{
                    strings: [
                      
                      " Application Developer",
                      " Machine Learning Practitioner",
                      " Gen AI Enthusiast",
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
              </div>


              {/* <h3 className='text-3xl py-2 dark:text-white md:text-3xl'>Full Stack Developer and ML Enthusiast</h3> */}
              <p className='text-lg py-5 font-burton text-center leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto'>

                Hey there! I'm an <span className='text-teal-500'>Application Developer @ IBM</span> with a passion for <span className='text-teal-500'>Machine Learning </span> 
                and a growing interest in <br/> <span className='text-teal-500'>Generative AI</span> and <span className='text-teal-500'>Large Language Models (LLMs)</span>.<br/>
                Explore my <span className='text-teal-500'><a href='https://github.com/Kshitij-Darwhekar' className='hover:text-teal-700'>projects</a></span> to see what I’ve been building, and don’t 
                forget to check out my tech blogs on <span className='text-teal-500'><a href='https://medium.com/@kshitijdarwhekar' className='hover:text-teal-700'>Medium</a></span> 
                <br/>— where I share insights, experiments, and ideas from my journey in the world of <span className='text-teal-500'>AI</span> and <span className='text-teal-500'>innovation</span>!


                {/* Hey! I'm a <span className='text-teal-500'>Application Developer @ IBM</span> with a passion for <span className='text-teal-500'>Machine Learning</span><br/>
                and a keen interest in <span className='text-teal-500'>Generative AI </span> and <span className='text-teal-500'>LLMs.</span> <br/>
                Take a look around to see my projects and dive into my world of tech innovation!  Don't forget to read my blogs on Medium.com<br/> */}
              </p>
              
              <div className='py-4 mb-40 text-5xl flex justify-center flex-row items-center text-gray-600 dark:text-gray-400 md:flex md:gap-10 lg:flex lg:gap-10 '>
                <a href='https://x.com/KshitijDarwhekr' className='hover:text-teal-500'><AiFillTwitterCircle /></a>
                <a href='https://www.linkedin.com/in/kshitij-darwhekar'  className='hover:text-teal-500'><AiFillLinkedin /></a>
                {/* <a href='https://youtube.com/@kshitijdarwhekar'  className='hover:text-teal-500'><AiFillYoutube /></a> */}
                <a href='https://github.com/Kshitij-Darwhekar'  className='hover:text-teal-500'><AiFillGithub /></a>
                <a href='https://medium.com/@kshitijdarwhekar'  className='hover:text-teal-500'><AiFillMediumSquare/></a>
                <a href='mailto:kshitijdarwhekar@gmail.com'  className='hover:text-teal-500'><AiFillMail /></a>
                {/* <a href='https://www.buymeacoffee.com/kshitijdarwhekar'  className='hover:text-teal-500'><AiFillBuyMeACoffee /></a> */}
              </div>


              {/* About Me Section */}

              <div className='text-center' id='about' ref={aboutRef}>

                <div className='flex items-center justify-center text-center mx-auto overflow-hidden'>
                  <div className='relative mt-4 mb-4 mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 overflow-hidden md:h-96 md:w-96 lg:w-96 lg:h-96'>
                    <Image  
                      src={selectedImage} 
                      fill={false} 
                      alt='Kshitij Image' 
                      layout='fill'
                      style={{ objectFit: 'cover' }}
                      objectPosition='top center'
                      priority
                    />
                  </div>
                </div>

                  <h2 className='text-5xl py-3 text-black dark:text-slate-400'>About Me</h2>

                  <p className='text-lg py-4 text-justify leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto'>
                    Back in high school, after finishing my 12th grade and looking for something to do during a long summer break, 
                    I decided to try my hand at building a website. That project sparked a passion for web development that has only grown 
                    stronger over the years. Fast forward to Today, I take pride in developing web solutions that are not only visually 
                    appealing but also highly functional and user-friendly.
                  </p>

                  <p className='text-lg py-4  text-justify leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto'>
                    These days, I'm really diving deep into <span> Machine Learning </span> , <span> Artificial Intelligence </span>, and 
                    <span> Generative AI. </span>
                    It's like unlocking a whole new world of possibilities! I'm fascinated by how these technologies can predict outcomes, 
                    understand languages, and even create new content out of thin air. It's not just about coding anymore; 
                    it's about understanding the magic behind the algorithms and using them to create cool stuff.
                  </p>

                  {/* <p className='text-lg py-4 text-justify leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto'>
                    My fascination with technology doesn't stop at web development. I've always been captivated by Machine Learning and 
                    Artificial Intelligence. It all started with a simple curiosity about predicting the outcome of a Sunday game, but it 
                    quickly evolved into a deeper interest in how data and insights can be used to make accurate predictions and drive innovation.
                    Generative AI, in particular, intrigues me – the idea that a machine can learn and generate new content is nothing short of 
                    magical.
                  </p>  */}

                  <p className='text-lg py-4 text-justify leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto'>
                    When I’m not geeking out over tech stuff, you can usually find me playing or watching cricket, which is my favourite way 
                    to unwind. I also love listening to music, which keeps me inspired and energised.
                  </p>

                  <p className='text-lg py-4 text-justify leading-8 text-gray-800 dark:text-slate-400 md:text-xl max-w-10xl mx-auto'>
                  Thanks for stopping by to learn a bit about me. Let's connect and create something amazing together!
                  </p>
              </div>

            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className='p-10' ref={experienceRef}>
            <h2 className='text-5xl py-3 text-black dark:text-slate-400'>Experience</h2>
            <div className='mt-6'>
              <div className='mb-4'>
              <h3 className='text-xl font-semibold text-teal-500 dark:text-teal-500 md:text-2xl lg:text-2xl'>Application Developer</h3>
              <h3 className='text-md font-semibold py-1 md:text-lg lg:text-lg'><a className='text-slate-500 hover:text-teal-400 focus-visible:text-teal-500 dark:text-slate-400 dark:hover:text-teal-500' href='https://www.linkedin.com/company/ibm/posts/?feedView=all'>IBM India Pvt Ltd</a><span className='text-gray-800 dark:text-slate-400'> (Dec-24 to ) </span></h3>
                <div className='text-md text-gray-800 dark:text-slate-400 p-4 md:text-lg lg:text-lg'>
                <ul style={{ listStyleType: 'disc' }} className='text-lg text-gray-800 dark:text-slate-400'>
                  {/* <li className='py-1'>1.7 Year of experience as <span className='text-teal-500'>Application Developer</span>, focusing on building and deploying automation solutions to enhance process efficiency.</li>
                  <li className='py-1'>Involved in designing and <span className='text-teal-500'>optimizing bots</span>  to streamline repetitive tasks and <span className='text-teal-500'>improve workflows</span>.  </li>
                  <li className='py-1'>Hands-on experience with <span className='text-teal-500'>Robotic Process Automation (RPA)</span> tools, particularly <span className='text-teal-500'>Automation Anywhere</span> , to streamline processes and enhance operational efficiency.</li> */}

                  <li className='py-1'>Working as an <span className='text-teal-500'>Application Developer</span> with 1.7 years of experience in <span className='text-teal-500'>Robotic Process Automation (RPA)</span>, primarily using <span className='text-teal-500'>Automation Anywhere</span>.</li>
                  <li className='py-1'>Responsible for <span className='text-teal-500'>monitoring and supporting</span> production bots, <span className='text-teal-500'>identifying and resolving</span> issues to ensure smooth automation operations.</li>
                  <li className='py-1'>Develop new bots based on user requirements and <span className='text-teal-500'>implement change requests </span> to enhance existing automation solutions.</li>
                 </ul>
                </div>
              </div>
              {/*  */}
              <div className='mb-4'>
                <h3 className='text-xl font-semibold text-teal-500 dark:text-teal-500 md:text-2xl lg:text-2xl'>IOT & Robotics Intern</h3>
                <h3 className='text-md font-semibold py-1 md:text-lg lg:text-lg'><a className='text-slate-400 hover:text-teal-500 focus-visible:text-teal-500 dark:text-slate-400 dark:hover:text-teal-500' href='https://www.linkedin.com/company/phn-technology/posts/?feedView=all'>PHN Technology Pvt Ltd</a><span className='text-gray-800 dark:text-slate-400'> (Feb-23 to Jul-23) </span></h3>
                {/* <h3 className='text-lg font-semibold text-slate-500 dark:text-slate-500 py-1'>(Feb-2023 to Jul-2023)</h3> */}
                <div className='text-md text-gray-800 dark:text-slate-400 p-4 md:text-lg lg:text-lg'>
                 <ul style={{ listStyleType: 'disc' }} className='text-lg text-gray-800 dark:text-slate-400'>
                  <li className='py-1'>Conducted in-depth research and development for a product, focusing on integrating <span className='text-teal-500'>IoT and robotics</span>  technologies to enhance functionality and user experience.</li>
                  <li className='py-1'>Assisted in organizing a company-wide hackathon, contributing to event planning, technical support, and fostering innovation among participants.</li>
                  <li className='py-1'>Explored and evaluated emerging IoT and robotics technologies to provide actionable insights for potential new product development initiatives.</li>
                 </ul>
                </div>
              </div>
            </div>
          </section>


          {/* Skills */}

          <div id='skills' ref={skillsRef} className='p-10'>
              <div>
                <h1 className='text-5xl py-3 text-black dark:text-slate-400'> My Skills</h1>
              </div>
              <div className='text-center p-10 rounded-xl my-10 ss'>

                <h2 className='text-3xl p-7 dark:text-slate-400 md:text-4xl lg:text-5xl'>Languages</h2>
                <div className='flex flex-wrap justify-evenly'>
                  <div className='p-2 text-xl dark:text-slate-400'><BiLogoPython className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48' />Python</div>
                  {/* <div className='p-2 text-xl dark:text-gray-200'><BiLogoJavascript className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Java script</div> */}
                  <div className='p-2 text-xl dark:text-slate-400'><BiLogoJava className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/> Java</div>
                </div>
    

                <h2 className='text-3xl p-7 dark:text-slate-400 md:text-4xl lg:text-5xl'>Front End</h2>
                <div className='flex flex-wrap justify-evenly'>
                  {/* <div className='p-2 text-xl dark:text-gray-200 '><BiLogoAngular className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48' />Angular</div> */}
                  <div className='p-2 m-2 text-xl dark:text-slate-400'><BiLogoReact className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>React</div>
                  <div className='p-2 m-2 text-xl dark:text-slate-400'><BiLogoHtml5 className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>HTML</div>
                  <div className='p-2 m-2 text-xl dark:text-slate-400'><BiLogoCss3 className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>CSS</div>
                  <div className='p-2 m-2 text-xl dark:text-slate-400'><BiLogoTailwindCss className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Tailwind CSS</div>
                  <div className='p-2 m-2 text-xl dark:text-slate-400'><BiLogoBootstrap className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Bootstrap</div>
                </div>

                <h2 className='text-3xl p-7 dark:text-slate-400 md:text-4xl lg:text-5xl'>Back End</h2>
                <div className='flex flex-wrap justify-evenly'>
                  <div className='p-2 text-xl dark:text-slate-400'><BiLogoSpringBoot className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/> Spring Boot</div>
                  <div className='p-2 text-xl dark:text-slate-400'><BiLogoNodejs className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Node Js</div>
                  {/* <div className='p-2 text-xl dark:text-gray-200'><SiExpress className='w-40 h-40 text-cyan-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/> Express Js</div> */}
                </div>


                <h2 className='text-3xl p-7 dark:text-slate-400 md:text-4xl lg:text-5xl'>Databases</h2>
                <div className='flex flex-wrap justify-evenly'> 
                  <div className='p-2 text-xl dark:text-slate-400'><BiLogoMongodb className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>MongoDB</div>
                  <div className='p-2 text-xl dark:text-slate-400'><SiMysql className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>MySQL</div>
                  <div className='p-2 text-xl dark:text-slate-400'><SiSqlite className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Sqlite</div>
                  {/* <div className='p-2 text-xl dark:text-slate-400'><BiLogoPostgresql className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>PostgreSQL</div> */}
                  {/* <div className='p-2 text-xl dark:text-slate-400'><TbBrandSnowflake className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48'/>Snowflake</div> */}
                </div>
                
                
                <h2 className='text-3xl p-7 dark:text-slate-400 md:text-4xl lg:text-5xl'>Other Technologies</h2>
                <div className='flex flex-wrap justify-evenly'>
                  {/* <div className='p-2 text-xl dark:text-slate-400'><SiApacheairflow className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/>Apache Airflow</div>
                  <div className='p-2 text-xl dark:text-slate-400'><SiApachekafka className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/>Apache Kafka</div>
                  <div className='p-2 text-xl dark:text-slate-400'><SiApachespark className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/>Apache Spark</div> */}
                  <div className='p-2 m-2 text-xl dark:text-slate-400'><SiApachemaven className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/>Maven</div>
                  <div className='p-2 m-2 text-xl dark:text-slate-400'><SiNumpy className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/>Numpy</div>
                  <div className='p-2 m-2 text-xl dark:text-slate-400'><SiPandas className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/> Pandas</div>
                  <div className='p-2 m-2 text-xl dark:text-slate-400'><SiDocker className='w-40 h-40 text-teal-500 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-5'/> Docker</div>
                </div>

              </div>
              
          </div>


  {/* Projects */}

        <section className='p-10' id='projects' ref={projectRef}>
            <div>
              <h3 className='text-5xl py-2 mb-6 dark:text-slate-400'>Portfolio</h3>
              <p className='text-lg py-2 leading-8 text-grey-800 dark:text-slate-400 text-justify'>
                My portfolio is a collection of diverse work samples that reflect my expertise and experience in <span className='text-teal-500 hover:text-teal-700 focus-visible:text-teal-500 dark:text-teal-500 dark:hover:text-teal-700'> Full Stack development</span> 
                <span className='text-slate-800 dark:text-slate-400'> and </span> 
                <span className='text-teal-500 hover:text-teal-700 focus-visible:text-teal-500 dark:text-teal-500 dark:hover:text-teal-700'>  Machine Learning </span> . 
                It includes a range of projects, such as 
                <a className='text-teal-500 hover:text-teal-700 focus-visible:text-teal-500 dark:text-teal-500 dark:hover:text-teal-700' href='https://github.com/Kshitij-Darwhekar/pizzeria-react-app'> Pizzeria-react-app</a> , 
                <a className='text-teal-500 hover:text-teal-700 focus-visible:text-teal-500 dark:text-teal-500 dark:hover:text-teal-700' href='https://github.com/WebDesgns/Flight-Management-System'> FlySmart </a>  ,  
                <a className='text-teal-500 hover:text-teal-700 focus-visible:text-teal-500 dark:text-teal-500 dark:hover:text-teal-700' href='https://github.com/Kshitij-Darwhekar/Medical-Insurance-Premium-Prediction.git'> Medical Insurance Premium prediction </a>  ,  
                <a className='text-teal-500 hover:text-teal-700 focus-visible:text-teal-500 dark:text-teal-500 dark:hover:text-teal-700' href='https://github.com/Kshitij-Darwhekar/Intelligent-Traffic-Managment-System-Using-Computer-Vision'> Intelligent Traffic Management System </a> ,  
                <a className='text-teal-500 hover:text-teal-700 focus-visible:text-teal-500 dark:text-teal-500 dark:hover:text-teal-700' href='https://github.com/Kshitij-Darwhekar/kshitijdarwhekar.io'> Portfolio Website </a>
                <a className='text-teal
                -500 hover:text-teal-700 focus-visible:text-teal-500 dark:text-teal-500 dark:hover:text-teal-700' href='https://github.com/Kshitij-Darwhekar/Disease_Outbreak_Prediction.git'> Disease Outbreak Prediction </a>
                 each demonstrating my creativity, problem-solving abilities, and professional growth.
              </p>
              <p className='text-lg py-2 leading-8 text-grey-800 dark:text-slate-400 mx-auto text-justify'>
                Through my portfolio, I aim to present the quality of my work and provide potential employers, clients, or collaborators 
                with a comprehensive understanding of my capabilities. 
                It not only highlights my past achievements but also offers insights into my thought process, 
                approach to projects, and overall professional development. By exploring my portfolio, 
                you will gain a deeper understanding of my skills and be able to assess my suitability for your specific needs.
              </p>
            </div>
            
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

              <div className='basis-1/3 flex-1 relative'>
                  <h2 className='text-xl text-slate-800 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl'><a href='https://github.com/Kshitij-Darwhekar/pizzeria-react-app'>Pizzeria React App</a></h2>
                  {hover &&(
                    <p className='absolute inset-0 flex items-center justify-center text-slate-400 '>
                      Click to Chekout Github Repo
                    </p> )}
                <a href='https://github.com/Kshitij-Darwhekar/pizzeria-react-app' className='relative opacity-100 hover:bg-teal-700 transition-opacity duration-150'>
                  <Image src={pizza} className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300' width={'100%'} height={'100%'} style={portfolioStyle} title='Pizzeria React App' alt="Screenshot of Pizzeria Website" onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)}/>
                </a>
              </div>
              <div className='basis-1/3 flex-1 relative'>
              <h2 className='text-xl text-slate-800 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl'><a href='https://github.com/Kshitij-Darwhekar/kshitijdarwhekar.io'>Portfolio Website</a></h2>
                  {hover &&(
                    <p className='absolute inset-0 flex items-center justify-center text-slate-400 '>
                      Click to Chekout Github Repo
                    </p>
                    
                  )}
                <a href='https://github.com/Kshitij-Darwhekar/kshitijdarwhekar.io' className='relative opacity-100 hover:bg-teal-700 transition-opacity duration-150'>
                  <Image src={portfolio} className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300' width={'100%'} height={'100%'} style={portfolioStyle} title='Poertfolio Website HTML , CSS and JS' alt="Screenshot of Portfolio Website" onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)}/>
                </a>
              </div>
              <div className='basis-1/3 flex-1 relative'>
              <h2 className='text-xl text-slate-800 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl'><a href='https://github.com/WebDesgns/Flight-Management-System'>FlySmart: Flight Ticket Booking System</a></h2>
                  {hover &&(
                    <p className='absolute inset-0 flex items-center justify-center text-slate-400 '>
                      Click to Checkout Github Repo
                    </p> )}
                <a href='https://github.com/WebDesgns/Flight-Management-System' className='relative opacity-100 hover:bg-teal-700 transition-opacity duration-150'>
                  <Image src={FlySmart} className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300' width={'100%'} height={'100%'} style={portfolioStyle} title='FlySmart: Flight Ticket Booking Website' alt="Screenshot of Flight Ticket Boking Website" onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)}/>
                </a>
              </div>
              <div className='basis-1/3 flex-1 relative'>
              <h2 className='text-xl text-slate-800 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl'><a href='https://github.com/Kshitij-Darwhekar/Intelligent-Traffic-Managment-System-Using-Computer-Vision'>Intelligent Traffic Management Systems using CV</a></h2>
                {hover &&(
                    <p className='absolute inset-0 flex items-center justify-center text-slate-400 '>
                      Click to Checkout Github Repo
                    </p> )}
                <a href='https://github.com/Kshitij-Darwhekar/Intelligent-Traffic-Managment-System-Using-Computer-Vision' className='relative opacity-100 hover:bg-teal-700 transition-opacity duration-150'>
                  <Image src={Traffic} className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300' width={'100%'} height={'100%'} style={portfolioStyle} title='Intelligent Traffic Managment System using Computer Vision' alt="Screenshot of Intelligent Traffic Management Project UI" onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)}/>
                </a> 
              </div>
              <div className='basis-1/3 flex-1 relative'>
                <h2 className='text-xl text-slate-800 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl'><a href='https://github.com/Kshitij-Darwhekar/E-Commerce-Website'>Radpants: E-commerce Website</a></h2>
                {hover &&(
                    <p className='absolute inset-0 flex items-center justify-center text-slate-400 '>
                      Click to Checkout Github Repo
                    </p> )}
                <a href='https://github.com/Kshitij-Darwhekar/E-Commerce-Website' className='relative opacity-100 hover:bg-teal-700 transition-opacity duration-150'>
                  <Image src={radplants} className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300' width={'100%'} height={'110%'} style={portfolioStyle} title='E-Commerce Website' alt="Screenshot of E-commerce Website (radplants)" onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)}/>
                </a> 
              </div>
              <div className='basis-1/3 flex-1 relative'>
                <h2 className='text-xl text-slate-800 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-500 py-4 md:text-2xl lg:text-2xl'><a href='https://github.com/Kshitij-Darwhekar/Life_Organics_Final'>Life Organics: E-Commerce Website</a></h2>
                {hover &&(
                    <p className='absolute inset-0 flex items-center justify-center text-slate-400 '>
                      Click to Checkout Github Repo
                    </p> )}
                <a href='https://github.com/Kshitij-Darwhekar/Life_Organics_Final' className='relative opacity-100 hover:bg-teal-700 transition-opacity duration-150 '>
                  <Image src={lifeorganics} className='rounded-lg object-cover hover:opacity-50 transition-opacity duration-300' width={'100%'} height={'100%'} style={portfolioStyle} title='Life Organics : E-commeerce Website' alt="Screenshot of E-commerce Website (Life Organics)" onMouseEnter={(e) => onHover(e)} onMouseLeave={(e) => onHoverOver(e)}/>
                </a> 
              </div>
            </div>
        </section>

{/* Contact Me Form */}

        <section className='px-10' id='contact' ref={contactRef}>
          <h1 className='text-5xl dark:text-slate-400 py-5'>Contact Me</h1>
            <form onSubmit={customHandleSubmit} className='p-3'>
              <label htmlFor='name' className='dark:text-slate-400 '>Name</label>
              <input type='name' id='name' name='name' required className='my-2 border-2 border-teal-500 p-2 rounded-lg w-full bg-slate-200 caret-teal-500 dark:border-teal-500 dark:bg-slate-900 dark:text-slate-200' />
              <label htmlFor='email' className='dark:text-slate-400 '>Email</label>
              <input type='email' id='email' name='email' required className='my-2 border-2 border-teal-500 p-2 rounded-lg w-full bg-slate-200 caret-teal-500 dark:border-teal-500 dark:bg-slate-900 dark:text-slate-200 '/>
              <ValidationError prefix="Email" field="email" errors={state.errors}/>
              <label htmlFor='message' className='dark:text-slate-400 '>Message</label>
              <textarea name='message' id='message' cols='30' rows='10' className='my-2 border-2 border-teal-500 p-2 py-4 rounded-lg w-full bg-slate-200 caret-teal-500 dark:border-teal-500 dark:bg-slate-900 dark:text-slate-200 '></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors}/>

              {/* Honeypot field */}
              <label htmlFor='website' className='hidden'>Website</label>
              <input type='text' id='website' name='website' className='hidden' style={{ display: 'none' }} />


              {/* <button type='submit' disabled={state.submitting} className='bg-gradient-to-r from-teal-700 to-teal-500 my-2 hover:bg-gradient-to-l text-slate-200 px-4 py-2 rounded-lg'>Submit</button> */}
              <button type='submit' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-700 to-teal-500 group-hover:from-cyan-500 group-hover:to-cyan-500 hover:text-slate-200 dark:text-slate-200 focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800">
                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 dark:text-slate-200 bg-slate-200 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                     Submit
                  </span>
              </button>
            </form>  
        </section>

{/* Footer */}
        
        <hr className=' border-slate-600'/>
        <div className='flex items-center justify-center flex-row '>
          <footer className='max-w-md pb-0 text-sm text-center text-slate-600 md:pb-3 lg:pb-3'>
            
              <p className='p-2'>
                Inspired by multiple web dev portfolio's , Coded in 
                <a href='https://code.visualstudio.com/' className='font-medium text-slate-400 hover:text-teal-500'> Visual Studio Code </a> by yours truly  , Built using 
                <a href='https://nextjs.org/' className='font-medium text-slate-400 hover:text-teal-500'> Next.js </a>  and 
                <a href='https://tailwindcss.com/' className='font-medium text-slate-400 hover:text-teal-500'> Tailwind CSS </a> , Hosted on a
                <a href='https://aws.amazon.com/what-is/vps/' className='font-medium text-slate-400 hover:text-teal-500'> Personal VPS. </a> Checkout the Repo on 
                <a href='https://github.com/Kshitij-Darwhekar/Kshitij-Website' className='font-medium text-slate-400 hover:text-teal-500'> Github. </a> 
              </p>
              
          </footer>
        </div>
      </main>
      <Analytics/>
      <SpeedInsights />
      <GoogleAnalytics gaId={gaId} />
  
    </div>
    
  )
}
