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
        </main>
    )
}