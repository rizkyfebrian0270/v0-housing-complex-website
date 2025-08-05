"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square, X } from "lucide-react"
import { useState } from "react"

export default function UnitTypes() {
  const [floorPlanModal, setFloorPlanModal] = useState<{ isOpen: boolean; unit: any } | null>(null)

  const unitTypes = [
    {
      id: 1,
      name: "Type 36",
      size: 36,
      bedrooms: 2,
      bathrooms: 1,
      priceRange: "Rp 450 - 500 Juta",
      image: "/modern-small-house-type-36-exterior.png",
      floorPlan: "/2-bedroom-1-bathroom-floorplan.png",
      features: ["Carport", "Living Room", "Kitchen", "Garden"],
      description: "Perfect starter home for young families with efficient space utilization.",
    },
    {
      id: 2,
      name: "Type 45",
      size: 45,
      bedrooms: 2,
      bathrooms: 2,
      priceRange: "Rp 550 - 650 Juta",
      image: "/modern-medium-house-type-45-exterior.png",
      floorPlan: "/2-bedroom-2-bathroom-floorplan.png",
      features: ["Carport", "Living Room", "Dining Room", "Kitchen", "Garden"],
      description: "Comfortable family home with additional space and extra bathroom.",
    },
    {
      id: 3,
      name: "Type 60",
      size: 60,
      bedrooms: 3,
      bathrooms: 2,
      priceRange: "Rp 750 - 850 Juta",
      image: "/modern-house-type-60-exterior.png",
      floorPlan: "/3-bedroom-2-bathroom-floorplan.png",
      features: ["Carport", "Living Room", "Dining Room", "Kitchen", "Family Room", "Garden"],
      description: "Spacious family home ideal for growing families with extra bedroom.",
    },
    {
      id: 4,
      name: "Type 70",
      size: 70,
      bedrooms: 3,
      bathrooms: 2,
      priceRange: "Rp 850 - 950 Juta",
      image: "/placeholder.svg?height=300&width=400",
      floorPlan: "/placeholder.svg?height=300&width=400",
      features: ["Carport", "Living Room", "Dining Room", "Kitchen", "Family Room", "Study Room", "Garden"],
      description: "Premium family home with study room and larger living spaces.",
    },
  ]

  const openFloorPlan = (unit: any) => {
    setFloorPlanModal({
      isOpen: true,
      unit: unit,
    })
  }

  const closeFloorPlan = () => {
    setFloorPlanModal(null)
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Choose Your Perfect Home</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of thoughtfully designed unit types, each crafted to meet different family needs and
            lifestyles.
          </p>
        </div>

        {/* Unit Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {unitTypes.map((unit) => (
            <Card key={unit.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-full">
                  <Image src={unit.image || "/placeholder.svg"} alt={unit.name} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{unit.name}</Badge>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl font-bold">{unit.name}</CardTitle>
                    <p className="text-gray-600">{unit.description}</p>
                  </CardHeader>

                  {/* Specifications */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <Square className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">Size</p>
                      <p className="font-semibold">{unit.size}m²</p>
                    </div>
                    <div className="text-center">
                      <Bed className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">Bedrooms</p>
                      <p className="font-semibold">{unit.bedrooms}</p>
                    </div>
                    <div className="text-center">
                      <Bath className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">Bathrooms</p>
                      <p className="font-semibold">{unit.bathrooms}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {unit.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-blue-600">{unit.priceRange}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 flex-1">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent" onClick={() => openFloorPlan(unit)}>
                      View Floor Plan
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Choosing the Right Unit?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our property consultants are ready to help you find the perfect home for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/location">Visit Our Location</Link>
            </Button>
          </div>
        </div>

        {/* Floor Plan Modal */}
        {floorPlanModal?.isOpen && floorPlanModal.unit && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-full bg-white rounded-lg overflow-hidden">
              {/* Modal Header */}
              <div className="bg-blue-600 text-white p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{floorPlanModal.unit.name} Floor Plan</h2>
                  <p className="text-blue-100">
                    Building Size: {floorPlanModal.unit.size}m² | {floorPlanModal.unit.bedrooms} Bedrooms |{" "}
                    {floorPlanModal.unit.bathrooms} Bathrooms
                  </p>
                </div>
                <Button variant="outline" size="icon" className="bg-white text-blue-600" onClick={closeFloorPlan}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Floor Plan Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Floor Plan Image */}
                  <div>
                    <Image
                      src={floorPlanModal.unit.floorPlan || "/placeholder.svg"}
                      alt={`${floorPlanModal.unit.name} floor plan`}
                      width={500}
                      height={400}
                      className="w-full h-auto object-contain rounded-lg border"
                    />
                  </div>

                  {/* Unit Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Unit Specifications</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <Square className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Building Size</p>
                          <p className="font-bold text-lg">{floorPlanModal.unit.size}m²</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <Bed className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Bedrooms</p>
                          <p className="font-bold text-lg">{floorPlanModal.unit.bedrooms}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <Bath className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Bathrooms</p>
                          <p className="font-bold text-lg">{floorPlanModal.unit.bathrooms}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                          <span className="text-2xl mb-2 block">💰</span>
                          <p className="text-sm text-gray-600">Price Range</p>
                          <p className="font-bold text-sm text-blue-600">{floorPlanModal.unit.priceRange}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Features Included:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {floorPlanModal.unit.features.map((feature: string, index: number) => (
                          <div key={index} className="flex items-center text-sm">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <p className="text-gray-600 mb-4">{floorPlanModal.unit.description}</p>
                      <div className="flex gap-3">
                        <Button className="bg-blue-600 hover:bg-blue-700 flex-1">Book This Unit</Button>
                        <Button variant="outline" className="flex-1 bg-transparent">
                          Download Plan
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
