import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
function Account() {
  const [currentAccountBalance, setCurrentAccountBalance] = useState(
    parseFloat(localStorage.getItem('account_balance')) || 0
  );
  const [addAmount, setAddAmount] = useState('');
  const [removeAmount, setRemoveAmount] = useState('');
  const handleAddFunds = (e) => {
    e.preventDefault();
    const amount = parseFloat(addAmount);
    const newBalance = currentAccountBalance + amount;
    setCurrentAccountBalance(newBalance);
    localStorage.setItem('account_balance', newBalance);
    setAddAmount('');
  };

  const handleRemoveFunds = (e) => {
    e.preventDefault();
    const amount = parseFloat(removeAmount);
    const newBalance = currentAccountBalance - amount;
    setCurrentAccountBalance(newBalance);
    localStorage.setItem('account_balance', newBalance);
    setRemoveAmount('');
  };
  return (
    <div className="text-center">
      <h1>Welcome to our Financial Control System</h1>
      <h3>Current Balance: {currentAccountBalance.toFixed(2)}</h3>
      <Container className=" d-flex justify-content-center align-items-center gap-5">
        <Form onSubmit={handleAddFunds}>
          <Form.Group className="mb-3" controlId="addFunds">
            <Form.Label>Add Funds:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount To Add"
              value={addAmount}
              onChange={(e) => setAddAmount(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Funds
          </Button>
        </Form>
        <Form onSubmit={handleRemoveFunds}>
          <Form.Group className="mb-3" controlId="removeFunds">
            <Form.Label>Remove Funds:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount To Reduce"
              value={removeAmount}
              onChange={(e) => setRemoveAmount(e.target.value)}
            />
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
