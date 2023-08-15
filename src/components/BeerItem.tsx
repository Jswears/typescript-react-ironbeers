import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type BeerItemProps = {
  beerData: {
    name: string;
    description: string;
    image_url: string;
    _id: string;
  };
};

const BeerItem = ({
  beerData: { description, name, image_url, _id },
}: BeerItemProps) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image_url}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex  flex-column justify-content-between align-items-baseline mb-4">
          <span className="fs-6 text-primary">{name}</span>
          <span className="text-secondary" style={{ fontSize: "16px" }}>
            {description}
          </span>
          <Link to={`/beers/${_id}`}>Details</Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default BeerItem;
