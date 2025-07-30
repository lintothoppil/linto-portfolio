'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="font-pacifico">Linto</span>
            </h3>
            <p className="text-gray-400 mb-4">
              MCA Student | Web & Software Developer
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/lintothoppil" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/linto-mathew-joy-2748b633b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a 
                href="mailto:lintothoppiljoy@gmail.com" 
                className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <i className="ri-mail-fill"></i>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</a></li>
              <li><a href="#education" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Education</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                Kothanalloor, Kottayam, Kerala
              </p>
              <p className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                9778201227
              </p>
              <p className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                lintothoppiljoy@gmail.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Linto Mathew Joy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}