import React ,{useEffect}from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { System } from "../../components/system";
import { SectionTitle } from "../../components/sectionTitle";
import {Navbar}from "../../components/navbar";
import {Footer}from "../../components/footer";
import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ProjectContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  background-color:black;
`;
const PictureContainer = styled(Element)`
  width: 100%;
  min-height: auto;
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  background-color:black;
  justify-content: center;
`;

export function Project(props) {
    useEffect(() => {
        
      },[]);
  return (
    <ProjectContainer name="servicesSection">
        <Navbar/>
      <SectionTitle>Choose a System</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <PictureContainer>
      <System
        text="System 1"
        imgUrl={Service1Img}
        systemUrl="https://lexcorp-system.herokuapp.com/"
        performanceUrl="https://gtmetrix.com/reports/lexcorp-system.herokuapp.com/UnDGuOtM/"
      />
     <Marginer direction="horizontal" margin="5em" />
      <System
        text="System 2"
        imgUrl={Service2Img}
        systemUrl="http://automationpractice.com/index.php"
        performanceUrl="https://gtmetrix.com/reports/automationpractice.com/JxLEgVyT/"
      />
     <Marginer direction="horizontal" margin="5em" />
      <System
        text="System 3"
        imgUrl={Service3Img}
        systemUrl="https://www.phptravels.net/home"
        performanceUrl="https://gtmetrix.com/reports/www.phptravels.net/AxCRh7CD/"
      />
      </PictureContainer>
      <PictureContainer>
      <System
        text="System 4"
        imgUrl={Service1Img}
        systemUrl="https://lexcorp-system.herokuapp.com/"
        performanceUrl="https://gtmetrix.com/reports/automationpractice.com/JxLEgVyT/"
      />
     <Marginer direction="horizontal" margin="5em" />
      <System
        text="System 5"
        imgUrl={Service2Img}
        systemUrl="https://lexcorp-system.herokuapp.com/"
        performanceUrl="https://gtmetrix.com/reports/automationpractice.com/JxLEgVyT/"
      />
     <Marginer direction="horizontal" margin="5em" />
      <System
        text="System 6"
        imgUrl={Service3Img}
        systemUrl="https://lexcorp-system.herokuapp.com/"
        performanceUrl="https://gtmetrix.com/reports/automationpractice.com/JxLEgVyT/"
      />
      </PictureContainer>
      
      <Footer/>
    </ProjectContainer>
    
  );
}
