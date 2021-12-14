import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

function TechImages() {
  return (
    <Gallery photos={photos} />
  );
}

export default TechImages;
