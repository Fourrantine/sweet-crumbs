
export default function Carousel() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">FRESHLY BAKED EVERY DAY</p>

        <h1>
          Freshly Baked,
          <br />
          Made with Love.
        </h1>

        <p className="hero-description">
          Enjoy delicious homemade bread and pastries
          made with the finest ingredients.
        </p>

        <a href="#menu" className="hero-button">
          Explore Our Menu
        </a>
      </div>

      <div className="hero-image">
        <img src="/images/hero/bread1.jpg" alt="Freshly baked bread" />
      </div>
    </section>
  );
}
