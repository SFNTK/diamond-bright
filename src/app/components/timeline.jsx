import React from 'react';
import { CheckCircle } from "lucide-react"
const Timeline = () => {
    const steps = [
        {
          title: "Select Service",
          description: "Choose the type of cleaning service you need.",
          icon: "🧹",
        },
        {
          title: "Pick a Date",
          description: "Select a convenient date and time for your appointment.",
          icon: "📅",
        },
        {
          title: "Provide Details",
          description: "Enter your address and any special instructions.",
          icon: "📝",
        },
        {
          title: "Confirm Booking",
          description: "Review your booking details and confirm your appointment.",
          icon: "✅",
        },
      ]
    return (
     <div className="bg-[#F3F4F6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#333333] mb-12">
          Book Your Cleaning Service in 4 Easy Steps
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00B7C2]" />
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-16 last:mb-0">
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className={`bg-white rounded-lg shadow-lg p-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-semibold text-[#004E89] mb-2">{step.title}</h3>
                  <p className="text-[#333333]">{step.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#00B7C2] border-4 border-white flex items-center justify-center text-white text-xl">
                {step.icon}
              </div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
       
    );
}

export default Timeline;
