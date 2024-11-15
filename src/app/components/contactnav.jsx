"use client"
import React, { useRef } from 'react';

const Contactnav = ({settypetable}) => {
    
    return (
        <div id="dashheader" className='font-bold'>
            <div className='bg-darkprimarycolor text-brightwhite' onClick={(e)=>{
                settypetable("unviewed")
               
            }}>Unviewed Messages</div>
            <div className='bg-darkprimarycolor text-brightwhite' onClick={(e)=>{
                settypetable("viewed")
               
            }}>Viewed Messages</div>
            <div className='bg-darkprimarycolor text-brightwhite'
            onClick={(e)=>{
                settypetable("all")
               
            }}>All Messages</div>
        </div>
    );
}

export default Contactnav;
