import { styled, keyframes } from "styled-components";
import { Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInAnimation = keyframes`
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImg src="./images/bannerbackground.jpg" alt="" />
      <BannerDescription>
        <Typography variant="h1"><i>Vendorviews</i></Typography>
        <Typography variant="body1">
          A platform to sell your homemade products. Curious to know, click sign
          in button to proceed
        </Typography>
        <SignInButton variant="contained" startIcon={<FontAwesomeIcon icon={faSignInAlt} />} >
          Sign In
        </SignInButton>
      </BannerDescription>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  /* Add transition */
  transition: opacity 1s;

  /* Add animation */
  animation: ${fadeInAnimation} 1s ease-in-out;
`;

const BannerImg = styled.img`
  /* Add transition */
  transition: height 1s;

  position: relative;
  width: 100vw;
  height: auto;
  z-index: 1;

  @media screen and (min-width: 900px) {
    height: 100vh;
  }
`;

const BannerDescription = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vh;
  background-color: white;
  left: 25%;
  top: 200px;
  opacity: 0.6;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Add animation */
  animation: ${slideInAnimation} 0.5s ease-in-out;

  h1 {
    text-align: center;
    font-weight: 1000;
    font-size: 2em;
    padding: 20px;
    font-family: "Arial", sans-serif; /* Update with desired font */
  }

  p {
    text-align: center;
    font-weight: 600;
    font-size: 1.2em;
    margin-bottom: 20px;
    font-family: "Arial", sans-serif; /* Update with desired font */
  }
`;

const SignInButton = styled(Button)`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.2em;
  padding: 10px 20px;
  background-color: #333333;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #555555;
  }
`;
