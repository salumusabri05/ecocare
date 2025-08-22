import Header from "./components/Header";
import OurApproach from "./components/Approach";
import LatestNews from "./components/News";
import Footer from "./components/Footer";
import Hero from   "./components/Hero";

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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
