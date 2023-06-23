"use client";

import React from 'react';
import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import deved from '../../public/dev-ed-wave.png';
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


const imgStyle = {
  layout: 'fill',
  objectFit: 'cover',
}

const portfolioStyle = {
  layout: 'responsive',
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
                <li><a href='#' className='bg-gradient-to-r from-cyan-700 to-cyan-500 px-4 py-2 text-white  rounded-sm ml-8'>Resume</a></li>
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
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
              </div>
              <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
                <Image src={kshitij} style={imgStyle}/>
              </div>
            </div>
          </section>
          {/* 2nd Section here */}

          <section >
            <div>
              <h3 className='text-3xl py-1 dark:text-white'>Services I Offer</h3>
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
              <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
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

        </main>
    </div>
    
  )
}
