import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";

import {Link}from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;

  &:hover {
    background-color: transparent;
    border: none;
    color: rgb(212, 212, 212);
  }
`;

export function Navbar(props) {
 
  const project = () => {
    window.location.assign("/project");
  };  
  const login = () => {
    window.location.assign("/login");
  };  
  const docs = () => {
    window.location.assign("https://gtmetrix.com/compare/T6qkIDw8/Wl8DTMnG/CTr2W4cU");
  }; 
  
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <Button small onClick={project}>Get Started</Button>
        
        <Marginer direction="horizontal" margin="8px" />
        <LoginButton small onClick={docs}>Docs</LoginButton>
        <Marginer direction="horizontal" margin="8px" />
        <Link to="/login">
        <LoginButton small onClick={login}>Login</LoginButton></Link>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
