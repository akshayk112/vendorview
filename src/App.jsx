import './App.css';
import { styled } from 'styled-components';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Sample from './components/Sample';
import AnimatedCard from './components/AnimatedCard';
import Footer from './components/Footer';


function App() {
  return (
    <Container>
      <Navbar />
      <Banner />
      <Sample />
      <AnimatedCard
      imageSrc="./images/service.jpg"
      title="24/7 Available"
      description="Always open, around the clock, 24/7 availability ensures continuous support and service, anytime, day or night, without interruption."
      />
      <AnimatedCard
      imageSrc="./images/deliver.jpg"
      title="Smooth delivery"
      description="
      Delivery is a crucial aspect of modern business, ensuring products and services reach customers efficiently. It encompasses logistics, transportation, and fulfillment, enabling timely and convenient customer experiences."
      />
      <Footer/>
    </Container>
  );
}

export default App;

const Container =  styled.div``