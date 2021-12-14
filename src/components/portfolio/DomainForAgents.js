import React from "react";
import domainForAgents from "../../static/images/domain-for-agents.png";
import styled from "styled-components";

const DomaiForAgentsImageContainer = styled.div`
  position: relative;
  height: 500px;
  width: 390px;
  margin-bottom: 5%;
  border-radius: 4%;
  background: ${(props) =>
    props.image ? `url(${props.image})  center` : "gray"};
  text-align: center;
  display: inline-block;
  overflow: hidden;
`;

function DomainForAgents() {
  return (
    <DomaiForAgentsImageContainer image={domainForAgents}/>

  );
}

export default DomainForAgents;
