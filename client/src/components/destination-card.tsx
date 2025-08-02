import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import type { Destination } from "@shared/schema";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="travel-card p-6 hover:scale-105 transition-transform duration-300">
      <div className="mb-4">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-2xl font-bold text-deep-blue mb-3">
        <MapPin className="inline text-accent-yellow mr-2" />
        {destination.name}
      </h3>
      <p className="text-gray-700 mb-4">{destination.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-deep-blue">From ${destination.price}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-accent-yellow fill-current" />
            <span className="text-sm text-gray-600 ml-1">{destination.rating}</span>
          </div>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          View Details
        </Button>
      </div>
    </div>
  );
}
