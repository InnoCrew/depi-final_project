import { Container, Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import TrendingNow from "../../components/trendingNow/TrendingNow";
import PopularDestinations from "../../components/destinations/PopularDestinations";

const Home = () => {
  return (
    <Container fluid className="px-4">
      {/* Search Bar */}
      <Form className="my-4" onSubmit={(e) => e.preventDefault()}>
        <InputGroup className="rounded-pill shadow-sm">
          <Form.Control
            type="text"
            placeholder="Search for destinations, blogs, or more..."
            className="rounded-pill border-0 py-3"
            style={{ fontSize: "1.1rem" }}
          />

          <FaSearch className="position-absolute z-3 text-muted" />
        </InputGroup>
      </Form>
      <TrendingNow hideBg />
      <PopularDestinations />
    </Container>
  );
};

export default Home;
