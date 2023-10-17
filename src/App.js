import './App.css';
import Book from './components/Book/Book';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import EventCard from './components/EventCard/EventCard';

const events = [
  {
    name: 'Birthday Parties',
    image: 'https://cdn.pixabay.com/photo/2015/03/12/10/40/birthday-669971_1280.jpg', // Replace with actual image path or URL
    description: 'Celebrate your birthday in style on our cruise ship!',
    price: 500,
  },
  {
    name: 'Bridal Showers',
    image: 'https://cdn.pixabay.com/photo/2017/01/04/04/01/wedding-1951298_1280.jpg', // Replace with actual image path or URL
    description: 'Host a memorable bridal shower aboard our cruise ship.',
    price: 600,
  },
  {
    name: 'Wedding Anniversaries',
    image: 'https://cdn.pixabay.com/photo/2017/01/09/02/02/pink-wine-1964457_1280.jpg', // Replace with actual image path or URL
    description: 'Mark your special day with a cruise ship celebration!',
    price: 700,
  },
  {
    name: 'Corporate Events',
    image: 'https://cdn.pixabay.com/photo/2016/03/05/19/32/affair-1238429_1280.jpg', // Replace with actual image path or URL
    description: 'Plan a unique corporate event on our cruise ship.',
    price: 800,
  },
  {
    name: 'Baby Showers',
    image: 'https://cdn.pixabay.com/photo/2015/08/31/18/57/stroller-915928_1280.jpg', // Replace with actual image path or URL
    description: 'Celebrate the upcoming arrival on our cruise ship.',
    price: 550,
  },
  {
    name: 'Kitty Parties',
    image: 'https://cdn.pixabay.com/photo/2015/03/07/16/35/cake-663227_1280.jpg', // Replace with actual image path or URL
    description: 'Enjoy a fun-filled kitty party with friends at sea!',
    price: 450,
  },
  {
    name: 'Seminars',
    image: 'https://cdn.pixabay.com/photo/2018/03/07/08/12/books-3205451_1280.jpg', // Replace with actual image path or URL
    description: 'Host successful seminars with breathtaking sea views.',
    price: 750,
  },
  {
    name: 'Bachelorette Parties',
    image: 'https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg', // Replace with actual image path or URL
    description: 'Party with your friends before the big day on our cruise ship.',
    price: 650,
  },
];


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <div className="row">
          {events.map((event, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
      <Book />
      <Footer />
    </div>
  );
}

export default App;
