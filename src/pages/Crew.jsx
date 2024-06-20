import React from 'react';
import { Link } from 'react-router-dom';
import backgroundCrew from '../assets/backgroundCrew.jpg'; // Asegúrate de actualizar la ruta a tu imagen de fondo
import CrewChica from '../assets/CrewChica.webp'; // Asegúrate de actualizar la ruta a tu imagen del crew

const Crew = () => {
  return (
    <main className="relative h-screen bg-black text-white">
      <img
        src={backgroundCrew}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      
      <section className="relative z-10 flex flex-col items-center text-center space-y-4 p-8 mt-8">
        <h1 className="text-lg font-light">02 MEET YOUR CREW</h1>
        <article className="flex flex-col items-center text-center mt-8 space-y-4">
          <h2 className="text-4xl font-medium">FLIGHT ENGINEER</h2>
          <h3 className="text-6xl font-bold">ANOUSHEH ANSARI</h3>
          <p className="max-w-xl text-lg mt-4">
            Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
          </p>
        </article>
        <figure className="mt-8">
          <img src={CrewChica} alt="Anousheh Ansari" className="w-72 h-auto" />
        </figure>
      </section>
    </main>
  );
};

export default Crew;
