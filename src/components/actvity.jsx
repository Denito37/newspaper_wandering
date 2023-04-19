export default function Activity({data}){
    return(
        <article className=" p-4 m-4 bg-slate-50 min-w-[20rem] max-w-lg border border-red-800 rounded-xl">
            <h2 className=" p-4 text-xl text-center font-medium">
                Activity Suggestions
            </h2>
            <p className=" p-4 text-center">
                {data.activity}
            </p> 
            <p className=" p-2 text-center">
                <span className=" font-bold">Activity type:</span> {data.type}
            </p>
            <p className=" p-2 text-center">
                <span className=" font-bold">Participants: </span> {data.participants}
            </p>
        </article>
    )
}