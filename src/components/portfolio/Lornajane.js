import React from "react";
import lornajane from "../../static/images/lornajane.png";
import styled from "styled-components";

const LornajaneImageContainer = styled.div`
  position: relative;
  height: 360px;
  width: 400px;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 5%;
  background: ${(props) =>
    props.image ? `url(${props.image})  center` : "gray"};
  text-align: center;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
`;

function Lornajane() {
  return (
    <LornajaneImageContainer image={lornajane}
    onClick={() => {
      window.open(
        'https://www.lornajane.com.au/',
        '_blank'
      );
    }}/>

  );
}

export default Lornajane;
