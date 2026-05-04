import { useParams } from "react-router";
import useProducts from "../../Hooks/useProducts";

const SingleFurnitureDetails = () => {
    const { id } =useParams();
    const { products } = useProducts();
    const product=products.find(p=>String(p.id)===id);
    
    return (
        <div className="min-h-[80vh] flex items-center justify-center py-20 bg-[#121212]">
    {product ? (
        <div className="container mx-auto px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
                
                {/* --- Left: Cinematic Product Image --- */}
                <div className="w-full lg:w-1/2 group">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1a1a1a] shadow-2xl">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Status Tag */}
                        <div className="absolute top-6 left-6">
                            <span className="bg-amber-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                Limited Edition
                            </span>
                        </div>
                    </div>
                </div>

                {/* --- Right: Smart Details Section --- */}
                <div className="w-full lg:w-1/2 space-y-8">
                    <div className="space-y-4">
                        <nav className="text-xs uppercase tracking-widest text-amber-500/80 font-medium">
                            {product.category} / {product.material}
                        </nav>
                        <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                            {product.name}
                        </h1>
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-light text-white">${product.price.toFixed(2)}</span>
                            <div className="h-4 w-[1px] bg-white/20"></div>
                            <span className="text-sm text-gray-500 uppercase tracking-widest font-light">Free Shipping</span>
                        </div>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed font-light border-l-2 border-amber-500/30 pl-6 italic">
                        "{product.description}"
                    </p>

                    {/* Smart Selection / Specs */}
                    <div className="grid grid-cols-2 gap-6 py-8 border-y border-white/5">
                        <div>
                            <h4 className="text-white text-xs uppercase tracking-tighter mb-1">Material</h4>
                            <p className="text-gray-400 text-sm">{product.material || "Premium Selection"}</p>
                        </div>
                        <div>
                            <h4 className="text-white text-xs uppercase tracking-tighter mb-1">Dimensions</h4>
                            <p className="text-gray-400 text-sm">Standard Architectural Fit</p>
                        </div>
                    </div>

                    {/* Action Section */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="btn flex-1 bg-amber-500 hover:bg-amber-600 border-none text-black font-bold h-16 rounded-xl text-lg shadow-[0_10px_30px_rgba(245,158,11,0.15)] transition-all active:scale-95">
                            Add to Wishlist
                        </button>
                        <button className="btn btn-outline border-white/20 text-white hover:bg-white/5 h-16 px-8 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    ) : (
        /* Smart Skeleton/Empty State */
        <div className="text-center space-y-4">
            <span className="loading loading-spinner loading-lg text-amber-500"></span>
            <p className="text-gray-500 uppercase tracking-widest text-xs">Fetching Excellence...</p>
        </div>
    )}
</div>
    );
};

export default SingleFurnitureDetails;