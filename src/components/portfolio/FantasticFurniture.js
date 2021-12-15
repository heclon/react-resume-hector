import React from "react";
import fantasticFurniture from "../../static/images/fantasticfurniture.png";
import styled from "styled-components";

const FantasticFurnitureImageContainer = styled.div`
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

function FantasticFurniture() {
  return (
    <FantasticFurnitureImageContainer image={fantasticFurniture}
    onClick={() => {
      window.open(
        'https://www.fantasticfurniture.com.au/',
        '_blank'
      );
    }}/>

  );
}

export default FantasticFurniture;
