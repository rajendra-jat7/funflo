import './App.css';
import Book from './components/Book/Book';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
