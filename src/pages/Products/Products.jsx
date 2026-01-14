import { useProducts } from "../../context/ProductContext";

function Products() {
  const { products } = useProducts();

  return (
    <div>
      <h2>Mahsulotlar</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8, minWidth: 200 }}>
            <h3><b>Name:</b> {p.title}</h3>
            <p><b>Description: </b>{p.description}</p>
            <p><b>Price:</b> {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;