import { Search, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-12 px-8">
      <div className="container mx-auto flex items-center justify-between gap-12">
        <div className="flex-1 relative">
          <div className="absolute -top-8 -left-8 w-24 h-24">
            <svg viewBox="0 0 100 100" className="text-[#3d5a5c] opacity-30">
              <path d="M50,10 Q30,30 50,50 Q70,30 50,10" fill="currentColor" />
              <path d="M50,50 L50,80" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </div>

          <img
            src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Farmer with vegetables"
            className="rounded-lg w-full max-w-md mx-auto relative z-10"
          />

          <div className="absolute -bottom-8 -right-8 w-24 h-24">
            <svg viewBox="0 0 100 100" className="text-[#3d5a5c] opacity-30">
              <path d="M20,30 Q40,20 60,30 Q80,40 70,60 Q60,80 40,70 Q20,60 20,40 Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold text-gray-800">
            Discover our<br />products
          </h1>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">
              Fresh from Our Farmers, Directly to You
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Discover local fruits, vegetables, and farm products<br />
              while supporting Algeria's small producers
            </p>
          </div>

          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-[#3d5a5c]" />
            <Instagram className="w-5 h-5 text-[#3d5a5c]" />
            <Facebook className="w-5 h-5 text-[#3d5a5c]" />
            <Linkedin className="w-5 h-5 text-[#3d5a5c]" />
          </div>

          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="search for a Product"
              className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#3d5a5c] transition"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
