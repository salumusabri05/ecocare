import Header from "./components/Header";
import OurApproach from "./components/Approach";
import LatestNews from "./components/News";
import Footer from "./components/Footer";
import Hero from   "./components/Hero";
import KeyFocusAreas from "./components/Focus";
import FeaturedProjects from "./components/FeaturedProjects";
import SupportOurMission from "./components/Support";
export default function Home() {
  return (
    <div className="font-sans">
      {/* Header & Hero Section */}
      <header>
        <Header />
        <Hero />
      </header>
      
      
      {/* Main Content */}
      <main>
        {/* Our Approach Section */}
        <section>
          <OurApproach />
        </section>

        {/* Latest News Section */}
        <section>
          <LatestNews />
        </section>

        {/* Key Focus Areas Section */}
        <section>
          <KeyFocusAreas />
        </section>

        {/* Featured Projects Section */}
        <section>
          <FeaturedProjects />
        </section>
        <section>
          <SupportOurMission />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
