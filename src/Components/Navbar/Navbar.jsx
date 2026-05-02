import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 w-full px-4 lg:px-10 py-4">
            <div className="navbar bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 shadow-2xl">
                
                {/* --- Start Section --- */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-4 shadow-xl bg-[#1a1a1a] border border-white/5 rounded-xl w-52 gap-3 text-gray-300">
                            <li><Link to='/' className="hover:text-amber-400 transition-colors">Home</Link></li>
                            <li><Link to='/products' className="hover:text-amber-400 transition-colors">Products</Link></li>
                            <li><Link to='/lists' className="hover:text-amber-400 transition-colors">Lists</Link></li>
                        </ul>
                    </div>
                    {/* Brand Logo with a touch of Gold */}
                    <Link to="/" className="text-2xl font-bold tracking-tighter text-white hover:text-amber-400 transition-all">
                        DWELL<span className="text-amber-500 italic">ISH</span>
                    </Link>
                </div>

                {/* --- Center Section --- */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-[15px] font-medium uppercase tracking-widest text-gray-400">
                        <li><Link to='/' className="hover:text-white transition-all hover:scale-105">Home</Link></li>
                        <li><Link to='/products' className="hover:text-white transition-all hover:scale-105">Products</Link></li>
                        <li><Link to='/lists' className="hover:text-white transition-all hover:scale-105">Lists</Link></li>
                    </ul>
                </div>

                {/* --- End Section --- */}
                <div className="navbar-end gap-4">
                    <Link to="/signin" className="hidden sm:flex text-gray-300 hover:text-white font-medium text-sm transition-colors">
                        Sign In
                    </Link>
                    <Link to="/signup" className="btn bg-amber-500 hover:bg-amber-600 border-none text-black font-bold px-6 rounded-lg transition-transform active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;