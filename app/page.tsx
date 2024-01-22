import Link from "@/ui/components/navigation/Link"
import Image from "next/image"
import YouWeLogo from '../public/favicon.ico'

export default function Home() {
  return (
 <>
<nav className='bg-error-500 flex flex-row flexbetween max-container padding-container relative z-30 p-2'>
<Link href="http://localhost:3001">
     <Image
     className='pl-2'
     src={YouWeLogo}
     alt="Logo"
   />
   </Link>
   <h1 className="pt-2 pl-2 text-white font-bold ">Youwe Component Library</h1>
</nav>

<section className='max-container padding-container flex flex-col py-10 pb-32 border-sm border-error-500'>
<p className='text-error-500 text-xl pl-10 pb-1'><b>Toggle</b></p>
<p className='text-surface-700 pl-10 text-md'><i><b>A toggle should be used when your intent is to turn on or off some functionality or action instantly.</b>
  <br/> If a physical switch would work for the action, a toggle is probably the best component to use.</i></p>
  <iframe className="pl-10 pr-10 pt-3" src="http://localhost:6006/?path=/docs/components-inputs-toggle2--docs" style={{width: '100%', height: '500px'}}></iframe>
</section>
</>
  )
}
