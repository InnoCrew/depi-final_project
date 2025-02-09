import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Dropdown,
  Spinner,
  Alert,
} from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

function PopularDestinations() {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch("http://localhost:8000/destinations");
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        const data = await response.json();
        setDestinations(data);
        setError(null);
      } catch (err) {
        setError("Failed to load destinations. Please try again later.");
        console.error("Error fetching destinations:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (isLoading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col md={6}>
          <h2 className="display-5 fw-bold mb-2">Popular Destinations</h2>
          <p className="text-muted">
            Favorite destinations based on customer reviews
          </p>
        </Col>
        <Col md={6}>
          <div className="d-flex gap-2 flex-wrap justify-content-md-end">
            <Dropdown className="mb-2">
              <Dropdown.Toggle variant="light" className="rounded-pill">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>All Categories</Dropdown.Item>
                <Dropdown.Item>Cities</Dropdown.Item>
                <Dropdown.Item>Nature</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-2">
              <Dropdown.Toggle variant="light" className="rounded-pill">
                Duration
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Any Duration</Dropdown.Item>
                <Dropdown.Item>1-3 Days</Dropdown.Item>
                <Dropdown.Item>4-7 Days</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-2">
              <Dropdown.Toggle variant="light" className="rounded-pill">
                Review / Rating
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>All Ratings</Dropdown.Item>
                <Dropdown.Item>4+ Stars</Dropdown.Item>
                <Dropdown.Item>3+ Stars</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-2">
              <Dropdown.Toggle variant="light" className="rounded-pill">
                Price range
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>All Prices</Dropdown.Item>
                <Dropdown.Item>$0 - $500</Dropdown.Item>
                <Dropdown.Item>$501 - $1000</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>

      <Row className="g-4">
        {destinations.map((destination) => (
          <Col key={destination.id} xs={12} sm={6} lg={4} xl={3}>
            <Card className="h-100 border-0 shadow-sm">
              <div className="position-relative" style={{ height: "200px" }}>
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-100 h-100 rounded-top object-fit-cover"
                />
              </div>
              <Card.Body>
                <Card.Title className="h5 mb-3">{destination.name}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    {destination.tours} Tours, {destination.activities}{" "}
                    Activities
                  </small>
                  <Button variant="link" className="p-0">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}

        <Col xs={12} sm={6} lg={4} xl={3}>
          <Card className="h-100 border-0 shadow-sm bg-dark text-white">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <h3 className="h4 mb-3">
                  Crafting Your Perfect Travel Experience
                </h3>
              </div>
              <Button
                variant="light"
                className="rounded-pill d-flex align-items-center gap-2"
              >
                Browse All destinations
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PopularDestinations;
