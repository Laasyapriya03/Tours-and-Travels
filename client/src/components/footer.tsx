import { Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 mt-20 blue-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="card-gradient rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="text-accent-gold text-2xl" />
                <span className="text-sky-blue-darker text-xl font-bold">Bon Voyage</span>
              </div>
              <p className="text-gray-600 text-sm">
                Your trusted partner for unforgettable travel experiences around the world.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-sky-blue-darker mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-600 hover:text-sky-blue-deep">Home</a></li>
                <li><a href="#destinations" className="text-gray-600 hover:text-sky-blue-deep">Destinations</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-sky-blue-deep">About</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-sky-blue-deep">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-sky-blue-darker mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-sky-blue-deep">Tour Packages</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sky-blue-deep">Hotel Booking</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sky-blue-deep">Flight Booking</a></li>
                <li><a href="#" className="text-gray-600 hover:text-sky-blue-deep">Travel Insurance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-sky-blue-darker mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-sky-blue-deep hover:text-accent-gold text-xl transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-sky-blue-deep hover:text-accent-gold text-xl transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-sky-blue-deep hover:text-accent-gold text-xl transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-sky-blue-deep hover:text-accent-gold text-xl transition-colors">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
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
