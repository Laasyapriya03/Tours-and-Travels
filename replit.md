# Bon Voyage Travel Website

## Overview

This is a modern travel agency website built with React, TypeScript, and Express.js. The application showcases destinations, attractions, restaurants, heritage places, and accommodations for travelers. It features a sleek UI built with shadcn/ui components and Tailwind CSS, with a clean blue and yellow travel-themed design. The backend provides REST API endpoints for fetching travel data, and the system is designed to support PostgreSQL database integration through Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom travel-themed color palette
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design
- **Storage Interface**: Abstract storage interface (`IStorage`) with in-memory implementation (`MemStorage`)
- **Development Setup**: Vite middleware integration for hot module replacement

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (configured but not yet connected)
- **Schema**: Shared schema definitions between client and server
- **Migration Strategy**: Drizzle Kit for database migrations

### API Structure
The REST API provides endpoints for:
- **Destinations**: `/api/destinations` (all), `/api/destinations/featured` (featured), `/api/destinations/search` (search), `/api/destinations/:id` (single)
- **Attractions**: `/api/attractions` (all), `/api/attractions/:id` (single)
- **Restaurants**: `/api/restaurants` (all), `/api/restaurants/:id` (single)
- **Heritage Places**: `/api/heritage` (all), `/api/heritage/:id` (single)
- **Accommodations**: `/api/accommodations` (all), `/api/accommodations/:id` (single)
- **Contact**: `/api/contact` (form submission)

### Component Architecture
- **Page Components**: Single home page with modular sections
- **UI Components**: Reusable cards for different content types (destinations, attractions, restaurants, heritage places, accommodations)
- **Modal System**: Search modal for destination search functionality
- **Form Handling**: Contact form with validation and toast notifications

### Development and Production Setup
- **Development**: Vite dev server with Express API integration
- **Production**: Vite build output served as static files by Express
- **Environment**: Replit-optimized with development banner and error overlays
- **Build Process**: TypeScript compilation and ES module bundling with esbuild

## External Dependencies

### UI and Styling
- **shadcn/ui**: Complete UI component library built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Headless UI primitives for accessibility
- **Lucide React**: Icon library for consistent iconography

### Data and State Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form validation and handling
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **Zod**: Runtime type validation and schema validation

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL provider
- **PostgreSQL**: Primary database system
- **Drizzle Kit**: Database migration and schema management tool

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

### Replit Integration
- **Replit Vite Plugins**: Development environment optimization
- **Runtime Error Modal**: Development error handling
- **Cartographer**: Replit-specific development tooling