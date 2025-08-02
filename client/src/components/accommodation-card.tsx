import { MapPin, Star } from "lucide-react";
import type { Accommodation } from "@shared/schema";

interface AccommodationCardProps {
  accommodation: Accommodation;
}

export default function AccommodationCard({ accommodation }: AccommodationCardProps) {
  const getStarRatingBadge = (starRating: number) => {
    if (starRating === 5) return "5 Star";
    if (starRating === 4) return "4 Star";
    if (starRating === 3) return "3 Star";
    return "Budget";
  };

  const getBadgeColor = (starRating: number) => {
    if (starRating >= 4) return "bg-blue-600";
    if (starRating === 3) return "bg-blue-600";
    return "bg-green-600";
  };

  return (
    <div className="travel-card overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          src={accommodation.imageUrl}
          alt={accommodation.name}
          className="w-full h-40 object-cover"
        />
        <div className={`absolute top-2 right-2 ${getBadgeColor(accommodation.starRating)} text-white px-2 py-1 rounded text-xs`}>
          {getStarRatingBadge(accommodation.starRating)}
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-sky-blue-darker mb-2">{accommodation.name}</h4>
        <p className="text-sm text-gray-600 mb-2">
          <MapPin className="inline w-4 h-4 text-accent-gold mr-1" />
          {accommodation.location}
        </p>
        <div className="flex items-center mb-2">
          <div className="flex text-accent-gold text-sm">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(parseFloat(accommodation.rating))
                    ? "fill-current"
                    : parseFloat(accommodation.rating) > i && parseFloat(accommodation.rating) < i + 1
                    ? "fill-current opacity-50"
                    : ""
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">{accommodation.rating}</span>
        </div>
        <p className="text-lg font-bold text-sky-blue-darker">${accommodation.pricePerNight}/night</p>
      </div>
    </div>
  );
}
