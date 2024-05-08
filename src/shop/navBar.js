import { useNavigate } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';



export default function NavBar() {
  const navigate = useNavigate();
  return (
    <>
     <Nav>
       <Logo>My Logo</Logo>
       <a class="link-danger" style={{color:"rosybrown"}}onClick={() => navigate("/")}>Home</a>
       <a class="link-danger" style={{color:"rosybrown"}} onClick={() => navigate("/Footies")}>Footies</a>
       <a class="link-danger" style={{color:"rosybrown"}} onClick={() => navigate("/Sets")}>Sets</a>
       <a class="link-danger" style={{color:"rosybrown"}} onClick={() => navigate("/Outwair")}>Outwair</a>
       <a class="link-danger" style={{color:"rosybrown"}}onClick={() => navigate("/Blankets & Swaddles")}>Blankets & Swaddles</a>
       <a class="link-danger" style={{color:"rosybrown"}}onClick={() => navigate("/Accessories")}>Accessories</a>
       <a class="link-danger" style={{color:"rosybrown"}}onClick={() => navigate("/Pajamas")}>Pajamas</a>
       <a class="link-danger" style={{color:"rosybrown"}}onClick={() => navigate("/Cart")}>🛒 My Cart</a>
     </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;
