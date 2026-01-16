import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Contact from '../components/Contact';

/**
 * Home Page Component
 * 
 * The main landing page with introduction, timeline, and skills.
 */
const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

