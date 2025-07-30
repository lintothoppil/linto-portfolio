'use client';

export default function SkillsSection() {
  const skills = [
    { name: 'C', icon: 'ri-code-line', level: 85 },
    { name: 'C++', icon: 'ri-code-s-line', level: 80 },
    { name: 'Python', icon: 'ri-code-line', level: 90 },
    { name: 'PHP', icon: 'ri-code-line', level: 85 },
    { name: 'Java', icon: 'ri-cup-line', level: 75 },
    { name: 'JavaScript', icon: 'ri-javascript-line', level: 85 },
    { name: 'HTML', icon: 'ri-html5-line', level: 95 },
    { name: 'CSS', icon: 'ri-css3-line', level: 90 },
    { name: 'MySQL', icon: 'ri-database-line', level: 85 },
  ];

  const categories = [
    {
      title: 'Programming Languages',
      icon: 'ri-code-box-line',
      skills: ['C', 'C++', 'Python', 'PHP', 'Java', 'JavaScript'],
      color: 'bg-blue-500'
    },
    {
      title: 'Web Technologies',
      icon: 'ri-global-line',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      color: 'bg-green-500'
    },
    {
      title: 'Database',
      icon: 'ri-database-line',
      skills: ['MySQL'],
      color: 'bg-purple-500'
    },
    {
      title: 'Frameworks',
      icon: 'ri-stack-line',
      skills: ['Django', 'Flutter', 'Node.js'],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive set of technical skills acquired through academic projects and hands-on experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${category.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mr-3">
                    <i className={`${skill.icon} text-lg`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                    <p className="text-sm text-gray-600">{skill.level}% Proficiency</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}