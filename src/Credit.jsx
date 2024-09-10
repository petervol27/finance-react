import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
function Credit() {
  const [creditUsed, setCreditUsed] = useState(
    parseInt(localStorage.getItem('credit_used')) || 0
  );
  const creditLimit = 28000;
  const [error, setError] = useState('');
  const [addFunds, setAddFunds] = useState('');
  const [removeFunds, setRemoveFunds] = useState('');
  const handleAddFunds = (e) => {
    e.preventDefault();
    const amount = parseInt(addFunds);
    if (creditUsed + amount > creditLimit) {
      setError('Above credit limit');
      return;
    }
    const newBalance = creditUsed + amount;
    setCreditUsed(newBalance);
    localStorage.setItem('credit_used', newBalance);
    setAddFunds('');
  };
  const handleRemoveFunds = (e) => {
    e.preventDefault();
    const amount = parseInt(removeFunds);
    if (amount > creditUsed) {
      setError('cannot go below zero');
      return;
    }
    const newBalance = creditUsed - amount;
    setCreditUsed(newBalance);
    localStorage.setItem('credit_used', newBalance);
    setRemoveFunds('');
  };

  return (
    <div className="text-center">
      <h1>Welcome to our Financial Control System</h1>
      <h3>
        Current Credit: {creditUsed}/{creditLimit}
      </h3>
      <Container className=" d-flex justify-content-center align-items-center gap-5">
        <Form onSubmit={handleAddFunds}>
          <Form.Group className="mb-3" controlId="addFunds">
            <Form.Label>Add Credit:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount To Add"
              value={addFunds}
              onChange={(e) => setAddFunds(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Credit
          </Button>
        </Form>
        <Form onSubmit={handleRemoveFunds}>
          <Form.Group className="mb-3" controlId="removeFunds">
            <Form.Label>Remove Credit:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount To Reduce"
              value={removeFunds}
              onChange={(e) => setRemoveFunds(e.target.value)}
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Remove Credit
          </Button>
        </Form>
      </Container>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Credit;
