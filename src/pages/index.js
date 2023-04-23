import Head from 'next/head'
import Hero from '@/components/hero'
import WOTD from '@/components/WOTD'
import FOTD from '@/components/FOTD'
import Activity from '@/components/actvity'

export default function Home({data,dataTwo}) {
  return (
    <>
    <Head>
      <title>Wandering Scoops</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content="Digital Newspaper with Niche news and fun facts"></meta>
    </Head>
    <main className="flex flex-col items-center mx-auto max-w-5xl">
      <Hero data={dataTwo} />
      <div>
      <div className=' grid sm:grid-cols-2 lg:grid-cols-3'>
        <WOTD />
        <FOTD />
        <Activity data={data} />
      </div>
      <hr className=' h-[2px] bg-red-800' />
      </div>
    </main>
  </>
  )
}
export async function getStaticProps() {
  const queryFilter = ['text=animals','text=cats','text=dogs','text=frog','text=bird','text=fruit','text=vegetable','text=curry','entities=PER:Lebron James','entities=PER:Jack Black','entities=LOC:Hawaii','entities=ORG:Lego','news-sources=https://www.positive.news']
  const randomfilter = Math.floor(Math.random() * queryFilter.length)
  const randomNumber = Math.floor(Math.random() * 20)
  const key = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const res = await fetch('https://www.boredapi.com/api/activity')
  const data = await res.json();
  const resTwo = await fetch(`https://api.worldnewsapi.com/search-news?api-key=${key}&${queryFilter[randomfilter]}&language=en&min-sentiment=0.7&number=1&offset=${randomNumber}`)
  const dataTwo = await resTwo.json()
  return {
      props: { data,dataTwo },
      revalidate:43200,
  }
}
