'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const quotes = [
  {
    text: "The development of full artificial intelligence could spell the end of the human race.",
    author: "Stephen Hawking"
  },
  {
    text: "Superintelligent AI is like summoning a demon. You have to be very careful.",
    author: "Elon Musk"
  },
  {
    text: "The first ultraintelligent machine is the last invention that man need ever make.",
    author: "I.J. Good"
  },
  {
    text: "Once we have superintelligent AI, it will take off on its own and redesign itself at an ever-increasing rate.",
    author: "Ray Kurzweil"
  },
  {
    text: "The quest for artificial superintelligence is the quest to create gods.",
    author: "Nick Bostrom"
  }
]

export default function QuotesCarousel() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const previousQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 py-8">
      <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
        <div className="min-h-[120px] flex flex-col justify-center">
          <p className="text-xl md:text-2xl italic text-gray-200 mb-4">
            "{quotes[currentQuote].text}"
          </p>
          <p className="text-blue-400 font-semibold">
            - {quotes[currentQuote].author}
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2">
        <Button
          variant="ghost"
          size="icon"
          className="bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-full"
          onClick={previousQuote}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-full"
          onClick={nextQuote}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentQuote ? 'bg-blue-400' : 'bg-gray-600'
            }`}
            onClick={() => setCurrentQuote(index)}
          />
        ))}
      </div>
    </div>
  )
} 