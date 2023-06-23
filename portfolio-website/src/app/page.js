import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import deved from '../../public/dev-ed-wave.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'

const imgStyle = {
  layout: 'fill',
  objectFit: 'cover',
}

// const cardStyle = {
//   justifyContent: 'center !important',
//   textAlign: 'center',
//   flexDirection: 'column',
//   alignItems: 'center',

// }

export default function Home() {
  return (
    <main className='bg-white px-10 md:px-20 lg:px-40 '>
      <section className=' min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons'>Hi, I'm Kshitij</h1>
          <ul className='flex items-center'>
            <li> <BsFillMoonStarsFill className='cursor-pointer text-2xl' /> </li>
            <li><a href='#' className='bg-gradient-to-r from-cyan-500 to-cyan-500 px-4 py-2 text-white  rounded-sm ml-8'>Resume</a></li>
          </ul>
        </nav>
      
        <div className='text-center p-10 '>
          <h2 className='text-5xl py-10 text-teal-600 font-medium md:text-6xl'>Kshitij Darwhekar</h2>
          <h3 className='text-2xl py-2 md:text-3xl'>Developer and ML Enthusiast</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
            I am a 3rd year student at IIT Kharagpur. I am interested in Web Development and Machine Learning. I am currently working on a project to detect and classify skin diseases using Deep Learning. 
          </p>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} style={imgStyle}/>
          </div>
        </div>
      </section>
      {/* 2nd Section here */}

      <section className=''>
        <div className=''>
          <h3 className='text-3xl py-1 '>Services I Offer</h3>
          <p className='text-md py-2 leading-8 text-grey-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum <span className='text-teal-500'>dolor sit amet </span> consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.

          </p>
          <p className='text-md py-2 leading-8 text-grey-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum <span className='text-teal-500'>dolor sit amet </span> consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.

          </p>
          
        </div>
        <div className='text-center shadow-lg  p-10 rounded-xl my-10'>
          <div className='flex justify-center flex-col items-center'>
            <Image src={design} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <h4 className='py-4 text-teal-600'>Design tools I Use</h4>
            <p className='text=grey-800 py-1'>Photoshop</p>
            <p className='text=grey-800 py-1'>Figma</p>
            <p className='text=grey-800 py-1'>Adobe XD</p>

          </div>
        </div>

        <div className='text-center shadow-lg  p-10 rounded-xl my-10'>
          <div className='flex justify-center flex-col items-center'>
            <Image src={code} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <h4 className='py-4 text-teal-600'>Design tools I Use</h4>
            <p className='text=grey-800 py-1'>Photoshop</p>
            <p className='text=grey-800 py-1'>Figma</p>
            <p className='text=grey-800 py-1'>Adobe XD</p>

          </div>
        </div>

        <div className='text-center shadow-lg  p-10 rounded-xl my-10'>
          <div className='flex justify-center flex-col items-center'>
            <Image src={consulting} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <h4 className='py-4 text-teal-600'>Design tools I Use</h4>
            <p className='text=grey-800 py-1'>Photoshop</p>
            <p className='text=grey-800 py-1'>Figma</p>
            <p className='text=grey-800 py-1'>Adobe XD</p>

          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1 '>Portfolio</h3>
          <p className='text-md py-2 leading-8 text-grey-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum <span className='text-teal-500'>dolor sit amet </span> consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
          <p className='text-md py-2 leading-8 text-grey-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum <span className='text-teal-500'>dolor sit amet </span> consectetur adipisicing elit. Quisquam, voluptatum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
        </div>
        <div>
          <div><Image src={web1}/></div>
        </div>
        <div>
          <div><Image src={web2}/></div>
        </div>
        <div>
          <div><Image src={web3}/></div>
        </div>
        <div>
          <div><Image src={web4}/></div>
        </div>
        <div>
          <div><Image src={web5}/></div>
        </div>
        <div>
          <div><Image src={web6}/></div>
        </div>
      </section>

    </main>
  )
}
