import React from 'react';
import "./why.css"
const Why = () => {
    const whyp=`We offer a satisfaction guarantee with a same-day walk-through.
                    If you're not fully satisfied, we'll re-clean any missed areas at no extra charge during the service.
                    Plus, we are licensed and insured, giving you confidence in the quality and reliability of our work.
              `
    return (
        <div id='why' >
           
            <div className='relative z-10'>
                <p>
                    {whyp}
                      </p>
                <p className='text-warm'>Note: Once the walk-through is completed, the service is considered finalized. Any additional cleaning requests will incur extra charges.</p>
            </div>
            <div className="absolute inset-0 h-full bg-darkprimarycolor/70 z-1" />        </div>
    );
}

export default Why;
