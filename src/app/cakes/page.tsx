'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CakesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Cakes' },
    { id: 'birthday', name: 'Birthday Cakes' },
    { id: 'wedding', name: 'Wedding Cakes' },
    { id: 'chocolate', name: 'Chocolate Cakes' },
    { id: 'vanilla', name: 'Vanilla Cakes' },
    { id: 'specialty', name: 'Specialty Cakes' }
  ];

  const cakes = [
    {
      id: 1,
      name: "Chocolate Dream",
      category: "chocolate",
      description: "Rich chocolate cake with chocolate ganache and fresh berries",
      price: 1200,
      image: "/images/chocolate.png",
      flavors: ["Chocolate", "Vanilla"],
      size: "8 inch"
    },
    {
      id: 2,
      name: "Vanilla Delight",
      category: "vanilla",
      description: "Classic vanilla cake with buttercream frosting and sprinkles",
      price: 900,
      image: "/images/blueberry.png",
      flavors: ["Vanilla"],
      size: "6 inch"
    },
    {
      id: 3,
      name: "Red Velvet Special",
      category: "specialty",
      description: "Southern-style red velvet with cream cheese frosting",
      price: 1400,
      image: "/images/srawbeery.png",
      flavors: ["Red Velvet"],
      size: "10 inch"
    },
    {
      id: 4,
      name: "Birthday Bash",
      category: "birthday",
      description: "Colorful birthday cake with rainbow sprinkles and candles",
      price: 1100,
      image: "/images/orange.png",
      flavors: ["Vanilla", "Chocolate"],
      size: "8 inch"
    },
    {
      id: 5,
      name: "Wedding Elegance",
      category: "wedding",
      description: "Elegant white cake with delicate floral decorations",
      price: 3500,
      image: "/images/chocolate.png",
      flavors: ["Vanilla", "Almond"],
      size: "12 inch"
    },
    {
      id: 6,
      name: "Chocolate Lover's Paradise",
      category: "chocolate",
      description: "Triple chocolate cake with chocolate chips and ganache",
      price: 1500,
      image: "/images/blueberry.png",
      flavors: ["Chocolate"],
      size: "9 inch"
    }
  ];

  const filteredCakes = cakes.filter(cake => 
    selectedCategory === 'all' || cake.category === selectedCategory
  ).sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price') return a.price - b.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <div className="relative h-64 md:h-96 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/images/chocolate.png')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Cake Collection</h1>
            <p className="text-xl md:text-2xl opacity-90">Discover our delicious selection of handcrafted cakes</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCakes.map((cake) => (
            <div key={cake.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <span className="text-6xl">{cake.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cake.name}</h3>
                <p className="text-gray-600 mb-4">{cake.description}</p>
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-500">Size:</span>
                    <span className="text-sm font-medium">{cake.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Flavors:</span>
                    <div className="flex flex-wrap gap-1">
                      {cake.flavors.map((flavor, index) => (
                        <span key={index} className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full">
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pink-500">₹{cake.price}</span>
                  <Link 
                    href={`/cakes/${cake.id}`}
                    className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCakes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍰</div>
            <h3 className="text-xl font-semibold mb-2">No cakes found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more options</p>
          </div>
        )}
      </div>
    </div>
  );
} 