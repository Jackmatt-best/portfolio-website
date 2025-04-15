import { DiPython, DiReact, DiGit, DiJqueryLogo, DiSass } from 'react-icons/di'
import { SiTypescript, SiBootstrap, SiFigma, SiJavascript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { FaHtml5, FaCss3 } from 'react-icons/fa'
export default function Skills() {
    return (
        <>
            <section className='flex flex-col mb-10 mt-10'>
                <div className='flex align-center justify-center mb-10'>
                    <h2>Skills</h2>
                </div>
                <div className='grid grid-cols-2 justify-center lg:grid lg:grid-cols-3 lg:gap-2 lg:justify-items-center'>
                    <div className='flex flex-col items-center mb-10'>
                        <FaHtml5 className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>HTML</h3>
                    </div>
                    <div className='flex flex-col items-center mb-10'>
                        <FaCss3 className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>CSS</h3>
                    </div>
                    <div className='flex flex-col items-center mb-10'>
                        <SiJavascript className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>JavaScript</h3>
                    </div>
                    <div className='flex flex-col items-center mb-10'>
                        <SiTypescript className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>TypeScript</h3>
                    </div>
                    <div className='flex flex-col items-center mb-10'>
                        <DiPython className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>Python</h3>
                    </div>
                    <div className='flex flex-col items-center mb-10'>
                        <DiReact className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>React</h3>
                    </div>
                    <div className='flex flex-col items-center mb-10'>
                        <DiGit className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>Git</h3>
                    </div>
                    <div className='flex flex-col items-center mb-10'>
                        <DiJqueryLogo className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>jQuery</h3>
                    </div> 
                    <div className='flex flex-col items-center mb-10'>
                        <SiBootstrap className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>Bootstrap</h3>
                    </div>
                    <div className='flex flex-col items-center mb-10'>
                        <SiFigma className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>Figma</h3>
                    </div>
                    <div className='flex flex-col items-center mb-10'>
                        <DiSass className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>Sass</h3>
                    </div>
                    <div className='flex flex-col items-center mb-10'>
                        <SiNextdotjs className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>Next.js</h3>
                    </div>
                    <div className='flex flex-col items-center'>
                        <SiTailwindcss className='text-8xl lg:text-9xl' />
                        <h3 className='text-center'>Tailwind CSS</h3>
                    </div>
                </div>
            </section>
        </>
    )
}