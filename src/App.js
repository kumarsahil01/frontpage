import Navbar from './components/Navbar.jsx'
import Product from './components/Product.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  };
  return (
    <div className="App"> 
      <Router>
        <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero/>
              <Product/>
            </Layout>
          }
        />
       </Routes>
      </Router>
      
    </div>
  );
}

export default App;
