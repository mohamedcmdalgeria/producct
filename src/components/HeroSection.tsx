import { Search, MessageCircle, Instagram, Facebook, Linkedin, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/3571501/3571501-hd_1280_720_30fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      <div className="relative z-10 w-full px-6 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Discover our<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-300 to-blue-300">
                  products
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-100 font-light max-w-xl leading-relaxed">
                Fresh from Our Farmers, Directly to You
              </p>

              <p className="text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed opacity-90">
                Discover local fruits, vegetables, and farm products while supporting Algeria's small producers
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 md:pt-6">
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

            <div className="relative max-w-md pt-4 md:pt-6">
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="flex flex-col items-center gap-3">
          <p className="text-white text-sm font-medium opacity-70">Scroll to explore</p>
          <ArrowDown className="w-5 h-5 text-white opacity-70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
