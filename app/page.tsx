import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Shield, Trees, CreditCard } from "lucide-react"
import TestimonialSlider from "@/components/testimonial-slider"

const highlights = [
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Easy access to schools, hospitals, and business districts",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Professional security team and CCTV monitoring",
  },
  {
    icon: Trees,
    title: "Green Environment",
    description: "Beautiful parks and green spaces throughout the complex",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Various payment schemes to suit your needs",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/modern-housing-complex.png" alt="Graha Asri Residence" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Graha Asri Residence</h1>
          <p className="text-xl md:text-2xl mb-8">Modern Living in a Peaceful Neighborhood</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              <Link href="/contact">Book a Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/unit-types">Explore Units</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Graha Asri Residence?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of comfort, security, and convenience in our thoughtfully designed community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Dream Home Awaits</h2>
              <p className="text-lg text-gray-600 mb-6">
                Graha Asri Residence offers modern, ready-to-live-in homes in a peaceful and secure environment. Our
                residential complex features contemporary architecture, lush green spaces, and comprehensive facilities
                for your family's comfort and convenience.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With various unit types available and flexible payment options, finding your perfect home has never been
                easier.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/unit-types">View Available Units</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/modern-family-living-room.png"
                alt="Modern home interior"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Residents Say</h2>
            <p className="text-xl text-gray-600">Hear from families who have made Graha Asri Residence their home</p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make Graha Asri Your Home?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a visit today and discover why families choose Graha Asri Residence for modern, comfortable living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link href="/contact">Schedule Site Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
