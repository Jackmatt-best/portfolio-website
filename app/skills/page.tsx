import { DiPython, DiReact, DiGit, DiJqueryLogo, DiSass } from 'react-icons/di'
import { SiTypescript, SiBootstrap, SiFigma, SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { FaHtml5, FaCss3 } from 'react-icons/fa'
export default function Skills() {
    return (
        <section className='ml-20 mr-20 mt-5 bg-gray-300 rounded-2xl p-5'>
            <section>
                <div className='md:flex justify-center items-center'>
                    <p>I am capable of different UI/UX tools,Programming 
                        languages,Frameworks and libraries.
                    </p>
                    <p>Here are the skills and tools i am capable of;</p>
                </div>
            </section>
            <section >
                <div className='md:flex flex-col'>
                    <div className='flex items-center justify-center'><h1>Programming Languages</h1></div>
                    <div className='grid grid-cols-2'>
                        <div><FaHtml5 className='text-8xl' /></div>
                        <div><FaCss3 /></div>
                        <div><SiJavascript /></div>
                        <div><DiPython /></div>
                        <div><SiTypescript /></div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div><h1>Frontend Frameworks and Libraries</h1></div>
                    <div><DiJqueryLogo /></div>
                    <div><DiReact /></div>
                    <div><SiNextdotjs /></div>
                    <div><SiBootstrap /></div>
                    <div><SiTailwindcss /></div>

                </div>
            </section>
            <section>
                <div>
                    <div><h1>UI/UX Design & Frontend Tools</h1></div>
                    <div><DiSass /></div>
                    <div><SiFigma /></div>
                    <div><DiGit /></div>
                </div>
            </section>
        </section>
    )
}