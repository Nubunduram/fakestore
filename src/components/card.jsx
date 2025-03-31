import "./card.css";
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from "react-bootstrap";

function ProductCard({ imgSrc, title, description, price }) {

    async function putProduct() {
        try {
            const product = {
                id: 1,
                title: "T-shirt Basique",
                price: 15,
                description: "Un t-shirt basique",
                category: "t-shirt",
                image: "http://example.com"
            };
            const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();

            alert("« Le produit avec l'id " + data.id + " a été modifié ».")
        } catch (error) {
            alert("Une erreur s'est produite : " + error.message);
        }
    }

    async function patchProduct() {
        try {
            const productId = 1;

            const product = {
                price: 5
            };

            const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();

            alert("« Le prix du produit n°" + data.id + " est désormais " + data.price + "€")
        } catch (error) {
            alert("Une erreur s'est produite : " + error.message);
        }
    }

    async function deleteProduct() {
        try {
            const productId = 1;

            const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            alert(`« Le produit avec l'id ${productId} a été supprimé ».`)
        } catch (error) {
            alert("Une erreur s'est produite : " + error.message);
        }
    }

    return (
        <Card className="h-100">
            <Card.Img className="card-img" src={imgSrc} />
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text className="ms-auto">{price}€</Card.Text>
                <Container className="p-0">
                    <Row className="gap-1">
                        <Col md={3} className="p-0 flex-grow-1">
                            <Button variant="primary" className="btn-sm w-100" onClick={() => putProduct()}>Modifier<br></br>produit</Button>
                        </Col>
                        <Col md={3} className="p-0 flex-grow-1">
                            <Button variant="secondary" className="btn-sm w-100" onClick={() => patchProduct()}>Modifier <br></br>prix</Button>
                        </Col>
                        <Col md={3} className="p-0 flex-grow-1">
                            <Button className="btn-sm w-100" variant="danger" onClick={() => deleteProduct()}>Supprimer<br></br>produit</Button>
                        </Col>
                    </Row>
                </Container>

            </Card.Body>
        </Card>
    );
}

export default ProductCard;
