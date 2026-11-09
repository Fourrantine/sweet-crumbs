
const products = [
  {
    name: "Butter Croissant",
    price: "Rp 18.000",
    image: "/images/products/croisant.jpeg",
  },
  {
    name: "Fresh Bread",
    price: "Rp 15.000",
    image: "/images/products/bread.jpeg",
  },
  {
    name: "Sweet Cake",
    price: "Rp 25.000",
    image: "/images/products/cake.jpeg",
  },
];

export default function Products() {
  return (
    <section className="products" id="menu">
      <div className="products-heading">
        <p className="section-subtitle">OUR MENU</p>
        <h2>Our Favorite Products</h2>
        <p>Freshly baked treats made for your happiness.</p>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <img src={product.image} alt={product.name} />

            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
