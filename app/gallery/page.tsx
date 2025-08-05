"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/modern-housing-complex.png",
    alt: "Modern House Exterior",
    category: "Houses",
    title: "Modern House Design",
  },
  {
    id: 2,
    src: "/modern-small-house-type-36-exterior.png",
    alt: "Type 36 House",
    category: "Houses",
    title: "Type 36 - Compact Living",
  },
  {
    id: 3,
    src: "/modern-medium-house-type-45-exterior.png",
    alt: "Type 45 House",
    category: "Houses",
    title: "Type 45 - Family Home",
  },
  {
    id: 4,
    src: "/modern-house-type-60-exterior.png",
    alt: "Type 60 House",
    category: "Houses",
    title: "Type 60 - Spacious Living",
  },
  {
    id: 5,
    src: "/modern-family-living-room.png",
    alt: "Living Room Interior",
    category: "Houses",
    title: "Modern Living Room",
  },
  {
    id: 6,
    src: "/2-bedroom-1-bathroom-floorplan.png",
    alt: "Floor Plan Type 36",
    category: "Houses",
    title: "Type 36 Floor Plan",
  },
  {
    id: 7,
    src: "/2-bedroom-2-bathroom-floorplan.png",
    alt: "Floor Plan Type 45",
    category: "Houses",
    title: "Type 45 Floor Plan",
  },
  {
    id: 8,
    src: "/3-bedroom-2-bathroom-floorplan.png",
    alt: "Floor Plan Type 60",
    category: "Houses",
    title: "Type 60 Floor Plan",
  },
  {
    id: 9,
    src: "/residential-street-with-trees.png",
    alt: "Tree-lined Street",
    category: "Streets",
    title: "Beautiful Tree-lined Streets",
  },
  {
    id: 10,
    src: "/modern-residential-street.png",
    alt: "Modern Residential Street",
    category: "Streets",
    title: "Well-maintained Streets",
  },
  {
    id: 11,
    src: "/children-playground-modern.png",
    alt: "Children's Playground",
    category: "Facilities",
    title: "Safe Children's Playground",
  },
  {
    id: 12,
    src: "/community-swimming-pool.png",
    alt: "Swimming Pool",
    category: "Facilities",
    title: "Community Swimming Pool",
  },
  {
    id: 13,
    src: "/modern-mosque-community.png",
    alt: "Community Mosque",
    category: "Facilities",
    title: "Beautiful Community Mosque",
  },
  {
    id: 14,
    src: "/security-post-modern.png",
    alt: "Security Post",
    category: "Facilities",
    title: "24/7 Security Post",
  },
  {
    id: 15,
    src: "/community-park-green.png",
    alt: "Community Park",
    category: "Public Areas",
    title: "Lush Community Park",
  },
  {
    id: 16,
    src: "/community-hall-interior.png",
    alt: "Community Hall",
    category: "Public Areas",
    title: "Multi-purpose Community Hall",
  },
  {
    id: 17,
    src: "/fitness-center-modern.png",
    alt: "Fitness Center",
    category: "Facilities",
    title: "Well-equipped Fitness Center",
  },
  {
    id: 18,
    src: "/indonesian-family.png",
    alt: "Family Event",
    category: "Events",
    title: "Happy Family Moments",
  },
  {
    id: 19,
    src: "/community-gathering-event.png",
    alt: "Community Gathering",
    category: "Events",
    title: "Community Celebrations",
  },
  {
    id: 20,
    src: "/aerial-view-housing-complex.png",
    alt: "Aerial View",
    category: "Public Areas",
    title: "Aerial View of Complex",
  },
]

