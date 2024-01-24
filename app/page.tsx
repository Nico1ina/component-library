import Link from "@/ui/components/navigation/Link"
import Image from "next/image"
import YouWeLogo from '../public/favicon.ico'
import Tabs from "@/ui/components/navigation/Tabs"
import Button from "@/ui/components/inputs/Button"
import FavIcon from 'app/favicon.ico'
import { Children } from "react"

export default function Home() {
  return (
 <>
<nav className='bg-black flex flex-row flexbetween max-container padding-container relative z-30 p-2 border-sm border-b-surface-700'>
<Link className='flex flex-row' href="http://localhost:3001">
     <Image
     className='pl-2'
     src={YouWeLogo}
     alt="Logo"
   />
   <h1 className="pt-2 pl-2 text-white font-bold">Youwe Component Library</h1>
   </Link>
</nav>

<div className='flex'>
    <nav className='bg-white fixed left-0 top-0 bottom-0 z-20 w-60 pt-20 font-bold text-surface-700 border-r-sm border-surface-200'>
      <ul>
        <li className="hover:bg-surface-100">
          <Button>
            <span>Components</span>
            <div>
            <Image
              className='w-3 h-3 rotate-180 ml-20'
              src={FavIcon}
              alt="LogoUp"
            />
            </div>
            </Button>   
          </li>
        <li className='hover:bg-surface-100'>
          <Button><span>Structures</span>
        <div>
            <Image
              className='w-3 h-3 rotate-180'
              src={FavIcon}
              alt="LogoUp"
            />
            </div></Button></li>
        <li className='hover:bg-surface-100'><Button><span>Patterns</span>
           <div>
            <Image
              className='w-3 h-3 rotate-180'
              src={FavIcon}
              alt="LogoUp"
            />
            </div></Button></li>
      </ul>
      <div className='flex items-center justify-center'>
      <hr className="h-px w-40 border-surface-200 mt-2 mb-2"/>
      </div>
      <ul>
        <li className="hover:bg-surface-100">
          <Button>
            <span>Components</span>
            <div>
            <Image
              className='w-3 h-3 rotate-180'
              src={FavIcon}
              alt="LogoUp"
            />
            </div>
            </Button>   
          </li>
        <li className='hover:bg-surface-100'>
          <Button><span>Structures</span>
        <div>
            <Image
              className='w-3 h-3 rotate-180'
              src={FavIcon}
              alt="LogoUp"
            />
            </div></Button></li>
        <li className='hover:bg-surface-100'><Button><span>Patterns</span>
           <div>
            <Image
              className='w-3 h-3 rotate-180'
              src={FavIcon}
              alt="LogoUp"
            />
            </div></Button></li>
      </ul>
    </nav>

    <header className='max-container padding-container flex flex-col ml-60 py-10 pb-25 bg-black flex-grow'>
      <h1 className='text-white text-left text-xl pb-1 pt-2 pl-20 pt-20'>Toggle</h1>
      <div className='text-white pt-10 pl-20'>
        <Tabs>
          <Tabs id={1} isSelected>Usage</Tabs>
          <Tabs id={2}>Requirements</Tabs>
          <Tabs id={3}>UX & Dev Notes</Tabs>
          </Tabs>
      </div>
    </header>
 </div>
 <div>
  <section className="ml-60">
  <iframe
  className='ml-40 mt-10'
  src="https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--docs&viewMode=docs&shortcuts=false&singleStory=true"
  width="800"
  height="400"
></iframe>
  </section>
 </div>

</>
  )
}
