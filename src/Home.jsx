import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
function Home() {
  let currentAccountBalance = parseFloat(
    localStorage.getItem('account_balance')
  );
  let currentCash = parseInt(localStorage.getItem('current_cash'));
  let creditUsed = localStorage.getItem('credit_used');
  let creditLimit = 28000;
  return (
    <Container fluid className="text-center">
      <h1>Welcome to our financial System</h1>
      <Container className="w-50">
        <ListGroup as="ul" className="">
          <ListGroup.Item as="li">
            Account Balance: {currentAccountBalance.toFixed(2)}
          </ListGroup.Item>
          <ListGroup.Item as="li">Cash Balance: {currentCash}</ListGroup.Item>
          <ListGroup.Item as="li">
            Credit Used: {creditUsed}/{creditLimit}{' '}
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </Container>
  );
}

export default Home;
