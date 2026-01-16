import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

/**
 * Projects Page Component
 * 
 * Displays all portfolio projects.
 */
const ProjectsPage = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;

