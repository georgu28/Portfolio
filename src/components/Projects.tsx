import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * Projects Section Component
 * 
 * Displays your portfolio projects in a grid layout.
 * Featured projects appear first. To add new projects, update projects.ts
 */
const Projects = () => {
  // Sort projects: featured first, then by id
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <div className="min-h-screen py-20 bg-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-primary-400 mx-auto mb-16"></div>

        {/* Projects Grid - Larger cards with more spacing */}
        <div className="grid md:grid-cols-2 gap-12">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-slate-700 hover:border-primary-500/50"
            >
              {/* Project Image - Larger */}
              {project.imageUrl ? (
                <div className="h-64 md:h-80 bg-gray-200 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="h-64 md:h-80 bg-gradient-to-br from-primary-600/30 to-indigo-600/30 flex items-center justify-center">
                  <span className="text-gray-400">Project Image</span>
                </div>
              )}

              {/* Project Content - More padding */}
              <div className="p-8 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary-500/20 text-primary-300 text-base rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-6">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-primary-400 transition-colors text-lg font-medium"
                    >
                      <FaGithub className="w-6 h-6 mr-2" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-primary-400 transition-colors text-lg font-medium"
                    >
                      <FaExternalLinkAlt className="w-6 h-6 mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Projects will appear here. Add your projects in src/data/projects.ts
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

