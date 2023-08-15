import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

type RandomBeerProps = {
  image_url: string;
  name: string;
  tagline: string;
  first_brewed: string;
  attenuation_level: number;
  description: string;
  contributed_by: string;
};

const RandomBeerPage = () => {
  const [randomBeerData, setRandomBeerData] = useState<RandomBeerProps | null>(
    null
  );

  const fetchRandomBeer = async () => {
    try {
      const response = await axios.get<RandomBeerProps>(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeerData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  return !randomBeerData ? (
    <p>Loading...</p>
  ) : (
    <>
      <h1>Random Beer</h1>
      <Container className="d-flex">
        <img
          src={randomBeerData.image_url}
          alt={randomBeerData.name}
          style={{ height: "400px" }}
        />
        <div className="ms-5">
          <h2>{randomBeerData.name}</h2>
          <p>{randomBeerData.description}</p>
          <p className="text-muted">{randomBeerData.contributed_by}</p>
        </div>
      </Container>
    </>
  );
};

export default RandomBeerPage;
