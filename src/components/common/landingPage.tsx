import { roomStyle, walls } from "@/lib/rooms";
import Header from "../layout/header";
import WallPainter from "../layout/wallPainter";
import WhoAmI from "./whoAmI";
import Projects from "./projects";
import Experience from "./experience";
import Skills from "./skills";
import Contact from "./contact";

const LandingPage = () => {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <WallPainter />
      <Header />
      <main id="main">
        <WhoAmI />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer data-room className="room" style={roomStyle(walls.entrance)}>
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
          <div className="border-vinyl/20 text-caption text-vinyl-muted flex flex-col gap-1 border-t py-8 md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} Madalina Chirpicinic</p>
            <p>Built with Next.js.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
