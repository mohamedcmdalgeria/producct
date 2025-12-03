import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const products = [
  {
    image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=800",
    name: "zit zitoun",
    tags: ["tizi_wezou_farm"],
    price: "700Da/Liter"
  },
  {
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "toumatich",
    tags: ["toumaticha_cook"],
    price: "150Da/kg"
  },
  {
    image: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "batata",
    tags: ["eat_cooking_farm"],
    price: "80Da/kg"
  },
  {
    image: "https://images.pexels.com/photos/33260/honey-sweet-syrup-organic.jpg?auto=compress&cs=tinysrgb&w=800",
    name: "Asel_nature",
    tags: ["for_cooking_farm"],
    price: "1200Da/kg"
  },
  {
    image: "https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "deglet_nour",
    tags: ["deglet_jnon"],
    price: "450Da/kg"
  },
  {
    image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "moudarine",
    tags: ["klemn_moudarin_wintroz"],
    price: "200Da/kg"
  },
  {
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "fromage",
    tags: ["tourmada"],
    price: "950Da/kg"
  },
  {
    image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "lben_elmaraa",
    tags: ["setif_elmil_mehlag"],
    price: "300Da/Liter"
  },
  {
    image: "https://images.pexels.com/photos/6646656/pexels-photo-6646656.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "halib_frech",
    tags: ["mna_fama"],
    price: "350Da/Liter"
  }
];

export default function ProductsSection() {
  return (
    <section className="bg-[#3d5a5c] py-12 px-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Search by Category</h2>

          <div className="relative">
            <select className="appearance-none bg-white text-gray-700 px-6 py-2 pr-10 rounded-lg focus:outline-none cursor-pointer">
              <option>Choose category</option>
              <option>Vegetables</option>
              <option>Fruits</option>
              <option>Dairy</option>
              <option>Oils</option>
              <option>Honey</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              tags={product.tags}
              price={product.price}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronLeft className="w-5 h-5 text-[#3d5a5c]" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
            <ChevronRight className="w-5 h-5 text-[#3d5a5c]" />
          </button>
        </div>
      </div>
    </section>
  );
}
