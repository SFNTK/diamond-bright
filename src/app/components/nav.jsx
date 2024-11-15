"use client"
import React, { useEffect, useRef, useState } from 'react';
import "./nav.css"
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react';


const Nav = () => {
    const router = useRouter()
    const[isopen,setopen]=useState(false)
    const refer=useRef()
    useEffect(()=>{
        if(isopen){
            refer.current.style.transform="translateX(0px)"

        }
        else{
             refer.current.style.transform="translateX(1000px)"
        }
    },[isopen])
    return (
        <div id='nav' className="bg-darkprimarycolor text-brightwhite">
           <img src='./logo.png' alt='logo'/>
           <ul id='ulpc' >
            <li className='hover:text-warm'   onClick={()=>{
                router.push('/')
            }}>Home</li>
            <li className='hover:text-warm'  onClick={()=>{
                router.push('/pricing')
            }}>Pricing</li>
            <li className='hover:text-warm'   onClick={()=>{
                router.push('/gallery')
            }} >Gallery</li>
            <li className='hover:text-warm'   onClick={()=>{
                router.push('/testimontials')
            }}>Testimentials</li>
         
            <li className='hover:text-warm'   onClick={()=>{
                router.push('/policies')
            }}>Service Policies</li>
           </ul>
           <div id='btnnav' className='text-darkslate bg-warm hover:bg-lightprimarycolor hover:text-softgray'   onClick={()=>{
                router.push('/book')
            }}>GET A FREE QUOTE</div>
                <Menu id='burger' onClick={()=>{setopen(true)}}/>

            <div id='navphone' ref={refer} className='bg-darkprimarycolor'>
                <X id='closebtn' onClick={
                    ()=>{
                        setopen(false)
                    }
                }/>
            <ul>
            <li className='hover:text-warm '   onClick={()=>{
                router.push('/')
            }}>Home</li>
            <li className='hover:text-warm'  onClick={()=>{
                router.push('/pricing')
            }}>Pricing</li>
            <li className='hover:text-warm'   onClick={()=>{
                router.push('/gallery')
            }} >Gallery</li>
            <li className='hover:text-warm'   onClick={()=>{
                router.push('/testimontials')
            }}>Testimentials</li>
         
            <li className='hover:text-warm'   onClick={()=>{
                router.push('/policies')
            }}>Service Policies</li>
           </ul>
            </div>
        </div>
    );
}

export default Nav;
