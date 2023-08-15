import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const NewBeerPage = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState<number | null>(
    null
  );
  const [contributed_by, setContributedBy] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);
    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel(null);
    setContributedBy("");
  };
  return (
    <Container>
      <h1>New Beer</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="tagline">
          <Form.Label>Tagline: </Form.Label>
          <Form.Control
            type="text"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description: </Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="first_brewed">
          <Form.Label>first_brewed: </Form.Label>
          <Form.Control
            type="text"
            value={first_brewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="brewers_tips">
          <Form.Label>brewers_tips: </Form.Label>
          <Form.Control
            type="text"
            value={brewers_tips}
            onChange={(e) => setBrewersTips(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="attenuation_level">
          <Form.Label>attenuation_level: </Form.Label>
          <Form.Control
            type="text"
            value={attenuation_level === null ? "" : attenuation_level}
            onChange={(e) =>
              setAttenuationLevel(
                e.target.value === "" ? null : parseInt(e.target.value, 10)
              )
            }
          />
        </Form.Group>
        <Form.Group controlId="contributed_by">
          <Form.Label>contributed_by: </Form.Label>
          <Form.Control
            type="text"
            value={contributed_by}
            onChange={(e) => setContributedBy(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default NewBeerPage;
