"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Resident since 2022",
    content:
      "Living at Graha Asri has been wonderful. The security is excellent, and my children love playing in the safe, green environment. The location is perfect for our daily needs.",
    rating: 5,
    image: "/indonesian-man-smiling.png",
  },
  {
    id: 2,
    name: "Sari Wijaya",
    role: "Resident since 2021",
    content:
      "The facilities here are amazing. The community is friendly, and the management is very responsive. I especially love the peaceful atmosphere and the beautiful landscaping.",
    rating: 5,
    image: "/indonesian-professional-woman-smiling.png",
  },
  {
    id: 3,
    name: "Ahmad Rahman",
    role: "Resident since 2023",
    content:
      "Great investment and perfect for family living. The flexible payment options made it easy for us to purchase our dream home. Highly recommended!",
    rating: 5,
    image: "/indonesian-family.png",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardContent className="p-8">
          <div className="text-center">
            <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-gray-700 mb-6 italic">"{testimonials[currentIndex].content}"</p>
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
