import React from 'react'
import { Link } from 'react-router-dom';
import home from '../assets/home.jpg';

const Home = () => {
    return (
        <div className="relative h-screen text-white">
            <img
                src={home}
                alt="Earth from space"
                className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="relative z-10 opacity-95 flex flex-col h-full">

                <div className="flex justify-around items-center text-white h-screen">
                    <div className="text-justify  max-w-2xl m-auto space-y-4">
                        <h1 className="text-4xl tracking-widest text-center">
                            SO, YOU WANT TO TRAVEL TO
                        </h1>
                        <h2 className="text-8xl  tracking-widest text-center mt-4">
                            SPACE
                        </h2>
                        <p className="max-w-xl mx-auto text-lg">
                            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <button className="bg-white text-black px-12 py-24 rounded-full text-4xl font-bold m-60">
                        EXPLORE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
