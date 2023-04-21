import Image from 'next/image'
import Head from 'next/head'
import Header from '@/components/header'
import Hero from '@/components/hero'
import WOTD from '@/components/WOTD'
import FOTD from '@/components/FOTD'
import Activity from '@/components/actvity'
import Footer from '@/components/footer'

export default function Home({data,dataTwo,dataThree,dataFour}) {
  return (
    <>
    <Head>
      <title>Wandering Scoops</title>
      <meta name="description" content="Digital Newspaper with Niche news and fun facts"></meta>
    </Head>
    <main className="flex flex-col items-center mx-auto max-w-5xl">
      <Header />
      <Hero data={dataFour} />
      <div>
      <div className=' grid sm:grid-cols-2 lg:grid-cols-3'>
        <WOTD data={data} />
        <FOTD data={dataTwo} />
        <Activity data={dataThree} />
      </div>
      <hr className=' h-[2px] bg-red-800' />
      </div>
      <Footer />
    </main>
  </>
  )
}
export async function getStaticProps() {
  const queryFilter = ['text=animals','text=cats','text=dogs','text=frog','text=bird','text=fruit','text=vegetable','text=curry','entities=PER:Lebron James','entities=PER:Jack Black','entities=LOC:Hawaii','entities=ORG:Lego','news-sources=https://www.positive.news']
  const randomfilter = Math.floor(Math.random() * queryFilter.length)
  const randomNumber = Math.floor(Math.random() * 20)
  const key = process.env.NEXT_PUBLIC_WORD_API_KEY;
  const keyTwo = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const res = await fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${key}`)
  const data = await res.json()
  const resTwo = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/today')
  const dataTwo = await resTwo.json();
  const resThree = await fetch('https://www.boredapi.com/api/activity')
  const dataThree = await resThree.json();
  const resFour = await fetch(`https://api.worldnewsapi.com/search-news?api-key=${keyTwo}&${queryFilter[randomfilter]}&language=en&min-sentiment=0.6&number=1&offset=${randomNumber}`)
  const dataFour = await resFour.json()
  return {
      props: { data,dataTwo,dataThree,dataFour },
      revalidate:14400,
  }
}
