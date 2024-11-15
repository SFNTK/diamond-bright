"use client"
import React, { useEffect, useState } from 'react';
import "./numbers.css";
import Policiecard from './policiecard';

const Numbers = () => {
    const policies = [
        {
            number: 2,
            title: "CANCELLATION POLICY",
            content: "If you need to cancel your appointment, please cancel as early as possible, at the latest 24 hours before your appointment. Cancellation within 24 hours of service will result in a 50% charge of your service."
        }, {
            number: 3,
            title: "NOT LIABLE FOR SCREENS, BLINDS, CEILING FANS AND COOKER HOOD FILTERS.",
            content: "Screens, blinds, ceiling fans and cooker hood filters tend to break easily, especially when old. We are not liable for any damage done to these items. If you would like, please remove them from its place for cleaning, especially if delicate. "
        }, {
            number: 4,
            title: "MOVE-OUT CLEANING",
            content: "Please remove all furniture and personal belongings before our cleaning service. We DO NOT move furniture.  "
        },
        {
            number: 5,
            title: "DEEP CLEANING",
            content: "Please clear up cluttered areas and personal items prior to service so that we can best access areas for cleaning.  "
        },
        {
            number: 6,
            title: "LATE PAYMENT FEE",
            content: "We collect payment same day of service completion. If for any reason payment is not received within 30 days, there will be a 5% late fee.  "
        }, {
            number: 7,
            title: "NO BIOHAZARD CLEANINGS. ",
            content: "This includes animal or human waste, roach eggs, live roaches or bugs.   "
        },
        {
            number: 8,
            title: "NO CLEANING HIGHER THAN 7 FEET ABOVE THE GROUND",
            content: `Due to insurance restrictions, our staff may not clean higher than 7 feet above the ground. 
                      If you have higher area cleanings where up to two-step ladders are required for cleaning, you must inform us prior to service, otherwise we will only clean what can be reached from the ground. `
        },
        {
            number: 9,
            title: " PAYMENTS ARE NON-REFUNDABLE",
            content: " "
        },
    ]
    const [datapolicies,setpolicies]=useState(<></>)
    useEffect(()=>{
        const dt=policies.map(data=>{
            return  <Policiecard number={data.number} key={data.number} content={data.content} title={data.title}/>
        })
        setpolicies(dt)
    },[])
    return (
        <div id='numbers'>
       {datapolicies}

        </div>
    );
}

export default Numbers;
