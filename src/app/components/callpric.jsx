"use client"
import gsap from 'gsap';
import { Calendar, PhoneCall } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';
const Callpric = () => {
    const router=useRouter();
    const callprice="Need more info? We're here to help you choose the right service for your space!"
    return (
        <div  className='bg-gradient-to-r from-blue-600 to-indigo-600 p-6  ' id='callprice'>
            <p className=''>{callprice}</p>
            <div className='btnscontainercall flex items-center justify-center gap-10' >
                <div onClick={()=>{
router.push('/book')
                }} className='herobtn3 bg-lightprimarycolor hover:text-brightwhite hover:bg-darkprimarycolor'   
                onMouseEnter={(e)=>{
                    gsap.to(e.currentTarget,{y:-10,duration:.3,ease:"power1.inOut"})
                }}
                onMouseLeave={(e)=>{
                    gsap.to(e.currentTarget,{y:0,duration:.3})
                }}><Calendar/> Book your appoinement</div>
                <a href="tel:(808) 728-0379 "><div className='herobtn3 bg-warm hover:text-brightwhite hover:bg-darkprimarycolor'   
                onMouseEnter={(e)=>{
                    gsap.to(e.currentTarget,{y:-10,duration:.3,ease:"power1.inOut"})
                }}
                onMouseLeave={(e)=>{
                    gsap.to(e.currentTarget,{y:0,duration:.3})
                }}> <PhoneCall/> Call Us</div></a>
                
            </div>
        </div>
    );
}

export default Callpric;
