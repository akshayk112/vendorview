import { styled } from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo src="./images/vendorviews-logos_white.png" alt="" />
      <List>
        <Item>Home</Item>
        <Item>Products</Item>
        <Item>About</Item>
      </List>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  color: white;
  font-size: 1.2rem;
  width: 100vw;
  height:100px;
  background-color: black;
  align-items: center;
  justify-content: space-between;

  /* Add transition */
  transition: background-color 0.3s;
`;

const Logo = styled.img`
  width: 90px;
  height: auto;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  padding-right: 3rem;

  /* Add transition */
  transition: color 0.3s;

  &:hover {
    color: red; /* Change to the desired hover color */
  }
`;
