"use client"
import React, { useEffect } from 'react';
import "./hero.css"
import gsap from 'gsap';

import { useRouter } from 'next/navigation'


import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Hero = () => {
    const router=useRouter()
    gsap.registerPlugin(ScrollTrigger);
    const heroh1 = "Honolulu’s #1 Cleaning Company"
    const heropara = `Honolulu’s top-rated cleaning service! From deep cleans to move-outs, Diamond Bright Cleaning Inc. delivers quality you can trust.
      Get a free, customized quote today!`;
   useEffect(()=>{
    const tls = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero",
            start: "top 95%",
            end: "top 55%",

            toggleActions: "play none none reverse",
        }
    });
    const tls2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero",
            start: "top 10%",
            end: "top -50%",
scrub:true,
            toggleActions: "play none none reverse",
        }
    });
    tls2.fromTo("#circleshero",{rotate:0,y:0},{y:200,rotate:360,duration:14,ease:"power1.inOut"})
    tls.fromTo(
        "#herotxt h2",
        { y:20,opacity:0 },
        { y:0,opacity:1, duration: .5 }
      ).fromTo(
        "#herotxt h1",
        { y:20,opacity:0 },
        { y:0,opacity:1, duration: .5 }
      ).fromTo(
        "#herotxt p",
        { y:20,opacity:0 },
        { y:0,opacity:1, duration: .5 }
      ).fromTo(
        ".herobtn",
        { x:-20,opacity:0 },
        { x:0,opacity:1, duration: .5 }
      )
    .fromTo("#overl",{x:10,y:10,opacity:0},{y:0,x:0,opacity:1,duration:.5})
    .fromTo("#heroimg",{x:10,y:10,opacity:0},{y:0,x:0,opacity:1,duration:.5})
    .fromTo("#overl img",{y:10,opacity:0},{x:0,opacity:1,duration:.5})
    .fromTo("#circleshero",{y:-20,rotate:30,opacity:0},{y:0,rotate:0,opacity:1,duration:.5})
    .fromTo("#heroimg",{y:10,rotate:1},{y:0,rotate:0,duration:2,yoyo:true,repeat:-1},"flotinganim")

    
   },[])
    return (
        <div id='hero'>
            <div id='herotxt'>
                <h2 className='text-lightprimarycolor'>Diamond Bright Cleaning Inc</h2>
                <h1 className='text-darkprimarycolor'>{heroh1}</h1>

                <p className='text-darkslate'>{heropara}</p>
                <div className='herobtn btn1 text-darkslate bg-warm hover:bg-lightprimarycolor hover:text-softgray' 
                onMouseEnter={()=>{
                    gsap.to(".btn1",{y:-10,duration:.3,ease:"power1.inOut"})
                }}
                onMouseLeave={()=>{
                    gsap.to(".btn1",{y:0,duration:.3})
                }}
                onClick={()=>{
                    router.push('/book')
                }} 
                >Get a Free Quote</div>
            </div>
            <img src='./heropc.png' id='heroimg' />
            <img src='./herophone.png'
          id='herophone' />
            <img src='./circles.png' id='circleshero' />
            <div id='overl'>
                <img src="./logo.png" alt="" />
            </div>
        </div>
    );
}

export default Hero;
