const AllFurnitures = ({ furniture }) => {
    const { name, category, price, material, image, description } = furniture;
    
    return (
        <div className="card  bg-[#1a1a1a] border border-white/5 shadow-xl hover:border-amber-500/30 transition-all duration-300 group mt-12 rounded-lg p-4">
            <figure className="relative overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Price tag overlay for a smarter look */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-amber-400 px-3 py-1 rounded-lg font-bold border border-white/10">
                    ${price.toFixed(2)}
                </div>
            </figure>
            
            <div className="card-body text-gray-300">
                <h2 className="card-title text-white flex justify-between items-start">
                    {name}
                    <span className="text-[10px] uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-1 rounded">
                        {material}
                    </span>
                </h2>
                
                <p className="text-sm line-clamp-2 text-gray-400 font-light">
                    {description}
                </p>
                
                <div className="card-actions justify-between items-center mt-4 pt-4 border-t border-white/5">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                        {category}
                    </span>
                    <button className="btn btn-sm bg-transparent border-white/20 text-white hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllFurnitures;