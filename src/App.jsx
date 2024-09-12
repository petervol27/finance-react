import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Account from './Account';
import Credit from './Credit';
import Cash from './Cash';
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <Router>
        {isAuthenticated && <Header />}
        <Routes>
          <Route
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/account"
            element={isAuthenticated ? <Account /> : <Navigate to="/" />}
          />
          <Route
            path="/cash"
            element={isAuthenticated ? <Cash /> : <Navigate to="/" />}
          />
          <Route
            path="/credit"
            element={isAuthenticated ? <Credit /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
      {isAuthenticated && <Footer />}
    </>
  );
}

export default App;
