import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
function Account() {
  let currentAccountBalance = localStorage.getItem('account_balance');
  return (
    <div className="text-center">
      <h1>Welcome to our Financial Control System</h1>
      <h3>Current Balance: {currentAccountBalance}</h3>
      <Container className=" d-flex justify-content-center align-items-center gap-5">
        <Form>
          <Form.Group className="mb-3" controlId="addFunds">
            <Form.Label>Add Funds:</Form.Label>
            <Form.Control type="number" placeholder="Amount To Add" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Funds
          </Button>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="removeFunds">
            <Form.Label>Remove Funds:</Form.Label>
            <Form.Control type="number" placeholder="Amount To Reduce" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Remove Funds
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Account;
