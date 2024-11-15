"use client"
import React from 'react';

const Bookingheader = ({setvalidatororder}) => {
    return (
        <div>
                <div id="dashheader" className='font-bold'>
            <div className='bg-lightprimarycolor text-darkslate' onClick={(e)=>{
                setvalidatororder("confirmed")
               
            }}>Confirmed bookings </div>
            <div className='bg-lightprimarycolor text-darkslate' onClick={(e)=>{
                setvalidatororder("unconfirmed")
               
            }}>Unconfirmed bookings</div>
            <div className='bg-lightprimarycolor text-darkslate' onClick={(e)=>{
                setvalidatororder("all")
               
            }}>All bookings</div>
        </div>
        </div>
    );
}

export default Bookingheader;
