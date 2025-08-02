import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";
import type { Destination } from "@shared/schema";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
}

export default function SearchModal({ isOpen, onClose, searchQuery }: SearchModalProps) {
  const { data: results, isLoading } = useQuery<Destination[]>({
    queryKey: ["/api/destinations/search", { q: searchQuery }],
    enabled: isOpen && !!searchQuery,
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-sky-blue-darker">
            Search Results
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-4">
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-blue-deep mx-auto"></div>
              <p className="mt-4 text-gray-600">Searching destinations...</p>
            </div>
          ) : results && results.length > 0 ? (
            <>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">
                  Found {results.length} destination(s) for "{searchQuery}"
                </h4>
              </div>
              <div className="space-y-4">
                {results.map((destination) => (
                  <div
                    key={destination.id}
                    className="bg-sky-blue-light/20 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <img
                        src={destination.imageUrl}
                        alt={destination.name}
                        className="w-full md:w-48 h-32 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-xl font-bold text-sky-blue-darker">
                            {destination.name}
                          </h4>
                          <span className="bg-sky-blue-light text-sky-blue-darker px-2 py-1 rounded-full text-xs font-medium">
                            {destination.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">
                          <MapPin className="inline w-4 h-4 text-accent-gold mr-1" />
                          {destination.country}
                        </p>
                        <p className="text-gray-600 mb-3">{destination.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-sky-blue-darker">
                            From ${destination.price}
                          </span>
                          <Button className="bg-sky-blue-deep hover:bg-sky-blue-darker text-white">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : searchQuery ? (
            <div className="text-center py-8">
              <Search className="text-gray-400 text-4xl mb-4 mx-auto" />
              <h4 className="text-xl font-semibold text-gray-600 mb-2">No results found</h4>
              <p className="text-gray-500">
                Try searching for different destinations or check your spelling
              </p>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
