import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function FOTD(){
    const {data, error, loading} = useSWR('https://uselessfacts.jsph.pl/api/v2/facts/today',fetcher)
    if(loading) return <p>Loading...</p>
    if(error) return <p>error</p>
    return(
        <article className=" p-4 m-4 max-w-md">
            <h2 className=" p-4 text-red-800 text-2xl text-center font-medium">
                Fact of the day!
            </h2>
            <p className=" p-4 text-center">
                {data?.text}
            </p>
            <p className=" p-2 text-sm text-center">
            <span className=" font-bold">Source: </span> {data?.source}
            </p>
            
        </article>
    )
}