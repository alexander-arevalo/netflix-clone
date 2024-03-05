import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const Card = ({ movieData }) => {
  const [onHovered, setOnHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <CardContainer
      onMouseEnter={() => setOnHovered(true)}
      onMouseLeave={() => setOnHovered(false)}
    >
      <img
        src={
          movieData?.image
            ? `https://image.tmdb.org/t/p/w500${movieData.image}`
            : "https://imgs.search.brave.com/67HSeAl0uJc9LPOafXf6s0S_cQsoph7A7yX1Z8vw6E8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NDM3MDMwMi9waG90/by93ZWxjb21lLXNp/Z24tb24tYmx1ZS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1R/Y1ZQUDI2R1Y4OElG/dFpOUzVhTEs0OGds/akJ3bDhhNEdjV3Jz/SWVNTkwwPQ"
        }
        alt="movie poster"
        onClick={() => navigate("/player")}
      />
      {onHovered && (
        <div className="hover">
          <div className="image-video-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData?.image}`}
              alt="movie poster"
              onClick={() => navigate("/player")}
            />
            <video
              src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
              autoPlay
              loop
              controls
            />
          </div>
          <div className="info-container">
            <h3 className="movie-name" onClick={() => navigate("/player")}>
              {movieData?.name}
            </h3>
            <div className="icons">
              <div className="controls">
                <IoPlayCircleSharp
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title="like" />
                <RiThumbDownFill title="Dis like" />
                <BsCheck title="Remove From List" />
                <AiOutlinePlus title="Add to my List" />
              </div>
              <div className="info">
                <BiChevronDown title="More Info" />
              </div>
            </div>
            <div className="genre">
              <ul>
                {movieData?.genres.map((genre) => {
                  <li>{genre}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin-top: 1rem;
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 100%;
    width: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid grey;
    background-color: #181818;
    transition: 0.3s ease-out;
    .image-video-wrapper {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
      video {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;
        position: absolute;
      }
    }
    .info-container {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 0.5rem;
      .movie-name {
        color: white;
      }
    }
    .icons {
      display: flex;
      justify-content: space-between;
      .controls {
        display: flex;
        gap: 0.5rem;
      }
      svg {
        color: white;
        border: 0.1rem solid white;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genre {
      display: flex;
      color: white;
      ul {
        display: flex;
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;

export default Card;
