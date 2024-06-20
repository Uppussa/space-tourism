import React from 'react';
import { Link } from 'react-router-dom';
import backgroundCrew from '../assets/backgroundCrew.jpg'; // Asegúrate de actualizar la ruta a tu imagen de fondo
import CrewChica from '../assets/CrewChica.webp'; // Asegúrate de actualizar la ruta a tu imagen del crew

const Crew = () => {
  return (
    <main className="relative h-full bg-black text-white">
      <img
        src={backgroundCrew}
        alt="Background"
        className="absolute w-full object-cover "
      />
      
      <section className="relative  flex items-center justify-around top-11">
       
        <article className="flex flex-col text-left mt-8 space-y-4">
        <h1 className="text-lg font-light justify-center mb-20">02 MEET YOUR CREW</h1>
          <h2 className="text-4xl font-medium opacity-50">FLIGHT ENGINEER</h2>
          <h3 className="text-6xl font-bold">ANOUSHEH ANSARI</h3>
          <p className="max-w-xl text-lg mt-4 opacity-50">
            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
          </p>
        </article>
        <figure className="mt-28">
          <img src={CrewChica} alt="Anousheh Ansari" className=" mt-12" />
        </figure>
      </section>
    </main>
  );
};

export default Crew;
