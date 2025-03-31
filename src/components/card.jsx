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

        const data = await response.json();

        alert("« Le prix du produit n°" + data.id + " est désormais " + data.price + "€")
    }

    async function deleteProduct() {
        const productId = 1;

        const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: 'DELETE'
        });

        const data = await response.json();

        alert(`« Le produit avec l'id ${data.id} a été supprimé ».`)
    }

    return (
        <Card className="h-100">
            <Card.Img className="card-img" src={imgSrc} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>{price}€</Card.Text>
                <Button variant="primary" onClick={() => putProduct()}>Modifier le produit complet</Button>
                <Button variant="secondary" onClick={() => patchProduct()}>Modifier le prix du produit</Button>
                <Button variant="danger" onClick={() => deleteProduct()}>Supprimer le produit</Button>

            </Card.Body>

        </Card>
    );
}

export default ProductCard;