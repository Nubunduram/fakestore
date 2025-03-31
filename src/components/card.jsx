import "./card.css";
import Card from 'react-bootstrap/Card';

function ProductCard({ imgSrc, title, description, price }) {
  return (
    <Card className="h-100">
      <Card.Img className="card-img" variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>${price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;