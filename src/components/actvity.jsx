import { useState, useEffect } from "react"
export default function Activity(){
    const [activity, setActivity] = useState('')
    const [type, setType] = useState('')
    const [people, setPeople] = useState('')
    const getActivity = async() =>{
        const res = await fetch('https://www.boredapi.com/api/activity')
        const data = await res.json();
        setActivity(data.activity)
        setType(data.type)
        setPeople(data.participants)
    }
    useEffect(() =>{
        getActivity();
    },[])
    return(
        <article className=" p-4 m-4 bg-slate-50 min-w-[20rem] max-w-lg border border-red-800 rounded-xl">
            <h2 className=" p-4 text-xl text-center font-medium">
                Activity Suggestions
            </h2>
            <p className=" p-4 text-center">
                {activity}
            </p> 
            <p className=" p-2 text-center">
                <span className=" font-bold">Activity type:</span> {type}
            </p>
            <p className=" p-2 text-center">
                <span className=" font-bold">Participants: </span> {people}
            </p>
        </article>
    )
}