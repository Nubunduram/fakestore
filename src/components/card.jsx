import "./card.css";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

function ProductCard({ imgSrc, title, description, price }) {

    async function putProduct() {
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

        const data = await response.json();

        alert("« Le produit avec l'id " + data.id + " a été modifié ».")
    }

    async function patchProduct() {
        const product = {
            id: 1,
            price: 5
        };
        const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(product)
        });

        const data = await response.json();

        alert("« Le prix du produit n°" + data.id + " est désormais " + data.price + "€")
    }

    return (
        <Card className="h-100">
            <Card.Img className="card-img" src={imgSrc} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}€</Card.Text>
                <Button variant="primary" onClick={() => putProduct()}>Modifier le produit complet</Button>
                <Button variant="primary" onClick={() => patchProduct()}>Modifier le prix du produit</Button>

            </Card.Body>

        </Card>
    );
}

export default ProductCard;