import { useState } from "react";
import useProducts from "../Hooks/useProducts";

const Products = () => {
    const { products } = useProducts();
    const[search,setsearch]= useState('');
    const term=search.trim().toLowerCase();
    const searchedproducts=term? products.filter(product=>product.name.toLowerCase().includes(term)) : products;

    return (
        <div className="bg-[#121212] min-h-screen pb-20">
            {/* Header Section */}
            <div className="flex items-center justify-between px-8 lg:px-20 pt-12">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                        Our <span className="text-amber-500">Collection</span>
                        <span className="ml-3 text-md font-light text-white-500 uppercase tracking-widest">
                         
                            ({products.length} Items)
                        </span>
                    </h1>
                </div>
                {/* <div> 
                    <button className="btn bg-amber-500 hover:bg-amber-600 border-none text-black px-8">
                        Search
                    </button>
                </div> */}
                <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
               <path d="m21 21-4.3-4.3"></path>
               </g>
               </svg>
               {/* search */}


               <input onChange={(e)=>setsearch(e.target.value)} type="search" className="grow" placeholder="Search" value={search}/>



              <kbd className="kbd kbd-sm">⌘</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8 lg:px-20 mt-12">
                {
                    searchedproducts.map((product) => {
                       
                        const { id, name, image, description, price } = product;
                        
                        return (
                            <div key={id} className="card bg-[#1a1a1a] border border-white/5 shadow-xl hover:border-amber-500/30 transition-all duration-300 group rounded-xl overflow-hidden">
                                <figure className="relative h-64 overflow-hidden">
                                    <img 
                                        src={image} 
                                        alt={name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                    />
                                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md text-amber-500 font-bold border border-white/10">
                                        ${price}
                                    </div>
                                </figure>
                                
                                <div className="card-body p-6">
                                    <h2 className="card-title text-white font-semibold">{name}</h2>
                                    <p className="text-gray-400 text-sm line-clamp-2 font-light">{description}</p>
                                    
                                    <div className="card-actions mt-4 pt-4 border-t border-white/5">
                                        <button className="btn btn-block bg-white hover:bg-amber-500 hover:text-black text-black border-none transition-all font-bold">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Products;