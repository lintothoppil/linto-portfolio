
'use client';

export default function HeroSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Linto_Mathew_Joy_Resume.pdf';
    link.click();
  };

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=modern%20minimalist%20workspace%20with%20coding%20elements%2C%20clean%20desk%20setup%20with%20laptop%20and%20coffee%2C%20soft%20natural%20lighting%2C%20professional%20developer%20environment%2C%20blue%20and%20white%20color%20scheme%2C%20simple%20geometric%20patterns%2C%20contemporary%20office%20space&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="block">Linto</span>
              <span className="block text-blue-400">Mathew Joy</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-4 font-medium">
              MCA Student | Web & Software Developer
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Final-year MCA student with a BCA background and solid foundation in computer science, 
              passionate about building algorithmic and web-based solutions. Skilled in full-stack 
              development using HTML, CSS, PHP, Python Django, MySQL, and more.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Get In Touch
            </a>
            <button 
              onClick={handleDownloadResume}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-download-line mr-2"></i>
              Download Resume
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-200">
            <div className="flex items-center">
              <i className="ri-map-pin-line mr-2 text-blue-400"></i>
              Kothanalloor, Kottayam, Kerala
            </div>
            <div className="flex items-center">
              <i className="ri-mail-line mr-2 text-blue-400"></i>
              lintothoppiljoy@gmail.com
            </div>
            <div className="flex items-center">
              <i className="ri-phone-line mr-2 text-blue-400"></i>
              9778201227
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="w-8 h-8 flex items-center justify-center text-white hover:text-blue-400 transition-colors cursor-pointer">
          <i className="ri-arrow-down-line text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
