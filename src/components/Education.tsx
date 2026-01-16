import { education } from '../data/education';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

/**
 * Education Section Component
 * 
 * Displays your educational background.
 * Update education in src/data/education.ts to add or modify entries.
 */
const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-400 mx-auto mb-12"></div>

          {/* Education Cards */}
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-slate-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-700"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {edu.school}
                    </h3>
                    <p className="text-xl text-primary-400 font-semibold">
                      {edu.degree}
                      {edu.field && `, ${edu.field}`}
                    </p>
                  </div>
                  <FaGraduationCap className="w-8 h-8 text-primary-400 flex-shrink-0" />
                </div>

                {/* Meta information */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  {edu.location && (
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <FaCalendarAlt className="w-4 h-4 mr-1" />
                    <span>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  {edu.gpa && (
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded font-medium">
                      {edu.gpa}
                    </span>
                  )}
                </div>

                {/* Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Activities */}
                {edu.activities && edu.activities.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Activities and Societies:
                    </h4>
                    <ul className="space-y-1">
                      {edu.activities.map((activity, index) => (
                        <li key={index} className="text-gray-300 flex items-start">
                          <span className="text-primary-400 mr-2 mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

