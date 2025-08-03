export default function ServicesPage() {
  const services = [
    {
      icon: "🎂",
      title: "Custom Cake Design",
      description: "Personalized cake designs tailored to your specific needs and preferences. We work closely with you to create the perfect cake for your special occasion.",
      features: [
        "Free consultation",
        "Custom flavor combinations",
        "Personalized decorations",
        "Allergy-friendly options"
      ],
      price: "Starting from ₹1500"
    },
    {
      icon: "🎨",
      title: "Wedding Cakes",
      description: "Elegant and sophisticated wedding cakes that will be the centerpiece of your special day. From intimate gatherings to grand celebrations.",
      features: [
        "Multi-tier designs",
        "Fresh flower decorations",
        "Delivery and setup",
        "Tasting sessions"
      ],
      price: "Starting from ₹5000"
    },
    {
      icon: "🎉",
      title: "Birthday Cakes",
      description: "Fun and festive birthday cakes for all ages. From simple designs to elaborate themed cakes that will make the celebration unforgettable.",
      features: [
        "Age-appropriate designs",
        "Themed decorations",
        "Edible images",
        "Quick turnaround"
      ],
      price: "Starting from ₹900"
    },
    {
      icon: "🚚",
      title: "Delivery Service",
      description: "Reliable delivery service to ensure your cake arrives fresh and beautiful. We handle everything with care to maintain the cake's appearance.",
      features: [
        "Same-day delivery",
        "Careful packaging",
        "Delivery tracking",
        "Setup assistance"
      ],
      price: "Starting from ₹300"
    },
    {
      icon: "📞",
      title: "Consultation",
      description: "Free consultation sessions to discuss your cake requirements, design preferences, and budget. We're here to help you make the perfect choice.",
      features: [
        "Free initial consultation",
        "Design recommendations",
        "Budget planning",
        "Tasting samples"
      ],
      price: "Free"
    },
    {
      icon: "🌱",
      title: "Special Dietary Needs",
      description: "Catering to various dietary requirements including gluten-free, dairy-free, vegan, and nut-free options without compromising on taste.",
      features: [
        "Gluten-free options",
        "Dairy-free alternatives",
        "Vegan cakes",
        "Nut-free options"
      ],
      price: "Starting from ₹1200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of cake services to make your special occasions 
            even more memorable. From custom designs to dietary accommodations, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-xl font-bold text-pink-500 mb-4">{service.price}</div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3">What's included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="text-pink-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Discuss your requirements and preferences</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-gray-600 text-sm">Create a custom design for your cake</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Creation</h3>
              <p className="text-gray-600 text-sm">Bake and decorate your perfect cake</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">4</span>
              </div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm">Deliver your cake fresh and beautiful</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contact us today to discuss your cake requirements and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/order" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-500 transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 