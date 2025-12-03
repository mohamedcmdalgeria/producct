interface ProductCardProps {
  image: string;
  name: string;
  tags: string[];
  price: string;
}

export default function ProductCard({ image, name, tags, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      <div className="relative">
        <div className="h-2 bg-gradient-to-r from-blue-400 to-teal-500"></div>
        <div className="p-6 pt-4 pb-0">
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-[#3d5a5c]">{name}</h3>

        <div className="text-gray-700">
          <p className="text-sm font-medium space-x-2">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </p>
        </div>

        <div className="text-lg font-semibold text-gray-800">
          price :<span className="text-[#8b6914] ml-1">{price}</span>
        </div>

        <button className="w-full bg-[#2d7a5f] text-white py-3 rounded-lg hover:bg-[#236349] transition font-semibold text-base">
          See details
        </button>
      </div>
    </div>
  );
}
