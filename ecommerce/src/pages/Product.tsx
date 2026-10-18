import axios from "axios";
import { useState } from "react";

export function Product({ p , loadCart }) {
  let [quantity, setQuantity] = useState(1);
  async function addProductToCart() {
    await axios.post("/api/cart-items", {
      productId: p.id,
      quantity,
    });
    await loadCart();
  }
  return (
    <div key={p.id} className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={p.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">{p.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${p.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {p.rating.count}
        </div>
      </div>

      <div className="product-price">{(p.priceCents / 100).toFixed(2)}</div>

      <div className="product-quantity-container">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart">
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button
        className="add-to-cart-button button-primary"
        onClick={addProductToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
