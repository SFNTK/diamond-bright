"use client"
import React from 'react';
import Testicard from './testicard';
import { useRouter } from 'next/navigation'
const Testimontials = () => {
  const router = useRouter()
    return (
        <div id='testimontials'>
            <h2 className='text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-lightprimarycolor via-light to-darkprimarycolor'>What Our Clients Are Saying</h2>
           <div id='testis'>
           <Testicard
  name="Kat W."
  review="Asako & her team really take pride in the work they do. I've been using Diamond Bright for almost a year now & I've never been disappointed. The attention to detail, the follow up after every appointment leaves me feeling that I'm a valued client! Thank you Asako & team!"
  company="Google Review"
/>
 <Testicard
  name="Ellise F."
  review="We contacted Diamond Bright Cleaning for a move-out cleaning of a 2 bed/2 bath apartment on somewhat short notice. They were able to accommodate us and did an amazing, and extremely thorough job. I was actually amazed at how fresh--but not chemical-like--everything smelled when we return. It felt like a whole new place."
  company="Yelp review"
/>
<Testicard
  name="Mark M. "
  review="Wow. After two long years of looking for a meticulous and hard working cleaner on Oahu, I found Asako and DBC. After living in NYC, good house cleaners was a simple task. Not here on Oahu. I'm so impressed and thrilled I found this cleaning company."
  company="Yelp Review"
/>

           </div>
         

        </div>
    );
}

export default Testimontials;
