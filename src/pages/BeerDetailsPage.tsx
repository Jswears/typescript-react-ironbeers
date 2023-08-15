import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

type BeerDetailsProps = {
  image_url: string;
  name: string;
  tagline: string;
  first_brewed: string;
  attenuation_level: number;
  description: string;
  contributed_by: string;
};

const BeerDetailsPage = () => {
  const [oneBeerData, setOneBeerData] = useState<BeerDetailsProps | null>(null);
  const { beerId } = useParams<string>();

  const fetchOneBeer = async () => {
    try {
      const response = await axios.get<BeerDetailsProps>(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setOneBeerData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOneBeer();
  }, [beerId]);
  return !oneBeerData ? (
    <p>Loading...</p>
  ) : (
    <>
      <h1>Beer Details!</h1>
      <Container className="d-flex">
        <div>
          <img
            src={oneBeerData.image_url}
            alt={oneBeerData.name}
            style={{ height: "400px" }}
          />
        </div>
        <div className="ms-5 d-flex flex-column justify-content-center">
          <div className="d-flex">
            <div>
              <h2>{oneBeerData.name}</h2>
              <p className="text-muted">"{oneBeerData.tagline}"</p>
            </div>
            <div className="mt-auto ms-auto">
              <p>{oneBeerData.attenuation_level}</p>
              <p>{oneBeerData.first_brewed}</p>
            </div>
          </div>
          <p>
            <span className="text-primary fs-5">Description</span>:{" "}
            {oneBeerData.description}
          </p>
          <p
            className="text-muted font-weight-bold"
            style={{ fontSize: "12px" }}
          >
            {oneBeerData.contributed_by}
          </p>
        </div>
      </Container>
    </>
  );
};

export default BeerDetailsPage;
