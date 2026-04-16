import "./MainSection.css";
import Hero from "./Hero";
import About from "./About";
import Marketplace from "./Marketplace";
import Community from "./Community";

function MainSection() {
  return (
    <main className="main-section">
      <Hero />

      <section className="overview-grid">
        <About />
        <Marketplace />
      </section>

      <Community />
    </main>
  );
}

export default MainSection;
