'use client';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Gym Management System',
      description: 'A full-featured system to manage gym memberships, schedules, and admin functions with comprehensive user management and billing features.',
      technologies: ['Python Django', 'HTML', 'CSS', 'MySQL'],
      image: 'https://readdy.ai/api/search-image?query=modern%20gym%20management%20dashboard%20interface%2C%20fitness%20center%20admin%20panel%2C%20membership%20tracking%20system%2C%20clean%20blue%20and%20white%20design%2C%20professional%20fitness%20software%20interface%2C%20workout%20scheduling%20display&width=600&height=400&seq=gym1&orientation=landscape',
      features: ['Membership Management', 'Payment Tracking', 'Schedule Management', 'Admin Dashboard'],
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Non-Teaching Staff Salary Management System',
      description: 'Academic project to automate and streamline staff salary management with payroll processing and employee record management.',
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
      image: 'https://readdy.ai/api/search-image?query=professional%20salary%20management%20software%20interface%2C%20employee%20payroll%20dashboard%2C%20HR%20management%20system%2C%20clean%20business%20application%20design%2C%20financial%20data%20visualization%2C%20modern%20office%20software&width=600&height=400&seq=salary1&orientation=landscape',
      features: ['Payroll Processing', 'Employee Records', 'Salary Calculation', 'Report Generation'],
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Rescue App (SIGHT 2.0 – UST Global)',
      description: 'Mobile-based rescue assistance application for emergency response developed for national-level tech innovation competition.',
      technologies: ['Flutter', 'Node.js', 'Mobile Development'],
      image: 'https://readdy.ai/api/search-image?query=emergency%20rescue%20mobile%20app%20interface%2C%20crisis%20response%20application%20design%2C%20emergency%20services%20app%20mockup%2C%20red%20and%20white%20color%20scheme%2C%20urgent%20care%20mobile%20interface%2C%20emergency%20contact%20system&width=600&height=400&seq=rescue1&orientation=landscape',
      features: ['Emergency Response', 'Real-time Location', 'Contact Management', 'Crisis Communication'],
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my development projects ranging from web applications to mobile solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className={`absolute top-4 left-4 ${project.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    Project #{project.id}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <i className="ri-check-line text-green-500 mr-1"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/lintothoppil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-github-line mr-2"></i>
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}