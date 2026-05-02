const Banner = () => {
    return (
        <div className="relative hero min-h-[80vh] bg-[#121212] overflow-hidden rounded-4xl px-6 py-4 shadow-2xl">
            {/* Subtle radial gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>

            <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-20 z-10 px-6">
                
                {/* Image Container with "Smart" Border & Shadow */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-800 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <img
                        src="/spacejoy-IH7wPsjwomc-unsplash.jpg" // Note: In Vite, files in 'public' are served from '/'
                        className="relative max-w-sm md:max-w-md rounded-2xl shadow-2xl border border-white/10 object-cover"
                        alt="Modern Interior"
                    />
                </div>

                {/* Content Section */}
                <div className="max-w-2xl text-center lg:text-left">
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                        Curating the <br /> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-200">
                            Art of Living.
                        </span>
                    </h1>
                    
                    <p className="py-8 text-gray-400 text-lg lg:text-xl leading-relaxed font-light max-w-lg">
                        Discover a collection where modern architecture meets timeless comfort. 
                        Elevate your sanctuary with pieces designed for the discerning eye.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button className="btn bg-amber-500 hover:bg-amber-600 border-none text-black font-bold px-8 rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all active:scale-95">
                            Explore Collection
                        </button>
                        <button className="btn btn-outline border-white/20 text-white hover:bg-white/5 hover:border-white px-8 rounded-lg">
                            Our Story
                        </button>
                    </div>
                    
                    {/* Minimalist Stats - Adds Professional "Smart" Creditability */}
                    <div className="mt-12 flex gap-8 justify-center lg:justify-start border-t border-white/10 pt-8">
                        <div>
                            <p className="text-white font-bold text-xl">12k+</p>
                            <p className="text-gray-500 text-xs uppercase tracking-widest">Premium Products</p>
                        </div>
                        <div>
                            <p className="text-white font-bold text-xl">45+</p>
                            <p className="text-gray-500 text-xs uppercase tracking-widest">Design Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;