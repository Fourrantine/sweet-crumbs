import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Carousel />
        <About />
        <Products />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
