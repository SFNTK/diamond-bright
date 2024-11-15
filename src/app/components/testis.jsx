
"use client"
import React, { useEffect, useState } from 'react';
import Testicard from './testicard';
import "./testi.css"
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
const TestimonialCard2 = ({ review, name, company }) => (
    <Card className="cardtett2 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className={`p-6 bg-gradient-to-br from-blue-500 to-teal-500 text-white h-full flex flex-col justify-between`}>
        <div>
          <Quote className="w-8 h-8 mb-4 text-white/80" />
          <blockquote className="text-lg font-medium mb-4 leading-relaxed">
            {review}
          </blockquote>
        </div>
        <footer className="mt-4">
          <cite className="block font-semibold text-white/90">{name}</cite>
          <span className="text-sm text-white/70">{company}</span>
        </footer>
      </CardContent>
    </Card>
  )
const Testis = () => {
    const [tstis, settistis] = useState(<></>)
    const testis = [{
        name: "Mark M. ",
        review: "Wow. After two long years of looking for a meticulous and hard working cleaner on Oahu, I found Asako and DBC. After living in NYC, good house cleaners was a simple task. Not here on Oahu. I'm so impressed and thrilled I found this cleaning company."
        , company: "Yelp Review"
    }, {
        name: "Ellise F.",
        review: "We contacted Diamond Bright Cleaning for a move-out cleaning of a 2 bed/2 bath apartment on somewhat short notice. They were able to accommodate us and did an amazing, and extremely thorough job. I was actually amazed at how fresh--but not chemical-like--everything smelled when we return. It felt like a whole new place."
        , company: "Yelp review"
    }, {

        name: "Kat W.",
        review: "Asako & her team really take pride in the work they do. I've been using Diamond Bright for almost a year now & I've never been disappointed. The attention to detail, the follow up after every appointment leaves me feeling that I'm a valued client! Thank you Asako & team!",
        company: "Google Review"

    }, {
        name: "Michelle S.",
        company: "Google review",

        review: "Diamond Bright Cleaning has done an amazing job keeping our home clean and tidy, even on our messiest days! They are extremely thorough, ensuring our kitchen and bathrooms are spotless. They even organize our kids toys! Asako is always willing to accommodate our schedules and her staff are always on time, as well as friendly and polite! We would highly recommend Diamond Bright Cleaning to anyone looking for dependable, thorough, and high quality cleaners!"

    }, {



        name: "Denise S.",
        company: "Yelp review",

        review: "Asako and her team were wonderful and a huge help. We needed an emergency cleaning over the weekend. Asako was able to get two of her team members to clean on Sunday morning. They arrived early. They did a walk through of the house to understand exactly what we needed and they immediately went to work. They were very thorough and detail oriented. They did more than just wipe the surfaces. They took the time to wipe down the items on the surface tops. They did a deep clean of the bathrooms and kitchen which were in desperate need of a good clean. They result was fantastic."

    }, {


        name: "Carol W.",
        company: "Yelp review",

        review: `I contacted Diamond Bright Cleaning for a move out clean for our one bedroom rental unit attached to our Waialae Iki home. I have used other companies in the past and have been very disappointed. This company is RESPONSIVE, PROFESSIONAL, and FAIR.
    
    The fee is competitive, fair, and worth it! For the first time, I didn't have to redo the cleaning! I would use them again for move out cleaning and scheduled deep cleans!`

    }]

    useEffect(() => {
        const datatesti = testis.map((data , index) => {
            return <TestimonialCard2 key={index}  name={data.name} company={data.company} review={data.review} />
        })
        settistis(datatesti)
    }, [])
    return (
        <div id='testiscontainer'>
            {tstis}
        </div>
    );
}

export default Testis;
