import { useEffect, useRef } from "react";
import { styled, keyframes } from "styled-components";


const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Product = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const card = cardRef.current;
      if (card) {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight) {
          card.classList.add("animate");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Card ref={cardRef} className="card">
      <Image src={props.img} alt={props.name} />
      <Content>
        <Title>{props.name}</Title>
        <Description>{props.des}</Description>
      </Content>
    </Card>
  );
};


const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;

  /* Add animation */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &.animate {
    animation: ${fadeInAnimation} 1s ease-in-out;
    opacity: 1;
    transform: translateY(0);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const Content = styled.div``;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333333;
  line-height: 1.5;
`;

const Sample = () => {
  return (
    <GridContainer>
      <Product
        img="./images/tradition.jpg"
        name="Tradition"
        des="Traditional clothes are a reflection of cultural heritage and identity. From the vibrant sarees of India to the elegant kimonos of Japan, these garments carry centuries of tradition and craftsmanship, serving as a visual testament to the richness of our global heritage."
      />
      <Product
        img="./images/product2.jpg"
        name="Kid's Footwear"
        des="Child's homemade footwear is a delightful blend of creativity and practicality. Whether crafted from repurposed materials or lovingly stitched together, these unique shoes not only showcase a child's imagination but also instill a sense of resourcefulness and self-expression in their wearers."
      />
      <Product
        img="./images/product3.jpg"
        name="Men's Shirt"
        des="Homemade men's shirts offer a personalized touch to one's wardrobe. Tailored with care and attention to detail, these unique garments showcase individuality and craftsmanship. From selecting fabrics to hand-stitching, each shirt becomes a symbol of creativity and style that sets the wearer apart."
      />
      <Product
        img="./images/product4.jpg"
        name="Cotton Towel"
        des="Homemade cotton towels embody both practicality and craftsmanship. Skillfully woven or knitted, these towels offer softness, absorbency, and a personal touch. Handcrafted with love, they bring a sense of comfort and luxury to daily routines, making each use a delightful experience."
      />
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
`;
export default Sample;
