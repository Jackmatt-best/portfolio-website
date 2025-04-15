import Link from "next/link";

//Desktop for the navbar
export default function DesktopNavbar() {
    return (
        <>
            <div className="hidden lg:flex ml-20 mr-20 mt-5 bg-gray-300 rounded-2xl p-5">
                <section className="mr-auto">
                    <div className="">
                        <h1 className="font-bold text-2xl">Jackmatt</h1>
                    </div>
                </section>
                <section>
                    <div className="flex flex-row gap-5">
                        <Link className='hover:underline hover:text-blue-800 ' href="/home">Home</Link>
                        <Link className='hover:underline hover:text-blue-800 ' href="/about">About me</Link>
                        <Link className='hover:underline hover:text-blue-800 ' href="/contact">Contact</Link>
                        <Link className='hover:underline hover:text-blue-800 ' href="/skills">Skills</Link>
                        <Link className='hover:underline hover:text-blue-800 ' href="/resume">Resume</Link>
                        <Link className='hover:underline hover:text-blue-800 ' href="/projects">Projects</Link>
                        <Link className='hover:underline hover:text-blue-800 ' href="/testimonials">Testimonials</Link>
                        <Link className='hover:underline hover:text-blue-800 ' href="/certificates">Certificates</Link>
                    </div>
                </section>
            </div>
        </>
    )
}