const categories = ["All", "Houses", "Streets", "Facilities", "Public Areas", "Events"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)
  const [floorPlanModal, setFloorPlanModal] = useState<{ isOpen: boolean; image: any } | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((image) => image.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    if (lightboxImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage)
      const nextIndex = (currentIndex + 1) % filteredImages.length
      setLightboxImage(filteredImages[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (lightboxImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === lightboxImage)
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
      setLightboxImage(filteredImages[prevIndex].id)
    }
  }

  const openFloorPlan = (image: any) => {
    // Map house images to their corresponding floor plans
    const floorPlanMap: { [key: string]: string } = {
      "Type 36 - Compact Living": "/2-bedroom-1-bathroom-floorplan.png",
      "Type 45 - Family Home": "/2-bedroom-2-bathroom-floorplan.png",
      "Type 60 - Spacious Living": "/3-bedroom-2-bathroom-floorplan.png",
      "Modern House Design": "/3-bedroom-2-bathroom-floorplan.png",
      "Modern Living Room": "/2-bedroom-2-bathroom-floorplan.png",
    }

    const floorPlanSrc = floorPlanMap[image.title] || "/2-bedroom-1-bathroom-floorplan.png"
    setFloorPlanModal({
      isOpen: true,
      image: {
        ...image,
        floorPlanSrc: floorPlanSrc,
      },
    })
  }

  const closeFloorPlan = () => {
    setFloorPlanModal(null)
  }

  const currentLightboxImage = lightboxImage ? filteredImages.find((img) => img.id === lightboxImage) : null

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Photo Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the beauty of Graha Asri Residence through our comprehensive photo gallery showcasing homes,
            facilities, and community life.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                    <Badge className="mb-2 bg-blue-600">{image.category}</Badge>
                    <h3 className="font-semibold mb-3">{image.title}</h3>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          openLightbox(image.id)
                        }}
                      >
                        View Full Size
                      </Button>
                      {image.category === "Houses" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs px-3 py-1 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                          onClick={(e) => {
                            e.stopPropagation()
                            openFloorPlan(image)
                          }}
                        >
                          Floor Plan
                        </Button>
                      )}
                      {image.category === "Facilities" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs px-3 py-1 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                          onClick={(e) => {
                            e.stopPropagation()
                            // Add facility info logic here
                            alert(`More info about ${image.title}`)
                          }}
                        >
                          Learn More
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && currentLightboxImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={currentLightboxImage.src || "/placeholder.svg"}
                alt={currentLightboxImage.alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <Button variant="outline" size="icon" className="absolute top-4 right-4 bg-white" onClick={closeLightbox}>
                <X className="h-4 w-4" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <Badge className="mb-2 bg-blue-600">{currentLightboxImage.category}</Badge>
                <h3 className="text-lg font-semibold">{currentLightboxImage.title}</h3>
              </div>
            </div>
          </div>
        )}

        {/* Floor Plan Modal */}
        {floorPlanModal?.isOpen && floorPlanModal.image && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
              {/* Modal Header */}
              <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">{floorPlanModal.image.title}</h2>
                  <p className="text-blue-100">Floor Plan & Layout</p>
                </div>
                <Button variant="outline" size="icon" className="bg-white text-blue-600" onClick={closeFloorPlan}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Floor Plan Image */}
              <div className="p-6">
                <Image
                  src={floorPlanModal.image.floorPlanSrc || "/placeholder.svg"}
                  alt={`Floor plan for ${floorPlanModal.image.title}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain rounded-lg"
                />

                {/* Floor Plan Details */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Unit Type</h4>
                    <p className="text-blue-600">
                      {floorPlanModal.image.title.includes("36")
                        ? "Type 36"
                        : floorPlanModal.image.title.includes("45")
                          ? "Type 45"
                          : "Type 60"}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Building Size</h4>
                    <p className="text-blue-600">
                      {floorPlanModal.image.title.includes("36")
                        ? "36 m²"
                        : floorPlanModal.image.title.includes("45")
                          ? "45 m²"
                          : "60 m²"}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Bedrooms</h4>
                    <p className="text-blue-600">{floorPlanModal.image.title.includes("60") ? "3" : "2"} Bedrooms</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">Book This Unit</Button>
                  <Button variant="outline">Download Floor Plan</Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See It for Yourself</h2>
          <p className="text-lg text-gray-600 mb-6">
            Pictures tell a story, but experiencing Graha Asri Residence in person is even better. Schedule a visit
            today!
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="/contact">Schedule Site Visit</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
