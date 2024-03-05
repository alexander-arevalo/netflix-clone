import React from "react";
import styled from "styled-components";
import MovieSlider from "./MovieSlider";

const SliderContainer = ({ movies }) => {
  const getMOviesBetween = (start, end) => {
    return movies.slice(start, end);
  };
  return (
    <SliderWrapper>
      <MovieSlider data={getMOviesBetween(0, 10)} title="Only on Netflix" />
      <MovieSlider data={getMOviesBetween(10, 20)} title="Trending Now" />
      <MovieSlider data={getMOviesBetween(20, 30)} title="Popular On Netflix" />
      <MovieSlider data={getMOviesBetween(30, 40)} title="Romantic Movie" />
      <MovieSlider data={getMOviesBetween(40, 50)} title="Epic" />
      <MovieSlider data={getMOviesBetween(50, 60)} title="New Releases" />
      <MovieSlider data={getMOviesBetween(70, 80)} title="Actions Movies " />
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div``;

export default SliderContainer;
