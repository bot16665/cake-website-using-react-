import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/blueberry.png"
          alt="Cake background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold text-white mb-4">
            Sweet Dreams
          </h1>
          <p className="text-xl text-white opacity-90 mb-8">
            Handcrafted cakes for every special occasion
          </p>
          <Link 
            href="/cakes" 
            className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            Explore Our Cakes
          </Link>
        </div>
      </section>

      {/* Featured Cakes Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Cakes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCakes.map((cake, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div 
                  className="h-64 bg-cover bg-center bg-no-repeat relative"
                  style={{ backgroundImage: `url('${cake.image}')` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cake.name}</h3>
                  <p className="text-gray-600 mb-4">{cake.description}</p>
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">About Sweet Dreams</h2>
          <p className="text-lg text-gray-600 mb-8">
            We specialize in creating beautiful, delicious cakes for weddings, birthdays, 
            anniversaries, and all your special moments. Every cake is made with love 
            and the finest ingredients.
          </p>
          <Link 
            href="/about"
            className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}

const featuredCakes = [
  {
    id: 1,
    name: "Chocolate Dream",
    description: "Rich chocolate cake with chocolate ganache and fresh berries",
    price: 1200,
    image: "/images/chocolate.png"
  },
  {
    id: 2,
    name: "Vanilla Delight",
    description: "Classic vanilla cake with buttercream frosting and sprinkles",
    price: 900,
    image: "/images/vanilla-cake.jpg"
  },
  {
    id: 3,
    name: "Red Velvet Special",
    description: "Southern-style red velvet with cream cheese frosting",
    price: 1400,
    image: "/images/red-velvet-cake.jpg"
  }
];

const services = [
  {
    icon: "🎂",
    title: "Custom Cakes",
    description: "Personalized designs for your special occasions"
  },
  {
    icon: "🚚",
    title: "Delivery",
    description: "Fresh delivery to your doorstep"
  },
  {
    icon: "🎨",
    title: "Design Consultation",
    description: "Free consultation for your perfect cake"
  }
];
