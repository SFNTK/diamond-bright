"use client"
import React from 'react';
import "./dashheader.css"
import { useRouter } from 'next/navigation'
const Layoutadmin = ({children}) => {
    const router = useRouter()
  
    return (
        <>
      
        <div id='dashheader' className='font-bold'> 
            <div className='bg-darkprimarycolor text-brightwhite hover:bg-warm hover:text-darkslate'
            onClick={()=>{
                router.push('/dashcontact')
            }}
            >Contact Inbox</div>
            <div   onClick={()=>{
                router.push('/bookings')
            }}
             className='bg-lightprimarycolor hover:bg-warm text-darkslate'>Booking Inbox</div>
        
        </div>
{children}
        </>
    );
}

export default Layoutadmin;
