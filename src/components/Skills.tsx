import { skills } from '../data/skills';

/**
 * Skills Section Component
 * 
 * Displays your skills organized by category.
 * Update skills.ts to add or modify skill categories.
 */
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-800"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-primary-400 mx-auto mb-12"></div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-700"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

