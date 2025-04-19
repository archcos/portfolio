import React, { useState, useEffect } from 'react';


function Home () {

    const [slide, setSlide] = useState(false);

    useEffect(() => {
        setSlide(true);
    }, []); 

    return (
        <>
            {/*about me*/}
            <main className="flex-1">
                <section className="min-h-screen flex bg-main p-8">
                    <div className="w-1/2 text-black">
                        <div className="mt-50 ml-50 p-8">
                            <h1 className={`text-3xl font-bold transition-transform duration-700 transform 
                                ${slide ? 'translate-x-0' : 'translate-x-full'} ease-in-out`}>Welcome</h1>
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
                <section className="min-h-screen bg-red-800 p-8">
                
                </section>
            </main>
        </>
    )
}

export default Home;