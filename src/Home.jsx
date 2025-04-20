import React, { useRef } from 'react';
import useInView from './hooks/useInView';
import PHPlogo from './assets/php.svg';
import Reactlogo from './assets/react.svg';
import Pythonlogo from './assets/python.svg';
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
                    <section className="text-white w-1/4 h-40 flex items-center justify-center">
                        <img src={Reactlogo} alt="react" className={`w-20 h-20 transition-transform duration-700 transform 
                            ${techInView ? 'translate-x-0' : 'translate-x-full'} ease-in-out`} />
                    </section>
                    <section className="text-white w-1/4 h-40 flex items-center justify-center">
                        <img src={PHPlogo} alt="react" className={`w-30 h-30 transition-transform duration-700 transform 
                            ${techInView ? 'translate-x-0' : 'translate-x-full'} ease-in-out`} />
                    </section>
                    <section className="text-white w-1/4 h-40 flex items-center justify-center">
                        <img src={Pythonlogo} alt="react" className={`w-30 h-30 transition-transform duration-700 transform 
                            ${techInView ? 'translate-x-0' : 'translate-x-full'} ease-in-out`} />
                    </section>
                    <section className="text-black w-1/4 h-40 flex items-center justify-center">
                        <img src={HTMLlogo} alt="react" className={`w-30 h-30 transition-transform duration-700 transform 
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