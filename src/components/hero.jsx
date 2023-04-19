import Image from "next/image";
import Link from "next/link";
export default function Hero({data}){
    return(
        <article className=" my-6 flex flex-col md:flex-row-reverse md:gap-4">
            <img  className=" mb-6 w-full md:my-0 md:w-[300px]"
            src={data.news[0].image} alt="article image" rel="noreferrer" width={300} height={300} 
            />
            <section className=" my-6 flex flex-col justify-items-center">
                <h2 className=" text-center text-3xl p-2">
                    {data.news[0].title}
                </h2>
                <Link href={data.news[0].url} target="_blank" 
                className=" p-2 hover:text-red-800 mx-auto">
                    Read Full Article
                </Link>
                <p className=" text-center max-w-[45ch] mx-auto text-xl p-2">
                    {data.news[0].summary}
                </p>
            </section>
        </article>
    )
}