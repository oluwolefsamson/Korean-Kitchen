import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import OurMenu from './Components/OurMenu/OurMenu';
import CustomerFeedback from './Components/CustomerFeedback/CustomerFeedback';
import OrderPage from './Components/OrderPage/OrderPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      < Header />
      < Hero /> 
      < About />
      < OurMenu />
      < CustomerFeedback /> 
      < OrderPage /> 
      < Footer />
    </div> 
  );
}

export default App;
