
function Products() {
  const { products } = ();

  return (
    <div>
      <h2>Mahsulotlar</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8, minWidth: 200 }}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p><b>Narxi:</b> {p.price}</p>
            <small>ID: {p.id}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;