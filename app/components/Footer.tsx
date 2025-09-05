export const Footer = () => {
    return (
        <footer className="w-full bg-black text-white">
            <div className="max-w-2xl mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    {/* Left side - Logo and Newsletter */}
                    <div className="flex flex-col gap-6">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                        <h3 className="md:text-sm text-xs font-black font-serif bg-white p-2 rounded-full h-6 w-6 flex items-center text-black justify-center">G</h3>
                        <h4 className="md:text-base text-xs font-mono  font-black ml-2 ">GitRoll</h4>
                        </div>
                        
                        {/* Newsletter */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-sm font-medium text-gray-300">Stay updated</h3>
                            <div className="flex gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                />
                                <button className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors duration-200">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-medium text-gray-300">Quick Links</h3>
                        <div className="flex flex-col gap-2">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">How It Works</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                {/* Bottom section - HR and Copyright */}
                <hr className="border-gray-800 my-8" />
                <div className="text-center text-gray-400 text-sm">
                    © 2024 BusinessConnector. All rights reserved.
                </div>
            </div>
        </footer>
    )
}