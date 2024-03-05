import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { firebaseAuth } from "../utils/firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Nav = ({ isScrolled }) => {
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) {
      navigate("/login");
    }
  });

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];
  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScrolled"}`}>
        <div className="left-side">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
              alt="logo"
            />
          </div>
          <ul className="links">
            {navLinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="right-side">
          <button onClick={() => signOut(firebaseAuth)}>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .notScrolled {
    display: flex;
  }
  .scrolled {
    display: flex;
    background-color: black;
  }

  nav {
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
    transform: 0.3s ease-in-out;
  }
  .left-side {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 5rem;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 10rem;
        height: 2rem;
      }
    }

    .links {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li {
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
  .right-side {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    button {
      background-color: red;
      border: none;
      cursor: pointer;
      border-radius: 20%;
    }
    &focus {
      outline: none;
    }
    svg {
      color: white;
      font-size: 2rem;
    }
  }
`;
export default Nav;
