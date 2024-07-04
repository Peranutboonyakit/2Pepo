import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-500">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute inset-0 h-full w-full items-center px-5 py-24 
        [background:radial-gradient(120%_145%_at_50%_10%,#000_40%,#a855f7_150%)]"
        />
      </div>

      <div className="container mx-auto px-6">
        <Navbar />
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
