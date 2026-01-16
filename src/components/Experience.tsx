import { experiences } from '../data/experience';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

/**
 * Experience Section Component
 * 
 * Displays your work experience in a timeline format.
 * Update experiences in src/data/experience.ts to add or modify entries.
 */
const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary-400 mx-auto mb-12"></div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-8 pb-8 border-l-2 border-primary-600/50 last:border-l-0 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-400 rounded-full border-4 border-slate-900"></div>

                {/* Content */}
                <div className="bg-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-700">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-xl text-primary-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                    
                    {/* Meta information */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="w-4 h-4 mr-1" />
                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start">
                        <span className="text-primary-400 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

