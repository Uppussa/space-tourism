import React from 'react';
import backgroundtechnologyDesktop from '../assets/backgroundtechnologyDesktop.jpg'; // Asegúrate de actualizar la ruta a tu imagen de fondo
import vehiclePortrait from '../assets/vehiclePortrait.jpg'; // Asegúrate de actualizar la ruta a tu imagen del vehículo


const Technology = () => {
  return (
    <div className="relative flex flex-col justify-center items-center text-white h-screen ">
     <img
        src={backgroundtechnologyDesktop}
        alt="Background"
        className="absolute w-full object-cover"
      /> 

 <main className="flex p-44  w-full">
        <div className="flex w-1/3">
          <div className="flex flex-col space-y-8 mr-10 pt-15 ml-50">
            <button className="w-16 h-16 rounded-full bg-white border-2 border-black text-black text-2xl font-bold opacity-95">1</button>
            <button className="w-16 h-16 rounded-full border-2 border-white text-white text-2xl font-bold opacity-95">2</button>
            <button className="w-16 h-16 rounded-full border-2 border-white text-white text-2xl font-bold opacity-95">3</button>
          </div>
           <section className="flex flex-col justify-center  opacity-95 ">
            <h3 className="text-gray-400 mb-4 tracking-widest text-sm">THE TERMINOLOGY...</h3>
            <h1 className="text-5xl mb-6 font-light">LAUNCH VEHICLE</h1>
            <p className="text-gray-400 text-left max-w-xl">
              A launch vehicle or carrier rocket is a rocket-propelled
              vehicle used to carry a payload from Earth's surface to
              space, usually to Earth orbit or beyond. Our WEB-X
              carrier rocket is the most powerful in operation.
              Standing 150 metres tall, it's quite an awe-inspiring sight
              on the launch pad!
            </p>
          </section> 
        </div>
        <section className="absolute right-0 top-60 h-80 flex justify-end items-center">
          <img
            src={vehiclePortrait}
            alt="Rocket launch"
            className=" w-120 h-120 object-cover backdrop-opacity-85"
          />
        </section> 
      </main> 
    </div>
  );
};

export default Technology;