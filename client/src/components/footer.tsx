import { Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 mt-20 blue-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="card-gradient rounded-2xl p-8 shadow-xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Plane className="text-accent-gold text-2xl" />
              <span className="text-sky-blue-darker text-xl font-bold">Bon Voyage</span>
            </div>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>
          </div>
          
          <div className="border-t border-gray-300 mt-8 pt-6 text-center">
            <p className="text-gray-600 text-sm">
              &copy; 2024 Bon Voyage Tours and Travels. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
