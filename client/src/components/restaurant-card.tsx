import { Star } from "lucide-react";
import type { Restaurant } from "@shared/schema";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <div className="travel-card p-4 shadow-lg">
      <div className="mb-3">
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>
      <h4 className="font-bold text-deep-blue mb-2">{restaurant.name}</h4>
      <p className="text-sm text-gray-600 mb-2">{restaurant.type} • {restaurant.cuisine}</p>
      <div className="flex items-center mb-2">
        <div className="flex text-accent-yellow">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(parseFloat(restaurant.rating))
                  ? "fill-current"
                  : parseFloat(restaurant.rating) > i && parseFloat(restaurant.rating) < i + 1
                  ? "fill-current opacity-50"
                  : ""
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600 ml-2">{restaurant.rating}</span>
      </div>
      <p className="text-xs text-gray-500">{restaurant.priceRange}</p>
    </div>
  );
}
