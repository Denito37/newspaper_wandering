import { useState, useEffect } from "react";
export default function Header(){
    const [theDate, setTheDate] = useState('')
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    const fullDate = `${weekday[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`

    useEffect(() =>{
        setTheDate(fullDate)
    },[fullDate])

    return(
        <header className=" max-w-5xl mx-auto">
            <h1 className=" p-4 text-6xl text-red-800 font-normal text-center">
                Wandering Scoops
            </h1>
            <hr className=" my-2 h-[2px] bg-red-800" />
            <h2 className=" text-center text-xl">
                {theDate}
            </h2>
            <hr className=" my-2 h-[2px] bg-red-800" />
        </header>
    )
}