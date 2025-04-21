import React, { useRef } from 'react';
import useInView from './hooks/useInView';
import FRAMElogo from './assets/framework.svg';
import LIBRARYlogo from './assets/library.svg';
import PROGRAMMINGlogo from './assets/programming.svg';
import HTMLlogo from './assets/html.svg';

function Home () {

    const aboutRef = useRef(null);
    const techRef = useRef(null);

    const aboutInView = useInView(aboutRef);
    const techInView = useInView(techRef);


    return (
        <>
            {/*about me*/}
            <main className="flex-1">
                <section ref={aboutRef} className="min-h-screen flex bg-main p-8">
                    <div className="w-1/2 text-black">
                        <div className="mt-50 ml-50 p-8">
                            <h1 className={`text-3xl font-bold transition-transform duration-700 transform 
                                ${aboutInView ? 'translate-x-0' : 'translate-x-full'} ease-in-out`}>Welcome</h1>
                            <p>This is my portfolio.</p>
                        </div>
                    </div>
                    <div className="w-1/2 text-white items-center justify-center">
                        <div className="bg-blue-500 mt-30 p-8">
                            <h1 className="text-3xl font-bold">Welcome</h1>
                            <p>This is my portfolio.</p>
                        </div>
                    </div>
                </section>
                {/*Techstacks*/}
                <section ref={techRef}  className="flex bg-dark p-8">
                    <div>
                        <p>
                            Techstack
                        </p>
                    </div>
                    <section className="w-1/3 h-40 items-center justify-center">
                        <img src={PROGRAMMINGlogo} alt="programming language" className={`w-20 h-20 transition-transform duration-700 transform 
                            ${techInView ? 'translate-x-0' : 'translate-x-full'} ease-in-out`} />
                            <li className="relative group rounded cursor-pointer list-none">
                                <span className="text-white block transition-all duration-300 px-2 py-1 rounded">
                                Programming Languages
                                </span>
                                <ul className="absolute hidden group-hover:block top-full left-0 bg-white shadow-lg rounded-md mt-1 min-w-[150px]">
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <a href="/services/web">Web Development</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <a href="/services/design">Graphic Design</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <a href="/services/seo">SEO Optimization</a>
                                    </li>
                                </ul>
                            </li>
                    </section>
                    <section className="text-white w-1/3 h-40 flex items-center justify-center">
                        <label htmlFor="title"></label>
                        <img src={FRAMElogo} alt="frameworks" className={`w-20 h-20 transition-transform duration-700 transform 
                            ${techInView ? 'translate-x-0' : 'translate-x-full'} ease-in-out`} />
                    </section>
                    <section className="text-white w-1/3 h-40 flex items-center justify-center">
                        <img src={LIBRARYlogo} alt="library" className={`w-20 h-20 transition-transform duration-700 transform 
                            ${techInView ? 'translate-x-0' : 'translate-x-full'} ease-in-out`} />
                    </section>
                </section>

                <section className="min-h-screen bg-blue-800 p-8">
                </section>
            </main>
        </>
    )
}

export default Home;