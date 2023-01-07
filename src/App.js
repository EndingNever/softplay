import './App.css';
import MainDisplay from './components/mainDisplay/MainDisplay';
import Navbar from './components/navbar/Navbar';
import Inquiries from './components/inquiries/Inquiries';
import Footer from './components/footer/Footer';

function App() {
  return (
<div>
  <Inquiries />
  <Navbar />
  <MainDisplay />
  <Footer />
</div>
  );
}

export default App;
