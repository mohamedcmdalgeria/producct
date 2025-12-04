import { Search, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center animate-slide-bg"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          backgroundSize: '110%',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />

      <div className="relative z-10 w-full px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                Discover our<br />products
              </h1>

              <p className="text-2xl text-gray-100 font-light max-w-2xl">
                Fresh from Our Farmers, Directly to You
              </p>

              <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">
                Discover local fruits, vegetables, and farm products while supporting Algeria's small producers
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button className="bg-[#2d7a5f] hover:bg-[#236349] text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
                Join us
              </button>

              <div className="flex items-center gap-5">
                <MessageCircle className="w-6 h-6 text-white hover:text-[#2d7a5f] transition cursor-pointer" />
                <Instagram className="w-6 h-6 text-white hover:text-[#2d7a5f] transition cursor-pointer" />
                <Facebook className="w-6 h-6 text-white hover:text-[#2d7a5f] transition cursor-pointer" />
                <Linkedin className="w-6 h-6 text-white hover:text-[#2d7a5f] transition cursor-pointer" />
              </div>
            </div>

            <div className="relative max-w-md pt-4">
              <input
                type="text"
                placeholder="Search for a product..."
                className="w-full px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d7a5f] transition text-gray-800"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white opacity-60" />
          <div className="w-2 h-2 rounded-full bg-white opacity-40" />
          <div className="w-2 h-2 rounded-full bg-white opacity-40" />
        </div>
      </div>
    </section>
  );
}
