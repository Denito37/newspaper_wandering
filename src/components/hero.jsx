import Image from "next/image";
import Link from "next/link";
export default function Hero({data}){
    const previewArray = data?.news[0]?.text.split(' ').splice(0,36)
    const preview = previewArray?.join(' ')

    return(
        <article className=" my-6 flex flex-col">
            <div className="md:grid md:grid-cols-5 md:gap-4 items-center">
                <img  className=" mb-6 w-full md:my-0 md:col-span-2 md:order-2"
                src={data?.news[0]?.image} alt="article image" rel="noreferrer" width={300} height={300} 
                />
                <section className=" my-6 md:order-1 md:col-span-3 flex flex-col justify-items-center">
                    <h2 className=" text-center text-3xl p-2">
                        {data?.news[0]?.title}
                    </h2>
                    <p className=" text-center max-w-[45ch] mx-auto text-xl p-2">
                        {preview}...
                    </p>
                    <Link href={data?.news[0]?.url} target="_blank" 
                    className=" p-2 hover:text-red-800 mx-auto">
                        Read Full Article
                    </Link>
                </section>
            </div>
            <hr className=" my-2 h-[2px] bg-red-800"/>
        </article>

    )
}