import { About, Hero, Navbar, Projects } from "./components";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};
export default Home;
