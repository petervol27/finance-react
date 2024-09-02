import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
function Credit() {
  let creditUsed = localStorage.getItem('credit_used');
  let creditLimit = 28000;
  return (
    <div className="text-center">
      <h1>Welcome to our Financial Control System</h1>
      <h3>
        Current Credit: {creditUsed}/{creditLimit}
      </h3>
      <Container className=" d-flex justify-content-center align-items-center gap-5">
        <Form>
          <Form.Group className="mb-3" controlId="addFunds">
            <Form.Label>Add Credit:</Form.Label>
            <Form.Control type="number" placeholder="Amount To Add" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Credit
          </Button>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="removeFunds">
            <Form.Label>Remove Credit:</Form.Label>
            <Form.Control type="number" placeholder="Amount To Reduce" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Remove Credit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Credit;
