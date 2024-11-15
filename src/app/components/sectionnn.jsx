"use client"
import React, { useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'
import "./sectionnn.css"
import { useRouter } from 'next/navigation'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const TestimonialCard2 = ({ quote, author, position }) => (
  <Card className="cardtett overflow-hidden transition-all duration-300 hover:shadow-lg">
    <CardContent className={`p-6 bg-gradient-to-br from-blue-500 to-teal-500 text-white h-full flex flex-col justify-between`}>
      <div>
        <Quote className="w-8 h-8 mb-4 text-white/80" />
        <blockquote className="text-lg font-medium mb-4 leading-relaxed">
          {quote}
        </blockquote>
      </div>
      <footer className="mt-4">
        <cite className="block font-semibold text-white/90">{author}</cite>
        <span className="text-sm text-white/70">{position}</span>
      </footer>
    </CardContent>
  </Card>
)
const testis = [{
    author: "Mark M. ",
    quote: "Wow. After two long years of looking for a meticulous and hard working cleaner on Oahu, I found Asako and DBC. After living in NYC, good house cleaners was a simple task. Not here on Oahu. I'm so impressed and thrilled I found this cleaning company."
    , position: "Yelp Review"
}, {
    author: "Ellise F.",
    quote: "We contacted Diamond Bright Cleaning for a move-out cleaning of a 2 bed/2 bath apartment on somewhat short notice. They were able to accommodate us and did an amazing, and extremely thorough job. I was actually amazed at how fresh--but not chemical-like--everything smelled when we return. It felt like a whole new place."
    , position: "Yelp review"
}, {

    author: "Kat W.",
    quote: "Asako & her team really take pride in the work they do. I've been using Diamond Bright for almost a year now & I've never been disappointed. The attention to detail, the follow up after every appointment leaves me feeling that I'm a valued client! Thank you Asako & team!",
    position: "Google Review"

}]


export default function Sectionnn() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sct",
                start: "top 95%",
                end: "top 55%",
    
                toggleActions: "play none none reverse",
            }
        });

        tls2.fromTo("#dots2",{x:-20,opacity:0},{opacity:1,x:0,duration:.6})
        .fromTo("#dots2-1",{x:20,opacity:0},{opacity:1,x:0,duration:.6})
    })
    const router=useRouter()
  return (
    <section className="sct flex   py-12 px-4 ">
        <img src='./dots2.png' id='dots2'/>
        <img src='./dots2.png' id='dots2-1'/>
        <img src='./dots2.png' id='dots2-2'/>
        <img src='./dots2.png' id='dots2-3'/>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Clients Say</h2>
        <div className="testicont2">
          {testis.map((testimonial, index) => {
            return <TestimonialCard2 key={index} quote={testimonial.quote} position={testimonial.position} author={testimonial.author} />
})}
        </div>
      </div>
      <div id='btntesti' className='bg-warm cursor-pointer text-darkslate font-bold mb-5' 
           onClick={()=>{
            router.push('/testimontials')
           }}
           >Explore Other Testimontials</div>

    </section>
  )
}