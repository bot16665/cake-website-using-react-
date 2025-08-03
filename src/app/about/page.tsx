export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Head Baker & Founder",
      bio: "With over 15 years of experience in pastry arts, Sarah started Sweet Dreams with a vision to create cakes that not only taste amazing but also tell a story.",
      image: "👩‍🍳"
    },
    {
      name: "Michael Chen",
      role: "Cake Designer",
      bio: "Michael brings creativity and precision to every cake design. His artistic background ensures each cake is a masterpiece.",
      image: "👨‍🎨"
    },
    {
      name: "Emma Rodriguez",
      role: "Pastry Chef",
      bio: "Emma specializes in creating unique flavor combinations and ensuring every cake meets our high standards of quality.",
      image: "👩‍🍳"
    }
  ];

  const values = [
    {
      icon: "❤️",
      title: "Passion",
      description: "We pour our heart into every cake we create, ensuring each one is made with love and care."
    },
    {
      icon: "🌱",
      title: "Quality",
      description: "We use only the finest ingredients and maintain the highest standards in our baking process."
    },
    {
      icon: "🎨",
      title: "Creativity",
      description: "Every cake is a unique work of art, customized to your specific needs and preferences."
    },
    {
      icon: "🤝",
      title: "Service",
      description: "We believe in exceptional customer service and go above and beyond to exceed your expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Sweet Dreams</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about creating beautiful, delicious cakes that make your special moments 
            even more memorable. Every cake tells a story, and we're here to help you tell yours.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sweet Dreams was born from a simple love of baking and a desire to create something 
                  truly special. What started as a small home bakery has grown into a beloved local 
                  business, serving our community with passion and dedication.
                </p>
                <p>
                  Our founder, Sarah Johnson, began baking cakes for friends and family, and quickly 
                  realized that each cake had the power to bring joy and create lasting memories. 
                  This realization inspired her to turn her passion into a business.
                </p>
                <p>
                  Today, we continue to operate with the same love and attention to detail that 
                  Sarah put into her very first cake. Every cake we create is made with fresh, 
                  high-quality ingredients and decorated with care and creativity.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🍰</div>
              <p className="text-gray-600 italic">"Every cake tells a story"</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-pink-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-8 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Our Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="opacity-90">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="opacity-90">Cakes Created</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="opacity-90">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="opacity-90">Unique Flavors</p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              To create beautiful, delicious cakes that not only satisfy your taste buds but also 
              bring joy to your special occasions. We believe that every celebration deserves a 
              cake that's as unique and special as the moment itself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/cakes" 
                className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
              >
                View Our Cakes
              </a>
              <a 
                href="/contact" 
                className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 