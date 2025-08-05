import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, ShoppingCart, TreePine, Car, Waves, PlayCircle, Building, Heart, Dumbbell } from "lucide-react"

const facilities = [
  {
    id: 1,
    name: "Children's Playground",
    icon: PlayCircle,
    description: "Safe and modern playground equipment for children of all ages with soft rubber flooring.",
    image: "/children-playground-modern.png",
    features: ["Swing Sets", "Slides", "Climbing Frames", "Safety Flooring"],
  },
  {
    id: 2,
    name: "Mosque",
    icon: Building,
    description: "Beautiful mosque for daily prayers and religious activities, accommodating up to 200 worshippers.",
    image: "/modern-mosque-community.png",
    features: ["Prayer Hall", "Ablution Area", "Air Conditioning", "Sound System"],
  },
  {
    id: 3,
    name: "Mini Market",
    icon: ShoppingCart,
    description: "Convenient mini market for daily necessities, open 24/7 for residents.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Daily Groceries", "Fresh Produce", "Household Items", "24/7 Operation"],
  },
  {
    id: 4,
    name: "Security Post",
    icon: Shield,
    description: "24/7 manned security post with CCTV monitoring and access control system.",
    image: "/security-post-modern.png",
    features: ["24/7 Security", "CCTV Monitoring", "Access Control", "Emergency Response"],
  },
  {
    id: 5,
    name: "Community Park",
    icon: TreePine,
    description: "Lush green park with walking paths, perfect for morning jogs and family recreation.",
    image: "/community-park-green.png",
    features: ["Walking Paths", "Jogging Track", "Benches", "Landscaped Gardens"],
  },
  {
    id: 6,
    name: "Community Hall",
    icon: Users,
    description: "Multi-purpose hall for community events, meetings, and celebrations.",
    image: "/community-hall-interior.png",
    features: ["Event Space", "Audio Visual", "Air Conditioning", "Kitchen Facility"],
  },
  {
    id: 7,
    name: "Swimming Pool",
    icon: Waves,
    description: "Refreshing swimming pool with separate areas for adults and children.",
    image: "/community-swimming-pool.png",
    features: ["Adult Pool", "Kids Pool", "Pool Deck", "Changing Rooms"],
  },
  {
    id: 8,
    name: "Fitness Center",
    icon: Dumbbell,
    description: "Well-equipped fitness center with modern exercise equipment.",
    image: "/fitness-center-modern.png",
    features: ["Cardio Equipment", "Weight Training", "Air Conditioning", "Locker Rooms"],
  },
  {
    id: 9,
    name: "Health Clinic",
    icon: Heart,
    description: "On-site health clinic for basic medical needs and emergency care.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["General Practice", "Emergency Care", "Pharmacy", "Health Checkups"],
  },
  {
    id: 10,
    name: "Parking Area",
    icon: Car,
    description: "Ample parking spaces for residents and guests with proper lighting.",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Resident Parking", "Guest Parking", "Security Lighting", "CCTV Coverage"],
  },
]

export default function Facilities() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">World-Class Facilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enjoy a complete lifestyle with our comprehensive range of facilities designed for comfort, convenience, and
            community living.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <Card key={facility.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={facility.image || "/placeholder.svg"} alt={facility.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <facility.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{facility.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-gray-800">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {facility.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Than Just a Home</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              At Graha Asri Residence, we believe in creating a complete living experience. Our facilities are designed
              to promote health, wellness, community bonding, and convenience for all residents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Health & Wellness</h3>
                <p className="text-gray-600">Fitness center, swimming pool, and health clinic for your well-being</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Living</h3>
                <p className="text-gray-600">Community hall and park spaces for social activities and events</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Safety & Security</h3>
                <p className="text-gray-600">24/7 security, CCTV monitoring, and controlled access for peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
