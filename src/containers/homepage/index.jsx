import React,{useEffect} from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { MoreAboutSection } from "./moreAboutSection";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";
import {BrowserRouter as Router} from "react-router-dom"

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
  useEffect(() => {
        
  },[]);
  return (
    <Router>
    <PageContainer>
      <TopSection />
      <ServicesSection />
      <Marginer direction="vertical" margin="2em" />
      <MoreAboutSection />
      <Marginer direction="vertical" margin="8em" />
      <Footer />
    </PageContainer>
    </Router>
  );
}
