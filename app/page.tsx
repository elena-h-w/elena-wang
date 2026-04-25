import Nav from "./components/site/Nav";
import Hero from "./components/site/Hero";
import About from "./components/site/About";
import Product from "./components/site/Product";
import Strategy from "./components/site/Strategy";
import Writing from "./components/site/Writing";
import Contact from "./components/site/Contact";
import Footer from "./components/site/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--paper)" }}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Product />
        <Strategy />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
