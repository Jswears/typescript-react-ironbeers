import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import BeerItem from "../components/BeerItem";

type BeerProps = {
  attenuation_level: number;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  expireAt: string;
  first_brewed: string;
  image_url: string;
  tagline: string;
  name: string;
  _id: string;
};

const AllBeersPage = () => {
  const [beersData, setBeersData] = useState<BeerProps[]>([]);

  const fetchAllBeers = async () => {
    try {
      const response = await axios.get<BeerProps[]>(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeersData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllBeers();
  }, []);

  return (
    beersData.length > 0 && (
      <>
        <h1>All Beers</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
          {beersData.map((beer) => (
            <Col key={beer._id}>
              <BeerItem beerData={beer} />
            </Col>
          ))}
        </Row>
      </>
    )
  );
};

export default AllBeersPage;
