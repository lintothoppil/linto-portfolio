
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed mb-6">
                  I am a passionate final-year MCA student currently pursuing my Master's degree at 
                  St. Joseph's College of Engineering and Technology, Palai, under KTU Kerala. 
                  My journey in computer science began with my BCA from BVM Holy Cross College, 
                  Cherpunkal, where I developed a strong foundation in programming and software development.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Throughout my academic journey, I have cultivated a deep interest in web development, 
                  backend systems, and creating real-world software solutions. I believe in the power 
                  of technology to solve complex problems and am always eager to learn new technologies 
                  and frameworks.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  My approach to development focuses on writing clean, efficient code while ensuring 
                  excellent user experiences. I enjoy working on full-stack projects that challenge 
                  me to think creatively and implement innovative solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
                    <i className="ri-graduation-cap-line text-2xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                  <p className="text-gray-600 text-sm">MCA Student at SJCET Palai</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-lg mb-4">
                    <i className="ri-code-line text-2xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Focus</h3>
                  <p className="text-gray-600 text-sm">Full-Stack Development</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://static.readdy.ai/image/a665395007b79096fbaaa32cf6ba34ab/7e9dc12beedb6c6a82d27db54c02cf2f.jfif"
                  alt="Linto Mathew Joy"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
                  <i className="ri-user-line text-3xl text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
