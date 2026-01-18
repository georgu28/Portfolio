import { personalInfo } from '../data/personalInfo';
import { education } from '../data/education';

/**
 * About Section Component
 * 
 * Displays a biography with photos and personal information.
 * Add photos to public/images/ and reference them here.
 */
const About = () => {


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
                Hi, I'm George, a student at the University of Michigan pursuing a Bachelor of Science in Computer Science and Engineering, with a strong interest in software engineering, artificial intelligence, and data driven systems.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                I'm a passionate learner who strives to build practical technology with real world impact. I've worked on projects ranging from AI powered developer tooling and machine learning pipelines to full stack web applications and systems level coursework. Through internships, research teams, and personal projects, I've gained experience across various tech stacks and modern web and cloud technologies.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                In my free time, you can find me exploring with friends, reading, skateboarding around campus, and playing my favorite songs on the guitar.
              </p>
            </div>

            {/* Profile Image - Right Side */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src="/images/casual_headshot.jpg"
                  alt={personalInfo.name}
                  className="w-full max-w-[280px] h-auto rounded-lg shadow-lg object-cover border-2 border-primary-400/50"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full max-w-[280px] h-64 bg-gradient-to-br from-primary-600/30 to-indigo-600/30 flex items-center justify-center border-2 border-dashed border-primary-500/50 rounded-lg">
                          <span class="text-gray-400 text-center px-4 text-sm">Add casual_headshot.jpg</span>
                        </div>
                      `;
                    }
                  }}
                />
                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-primary-500 rounded-lg -z-10 opacity-15"></div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-16">
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              {/* Golfing */}
              <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="/images/my_dog.jpg"
                  alt="My Dog"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              </div>

              {/* Skiing */}
              <div className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="/images/skiing.jpeg"
                  alt="Skiing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg"></div>
              </div>
            </div>
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
