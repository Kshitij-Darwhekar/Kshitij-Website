"use client";

import React from 'react';
import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube,AiFillGithub} from 'react-icons/ai';
import kshitij from '../../public/Kshitij.png';
import design from '../../public/design.png';
import code from '../../public/code.png';
import consulting from '../../public/consulting.png';
import pizza from '../../public/pizza1.png';
import Traffic from '../../public/Traffic.png';
import FlySmart from '../../public/FlySmart2.png';
import portfolio from '../../public/Portfolio1.png';


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
              <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>Full Stack Developer and ML Enthusiast</h3>
              <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200
              md:text-xl max-w-10xl mx-auto'>
               I am a full stack developer with experience in Angular, React, JavaScript, Java, Spring Boot, MongoDB, Express, Node.js, Python, data science, machine learning, and deep learning. 
               I have a strong background in Electronics and Telecommunication Engineering, enabling me to build robust web applications and analyze large datasets using Python-based data science techniques.
               I am passionate about leveraging my diverse skill set to contribute to organizations in improving decision-making processes and developing data-driven solutions.
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
              <p className='text-2xl py-2 leading-8 text-grey-800 dark:text-gray-200'>
                
                  As a full stack developer with expertise in Angular, React, JavaScript, Spring Boot, MongoDB, Express, Node.js, Python, Data Science, Machine Learning, and 
                  Deep Learning, I offer the following services:

              </p>
              
                <ul className='text-lg py-2 leading-8 text-grey-800 dark:text-gray-200 text-justify list-disc ml-9 '>
                  <li className='my-4'> <span className='text-cyan-500'>Full Stack Web Development  </span> : I can design and develop responsive web applications using modern frameworks like Angular and React, backed by efficient server-side implementations using Spring Boot, Express, and Node.js.</li>
                  <li className='my-4'> <span className='text-cyan-500'>Data Analysis and Extraction  </span> : With my knowledge in Python, data science, and machine learning, I can assist businesses in extracting meaningful insights from large datasets, performing exploratory data analysis, and developing predictive models. </li>
                  <li className='my-4'> <span className='text-cyan-500'>Database Design and Implementation  </span>: I can design and implement efficient database solutions using MongoDB, ensuring data integrity and scalability for web applications and data-driven systems</li>
                  <li className='my-4'> <span className='text-cyan-500'>API Development  </span>: I have experience in building RESTful APIs using frameworks like Express and Spring Boot, enabling seamless communication between front-end and back-end systems.</li>
                  <li className='my-4'>  <span className='text-cyan-500'>Technical Consulting  </span> : I can provide technical guidance and consulting services, helping businesses make informed decisions regarding technology stack selection, architecture design, and best practices for software development projects.</li>
                  <li className='my-4'>  <span className='text-cyan-500'>Continuous Improvement and Optimization  </span> : I am dedicated to continuously improving the performance and scalability of applications, optimizing code, and staying updated with the latest industry trends and best practices.</li>
                </ul>
              
            </div>
            <div className='lg:flex gap-10'>
              <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
                <div className='flex justify-center flex-col items-center '>
                  <Image src={design} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Full Stack Web Development</h3>
                  <p className='py-2'>Front-end and back-end development, covering the complete technology stack from user interface to server-side logic and database management. </p>
                  <h4 className='py-4 text-cyan-500 dark:text-gray-300'>Technologies I Use</h4>
                  <p className='text=grey-800 py-1'>React</p>
                  <p className='text=grey-800 py-1'>Spring Boot</p>
                  <p className='text=grey-800 py-1'>MongoDB</p>
                  <p className='text=grey-800 py-1'>Express Js</p>
                  <p className='text=grey-800 py-1'>Node Js</p>

                </div>
              </div>

            
              <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
                <div className='flex justify-center flex-col items-center '>
                  <Image src={code} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Machine Learning</h3>
                  <p className='py-2'>Developing algorithms and models that enable computers to learn and make predictions or decisions without being explicitly programmed.</p>
                  <h4 className='py-4 text-cyan-500 dark:text-gray-300'>Technologies I Use</h4>
                  <p className='text=grey-800 py-1'>Python</p>
                  <p className='text=grey-800 py-1'>Pandas</p>
                  <p className='text=grey-800 py-1'>Numpy</p>
                  <p className='text=grey-800 py-1'>Matplotlib</p>
                  <p className='text=grey-800 py-1'>Seaborn</p>
                </div>
              </div>
            
              

              <div className='text-center shadow-lg  p-10 rounded-xl my-10 dark:bg-gradient-to-b from-cyan-800 to-cyan-500'>
                <div className='flex justify-center flex-col items-center '>
                  <Image src={consulting} width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Software Development</h3>
                  <p className='py-2'>Designing, coding, testing, and maintaining computer programs and applications to meet specific user or business requirements.</p>
                  <h4 className='py-4 text-cyan-500 dark:text-gray-300'>Technologies I Use</h4>
                  <p className='text=grey-800 py-1'>Java</p>
                  <p className='text=grey-800 py-1'>GitHub</p>
                  <p className='text=grey-800 py-1'>Docker</p>
                  <p className='text=grey-800 py-1'>Kubernetes</p>
                  {/* <p className='text=grey-800 py-1'>Ansimble</p> */}
                  <p className='text=grey-800 py-1'>Jenkins</p>

                </div>
              </div>
            </div>
          </section>

          <section className='py-10'>
            <div>
              <h3 className='text-5xl py-2 mb-6 dark:text-white'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
              My portfolio is a collection of diverse work samples that reflect my expertise and experience in <span className='text-cyan-500'> Full Stack development and Machine Learning </span> . 
              It includes a range of projects, such as <span className='text-cyan-500'> Pizzeria-react-app , FlySmart , Medical Insurance Premium prediction , Intelligent Traffic Managment System, Portfolio Website </span>  
              each demonstrating my creativity, problem-solving abilities, and professional growth.
              </p>
              <p className='text-md py-2 leading-8 text-grey-800 dark:text-gray-200'>
              Through my portfolio, I aim to present the quality of my work and provide potential employers, clients, or collaborators 
              with a comprehensive understanding of my capabilities. 
              It not only highlights my past achievements but also offers insights into my thought process, 
              approach to projects, and overall professional development. By exploring my portfolio, 
              you will gain a deeper understanding of my skills and be able to assess my suitability for your specific needs.
              </p>
            </div>
            
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

              <div className='basis-1/3 flex-1 '><a href='https://github.com/Kshitij-Darwhekar/pizzeria-react-app'><Image src={pizza} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle}/></a></div>
              <div className='basis-1/3 flex-1 '><a href='https://github.com/Kshitij-Darwhekar/kshitijdarwhekar.io'><Image src={portfolio} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle}/></a></div>
              <div className='basis-1/3 flex-1 '><a href='https://github.com/WebDesgns/Flight-Management-System'><Image src={FlySmart} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle}/></a></div>
              <div className='basis-1/3 flex-1 '><a href='https://github.com/Kshitij-Darwhekar/Intelligent-Traffic-Managment-System-Using-Computer-Vision'><Image src={Traffic} className='rounded-lg object-cover ' width={'100%'} height={'100%'} style={portfolioStyle}/></a></div>
            </div>

          </section>

          <section className='py-10'>
            <form>
              <h1 className='text-4xl dark:text-gray-200 py-5'>Contact Me</h1>
              <label htmlFor='name' className='dark:text-gray-200'>Name</label>
              <input type='text' id='name' className='border-2 border-gray-300 p-2 rounded-lg w-full '/>
              <label htmlFor='email' className='dark:text-gray-200'>Email</label>
              <input type='email' id='email' className='border-2 border-gray-300 p-2 rounded-lg w-full '/>
              <label htmlFor='message' className='dark:text-gray-200'>Message</label>
              <textarea name='message' id='message' cols='30' rows='10' className='border-2 border-gray-300 p-2 py-4 rounded-lg w-full '></textarea>
              <button onClick={handleSubmit} className='bg-gradient-to-r from-cyan-700 to-cyan-500  text-white px-4 py-2 rounded-lg'>Submit</button>
            </form>
          </section>
        
        </main>
    </div>
    
  )
}
