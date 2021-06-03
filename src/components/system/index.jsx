import React from "react";
import styled from "styled-components/macro";
import {Button} from "@material-ui/core";

import { Marginer } from "../../components/marginer";
const SystemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction:column;
  margin-bottom: 4em;
  flex-wrap: wrap-reverse;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

const SystemImg = styled.img`
  width: 15em;
  height: 10em;

  @media screen and (max-width: 480px) {
    width: 18em;
    height: 13em;
  }
`;
const SystemButton = styled.div`
display: flex;
align-items: center;
flex-direction:row;

`;



export function System(props) {
  const { imgUrl, text,systemUrl,performanceUrl} = props;

  return (
    <SystemContainer >
      <SystemImg src={imgUrl} />
      <Marginer direction="vertical" margin="3em" />
      <SystemButton>
      <Button variant="outlined" color="primary"><a href={systemUrl}>
  {text}</a>
</Button>
      <Button variant="outlined" color="primary"><a href={performanceUrl}>
  Performance Checker</a>
</Button>

</SystemButton>

    </SystemContainer>
  );
}
