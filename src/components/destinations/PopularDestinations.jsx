import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { TiArrowRight } from "react-icons/ti";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";

import "./pDestinations.css";

function PopularDestinations() {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDestinations = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/destinations");
      if (!response.ok) {
        throw new Error("Failed to fetch destinations");
      }
      const data = await response.json();

      // Sort destinations by the number of blogs in descending order
      const sortedDestinations = data.sort(
        (a, b) => b.numberOfBlogs - a.numberOfBlogs
      );

      // Slice the top 6 destinations
      const top6Destinations = sortedDestinations.slice(0, 8);

      setDestinations(top6Destinations);
      setError(null);
    } catch (err) {
      setError("Failed to load destinations. Please try again later.");
      console.error("Error fetching destinations:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDestinations();
  }, [fetchDestinations]);

  const renderDestinationCards = useMemo(() => {
    return destinations.map((destination) => (
      <Col
        key={destination.id}
        xs={12}
        sm={6}
        lg={4}
        xl={3}
        className="gap-1 justify-content-center"
      >
        <Card
          className="border-0 shadow-sm text-decoration-none ps-2 d-flex flex-row align-items-center w-100"
          style={{ width: "230px" }}
          as={Link}
          to={`/destinations/${destination.name}`}
        >
          <div
            className="rounded-circle overflow-hidden"
            style={{ width: "50px", height: "50px" }}
          >
            <img
              src={destination.coverImage}
              alt={destination.name}
              className="w-100 h-100 rounded-circle object-fit-cover"
              loading="lazy"
            />
          </div>
          <Card.Body className="flex-grow-1 text-start">
            <Card.Title className="h5 mb-1 text-orange-hover">
              {destination.name}
            </Card.Title>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">
                {destination.numberOfBlogs} Blogs
              </small>
              <Button
                variant=" "
                className="p-0 rounded-circle bg-light d-flex justify-content-center align-items-center arrow-btn"
              >
                <TiArrowRight size={20} />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ));
  }, [destinations]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Container className="py-5 vh-100">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="mb-4 text-center">
        <Col>
          <h2 className="display-5 fw-bold mb-2">Popular Destinations</h2>
          <p className="text-muted">Most famous destinations in the world</p>
        </Col>
      </Row>

      <Row className="g-1 w-md-75 mx-auto">{renderDestinationCards}</Row>
    </Container>
  );
}

export default React.memo(PopularDestinations);
