"use client";
import React, { useEffect, useState } from 'react';
import "./services.css";
import Servicecard from './servicecard';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const Services = () => {
    gsap.registerPlugin(ScrollTrigger);
    const [cardservice, setservice] = useState(<></>);
    const cardsservicesdate = [
        {
            id: 1,
            icon: "./satisfaction.png",
            text: " Experience a refresh with our deep cleaning service, tackling even the toughest spots to leave every corner sparkling." ,
            service: "Deep Cleaning",
        },
        {
            id: 2,
            icon: "./schedule.png",
          text: "Enjoy peace of mind with our fully licensed and insured housekeeping services, bringing reliability and care to your home."
         ,service: " Licensed & Insured Housekeeping:",
        },
        {
            id: 3,
            icon: "./expert.png",
             text:"Ensure your property is spotless with our thorough move-out cleaning, designed to make transitions smooth and stress-free.",
           service: "Move-Outs",
        },
        {
            id: 4,
            icon: "./licensing.png",
               text: " Keep your rental property guest-ready with regular, meticulous cleanings tailored for vacation rentals and long-term stays.",
            service: "Rentals",
        },
    ];

    useEffect(() => {
        const data = cardsservicesdate.map((data) => (
            <Servicecard key={data.id} text={data.text} service={data.service} icon={data.icon} />
        ));
        setservice(data);

      
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#services p",
                start: "top 95%",
                end: "top 55%",
    
                toggleActions: "play none none reverse",
            }
        });

   
    tls2.fromTo("#services h2",{y:20,opacity:0},{y:0,opacity:1,duration:.7,stagger:.7})
    .fromTo("#services p",{y:20,opacity:0},{y:0,opacity:1,duration:.8})
  
    }, []);

    return (
        <div id="services">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-lightprimarycolor via-light to-darkprimarycolor">
            From Cleaning Excellence to Your Home: Discover Our Comprehensive Services
                </h2>
            <p >We take pride in our professionalism, reliability, and attention to detail.</p>
            <div id='cardscontser'>
                {cardservice}
            </div>
        </div>
    );
};

export default Services;
