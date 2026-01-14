// Har bir productning id, title, description, price hossalari bo'lishi kerak.

import { useState } from "react";

function CreateProduct() {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    description: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Product</button>
    </form>
  );
}

export default CreateProduct;