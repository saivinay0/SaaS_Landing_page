import Features from "./section/Features.jsx";
import Header from "./section/Header.jsx";
import Hero from "./section/Hero.jsx";
import Pricing from "./section/Pricing.jsx";
const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
};

export default App;
