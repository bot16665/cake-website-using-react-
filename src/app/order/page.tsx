'use client';

import { useState } from 'react';

export default function OrderPage() {
  const [orderData, setOrderData] = useState({
    customerName: '',
    email: '',
    phone: '',
    occasion: '',
    eventDate: '',
    cakeType: '',
    size: '',
    flavor: '',
    frosting: '',
    decorations: [] as string[],
    specialRequests: '',
    deliveryAddress: '',
    deliveryDate: '',
    deliveryTime: ''
  });

  const cakeTypes = [
    { id: 'birthday', name: 'Birthday Cake', basePrice: 900 },
    { id: 'wedding', name: 'Wedding Cake', basePrice: 5000 },
    { id: 'anniversary', name: 'Anniversary Cake', basePrice: 1500 },
    { id: 'graduation', name: 'Graduation Cake', basePrice: 1200 },
    { id: 'custom', name: 'Custom Design', basePrice: 2000 }
  ];

  const sizes = [
    { id: '6inch', name: '6 inch (6-8 people)', price: 0 },
    { id: '8inch', name: '8 inch (10-12 people)', price: 400 },
    { id: '10inch', name: '10 inch (15-20 people)', price: 800 },
    { id: '12inch', name: '12 inch (25-30 people)', price: 1200 }
  ];

  const flavors = [
    'Vanilla', 'Chocolate', 'Red Velvet', 'Carrot', 'Lemon', 'Strawberry', 'Coffee', 'Pumpkin'
  ];

  const frostings = [
    'Buttercream', 'Cream Cheese', 'Chocolate Ganache', 'Whipped Cream', 'Fondant'
  ];

  const decorations = [
    'Fresh Flowers', 'Edible Images', 'Sprinkles', 'Chocolate Shavings', 'Fruit Toppings', 'Custom Message'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const handleDecorationChange = (decoration: string) => {
    setOrderData({
      ...orderData,
      decorations: orderData.decorations.includes(decoration)
        ? orderData.decorations.filter(d => d !== decoration)
        : [...orderData.decorations, decoration]
    });
  };

  const calculateTotal = () => {
    const selectedCake = cakeTypes.find(cake => cake.id === orderData.cakeType);
    const selectedSize = sizes.find(size => size.id === orderData.size);
    const decorationCost = orderData.decorations.length * 200; // ₹200 per decoration
    
    return (selectedCake?.basePrice || 0) + (selectedSize?.price || 0) + decorationCost;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', orderData);
    alert('Thank you for your order! We will contact you within 24 hours to confirm details.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Place Your Order</h1>
          <p className="text-lg text-gray-600">
            Customize your perfect cake and we'll bring your vision to life!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Customer Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={orderData.customerName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={orderData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={orderData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">
                  Occasion *
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  value={orderData.occasion}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select an occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="wedding">Wedding</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="graduation">Graduation</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={orderData.eventDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Cake Details */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cake Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cakeType" className="block text-sm font-medium text-gray-700 mb-2">
                  Cake Type *
                </label>
                <select
                  id="cakeType"
                  name="cakeType"
                  value={orderData.cakeType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select cake type</option>
                  {cakeTypes.map(cake => (
                    <option key={cake.id} value={cake.id}>
                      {cake.name} - Starting at ${cake.basePrice}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
                  Size *
                </label>
                <select
                  id="size"
                  name="size"
                  value={orderData.size}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select size</option>
                  {sizes.map(size => (
                    <option key={size.id} value={size.id}>
                      {size.name} {size.price > 0 ? `(+$${size.price})` : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="flavor" className="block text-sm font-medium text-gray-700 mb-2">
                  Flavor *
                </label>
                <select
                  id="flavor"
                  name="flavor"
                  value={orderData.flavor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select flavor</option>
                  {flavors.map(flavor => (
                    <option key={flavor} value={flavor}>{flavor}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="frosting" className="block text-sm font-medium text-gray-700 mb-2">
                  Frosting Type *
                </label>
                <select
                  id="frosting"
                  name="frosting"
                  value={orderData.frosting}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select frosting</option>
                  {frostings.map(frosting => (
                    <option key={frosting} value={frosting}>{frosting}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Decorations */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Decorations (Optional) - $5 each
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {decorations.map(decoration => (
                  <label key={decoration} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={orderData.decorations.includes(decoration)}
                      onChange={() => handleDecorationChange(decoration)}
                      className="rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                    />
                    <span className="text-sm text-gray-700">{decoration}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div className="mt-6">
              <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={orderData.specialRequests}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Any special instructions, dietary requirements, or design preferences..."
              />
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Address *
                </label>
                <textarea
                  id="deliveryAddress"
                  name="deliveryAddress"
                  value={orderData.deliveryAddress}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Full delivery address..."
                />
              </div>
              <div>
                <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Date *
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={orderData.deliveryDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Delivery Time *
                </label>
                <select
                  id="deliveryTime"
                  name="deliveryTime"
                  value={orderData.deliveryTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                  <option value="evening">Evening (3 PM - 6 PM)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Base Cake Price:</span>
                  <span>₹{cakeTypes.find(cake => cake.id === orderData.cakeType)?.basePrice || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>Size Upgrade:</span>
                  <span>₹{sizes.find(size => size.id === orderData.size)?.price || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span>Decorations ({orderData.decorations.length}):</span>
                  <span>₹{orderData.decorations.length * 200}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span>₹300</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span>₹{calculateTotal() + 300}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              Place Order
            </button>
            <p className="text-sm text-gray-600 mt-4">
              * We will contact you within 24 hours to confirm your order details and final pricing.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
} 