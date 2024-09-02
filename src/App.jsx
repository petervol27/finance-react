import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Account from './Account';
import Credit from './Credit';
import Cash from './Cash';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/cash" element={<Cash />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
