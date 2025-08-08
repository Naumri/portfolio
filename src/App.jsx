import "./App.css";

import HeroHeader from "./components/HeroHeader/HeroHeader";
import HeroContent from "./components/HeroContent/HeroContent";

function App() {
  return (
    <>
      <section className="hero">
        <HeroHeader />
        <HeroContent />
      </section>
    </>
  );
}

export default App;
