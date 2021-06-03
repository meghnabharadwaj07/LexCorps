import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";

import AboutImgUrl from "../../assets/illustrations/rocket_launch_.png";

const MoreAboutContainer = styled(Element)`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  @media screen and (max-width: 480px) {
    max-width: 100%;
    flex-direction: column-reverse;
  }
`;
const AboutFirstContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;

  
`;

const AboutText = styled.p`
  font-size: 21px;
  color: #2f2f2f;
  font-weight: normal;
  line-height: 1.4;
`;

const AboutImg = styled.img`
  width: 600px;
  height: 500px;
  margin-left: 2em;

  @media screen and (max-width: 480px) {
    width: 370px;
    height: 290px;
    margin-left: 0;
  }
`;

export function MoreAboutSection(props) {
  return (
    <MoreAboutContainer>
      <SectionTitle>More About LexCorps</SectionTitle>
      <AboutFirstContainer><AboutText>
        The the objective of this project is to make a powerful technology that allows 
        technical as well as non-technical user's to start an online e- commerce business
         with a professional and functional web presence. {<br />}{<br />}
          This technology aims to provide features and solutions that a customer would 
          require to build a professional website intact with a payment portal as well
           as testing abilities with true creative freedom. 
          </AboutText></AboutFirstContainer>
      
      <AboutContainer>
        
          <AboutText>
           We have initially carried out a survey of relevant literature and 
          related work on the broad spectrum of e-Business trying to examine not only the technical dimensions of the subject 
          but also the business and the social aspects of a business.{<br />}
          {<br />}The success and failure factors of e-Business is another issue 
          that we have examined along with some cases where the  companies that managed to effectively
          implement e-Business in their operations and others that did not. 
          {<br />}
          {<br />}With the help of this analysis ,we have built different components  have been created and different technologies have 
           , keeping the requirements of user and business in mind.{" "}
         
        </AboutText>
        <AboutImg src={AboutImgUrl} />
      </AboutContainer>
      <AboutFirstContainer><AboutText>
      So whether you are professional who would like a basic framework and would like flexibility
          to modify according to your whim ,
          or you’re just starting out and require an entire infrastructure, you are in the right place.
          </AboutText></AboutFirstContainer>
     
    </MoreAboutContainer>
  );
}
