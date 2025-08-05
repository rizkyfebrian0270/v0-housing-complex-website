import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, School, Hospital, ShoppingBag, Car, Train, Plane, Clock, Navigation } from "lucide-react"
import Link from "next/link"

const nearbyPlaces = [
  {
    category: "Education",
    icon: School,
    places: [
      { name: "SD Negeri Asri 01", distance: "500m", time: "5 min walk" },
      { name: "SMP Negeri 15", distance: "1.2km", time: "3 min drive" },
      { name: "SMA Negeri 8", distance: "2.1km", time: "5 min drive" },
      { name: "Universitas Indonesia", distance: "8.5km", time: "15 min drive" },
    ],
  },
  {
    category: "Healthcare",
    icon: Hospital,
    places: [
      { name: "Klinik Asri Medika", distance: "300m", time: "3 min walk" },
      { name: "RS Siloam Asri", distance: "2.8km", time: "7 min drive" },
      { name: "RS Fatmawati", distance: "5.2km", time: "12 min drive" },
      { name: "RSUPN Dr. Cipto", distance: "7.1km", time: "15 min drive" },
    ],
  },
  {
    category: "Shopping",
    icon: ShoppingBag,
    places: [
      { name: "Asri Plaza", distance: "1.5km", time: "4 min drive" },
      { name: "Mall Pondok Indah", distance: "6.8km", time: "15 min drive" },
      { name: "Gandaria City", distance: "8.2km", time: "18 min drive" },
      { name: "Senayan City", distance: "12.5km", time: "25 min drive" },
    ],
  },
  {
    category: "Transportation",
    icon: Car,
    places: [
      { name: "Toll Gate Pondok Indah", distance: "3.2km", time: "8 min drive" },
      { name: "Stasiun Pondok Ranji", distance: "4.1km", time: "10 min drive" },
      { name: "Halte TransJakarta Lebak Bulus", distance: "5.5km", time: "12 min drive" },
      { name: "Bandara Soekarno-Hatta", distance: "35km", time: "45 min drive" },
    ],
  },
]

const locationHighlights = [
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Located in the heart of South Jakarta with easy access to business districts and recreational areas.",
  },
  {
    icon: Car,
    title: "Easy Access",
    description: "Direct access to major toll roads including Pondok Indah and Jagorawi toll gates.",
  },
  {
    icon: Train,
    title: "Public Transport",
    description: "Close to KRL stations and TransJakarta bus stops for convenient public transportation.",
  },
  {
    icon: Clock,
    title: "Time Efficient",
    description: "Quick commute to CBD areas like Sudirman, Kuningan, and Senayan in under 30 minutes.",
  },
]

export default function Location() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Prime Location</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically located in South Jakarta, Graha Asri Residence offers the perfect balance of peaceful suburban
            living with urban convenience.
          </p>
        </div>

        {/* Location Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {locationHighlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span>Graha Asri Residence Location</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-96 bg-gray-200 flex items-center justify-center">
                {/* Placeholder for Google Maps */}
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-gray-600 mb-4">
                    Jl. Raya Asri No. 123, Pondok Pinang
                    <br />
                    Jakarta Selatan 12310
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nearby Places */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {nearbyPlaces.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <category.icon className="h-6 w-6 text-blue-600" />
                  <span>{category.category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.places.map((place, placeIndex) => (
                    <div key={placeIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{place.name}</h4>
                        <p className="text-sm text-gray-600">{place.distance}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {place.time}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Address & Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Complete Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Graha Asri Residence</p>
                    <p className="text-gray-600">
                      Jl. Raya Asri No. 123
                      <br />
                      Pondok Pinang, Kebayoran Lama
                      <br />
                      Jakarta Selatan 12310
                      <br />
                      DKI Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Transportation Access</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Car className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">By Car</p>
                    <p className="text-sm text-gray-600">Direct access from Pondok Indah Toll Road</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Train className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">By Train</p>
                    <p className="text-sm text-gray-600">10 minutes to Pondok Ranji KRL Station</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Plane className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">From Airport</p>
                    <p className="text-sm text-gray-600">45 minutes from Soekarno-Hatta Airport</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Location</h2>
          <p className="text-lg text-gray-600 mb-6">
            Experience the convenience of our strategic location firsthand. Schedule a site visit and see why Graha Asri
            Residence is the perfect place to call home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Schedule Site Visit</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Navigation className="h-4 w-4 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
