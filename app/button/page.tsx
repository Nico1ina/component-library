import Tabs from "@/ui/components/navigation/Tabs"
import Typography from "@/ui/components/content/Typography"

export default function Page() {
    return (
      <>
    <header className='max-container padding-container flex flex-col ml-60 py-10 pb-25 bg-black flex-grow'>
      <Typography className='text-white pl-20 pt-20' as="h1" size="xl">Button</Typography>
      <div className='text-white pt-5 pl-20'>
        <Tabs>
          <Tabs id={1} isSelected>Usage</Tabs>
          <Tabs id={2} className=''>Requirements</Tabs>
          <Tabs id={3}>UX & Dev Notes</Tabs>
          </Tabs>
      </div>
    </header>

 <div>
  <section className="ml-60 mb-2">
  <iframe
  className='ml-40 mt-2'
  src="https://headless-github.vercel.app/?path=/docs/components-inputs-button--docs&viewMode=story&shortcuts=false&singleStory=true"
  width="800"
  height="400"
></iframe>
  </section>
 </div>
  </>
    )
  }
  