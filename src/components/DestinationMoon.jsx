import React from 'react';
import { Link } from 'react-router-dom';

const DestinationMoon = () => {
  return (
    <div className="flex justify-center space-x-8 mb-4">
      <Link to="/destination/moon" className="text-lg font-semibold">MOON</Link>
      <Link to="/destination/mars" className="text-lg font-semibold">MARS</Link>
      <Link to="/destination/europa" className="text-lg font-semibold">EUROPA</Link>
      <Link to="/destination/titan" className="text-lg font-semibold">TITAN</Link>
    </div>
  );
};

export default DestinationMoon;