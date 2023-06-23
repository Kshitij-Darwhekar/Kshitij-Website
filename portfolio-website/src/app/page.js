"use client";

import React from 'react';
import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube,AiFillGithub} from 'react-icons/ai';
import kshitij from '../../public/Kshitij.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import web5 from '../../public/web5.png';
import web6 from '../../public/web6.png';
import { useState } from 'react';
// import Skills from './skills';
import Link from 'next/link';
// import Resume from '../../public/Final_Resume_Kshitij.pdf';


import {BiLogoReact,BiLogoJava,BiLogoPython,BiLogoJavascript,BiLogoAngular,BiLogoNodejs, BiLogoSpringBoot,BiLogoMongodb,BiLogoCss3} from 'react-icons/bi'
import{SiApachemaven,SiExpress,SiNumpy,SiPandas,SiMysql,SiHtml5} from 'react-icons/si'

const imgStyle = {
  layout: 'fill',
  objectFit: 'cover',
}

const portfolioStyle = {
  layout: 'responsive',
}

const handleSubmit = (e) => {
  // e.preventDefault();
  // const name = e.target.name.value;
  // const email = e.target.email.value;
  // const message = e.target.message.value;
  // console.log(name, email, message);
  // e.target.reset();
}

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-950'>
          <section className=' min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between dark:text-white"'>
              <h1 className='text-xl font-burtons dark:text-white'>Hi, I'm Kshitij</h1>
              <ul className='flex items-center'>
                <li> <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-gray-200' /> </li>
                <li> <button className='bg-gradient-to-r from-cyan-700 to-cyan-500 px-6 py-2 text-white  rounded-sm ml-8'>Resume </button>   </li>
                {/* <a  className='bg-gradient-to-r from-cyan-700 to-cyan-500 px-4 py-2 text-white  rounded-sm ml-8 '></a> */}
              </ul>
            </nav>
          
            <div className='text-center p-10 '>
              <h2 className='text-5xl py-10 text-teal-600 font-medium dark:text-gradient-to-r from-cyan-700 to-cyan-500 md:text-6xl'>Kshitij Darwhekar</h2>
              <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>Developer and ML Enthusiast</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200
              md:text-xl max-w-xl mx-auto'>
                I am a 3rd year student at IIT Kharagpur. I am interested in Web Development and Machine Learning. I am currently working on a project to detect and classify skin diseases using Deep Learning. 
              </p>
              <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
                <a href='https://twitter.com/KshitijDarwhek1'><AiFillTwitterCircle /></a>
                <a href='https://www.linkedin.com/in/kshitij-darwhekar-b15a33191/'><AiFillLinkedin /></a>
                <a href='https://youtube.com/@kshitijdarwhekar'><AiFillYoutube /></a>
                <a href='https://github.com/Kshitij-Darwhekar'><AiFillGithub /></a>
              </div>
              <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
                <Image src={kshitij} style={imgStyle}  />
              </div>
            </div>
          </section>

          {/* Skills */}

          <div>
            <h1 className='text-5xl py-3 text-black dark:text-gray-200'> My Skills</h1>
          </div>
          <div className='text-center p-10 rounded-xl my-10   '>

            <h2 className='text-3xl p-7 dark:text-gray-200'>Languages</h2>
            <div className='flex flex-wrap justify-evenly'>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoPython className='w-52 h-52 text-cyan-500'/>Python</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoJavascript className='w-52 h-52 text-cyan-500'/>Java script</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoJava className='w-52 h-52 text-cyan-500'/> Java</div>
            </div>
 

            <h2 className='text-3xl p-10 my-13 dark:text-gray-200 '>Front End</h2>
            <div className='flex flex-wrap justify-evenly'>
              <div className='p-2 text-xl dark:text-gray-200 '><BiLogoAngular className='w-52 h-52 text-cyan-500' />Angular</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoReact className='w-52 h-52 text-cyan-500'/>React</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiHtml5 className='w-52 h-52 text-cyan-500 pb-5'/>HTML</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoCss3 className='w-52 h-52 text-cyan-500'/>CSS</div>
            </div>

            <h2 className='text-3xl p-7 dark:text-gray-200'>Back End</h2>
            <div className='flex flex-wrap justify-evenly'>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoSpringBoot className='w-52 h-52 text-cyan-500'/> Spring Boot</div>
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoNodejs className='w-52 h-52 text-cyan-500'/>Node Js</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiExpress className='w-52 h-52 text-cyan-500 p-5'/> Express Js</div>
            </div>


            <h2 className='text-3xl p-7 dark:text-gray-200'>Databases</h2>
            <div className='flex flex-wrap justify-evenly'> 
              <div className='p-2 text-xl dark:text-gray-200'><BiLogoMongodb className='w-52 h-52 text-cyan-500'/>MongoDB</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiMysql className='w-52 h-52 text-cyan-500'/>MySQL</div>
              
            </div>
            
            
            <h2 className='text-3xl p-7 dark:text-gray-200'>Other Technologies</h2>
            <div className='flex flex-wrap justify-evenly'>
              <div className='p-2 text-xl dark:text-gray-200'><SiApachemaven className='w-52 h-52 text-cyan-500 p-5'/>Maven</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiNumpy className='w-52 h-52 text-cyan-500 p-5'/>Numpy</div>
              <div className='p-2 text-xl dark:text-gray-200'><SiPandas className='w-52 h-52 text-cyan-500 p-5'/> Pandas</div>
            </div>

          </div>
          



         
          {/* 2nd Section here */}

          <section >
            <div>
              <h3 className='text-5xl py-3 mb-6 dark:text-white'>Services I Offer</h3>
              <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Lorem ipsum <span className='text-teal-500'>dolor sit amet </span> consectetur adipisicing elit. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.

              </p>
              <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Lorem ipsum <span className='text-teal-500'>dolor sit amet </span> consectetur adipisicing elit. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.

              </p>
              
            </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
                <div className='flex justify-center flex-col items-center '>
                  <Image src={design} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                  <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                  <h4 className='py-4 text-cyan-500 dark:text-gray-300'>Design tools I Use</h4>
                  <p className='text=grey-800 py-1'>Photoshop</p>
                  <p className='text=grey-800 py-1'>Figma</p>
                  <p className='text=grey-800 py-1'>Adobe XD</p>

                </div>
              </div>

            
              <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
                <div className='flex justify-center flex-col items-center '>
                  <Image src={code} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                  <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                  <h4 className='py-4 text-cyan-500 dark:text-gray-300'>Design tools I Use</h4>
                  <p className='text=grey-800 py-1'>Photoshop</p>
                  <p className='text=grey-800 py-1'>Figma</p>
                  <p className='text=grey-800 py-1'>Adobe XD</p>
                </div>
              </div>
            
              

              <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
                <div className='flex justify-center flex-col items-center '>
                  <Image src={consulting} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                  <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                  <h4 className='py-4 text-cyan-500 dark:text-gray-300'>Design tools I Use</h4>
                  <p className='text=grey-800 py-1'>Photoshop</p>
                  <p className='text=grey-800 py-1'>Figma</p>
                  <p className='text=grey-800 py-1'>Adobe XD</p>

                </div>
              </div>
            </div>
          </section>

          <section className='py-10'>
            <div>
              <h3 className='text-5xl py-2 mb-6 dark:text-white'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Lorem ipsum <span className='text-teal-500'>dolor sit amet </span> consectetur adipisicing elit. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>
              <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Lorem ipsum <span className='text-teal-500'>dolor sit amet </span> consectetur adipisicing elit. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
              </p>
            </div>
            
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1 '><Image src={web1} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle}/></div>
              <div className='basis-1/3 flex-1 '><Image src={web2} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle}/></div>
              <div className='basis-1/3 flex-1 '><Image src={web3} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle}/></div>
              <div className='basis-1/3 flex-1 '><Image src={web4} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle}/></div>
              <div className='basis-1/3 flex-1 '><Image src={web5} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle}/></div>
              <div className='basis-1/3 flex-1 '><Image src={web6} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle}/></div>
            </div>

          </section>

          <section className='py-10'>
            <form>
              <h1 className='text-4xl dark:text-gray-200 py-5'>Contact Me</h1>
              <label htmlFor='name' className='dark:text-gray-200'>Name</label>
              <input type='text' id='name' className='border-2 border-gray-300 p-2 rounded-lg w-full dark:bg-gradient-to-b from-cyan-700 to-cyan-500 dark:text-gray-200'/>
              <label htmlFor='email' className='dark:text-gray-200'>Email</label>
              <input type='email' id='email' className='border-2 border-gray-300 p-2 rounded-lg w-full dark:bg-gradient-to-b from-cyan-700 to-cyan-500 dark:text-gray-200'/>
              <label htmlFor='message' className='dark:text-gray-200'>Message</label>
              <textarea name='message' id='message' cols='30' rows='10' className='border-2 border-gray-300 p-2 py-4 rounded-lg w-full dark:bg-gradient-to-b from-cyan-700 to-cyan-500 dark:text-gray-200 '></textarea>
              <button onClick={handleSubmit} className='bg-gradient-to-r from-cyan-700 to-cyan-500  text-white px-4 py-2 rounded-lg'>Submit</button>
            </form>
          </section>
        
        </main>
    </div>
    
  )
}
