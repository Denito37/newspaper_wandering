export default function WOTD({ data }){
    return(
        <article className=" p-4 m-4 bg-slate-50 max-w-md border border-red-800 rounded-xl">
            <h2 className=" p-4 text-xl text-center font-medium">
                Word of the day!
            </h2>
            <p className=" p-4 text-center">
                {data.word}
            </p>
            <p className=" p-2 text-sm text-center">
                {data.definitions[0].text}
            </p>
            <p className=" p-2 text-sm text-center mx-auto max-w-[40ch]">
            <span className=" font-bold">Note: </span> {data.note}
            </p>
        </article>
    )
}