import Link from "next/link"
export default function Footer(){
    return(
        <>
            <footer className="text-center col-span-2 p-4 mx-auto md:grid md:grid-cols-3 md:max-w-lg">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <h2 className=" text-lg p-1">
                    <Link className=" p-2 rounded-md transition-colors hover:bg-red-100 hover:text-red-800" href="https://dev-portfolio-denito37.vercel.app" target="_blank" rel="noopener noreferrer">
                        Portfolio   
                    </Link>
                </h2>
                <h2 className=" text-lg text-center p-1">
                    <Link className=" p-2 rounded-md transition-colors hover:bg-red-100 hover:text-red-800" href="https://github.com/Denito37" target="_blank" rel="noopener noreferrer">
                        Github
                    </Link>
                </h2>
                <h2 className=" text-lg text-center p-1">
                    <Link className=" p-2 rounded-md transition-colors hover:bg-red-100 hover:text-red-800" href="https://www.linkedin.com/in/dennes-lopez-99907618a/" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </Link>
                </h2>
            </footer>
        </>
    )
}