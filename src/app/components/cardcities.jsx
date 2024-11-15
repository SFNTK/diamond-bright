"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react'

export default function Cardcities() {
  const [isExpanded, setIsExpanded] = useState(false)

  const extraServices = [
    "Lanai", "Carport", "Garage", "Grout scrubbing", "Deep hard water removal from glass shower doors",
    "Any exterior area", "Jalousie windows", "Screens", "Exterior windows", "Blinds", "Wall washing",
    "Carpet shampoo", "Double mopping", "Scrubbing the floors or walls", "Cleaning carpet stains",
    "Cleaning high areas more than 7 ft. high", "Removing bug droppings", "Stain removals",
    "Scrubbing off any paint/stains/stickers on windows or walls"
  ]

  return (
    <div className='bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-3'>


    <Card className="cardcities max-w-2xl mx-auto overflow-hidden transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Sparkles className="w-6 h-6" />
          Move-out Cleaning Extras
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-600 mb-4">
          These areas are not included in our basic move out cleaning services and will incur additional charges. 
          Please inform us when requesting a quote if you would like these services:
        </p>
        <ScrollArea className={`transition-all duration-300 ease-in-out ${isExpanded ? 'h-80' : 'h-32'}`}>
          <ul className="space-y-2">
            {extraServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-darkprimarycolor rounded-full"></span>
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
        </ScrollArea>
        <div className="mt-4 text-center">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group hover:bg-purple-100 transition-colors duration-300"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-2 w-4 h-4 group-hover:text-purple-500" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="ml-2 w-4 h-4 group-hover:text-purple-500" />
              </>
            )}
          </Button>
        </div>
        <p className="mt-6 text-sm text-gray-500 italic">
          (Only wall dusting and interior window wiping are included in basic move-out)
        </p>
      </CardContent>
    </Card>
    </div>
  )

}