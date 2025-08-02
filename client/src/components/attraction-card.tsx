import { MapPin, Star } from "lucide-react";
import type { Attraction } from "@shared/schema";

interface AttractionCardProps {
  attraction: Attraction;
}

export default function AttractionCard({ attraction }: AttractionCardProps) {
  return (
    <div className="travel-card p-4 hover:shadow-xl transition-all duration-300">
      <div className="mb-3">
        <img
          src={attraction.imageUrl}
          alt={attraction.name}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <h4 className="font-bold text-sky-blue-darker mb-2">{attraction.name}</h4>
      <p className="text-sm text-gray-600 mb-2">
        <MapPin className="inline w-4 h-4 text-accent-gold mr-1" />
        {attraction.location}
      </p>
      <p className="text-sm text-gray-700 mb-2">{attraction.description}</p>
      <div className="flex items-center">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-accent-gold fill-current" />
          <span className="text-sm text-gray-600 ml-1">{attraction.rating}</span>
        </div>
        <span className="text-xs bg-sky-blue-light text-sky-blue-darker px-2 py-1 rounded-full ml-auto font-medium">
          {attraction.category}
        </span>
      </div>
    </div>
  );
}
