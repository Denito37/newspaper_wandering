
export default function Hero(){
    return(
        <article className=" flex flex-col md:flex-row-reverse md:gap-4">
            <div className=" px-12 py-20 my-6 bg-slate-400 w-[100vw] md:max-w-md md:rounded-lg animate-pulse"></div>
            <section className=" my-6">
                <h2 className=" text-center text-3xl p-2">
                    TITLE
                </h2>
                <p className=" text-center text-xl p-2">
                    Summary Desctiption 
                </p>
            </section>
        </article>
    )
}