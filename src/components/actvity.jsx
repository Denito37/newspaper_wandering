export default function Activity({data}){
    return(
        <article className=" p-4 m-4 min-w-[20rem] max-w-lg ">
            <h2 className=" p-4 text-red-800 text-2xl text-center font-medium">
                Activity Suggestions
            </h2>
            <p className=" p-4 text-center">
                {data?.activity}
            </p> 
            <p className=" p-2 text-center">
                <span className=" font-bold">Activity type:</span> {data?.type}
            </p>
            <p className=" p-2 text-center">
                <span className=" font-bold">Participants: </span> {data?.participants}
            </p>
        </article>
    )
}