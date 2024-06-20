import React from 'react';
import { useParams } from 'react-router-dom';
import imageEuropa from '../assets/imageEuropa.png';
import imageMars from '../assets/imageMars.png';
import imageMoon from '../assets/imageMoon.webp';
import imageTitan from '../assets/imageTitan.webp';

import DestinationMoon from '../components/DestinationMoon';
import backgrounDestination from '../assets/backgrounDestination.jpg'; // Asegúrate de actualizar la ruta a tu imagen del planeta

const Destination = () => {
    const { destinationId } = useParams();
    const defaultDestination = 'moon';

    const destinations = {
        moon: {
          name: "MOON",
          description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          avgDistance: "384,400 KM",
          travelTime: "3 DAYS",
          image: imageMoon
        },
        mars: {
          name: "MARS",
          description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          avgDistance: "225 MIL. KM",
          travelTime: "9 MONTHS",
          image: imageMars
        },
        europa: {
          name: "EUROPA",
          description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          avgDistance: "628 MIL. KM",
          travelTime: "3 YEARS",
          image: imageEuropa
        },
        titan: {
          name: "TITAN",
          description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          avgDistance: "1.6 BIL. KM",
          travelTime: "7 YEARS",
          image: imageTitan
        }
      };

    const destination = destinations[destinationId || defaultDestination];

    if (!destination) {
        return <div>Destination not found</div>;
    }

    return (
        <div className="relative h-screen bg-black text-white">
            <img
                src={backgrounDestination}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 flex flex-col h-full">
                <main className="flex flex-grow items-center ml-auto mr-auto">
                    <section className="w-1/2">
                        <h1 className="text-lg font-light pb-10">01 PICK YOUR DESTINATION</h1>
                        <img src={destination.image} alt={destination.name} className="w-80 h-80" />
                    </section>
                    <section className="w-1/2 text-center space-y-4">
                        <DestinationMoon />
                        <article className="text-center mt-8">
                            <h2 className="text-6xl font-bold">{destination.name}</h2>
                            <p className="max-w-xl mx-auto text-lg mt-8 mb-8">
                                {destination.description}
                            </p>
                        </article>
                        <hr className="w-full border-t-2 border-gray-600 mt-8" />
                        <div className="flex justify-center space-x-20">
                            <div className="text-center">
                                <h3 className="text-sm font-light">AVG. DISTANCE</h3>
                                <p className="text-2xl font-bold">{destination.avgDistance}</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-sm font-light">EST. TRAVEL TIME</h3>
                                <p className="text-2xl font-bold">{destination.travelTime}</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Destination;
