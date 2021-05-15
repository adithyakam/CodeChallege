import './App.css';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import ProductAndServices from './Components/ProdectAndServices/ProductAndServices';

function App() {
  return (
    <div className="App">
     <Header/>
      <Hero />
      <Content />
      <ProductAndServices/>
      <Footer/>
      <div className="App__copyrigth">
        <h6>Copyright © 2021- - Orizon Technologies Ltd</h6>
      </div>
    </div>
  );
}

export default App;
