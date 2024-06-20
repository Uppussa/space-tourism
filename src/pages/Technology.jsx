import React from 'react';

const Technology = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      

      <main className="flex p-8">
        <section className="w-1/2">
          <h2 className="text-gray-500 mb-4">03 SPACE LAUNCH 101</h2>
          <div className="mb-8">
            <h3 className="text-gray-400 mb-2">THE TERMINOLOGY...</h3>
            <h1 className="text-4xl mb-4">LAUNCH VEHICLE</h1>
            <p className="text-gray-400">
              A launch vehicle or carrier rocket is a rocket-propelled
              vehicle used to carry a payload from Earth's surface to
              space, usually to Earth orbit or beyond. Our WEB-X
              carrier rocket is the most powerful in operation.
              Standing 150 metres tall, it's quite an awe-inspiring sight
              on the launch pad!
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="w-12 h-12 rounded-full bg-white text-black">1</button>
            <button className="w-12 h-12 rounded-full border border-gray-600">2</button>
            <button className="w-12 h-12 rounded-full border border-gray-600">3</button>
          </div>
        </section>
        <section className="w-1/2">
          <img 
            src="/path-to-your-rocket-image.jpg" 
            alt="Rocket launch" 
            className="w-full h-full object-cover"
          />
        </section>
      </main>
    </div>
  );
};

export default Technology;