import About from "@/components/about";
import Accomodation from "@/components/accomodation";
import Experiences from "@/components/experience";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/service";
import StatsBar from "@/components/statsBar";
import Location from "@/components/location";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header></Header>

      {/* HERO */}
      <Hero></Hero>

      {/* STATS BAR */}
      <StatsBar></StatsBar>

      {/* ABOUT */}
      <About></About>

      {/* ACCOMMODATIONS */}
      <Accomodation></Accomodation>Í

      {/* SERVICES */}
      <Services></Services>

      {/* EXPERIENCES */}
      <Experiences></Experiences>

      {/* GALLERY */}
      <Gallery></Gallery>

      {/* LOCATION */}

      <Location></Location>
      {/* CONTACT */}
      <Contact></Contact>

      {/* FOOTER */}
      <Footer></Footer>
    </>
  );
}
