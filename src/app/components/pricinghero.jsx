"use client"
import React from 'react';
import './pricinghero.css'
import { useRouter } from 'next/navigation';
const Pricinghero = ({heroh2,herop,herobtn,heroicon,fnct}) => {
  const router=useRouter();
    return (
        <div id="pricinghero"  >
        <h2 className="relative z-10 text-brightwhite ">{heroh2}</h2>
        <p className="relative z-10 text-brightwhite">{herop}</p>
        <div className="pagesbtn text-darkslate items-center justify-center font-bold mt-7 bg-warm hover:bg-lightprimarycolor cursor-pointer relative z-10" onClick={fnct}>{heroicon} {herobtn}</div>
        <div className="absolute inset-0 bg-darkprimarycolor/50 z-0" />
      </div>
      
    );
}

export default Pricinghero;
