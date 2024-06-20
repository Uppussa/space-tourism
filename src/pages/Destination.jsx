// src/components/Destination.js
import React from 'react';
import { Link } from 'react-router-dom';
import imageMars from '../assets/imageMars.png'; // Asegúrate de actualizar la ruta a tu imagen
import backgrounDestination from '../assets/backgrounDestination.jpg'; // Asegúrate de actualizar la ruta a tu imagen del planeta

const Destination = () => {
    return (
        <div className="relative h-screen bg-black text-white">
            <img
                src={backgrounDestination}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 flex flex-col h-full">
                
                <main className="flex flex-grow items-center ml-auto mr-auto ">
                    <section className="w-1/2">
                    <h1 className="text-lg font-light pb-10">01 PICK YOUR DESTINATION</h1>
                        <img src={imageMars} alt="Planet" className="w-80 h-80" />
                    </section>
                    <section className="w-1/2 text-center space-y-4">
                        
                        <div className="flex justify-center space-x-8 mt-8">
                            <a href="#moon" className="text-lg font-semibold">MOON</a>
                            <a href="#mars" className="text-lg font-semibold border-b-2 border-white">MARS</a>
                            <a href="#europa" className="text-lg font-semibold">EUROPA</a>
                            <a href="#titan" className="text-lg font-semibold">TITAN</a>
                        </div>
                        <article className="text-center mt-8">
                            <h2 className="text-6xl font-bold">MARS</h2>
                            <p className="max-w-xl mx-auto text-lg mt-8 mb-8">
                                Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                            </p>
                        </article>
                        <hr className="w-full border-t-2 border-gray-600 mt-8" />
                        <div className="flex justify-center space-x-20 ">
                            <div className="text-center">
                                <h3 className="text-sm font-light">AVG. DISTANCE</h3>
                                <p className="text-2xl font-bold">225 MIL. KM</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-sm font-light">EST. TRAVEL TIME</h3>
                                <p className="text-2xl font-bold">9 MONTHS</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Destination;
