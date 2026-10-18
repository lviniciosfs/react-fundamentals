import { useEffect, useState } from "react";
import { HeaderPage } from "./header/HeaderPage";
import "./HomePage.css";
import axios from "axios";
import { Product } from "./Product";

export function HomePage({ cart, loadCart }) {
  let [products, setProducts] = useState<Array<any>>([]);

  useEffect(() => {
    const products = async () => {
      const response = await axios.get<Array<any>>("/api/products");
      setProducts(response.data);
    };
    products();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <HeaderPage cart={cart} />
      <div className="home-page">
        <div className="products-grid">
          {products.map((p) => {

            return (
              <Product p={p} loadCart={loadCart}/>
            );
          })}
        </div>
      </div>
    </>
  );
}
