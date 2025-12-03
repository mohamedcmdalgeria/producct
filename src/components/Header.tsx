import { Sprout } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#3d5a5c] text-white py-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sprout className="w-6 h-6" />
          <span className="text-xl font-bold">FELLAH</span>
        </div>

        <nav className="flex items-center gap-8">
          <a href="#" className="text-white hover:text-gray-200 transition">Home</a>
          <a href="#" className="text-white hover:text-gray-200 transition">About</a>
          <a href="#" className="text-white hover:text-gray-200 transition">Contact</a>
          <a href="#" className="text-white hover:text-gray-200 transition">Products</a>
          <a href="#" className="text-white hover:text-gray-200 transition">Stores</a>
          <a href="#" className="text-white hover:text-gray-200 transition">login</a>
          <button className="bg-white text-[#3d5a5c] px-6 py-2 rounded-md hover:bg-gray-100 transition font-medium">
            sign up
          </button>
        </nav>
      </div>
    </header>
  );
}
