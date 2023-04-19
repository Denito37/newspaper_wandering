import { useState, useEffect } from "react"
import Link from "next/link"
export default function FOTD(){
    const [fact, setFact] = useState('')
    const [source, setSource] = useState('')
    const getFact = async() =>{
        const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/today')
        const data = await res.json();
        setFact(data.text)
        setSource(data.source)
    }
    useEffect(() =>{
        getFact();
    },[])
    return(
        <article className=" p-4 m-4 bg-slate-50 max-w-md border border-red-800 rounded-xl">
            <h2 className=" p-4 text-xl text-center font-medium">
                Fact of the day!
            </h2>
            <p className=" p-4 text-center">
                {fact}
            </p>
            <p className=" p-2 text-sm text-center">
            <span className=" font-bold">Source: </span> {source}
            </p>
            
        </article>
    )
}