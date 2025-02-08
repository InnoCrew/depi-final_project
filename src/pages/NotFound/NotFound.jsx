import { Container, Button } from "react-bootstrap";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <Container className="text-center d-flex flex-column align-items-center justify-content-center vh-100 ">
        <h1 className="page-title">404</h1>
        <h2 className="mt-3 text-secondary">Oops...</h2>
        <p className="page_description">
          We're sorry, but something went wrong.
        </p>
        <Button variant="warning" href="/" className="home-btn">
          Homepage
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
