
import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addProduct() {
    if (!name.trim() || Number(price) <= 0) {
      alert("Enter product name and valid price");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name,
      price: Number(price),
      quantity: 1,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  }

  function increase(id) {
    setProducts(products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    ));
  }

  function decrease(id) {
    setProducts(products.map((product) =>
      product.id === id
        ? { ...product, quantity: Math.max(1, product.quantity - 1) }
        : product
    ));
  }

  function removeProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  const totalPrice = products.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  return (
    <div className="container">
      <h1>Simple Shopping Cart</h1>

      <h2>Add a Product</h2>

      <div className="form">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={addProduct}>Add to Cart</button>
      </div>

      <h2>Products in Cart</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - $
            {product.price.toFixed(2)}

            <div>
              Quantity:
              <button onClick={() => decrease(product.id)}>
                -
              </button>

              {product.quantity}

              <button onClick={() => increase(product.id)}>
                +
              </button>
            </div>

            <button onClick={() => removeProduct(product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default App;
