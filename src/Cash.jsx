import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
function Cash() {
  const [currentCash, setCurrentCash] = useState(
    parseInt(localStorage.getItem('current_cash')) || 0
  );
  const [addFunds, setAddFunds] = useState('');
  const [removeFunds, setRemoveFunds] = useState('');
  const [error, setError] = useState('');
  const handleAddFunds = (e) => {
    e.preventDefault();
    const funds = parseInt(addFunds);
    const newBalance = currentCash + funds;
    setCurrentCash(newBalance);
    localStorage.setItem('current_cash', newBalance);
    setAddFunds('');
  };
  const handleRemoveFunds = (e) => {
    e.preventDefault();
    const funds = parseInt(removeFunds);
    if (funds > currentCash) {
      setError('Please enter a valid amount to add.');
      return;
    }
    const newBalance = currentCash - funds;
    setCurrentCash(newBalance);
    localStorage.setItem('current_cash', newBalance);
    setRemoveFunds('');
  };
  return (
    <div className="text-center">
      <h1>Welcome to our Financial Control System</h1>
      <h3>Currect Cash: {currentCash}</h3>
      <Container className=" d-flex justify-content-center align-items-center gap-5">
        <Form onSubmit={handleAddFunds}>
          <Form.Group className="mb-3" controlId="addFunds">
            <Form.Label>Add Cash:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount To Add"
              value={addFunds}
              onChange={(e) => setAddFunds(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Cash
          </Button>
        </Form>
        <Form onSubmit={handleRemoveFunds}>
          <Form.Group className="mb-3" controlId="removeFunds">
            <Form.Label>Remove Cash:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Amount To Reduce"
              value={removeFunds}
              onChange={(e) => setRemoveFunds(e.target.value)}
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Remove Cash
          </Button>
        </Form>
      </Container>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Cash;
