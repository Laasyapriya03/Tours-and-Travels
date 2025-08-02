import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, Plane, Cloud, MapPin } from "lucide-react";
import SearchModal from "./search-modal";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearchModalOpen(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 blue-gradient">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 opacity-30">
          <div className="w-32 h-32 bg-white rounded-full blur-sm animate-pulse-slow"></div>
        </div>
        <div className="absolute bottom-20 left-10 opacity-20">
          <div className="w-24 h-24 bg-white rounded-full blur-sm animate-pulse-slow"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-25 animate-float">
          <Cloud className="text-white text-6xl" />
        </div>

        {/* World Map Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-96 h-64 border-2 border-white rounded-lg opacity-50 relative">
              {/* Location pins */}
              <div className="absolute top-8 left-12">
                <MapPin className="text-accent-gold text-xl" />
              </div>
              <div className="absolute top-20 right-20">
                <MapPin className="text-accent-gold text-xl" />
              </div>
              <div className="absolute bottom-12 left-1/3">
                <MapPin className="text-accent-gold text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to Bon Voyage 
            <span className="block">Tours and Travels</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 opacity-90">
            Explore the World with Us!
          </p>



          <Button className="bg-accent-gold text-sky-blue-darker px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors shadow-lg">
            Learn More
          </Button>
        </div>

        {/* Floating Airplane */}
        <div className="absolute bottom-10 right-10 opacity-60 animate-float">
          <Plane className="text-white text-4xl transform rotate-45" />
        </div>
      </section>

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        searchQuery={searchQuery}
      />
    </>
  );
}
