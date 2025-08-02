import { useState } from "react";
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
import { Plane, Menu, X } from "lucide-react";
import type { Destination, Attraction, Restaurant, HeritagePlace, Accommodation } from "@shared/schema";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Small delay to let menu close before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Plane className="text-accent-gold text-2xl animate-bounce-gentle" />
              <span className="text-sky-blue-darker text-xl font-bold">Bon Voyage</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium">Home</a>
              <a href="#destinations" className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium">Destinations</a>
              <a href="#attractions" className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium">Attractions</a>
              <a href="#restaurants" className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium">Restaurants</a>
              <a href="#heritage" className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium">Heritage</a>
              <a href="#accommodations" className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium">Stay</a>
              <a href="#about" className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium">About</a>
              <a href="#contact" className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-sky-blue-darker p-2 hover:text-accent-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b shadow-lg animate-slide-in">
              <div className="flex flex-col space-y-4 p-4">
                <button onClick={() => handleMobileMenuClick('#home')} className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium text-left">Home</button>
                <button onClick={() => handleMobileMenuClick('#destinations')} className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium text-left">Destinations</button>
                <button onClick={() => handleMobileMenuClick('#attractions')} className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium text-left">Attractions</button>
                <button onClick={() => handleMobileMenuClick('#restaurants')} className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium text-left">Restaurants</button>
                <button onClick={() => handleMobileMenuClick('#heritage')} className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium text-left">Heritage</button>
                <button onClick={() => handleMobileMenuClick('#accommodations')} className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium text-left">Stay</button>
                <button onClick={() => handleMobileMenuClick('#about')} className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium text-left">About</button>
                <button onClick={() => handleMobileMenuClick('#contact')} className="text-sky-blue-darker hover:text-accent-gold transition-colors font-medium text-left">Contact</button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section with top margin for fixed header */}
      <div className="pt-20">
        <HeroSection />
      </div>

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
      <section id="attractions" className="py-20 px-4 blue-gradient">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Seven Wonders & Indian Tourist Attractions
          </h2>
          <p className="text-white/90 text-center mb-12 max-w-3xl mx-auto">
            Discover the magnificent Seven Wonders of the World and explore India's most captivating tourist destinations
          </p>
          
          {/* Seven Wonders */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Seven Wonders of the World</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {attractions?.filter(attraction => attraction.category === "Wonder").map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          </div>

          {/* Indian Attractions */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Indian Tourist Attractions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {attractions?.filter(attraction => attraction.location.includes("India")).map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section id="restaurants" className="py-20 px-4 blue-gradient">
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
      <section id="heritage" className="py-20 px-4 blue-gradient">
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
      <section id="accommodations" className="py-20 px-4 blue-gradient">
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
