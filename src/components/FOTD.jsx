export default function FOTD({data}){
    return(
        <article className=" p-4 m-4 max-w-md">
            <h2 className=" p-4 text-red-800 text-2xl text-center font-medium">
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