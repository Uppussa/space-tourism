import React from 'react'
import { Link } from 'react-router-dom';
import home from '../assets/home.jpg';

const Home = () => {
    return (
        <div className="relative h-screen bg-black text-white">
            <img
                src={home}
                alt="Earth from space"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 flex flex-col h-full">
                
                <div className="flex flex-col items-center justify-center flex-grow space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-light">SO, YOU WANT TO TRAVEL TO</h1>
                        <h2 className="text-6xl font-bold">SPACE</h2>
                        <p className="max-w-xl mx-auto text-lg">
                            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <button className="px-8 py-4 bg-white text-black rounded-full text-lg font-semibold">
                        EXPLORE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
