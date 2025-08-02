import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import DestinationCard from "@/components/destination-card";
import AttractionCard from "@/components/attraction-card";
import RestaurantCard from "@/components/restaurant-card";
import HeritageCard from "@/components/heritage-card";
import AccommodationCard from "@/components/accommodation-card";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useQuery } from "@tanstack/react-query";
import { Plane, MapPin } from "lucide-react";
import type { Destination, Attraction, Restaurant, HeritagePlace, Accommodation } from "@shared/schema";

export default function Home() {
  const { data: destinations } = useQuery<Destination[]>({
    queryKey: ["/api/destinations/featured"],
  });

  const { data: attractions } = useQuery<Attraction[]>({
    queryKey: ["/api/attractions"],
  });

  const { data: restaurants } = useQuery<Restaurant[]>({
    queryKey: ["/api/restaurants"],
  });

  const { data: heritage } = useQuery<HeritagePlace[]>({
    queryKey: ["/api/heritage"],
  });

  const { data: accommodations } = useQuery<Accommodation[]>({
    queryKey: ["/api/accommodations"],
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-50">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="text-accent-yellow text-2xl" />
              <span className="text-white text-xl font-bold">Bon Voyage</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-white hover:text-accent-yellow transition-colors">Home</a>
              <a href="#destinations" className="text-white hover:text-accent-yellow transition-colors">Destinations</a>
              <a href="#about" className="text-white hover:text-accent-yellow transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-accent-yellow transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Destinations Section */}
      <section id="destinations" className="py-20 px-4 blue-gradient">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Discover Our Top Destinations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {destinations?.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-20 px-4 blue-gradient">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Popular Tourist Attractions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions?.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-20 px-4 blue-gradient">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Recommended Restaurants
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants?.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 px-4 blue-gradient">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Heritage & Historical Places
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {heritage?.map((place) => (
              <HeritageCard key={place.id} heritage={place} />
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-20 px-4 blue-gradient">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Featured Accommodations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodations?.map((accommodation) => (
              <AccommodationCard key={accommodation.id} accommodation={accommodation} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
