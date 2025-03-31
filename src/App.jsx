import { useEffect, useState } from "react";
import ProductCard from "./components/card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="text-center">Products</h1>
      <Container>
        <Row className="g-3">
          {products.map((product) => (
            <Col key={product.id} md={3}>
              <ProductCard
                imgSrc={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
