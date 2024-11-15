import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'

export default function Component({ quote = "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day.", author = "Jane Doe", position = "CEO, Tech Innovators" }) {
  return (
    <Card className="w-full max-w-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <Quote className="w-10 h-10 mb-4 text-pink-200 animate-pulse" />
        <blockquote className="text-lg font-medium mb-4 leading-relaxed">
          {quote}
        </blockquote>
        <footer className="mt-4">
          <cite className="block font-semibold text-pink-200">{author}</cite>
          <span className="text-sm text-purple-200">{position}</span>
        </footer>
      </CardContent>
    </Card>
  )
}