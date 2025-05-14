import { Suspense } from "react";
import Hero from '../../sections/home/hero';
import AboutMe from '../../sections/home/aboutMe';
import Projects from '../../sections/home/projects';
import ProjectsFallback from '../../components/ProjectsFallback';


export default function Home() {
  return (
    <div>
        <Hero />
        <AboutMe />
         {/* Section Projects avec Streaming */}
        <Suspense fallback={<ProjectsFallback />}>
          <Projects />
        </Suspense>
      </div>
  );
}
