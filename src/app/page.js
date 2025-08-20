import HeaderHero from "./components/Header";
import OurApproach from "./components/Approach";
import LatestNews from "./components/News";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header & Hero Section */}
      <HeaderHero />
      
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
