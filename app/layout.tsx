import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from '@/ui/components/navigation/Link'
import Image from 'next/image'
import YouWeLogo from '../public/favicon.ico'
import FavIcon from 'app/favicon.ico'
import Button from '@/ui/components/inputs/Button'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Component Library',
  description: 'Youwe Component Library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-surface-100 text-black`}>
      <nav className='bg-black sticky top-0 left-0 z-30 p-2 border-sm border-b-surface-700 flex flex-row flexbetween place-content-between z-999'>
<Link className='flex flex-row' href="/">
     <Image
     className='pl-2'
     src={YouWeLogo}
     alt="Logo"
   />


   <h1 className="pt-2 pl-2 text-white font-bold">Youwe Component Library</h1>
   </Link>
   <div className='text-surface-300 text-sm mt-2 mr-2'>
 <form className='flex'>
    <input type='search' placeholder='Search' className='rounded h-6 w-[100px] p-2 border-sm border-surface-300 focus:outline focus:outline-surface-700 hover:border-sm hover:border-surface-700' />
 </form>
</div>
</nav>
    <nav className='bg-white fixed left-0 top-0 bottom-0 z-20 pt-20 w-60 font-bold text-surface-700 border-r-sm border-surface-200'>
      <ul>
        <li className="hover:bg-surface-100 hover:border-l-md hover:border-l-primary">
        <Link href="/button">
          <Button>
            <span>Button</span>
            </Button> 
            </Link>
          </li>
        <li className='hover:bg-surface-100 hover:border-l-md hover:border-l-primary'>
          <Button><span>Structures</span>
          </Button></li>
        <li className='hover:bg-surface-100 hover:border-l-md hover:border-l-primary'><Button><span>Patterns</span>
        </Button></li>
      </ul>
      <div className='flex items-center justify-center'>
      <hr className="h-px w-40 border-surface-200 mt-2 mb-2"/>
      </div>
      <ul>
        <li className="hover:bg-surface-100 hover:border-l-md hover:border-l-primary">
          <Button>
            <span>Components</span>
            </Button>   
          </li>
        <li className='hover:bg-surface-100 hover:border-l-md hover:border-l-primary'>
          <Button><span>Structures</span>
    </Button></li>
        <li className='hover:bg-surface-100 hover:border-l-md hover:border-l-primary'><Button><span>Patterns</span>
        </Button></li>
      </ul>
    </nav>
          {children}
        <section className='bg-surface-700 max-container padding-container ml-60'>
<div className='text-right pt-5 pr-20 pb-5 hover:bg-surface-500 text-white'>
<Link className='flex flex-col' href="/button">
  <p><b>Next:</b></p>
  <p>Button component</p>
   </Link>
</div>
</section>
<footer className='bg-black max-container padding-container ml-60 text-white grid grid-cols-3 pt-20 place-items-center pb-20 text-sm'>
<ul className='leading-loose'>
<Link href="localhost:3001"> <li>
    <u>About us</u>
  </li></Link>
  <li>
    <u>Privacy</u>
  </li>
  <li><u>Accessibility</u></li>
  <li><u>Contact</u></li>
 </ul>

 <ul>
  <li>Have any questions?</li>
  <li>Email us</li>
  <li>at <u>youwe@youwe.com</u></li>
  <li>or open an issue at <u>Github.</u></li>
 </ul>

 <ul className='text-sm pr-10'>
  <li>Styles version</li>
  <li>React Components version ^1.48.1</li>
  <li>Last updated 25 January 2024</li>
  <br/>
  <li>Copyright © 2024 Youwe </li>
 </ul>
</footer>
        </body>
    </html>
  )
}