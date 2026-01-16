import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Contact from '../components/Contact';

/**
 * About Page Component
 * 
 * Biography page with photos and personal information.
 */
const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;

