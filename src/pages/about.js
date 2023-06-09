import Head from "next/head"
import Story from "@/components/story"
import Goal from "@/components/goal"
export default function About(){
    return(
        <main>
            <Head>
                <title>
                    About Wandering Scoops
                </title>
            </Head>
            <Story />
            <Goal />
            <hr className=' h-[2px] my-2 bg-red-800 mx-auto max-w-5xl' />
        </main>
    )
}