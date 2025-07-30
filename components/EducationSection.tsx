'use client';

export default function EducationSection() {
  const education = [
    {
      degree: 'Master of Computer Application',
      period: '2024 - 2026',
      institution: 'St. Joseph\'s College of Engineering and Technology, Palai',
      university: 'KTU, Kerala',
      status: 'Current',
      description: 'Pursuing advanced studies in computer applications with focus on software development, algorithms, and system design.',
      icon: 'ri-graduation-cap-fill',
      color: 'bg-blue-500'
    },
    {
      degree: 'Bachelor of Computer Application',
      period: '2021 - 2024',
      institution: 'BVM Holy Cross College Cherpunkal, Kottayam',
      university: 'Mahatma Gandhi University, Kottayam',
      status: 'Completed',
      description: 'Completed comprehensive undergraduate program covering programming fundamentals, database management, and web technologies.',
      icon: 'ri-book-open-fill',
      color: 'bg-green-500'
    },
    {
      degree: 'Higher Secondary Education',
      period: '2019 - 2021',
      institution: 'Emmanuel\'s HSS, Kothanalloor',
      university: 'Kerala Board Of Higher Secondary Examination',
      status: 'Completed',
      description: 'Completed higher secondary education with focus on science stream, building foundation for computer science studies.',
      icon: 'ri-school-fill',
      color: 'bg-purple-500'
    },
    {
      degree: 'Secondary Education',
      period: '2019',
      institution: 'Emmanuel\'s HSS, Kothanalloor',
      university: 'Kerala Board Of Higher Secondary Examination',
      status: 'Completed',
      description: 'Successfully completed secondary education with strong academic performance in mathematics and science subjects.',
      icon: 'ri-pencil-fill',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Education Timeline
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My academic journey from secondary education to pursuing Master's degree in Computer Applications
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mr-4`}>
                          <i className={`${item.icon} text-xl text-white`}></i>
                        </div>
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            item.status === 'Current' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                      <p className="text-blue-600 font-semibold mb-2">{item.period}</p>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.institution}</h4>
                      <p className="text-gray-600 text-sm mb-3">{item.university}</p>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-trophy-line text-2xl"></i>
                  </div>
                  <p className="font-semibold text-gray-900">Strong Academic Performance</p>
                  <p className="text-gray-600 text-sm">Consistent high grades throughout education</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-lightbulb-line text-2xl"></i>
                  </div>
                  <p className="font-semibold text-gray-900">Technical Innovation</p>
                  <p className="text-gray-600 text-sm">Active participation in tech competitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}