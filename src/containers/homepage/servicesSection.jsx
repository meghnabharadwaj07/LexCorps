import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>One Click Solution</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Fully integrated services"
        description="We provide six fully integrated e-commerce apps
          with customizable flexibility that fit your 
          company needs"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Features covered"
        description="The app would have already incorporated database backend, frontend,
        routing capabilities as well as payment portal management already inbuilt
         "
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Performance is our priority"
        description="You can choose your webapp according to the performance you wish 
        to attain in your system. Saves you the budget of investing in features that are not 
        required with the help of our comprehensive documentation
        "
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
