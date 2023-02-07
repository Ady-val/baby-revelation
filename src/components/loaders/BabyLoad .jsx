import React from 'react';
import { FaBaby } from 'react-icons/fa';

export default function Load({color}) {
  return <div><FaBaby className={`animate-spin m-2 text-4xl text-${color ? color : "fonttext"}`} /></div>;
}
