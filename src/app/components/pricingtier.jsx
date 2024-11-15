'use client'
import React from 'react';


import { Sparkles, Droplets, Home, Umbrella, TriangleAlert, ShellIcon } from 'lucide-react'


function PricingCard({ title, price, description, icon: Icon, accentColor }) {
  const buttonStyle = {
    backgroundColor: accentColor
  }

  const iconStyle = {
    color: accentColor
  }

  return (
    <div className="flex-1 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ minWidth: '250px', maxWidth: '300px' }}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <Icon className="w-8 h-8 mr-3" style={iconStyle} />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-3xl font-bold mb-4" style={{ color: accentColor }}>{price}</p>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <button
          className="w-full py-2 px-4 rounded-full font-bold text-white transition-colors duration-300 hover:opacity-90"
          style={buttonStyle}
        >
          Choose Plan
        </button>
      </div>
    </div>
  )
}

const Pricingtier = () => {
  const tiers = [
    {
      title: "Standard Cleaning",
      price: "Start at $150+",
      description: "Ideal for regular maintenance cleaning to keep your space fresh and tidy.",
      icon: Sparkles,
      accentColor: "#004E89"
    },
    {
      title: "Deep Cleaning",
      price: "Start at $200+",
      description: "A thorough top-to-bottom clean for when your home needs that extra attention.",
      icon: Droplets,
      accentColor: "#00B7C2"
    },
    {
      title: "Move-Out Cleaning",
      price: "Start at $300+",
      description: "Perfect for end-of-lease cleanings to ensure a pristine handover.",
      icon: Home,
      accentColor: "#FF6B6B"
    },
    {
      title: "Monthly  Vacation Rental Cleaning",
      price: "Start at $250+",
      description: "Ensure every guest arrives to a perfectly clean vacation rental.",
      icon: Umbrella,
      accentColor: "#FFCC00"
    }, {
      title: "Recurring standard house cleaning ",
      price: "$150-600",
      description: "depending on size/job",
      icon: TriangleAlert,
      accentColor: "#004E89"
    }, {
      title: "Carpet cleaning  ",
      price: "$150",
      description: "Stains in carpet are not guaranteed able to be removed. ",
      icon: ShellIcon,
      accentColor: "#00B7C2"
    },
  
  ]
  return (



    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Pricing Tiers</h2>
        <div id='pricing' className="flex flex-wrap justify-center gap-8">
          {tiers.map((tier, index) => (
            <PricingCard
              key={index}
              title={tier.title}
              price={tier.price}
              description={tier.description}
              icon={tier.icon}
              accentColor={tier.accentColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricingtier;
