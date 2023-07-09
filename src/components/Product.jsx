import { styled } from "styled-components";

const Product = (props) => {
  return (
    <Card>
      <Image src={props.img} alt={props.name} />
      <Content>
        <Title>{props.name}</Title>
        <Description>{props.des}</Description>
      </Content>
    </Card>
  );
};

export default Product;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
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
