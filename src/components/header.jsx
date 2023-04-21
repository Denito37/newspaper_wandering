
export default function Header(){
    const queryFilter = ['text=animals','text=cats','text=dogs','text=frog','text=bird','text=fruit','text=vegetable','text=curry','entities=PER:Lebron James','entities=PER:Jack Black','entities=LOC:Hawaii','entities=ORG:Lego','news-sources=https://www.positive.news']
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const date = new Date();
    const fullDate = `${weekday[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`

    return(
        <header className=" w-full">
            <h1 className=" p-4 text-6xl text-red-800 font-normal text-center">
                Wandering Scoops
            </h1>
            <hr className=" my-2 h-[2px] bg-red-800" />
            <h2 className=" text-center text-xl">
                {fullDate}
            </h2>
            <hr className=" my-2 h-[2px] bg-red-800" />
        </header>
    )
}