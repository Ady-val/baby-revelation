import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

export default function Load({color}) {
  return <div><BiLoaderAlt className={`animate-spin m-2 text-${color ? color : "fonttext"}`} /></div>;
}
