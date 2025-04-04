import { useEffect, useState } from "react";
import ProductCard from "./components/card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  async function postProduct() {
    try {
      const product = {
        id: 1,
        title: "T-shirt Basique",
        price: 15,
        description: "Un t-shirt basique",
        category: "t-shirt",
        image: "http://example.com"
      };
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(product)
      });

      const data = await response.json();

      alert("Le produit avec l'id " + data.id + " a été créé.");
    } catch (error) {
      alert("Une erreur s'est produite : " + error.message);
    } finally {
      setLoading(false);
    }
  }

  if (error) return <p>Erreur : {error}</p>;

  if (loading) return <p>Chargement...</p>;

  return (
    <>
      <h1 className="text-center">Products</h1>
      <Button variant="primary" onClick={() => postProduct()}>Ajouter un produit</Button>
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
