export default function FOTD({data}){
    return(
        <article className=" p-4 m-4 bg-slate-50 max-w-md border border-red-800 rounded-xl">
            <h2 className=" p-4 text-xl text-center font-medium">
                Fact of the day!
            </h2>
            <p className=" p-4 text-center">
                {data.text}
            </p>
            <p className=" p-2 text-sm text-center">
            <span className=" font-bold">Source: </span> {data.source}
            </p>
            
        </article>
    )
}