"use client"
import React, { useEffect } from 'react';
import "./about.css"

import { useRouter } from 'next/navigation'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
    gsap.registerPlugin(ScrollTrigger);
    const router = useRouter()
    const paragraphContent = (
        <p className='text-darkslate'>
            Diamond Bright Cleaning Inc Created in 2019 by long-time Honolulu resident and mother of three, Asako Elzea, after over 20 years of professional experience in house cleaning.<br />
    
          We have expanded significantly since our founding and now offer a comprehensive range of cleaning services in Honolulu and surrounding areas.<br />
   
        
       
        </p>
      );

      useEffect(()=>{
        const tls = gsap.timeline({
            scrollTrigger: {
                trigger: "#abouttxt",
                start: "top 95%",
                end: "top 55%",
    
                toggleActions: "play none none reverse",
            }
        });
        tls.fromTo("#abouttxt h2",{x:-10,opacity:0},{x:0,opacity:1,duration:.5})

        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#abouttxt p",
                start: "top 95%",
                end: "top 55%",
    
                toggleActions: "play none none reverse",
            }
        });
        tls2.fromTo("#abouttxt p",{x:-20,opacity:0},{x:0,opacity:1,duration:.7})
        .fromTo("#abouttxt .btn2",{y:20,opacity:0},{opacity:1,y:0,duration:.5,ease:"power1.inOut"})

        const tls3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#baseimageabout",
                start: "top 95%",
                end: "top 55%",
    
                toggleActions: "play none none reverse",
            }
        });
        tls3.fromTo("#baseimageabout",{x:50,opacity:0},{x:0,opacity:1,duration:.7})

        
        const tls4 = gsap.timeline({
            scrollTrigger: {
                trigger: "#borderedabout",
                start: "top 95%",
                end: "top 55%",
    
                toggleActions: "play none none reverse",
            }
        });
        tls4.fromTo("#borderedabout",{x:-20,opacity:0},{x:0,opacity:1,duration:.7})
        .fromTo("#aboutdots",{y:20,opacity:0},{y:0,opacity:1,duration:.6})
       
        
      },[])
    return (
        <div id='about'>
           
<div id='aboutcontainer'>
    <div id='abouttxt'>
    <h2 className='text-lightprimarycolor font-bold '>Our Mission: Exceptional Cleaning with Integrity and Care</h2>
      {paragraphContent}
      <div  className='herobtn btn2 text-brightwhite bg-lightprimarycolor hover:bg-darkprimarycolor hover:text-softgray' 
                onMouseEnter={()=>{
                    gsap.to(".btn2",{y:-10,duration:.3,ease:"power1.inOut"})
                }}
                onMouseLeave={()=>{
                    gsap.to(".btn2",{y:0,duration:.3})
                }}
                onClick={()=>{
                    router.push('/book')
                }}
                >Get a Free Quote</div>
    </div>

    <div id='aboutimages'>
        <img src='./aboutbase.png' id='baseimageabout'/>
        <img src='./residential.png' id='borderedabout'/>
        <img src='./dots.png' id='aboutdots'/>


    </div>
   </div>
        </div>
    );
}

export default About;
