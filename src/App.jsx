import Faq from "./section/Faq.jsx";
import Features from "./section/Features.jsx";
import Header from "./section/Header.jsx";
import Hero from "./section/Hero.jsx";
import Pricing from "./section/Pricing.jsx";
import Testimonials from "./section/Testimonials.jsx";
const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
    </main>
  );
};

export default App;
