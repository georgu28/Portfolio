import { personalInfo } from '../data/personalInfo';
import { experiences } from '../data/experience';
import { education } from '../data/education';

/**
 * About Section Component
 * 
 * Displays a biography with photos and personal information.
 * Add photos to public/images/ and reference them here.
 */
const About = () => {
  // Helper function to parse date string "MMM YYYY" to comparable format
  const parseDate = (dateStr: string): number => {
    if (dateStr === 'Present') return 999999;
    
    const months: { [key: string]: number } = {
      'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
      'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
    };
    
    const parts = dateStr.split(' ');
    if (parts.length !== 2) return 0;
    
    const month = months[parts[0]] || 0;
    const year = parseInt(parts[1]) || 0;
    
    return year * 100 + month;
  };

  // Combine experiences and education for reverse chronological display
  interface ActivityItem {
    title: string;
    period: string;
    type: string;
    activities?: string[];
  }

  const allActivities: ActivityItem[] = [
    ...experiences.map(exp => ({
      title: `${exp.position} at ${exp.company}`,
      period: `${exp.startDate} - ${exp.endDate}`,
      type: exp.type,
    })),
    ...education.map(edu => ({
      title: `${edu.degree}${edu.field ? `, ${edu.field}` : ''} at ${edu.school}`,
      period: `${edu.startDate} - ${edu.endDate}`,
      type: 'Education',
      activities: edu.activities,
    })),
  ].sort((a, b) => {
    const endDateA = a.period.includes('Present') ? 'Present' : a.period.split(' - ')[1] || '';
    const endDateB = b.period.includes('Present') ? 'Present' : b.period.split(' - ')[1] || '';
    
    if (endDateA === 'Present' && endDateB !== 'Present') return -1;
    if (endDateB === 'Present' && endDateA !== 'Present') return 1;
    
    const dateA = parseDate(endDateA);
    const dateB = parseDate(endDateB);
    
    return dateB - dateA; // Descending order (most recent first)
  });

  return (
    <div className="min-h-screen py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading with Underline Animation */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="text-primary-400">{personalInfo.name}</span>
            </h1>
            {/* Animated Underline */}
            <div className="w-32 h-1 bg-primary-400 mx-auto mb-8 animate-pulse"></div>
          </div>

          {/* Biography Section: Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Text Content - Left Side */}
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                I am a student at the University of Michigan pursuing a Bachelor of Science in Computer Science and Engineering, with a strong interest in software engineering, artificial intelligence, and data driven systems.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                I am a driven learner who enjoys building practical technology with real world impact. I have worked on projects ranging from AI powered developer tooling and machine learning pipelines to full stack web applications and systems level coursework. Through internships, research teams, and personal projects, I have gained experience across Python, C and C++, TypeScript, and modern web and cloud technologies.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Outside of coding, I enjoy reading, skateboarding, and playing the guitar.
              </p>
            </div>

            {/* Profile Image - Right Side */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src="/images/profile.png"
                  alt={personalInfo.name}
                  className="w-full max-w-md rounded-lg shadow-2xl object-cover border-4 border-primary-400/50"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full max-w-md h-96 bg-gradient-to-br from-primary-600/30 to-indigo-600/30 flex items-center justify-center border-4 border-dashed border-primary-500/50 rounded-lg">
                          <span class="text-gray-400 text-center px-4">Add profile.png to /public/images/</span>
                        </div>
                      `;
                    }
                  }}
                />
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-500 rounded-lg -z-10 opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={`/images/about-${num}.jpg`}
                  alt={`About photo ${num}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-primary-600/30 to-indigo-600/30 flex items-center justify-center border-2 border-dashed border-primary-500/50 rounded-lg">
                          <span class="text-gray-400 text-xs text-center px-2">Add about-${num}.jpg</span>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>

          {/* Activities & Experiences Section */}
          <div className="bg-slate-900 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">
              Activities
            </h2>
            {/* University of Michigan Activities */}
            {education.find(edu => edu.school === 'University of Michigan')?.activities && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary-400 mb-4">
                  University of Michigan
                </h3>
                <ul className="space-y-2 mb-6">
                  {education.find(edu => edu.school === 'University of Michigan')?.activities?.map((activity, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-primary-400 mr-2 mt-1">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
