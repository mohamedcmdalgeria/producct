import { Search, MessageCircle, Instagram, Facebook, Linkedin, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  'https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
  'https://images.pexels.com/photos/5632634/pexels-photo-5632634.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
  'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
  'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
  'https://images.pexels.com/photos/3970711/pexels-photo-3970711.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 w-full h-full">
        {HERO_IMAGES.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      <div className="relative z-10 w-full px-6 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-2xl space-y-6 md:space-y-8 glass-effect-strong rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight animate-fade-in-up">
                Discover our<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-300 to-blue-300">
                  products
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-100 font-light max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                Fresh from Our Farmers, Directly to You
              </p>

              <p className="text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed opacity-90 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Discover local fruits, vegetables, and farm products while supporting Algeria's small producers
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 md:pt-6 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              <button className="group relative px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                Join us
                <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition duration-300" />
              </button>

              <div className="flex items-center gap-6 md:gap-7">
                <a href="#" className="text-white hover:text-green-300 transition duration-300 transform hover:scale-110">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-green-300 transition duration-300 transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-green-300 transition duration-300 transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-green-300 transition duration-300 transform hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="relative max-w-md pt-4 md:pt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <input
                type="text"
                placeholder="Search for a product..."
                className="w-full px-5 md:px-6 py-3 md:py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 text-gray-800 placeholder-gray-500 shadow-lg"
              />
              <Search className="absolute right-4 md:right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <div className="flex flex-col items-center gap-3">
          <p className="text-white text-sm font-medium opacity-70">Scroll to explore</p>
          <ArrowDown className="w-5 h-5 text-white opacity-70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
