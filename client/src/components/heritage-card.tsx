import { Button } from "@/components/ui/button";
import { Clock, Crown } from "lucide-react";
import type { HeritagePlace } from "@shared/schema";

interface HeritageCardProps {
  heritage: HeritagePlace;
}

export default function HeritageCard({ heritage }: HeritageCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "castle":
        return <Crown className="text-accent-gold mr-2" />;
      default:
        return <Crown className="text-accent-gold mr-2" />;
    }
  };

  return (
    <div className="travel-card p-6 shadow-xl">
      <div className="mb-4">
        <img
          src={heritage.imageUrl}
          alt={heritage.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-2xl font-bold text-sky-blue-darker mb-3 flex items-center">
        {getCategoryIcon(heritage.category)}
        {heritage.name}
      </h3>
      <p className="text-gray-700 mb-4">{heritage.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600 flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          Built: {heritage.builtPeriod}
        </span>
        <Button className="bg-sky-blue-deep hover:bg-sky-blue-darker text-white">
          Learn More
        </Button>
      </div>
    </div>
  );
}
