import Container from 'react-bootstrap/Container';
function Footer() {
  return (
    <Container
      fluid
      className="bg-light py-4 d-flex align-items-center justify-content-center mt-4"
    >
      <p>&copy; Financial Brokerage Pietro LLC {new Date().getFullYear()}</p>
    </Container>
  );
}

export default Footer;
