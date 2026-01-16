import { personalInfo } from '../data/personalInfo';
import { experiences } from '../data/experience';
import { skills } from '../data/skills';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

/**
 * Home Component
 * 
 * Combines introduction, career timeline, and skills into one section.
 * This is the main landing page of the portfolio.
 */
const Home = () => {
  // Helper function to parse date string "MMM YYYY" to comparable format
  const parseDate = (dateStr: string): number => {
    if (dateStr === 'Present') return 999999; // Very high number for Present
    
    const months: { [key: string]: number } = {
      'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
      'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
    };
    
    const parts = dateStr.split(' ');
    if (parts.length !== 2) return 0;
    
    const month = months[parts[0]] || 0;
    const year = parseInt(parts[1]) || 0;
    
    return year * 100 + month; // e.g., "Aug 2025" -> 202508
  };

  // Timeline with only experiences, reverse chronological (most recent first)
  const timeline = experiences
    .map(exp => ({ ...exp, type: 'experience' as const }))
    .sort((a, b) => {
      // Prioritize "Present" items first, then sort by end date (most recent first)
      if (a.endDate === 'Present' && b.endDate !== 'Present') return -1;
      if (b.endDate === 'Present' && a.endDate !== 'Present') return 1;
      
      const dateA = parseDate(a.endDate);
      const dateB = parseDate(b.endDate);
      
      return dateB - dateA; // Descending order (most recent first)
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20">
      {/* Introduction Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Main Heading with Profile Picture */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Hi, I'm <span className="text-primary-400">{personalInfo.name}</span>
            </h1>
          </div>

          {/* Title/Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            {personalInfo.title}
          </h2>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {personalInfo.socialLinks.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            )}
            {personalInfo.socialLinks.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            )}
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-300 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Timeline Section - Alternating Left-Right Pattern */}
      <div className="container mx-auto px-6 py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          {/* Timeline with alternating pattern */}
          <div className="relative">
            {/* Vertical center line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-500 transform -translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12 md:space-y-16">
              {timeline.map((item, index) => {
                const isEven = index % 2 === 0;
                // On desktop: even items on left, odd on right. On mobile: all stacked
                return (
                  <div
                    key={item.id}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <div
                      className={`w-full md:w-5/12 ${
                        isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                      }`}
                    >
                      <div className="bg-slate-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-primary-500/50 group">
                        <div className={`flex flex-wrap gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium">
                            {item.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                          {item.position}
                        </h3>
                        <p className="text-xl text-primary-400 font-semibold mb-3">
                          {item.company}
                        </p>
                        <div className={`flex flex-wrap gap-3 text-sm text-gray-400 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center">
                            <FaCalendarAlt className="w-4 h-4 mr-1" />
                            <span>
                              {item.startDate} - {item.endDate}
                            </span>
                          </div>
                        </div>
                        {item.description && item.description.length > 0 && (
                          <ul className={`space-y-2 mt-4 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                            {item.description.map((desc, descIndex) => (
                              <li key={descIndex} className="text-gray-300 flex items-start">
                                <span className="text-primary-400 mr-2 mt-1 flex-shrink-0">•</span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Center connector with dot - hidden on mobile */}
                    <div className="hidden md:flex flex-shrink-0 w-2/12 justify-center items-center">
                      <div className="relative">
                        <div className="w-4 h-4 bg-primary-400 rounded-full border-4 border-slate-900 shadow-lg z-10"></div>
                        <div className="absolute inset-0 w-4 h-4 bg-primary-400 rounded-full animate-ping opacity-20"></div>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-400 mx-auto mb-12"></div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-slate-700"
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
      </div>
    </div>
  );
};

export default Home;

