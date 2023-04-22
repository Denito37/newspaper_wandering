import Link from "next/link"
export default function Footer(){
    return(
        <>
            <footer className=" font-[Oswald] text-lg text-center col-span-2 p-4 mx-auto sm:grid sm:grid-cols-2 md:max-w-lg">
                <div className=" flex flex-col my-2">
                    <p className=" p-2 font-bold">
                        Pages
                    </p>
                    <Link href='/' className=" p-2 rounded-md transition-colors hover:bg-red-100 hover:text-red-800">
                        Home
                    </Link>
                    <Link href='/about' className=" p-2 rounded-md transition-colors hover:bg-red-100 hover:text-red-800">
                        About
                    </Link>
                </div>
                <div className=" flex flex-col my-2">
                    <p className=" p-2 font-bold">
                        Links
                    </p>
                    <Link className=" p-2 rounded-md transition-colors hover:bg-red-100 hover:text-red-800" href="https://dev-portfolio-denito37.vercel.app" target="_blank" rel="noopener noreferrer">
                        Portfolio   
                    </Link>
                    <Link className=" p-2 rounded-md transition-colors hover:bg-red-100 hover:text-red-800" href="https://github.com/Denito37" target="_blank" rel="noopener noreferrer">
                        Github
                    </Link>
                    <Link className=" p-2 rounded-md transition-colors hover:bg-red-100 hover:text-red-800" href="https://www.linkedin.com/in/dennes-lopez-99907618a/" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </Link>
                </div>
            </footer>
        </>
    )
}