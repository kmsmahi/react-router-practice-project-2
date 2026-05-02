import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-gray-400 py-16 border-t border-white/5 mt-12 rounded-4xl shadow-2xl">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
                            DWELL<span className="text-amber-500 italic">ISH</span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Elevating modern living through curated architectural decor and timeless interior essentials. 
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons with Hover Glow */}
                            {[1, 2, 3].map((i) => (
                                <a key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all cursor-pointer">
                                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
                            <li><Link to="/jobs" className="hover:text-amber-500 transition-colors">Careers</Link></li>
                            <li><Link to="/press" className="hover:text-amber-500 transition-colors">Press Kit</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Support</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/shipping" className="hover:text-amber-500 transition-colors">Shipping Policy</Link></li>
                            <li><Link to="/returns" className="hover:text-amber-500 transition-colors">Returns & Exchanges</Link></li>
                            <li><Link to="/faq" className="hover:text-amber-500 transition-colors">FAQs</Link></li>
                            <li><Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column - The "Smart" Touch */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-widest text-xs">Stay Inspired</h4>
                        <p className="text-sm mb-4">Join our list for exclusive drops and design tips.</p>
                        <div className="flex flex-col gap-2">
                            <input 
                                type="text" 
                                placeholder="email@example.com" 
                                className="input input-bordered bg-white/5 border-white/10 text-white rounded-lg focus:border-amber-500 focus:outline-none transition-all w-full" 
                            />
                            <button className="btn bg-white hover:bg-amber-500 hover:text-black text-black border-none font-bold rounded-lg transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} Dwellish Interiors. All rights reserved.</p>
                    <p className="flex gap-6">
                        <span>Designed for Excellence</span>
                        <span className="text-amber-500 underline underline-offset-4 cursor-pointer">Back to Top</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;