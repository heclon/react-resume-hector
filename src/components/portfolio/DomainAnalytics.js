import React from "react";
import domainAnalytics from "../../static/images/domain-analytics.png";
import styled from "styled-components";

const DomainAnalyticsImageContainer = styled.div`
  position: relative;
  height: 658px;
  width: 334px;

  margin-bottom: 5%;
  border-radius: 10%;
  background: ${(props) =>
    props.image ? `url(${props.image})  center` : "gray"};
  text-align: center;
  display: inline-block;
  overflow: hidden;
`;

function DomainAnalytics() {
  return (
    <DomainAnalyticsImageContainer image={domainAnalytics}/>

  );
}

export default DomainAnalytics;
