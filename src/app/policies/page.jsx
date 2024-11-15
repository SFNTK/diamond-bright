"use client"
import React from 'react';
import Numbers from '../components/numbers';
import Pricinghero from '../components/pricinghero';
import "./policies.css"
import Layoutclient from '../components/layoutclient';
import { Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';
const Page = () => {
    const router=useRouter()
    const parapolicies = (<p id='numberpara'>We are proud to offer our 100% satisfaction guarantee. After service, our cleaning team does walk-through inspection with you. If you are not 100% satisfied with any part of the cleaning service, we are happy to re-clean any missed areas free of charge at TIME OF SERVICE. In an event where clients are unable or choose not to perform the walk through inspection, we assume service is completed and we will not do additional re-cleanings.
        <br />
        <span className='font-bold'>
            NOTE: After walk-through is done, our services are complete. There will be additional fees charged if asked to come back for cleaning. For move-out cleanings, it is recommend to have your landlord do the inspection walkthrough with our cleaners.
        </span>
    </p>)
    return (
        <div>
            <Layoutclient>
                <Pricinghero
                    herobtn="Book Now"
                    heroicon={<Calendar/>}
                  
                        fnct={()=>{
                            router.push('/policies/#numberheadline')}} 
                    
                    heroh2={"Our Service Policies: Clear, Fair, and Client-Focused"}
                    herop={"we’re committed to transparent service policies that prioritize your satisfaction, protect your property, and ensure a seamless cleaning experience"} />
                <div className='number2'>
                    <div id='numberheadline' className='text-lightprimarycolor'>1</div>
                    <span id='numbermini' className='text-darkprimarycolor'>100% SAME-DAY SATISFACTION GUARANTEED WITH WALKTHROUGH</span>
                    {parapolicies}
                </div>
                <Numbers />
            </Layoutclient>
        </div>
    );
}

export default Page;
