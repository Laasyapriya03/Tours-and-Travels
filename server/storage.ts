import { 
  type Destination, type InsertDestination,
  type Attraction, type InsertAttraction,
  type Restaurant, type InsertRestaurant,
  type HeritagePlace, type InsertHeritagePlace,
  type Accommodation, type InsertAccommodation,
  type Contact, type InsertContact
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Destinations
  getDestinations(): Promise<Destination[]>;
  getFeaturedDestinations(): Promise<Destination[]>;
  searchDestinations(query: string): Promise<Destination[]>;
  getDestination(id: string): Promise<Destination | undefined>;
  
  // Attractions
  getAttractions(): Promise<Attraction[]>;
  getAttraction(id: string): Promise<Attraction | undefined>;
  
  // Restaurants  
  getRestaurants(): Promise<Restaurant[]>;
  getRestaurant(id: string): Promise<Restaurant | undefined>;
  
  // Heritage Places
  getHeritage(): Promise<HeritagePlace[]>;
  getHeritagePlace(id: string): Promise<HeritagePlace | undefined>;
  
  // Accommodations
  getAccommodations(): Promise<Accommodation[]>;
  getAccommodation(id: string): Promise<Accommodation | undefined>;
  
  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private destinations: Map<string, Destination>;
  private attractions: Map<string, Attraction>;
  private restaurants: Map<string, Restaurant>;
  private heritage: Map<string, HeritagePlace>;
  private accommodations: Map<string, Accommodation>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.destinations = new Map();
    this.attractions = new Map();
    this.restaurants = new Map();
    this.heritage = new Map();
    this.accommodations = new Map();
    this.contacts = new Map();
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize destinations
    const destinationsData: Destination[] = [
      {
        id: "1",
        name: "Tropical Paradise Beach",
        country: "Maldives",
        type: "Beach",
        description: "Escape to pristine beaches and enjoy the sun, sand, and sea. Our Beach Getaway package offers a perfect blend of relaxation and fun activities.",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        price: "899.00",
        rating: "4.8",
        featured: true,
      },
      {
        id: "2", 
        name: "Mountain Adventure Alps",
        country: "Switzerland",
        type: "Mountain",
        description: "Experience the beauty of nature as you hike through scenic trails, camp under the stars, and enjoy breathtaking views.",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        price: "1299.00",
        rating: "4.9",
        featured: true,
      },
      {
        id: "3",
        name: "City Lights Experience",
        country: "USA",
        type: "City",
        description: "Explore vibrant city life with iconic landmarks, local cuisine, and immerse yourself in culture and nightlife.",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        price: "1099.00",
        rating: "4.7",
        featured: true,
      },
    ];

    const attractionsData: Attraction[] = [
      {
        id: "1",
        name: "Ancient Temple Complex",
        location: "Kyoto, Japan",
        description: "Explore centuries-old temples with stunning architecture and peaceful gardens.",
        imageUrl: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Historical",
        rating: "4.9",
      },
      {
        id: "2",
        name: "Golden Gate Bridge",
        location: "San Francisco, USA",
        description: "Marvel at this engineering wonder and enjoy breathtaking views of the bay.",
        imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Modern",
        rating: "4.8",
      },
      {
        id: "3",
        name: "Roman Colosseum",
        location: "Rome, Italy", 
        description: "Step into history at this ancient amphitheater and symbol of Imperial Rome.",
        imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Historical",
        rating: "4.9",
      },
      {
        id: "4",
        name: "Paradise Falls",
        location: "Hawaii, USA",
        description: "Discover hidden waterfalls surrounded by tropical rainforest beauty.",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Natural",
        rating: "4.7",
      },
      {
        id: "5", 
        name: "Great Pyramids",
        location: "Giza, Egypt",
        description: "Witness the last remaining wonder of the ancient world in all its glory.",
        imageUrl: "https://images.unsplash.com/photo-1539650116574-75c0c6d90d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Historical",
        rating: "4.9",
      },
      {
        id: "6",
        name: "Sydney Opera House", 
        location: "Sydney, Australia",
        description: "Experience world-class performances at this architectural masterpiece.",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
        category: "Modern",
        rating: "4.8",
      },
    ];

    const restaurantsData: Restaurant[] = [
      {
        id: "1",
        name: "Le Bernardin",
        cuisine: "French",
        priceRange: "$150-200 per person",
        location: "New York, USA",
        description: "World-renowned fine dining restaurant specializing in exquisite seafood preparations.",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        rating: "5.0",
        type: "Fine Dining",
      },
      {
        id: "2",
        name: "Mama Mia's",
        cuisine: "Italian", 
        priceRange: "$25-40 per person",
        location: "Rome, Italy",
        description: "Authentic Italian pizzeria with wood-fired ovens and traditional recipes.",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        rating: "4.5",
        type: "Casual",
      },
      {
        id: "3",
        name: "Sakura Sushi",
        cuisine: "Japanese",
        priceRange: "$60-80 per person", 
        location: "Tokyo, Japan",
        description: "Traditional sushi restaurant with fresh fish and authentic preparation methods.",
        imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        rating: "4.2",
        type: "Traditional",
      },
      {
        id: "4",
        name: "Coffee Corner",
        cuisine: "Local",
        priceRange: "$10-20 per person",
        location: "Paris, France", 
        description: "Cozy local café with artisanal coffee and freshly baked pastries.",
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        rating: "4.8",
        type: "Café",
      },
    ];

    const heritageData: HeritagePlace[] = [
      {
        id: "1",
        name: "Neuschwanstein Castle",
        location: "Bavaria, Germany",
        description: "A 19th-century Romanesque Revival palace that inspired Disney's Sleeping Beauty Castle. Perched on a hill in Bavaria, this fairy-tale castle offers breathtaking views and rich history.",
        imageUrl: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        builtPeriod: "1869-1886",
        significance: "Romanesque Revival architecture, inspired Disney castle",
        category: "Castle",
      },
      {
        id: "2",
        name: "The Parthenon", 
        location: "Athens, Greece",
        description: "An ancient temple dedicated to the goddess Athena, located on the Acropolis in Athens. This masterpiece of ancient Greek architecture represents the pinnacle of classical civilization.",
        imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        builtPeriod: "447-432 BC",
        significance: "Pinnacle of ancient Greek architecture and democracy",
        category: "Temple",
      },
      {
        id: "3",
        name: "Chichen Itza",
        location: "Yucatan, Mexico",
        description: "One of the New Seven Wonders of the World, this ancient Mayan city features the famous El Castillo pyramid. A testament to the advanced astronomical and mathematical knowledge of the Maya.",
        imageUrl: "https://images.unsplash.com/photo-1518638150340-f706e86654de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        builtPeriod: "600-1200 AD",
        significance: "New Seven Wonders, Mayan astronomical knowledge",
        category: "Pyramid",
      },
      {
        id: "4",
        name: "Taj Mahal",
        location: "Agra, India",
        description: "An ivory-white marble mausoleum built by Mughal emperor Shah Jahan as a tomb for his wife. This UNESCO World Heritage Site is considered one of the most beautiful buildings in the world.",
        imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        builtPeriod: "1632-1648",
        significance: "UNESCO World Heritage Site, symbol of love",
        category: "Mausoleum",
      },
    ];

    const accommodationsData: Accommodation[] = [
      {
        id: "1",
        name: "Ocean Resort & Spa",
        location: "Maldives",
        type: "Resort",
        starRating: 5,
        pricePerNight: "450.00",
        description: "Luxury overwater bungalows with pristine ocean views and world-class spa facilities.",
        imageUrl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        rating: "4.9",
        amenities: ["Spa", "Private Beach", "Water Sports", "Fine Dining"],
      },
      {
        id: "2",
        name: "City Boutique Hotel",
        location: "Paris, France", 
        type: "Hotel",
        starRating: 4,
        pricePerNight: "180.00",
        description: "Charming boutique hotel in the heart of Paris with modern amenities and classic French elegance.",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        rating: "4.3",
        amenities: ["Free WiFi", "Concierge", "Restaurant", "City Views"],
      },
      {
        id: "3",
        name: "Alpine Mountain Lodge",
        location: "Swiss Alps",
        type: "Lodge",
        starRating: 3,
        pricePerNight: "120.00",
        description: "Cozy mountain lodge with rustic charm and spectacular alpine views, perfect for outdoor enthusiasts.",
        imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        rating: "4.6",
        amenities: ["Mountain Views", "Hiking Trails", "Fireplace", "Restaurant"],
      },
      {
        id: "4",
        name: "Backpacker's Haven",
        location: "Bangkok, Thailand",
        type: "Hostel", 
        starRating: 2,
        pricePerNight: "25.00",
        description: "Budget-friendly hostel with clean facilities and social atmosphere, perfect for young travelers.",
        imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        rating: "4.1",
        amenities: ["Free WiFi", "Common Room", "Kitchen", "Laundry"],
      },
    ];

    // Populate maps
    destinationsData.forEach(dest => this.destinations.set(dest.id, dest));
    attractionsData.forEach(attr => this.attractions.set(attr.id, attr));
    restaurantsData.forEach(rest => this.restaurants.set(rest.id, rest));
    heritageData.forEach(heritage => this.heritage.set(heritage.id, heritage));
    accommodationsData.forEach(acc => this.accommodations.set(acc.id, acc));
  }

  // Destinations
  async getDestinations(): Promise<Destination[]> {
    return Array.from(this.destinations.values());
  }

  async getFeaturedDestinations(): Promise<Destination[]> {
    return Array.from(this.destinations.values()).filter(dest => dest.featured);
  }

  async searchDestinations(query: string): Promise<Destination[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.destinations.values()).filter(dest =>
      dest.name.toLowerCase().includes(lowercaseQuery) ||
      dest.country.toLowerCase().includes(lowercaseQuery) ||
      dest.type.toLowerCase().includes(lowercaseQuery) ||
      dest.description.toLowerCase().includes(lowercaseQuery)
    );
  }

  async getDestination(id: string): Promise<Destination | undefined> {
    return this.destinations.get(id);
  }

  // Attractions
  async getAttractions(): Promise<Attraction[]> {
    return Array.from(this.attractions.values());
  }

  async getAttraction(id: string): Promise<Attraction | undefined> {
    return this.attractions.get(id);
  }

  // Restaurants
  async getRestaurants(): Promise<Restaurant[]> {
    return Array.from(this.restaurants.values());
  }

  async getRestaurant(id: string): Promise<Restaurant | undefined> {
    return this.restaurants.get(id);
  }

  // Heritage Places
  async getHeritage(): Promise<HeritagePlace[]> {
    return Array.from(this.heritage.values());
  }

  async getHeritagePlace(id: string): Promise<HeritagePlace | undefined> {
    return this.heritage.get(id);
  }

  // Accommodations
  async getAccommodations(): Promise<Accommodation[]> {
    return Array.from(this.accommodations.values());
  }

  async getAccommodation(id: string): Promise<Accommodation | undefined> {
    return this.accommodations.get(id);
  }

  // Contacts
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date().toISOString(),
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
