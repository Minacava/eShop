import styled from "styled-components"
import { above } from "./index"

export const colors = {
  green: "#98ca3f",
  orange: "#f8b71c",
  gray: "#969696",
  darkBlue: "#87B8DE",
  lightBlue: "#1e5372",
  softGray: "#f6f8f9",
  grey: "#EAEAEA",
  KiaDarkGrey: "#25221e",
  white: "#fff",
}

export const StyledHeader = styled.header`
  background-image: linear-gradient(90deg, ${colors.white}, ${colors.softGray});
  margin-bottom: 0;
  padding: 0 0.5rem 0 0;
  height: 3.5rem;
  width: 100%;
  max-width: 960;
  display: flex;
  position: fixed;
  z-index: 3;
  align-items: center;
  justify-content: space-between;
  a {
    height: 100%;
    font-size: 0.6rem;
  }
  & > a > img,
  span {
    margin: 0;
    background-color: ${colors.green};
    height: 100%;
    padding: 0.5rem 0.8rem;
  }
  & ul {
    list-style: none;
    margin: 0;
    display: flex;
    font-size: 0.2rem;
  }
  ${above.medium`
    padding: 0 2rem;
    height: 3.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
  ${above.large`
    padding: 0 10rem;
    height: 4.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
`
export const StyledJumbo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 2rem;
  color: ${colors.KiaDarkGrey};
  margin-bottom: 9rem;
  overflow: hidden;
  position: relative;
  div{
    padding: 1rem;
    width: 35vw;
  };
  & h2 {
    font-weight: 500;
    font-size: 1.2rem;
    margin: 0 0 20px 0;
      color: ${colors.lightBlue};
  };
  & small{
    font-weight: 100;
    font-size: 0.6rem;
  };
  & img{
    width: 35vw;
  };
  ${above.medium`
    padding: 2rem 4rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;

    };
    & small{
      font-size: 0.8rem;
    };
  `}
  ${above.mediumL`
    padding: 2rem 4rem;
    flex-direction: row;
    & h2 {
      font-size: 1.5rem;
    };
    & small{
      font-size: 1.2rem;
    };
  `}
  ${above.large`
    padding: 2rem 10rem;
    flex-direction: row;
    & h2 {

      font-weight: 500;
      font-size: 2.2rem;
    };
       & small{
      font-size: 1.8rem;

    };
  `}

  &:before{
    content: " ";
    // background-color: red;
     //background-color: ${colors.softGray};
    z-index: -1;
    position: absolute;
    transform: rotate(-19deg);
    border-radius: 35%;
    top: -25%;
    width: 120%;
    height: 15rem;
    ${above.medium`
      height: 20rem;
      top: -50%;
    `}
    ${above.mediumL`
      height: 30rem;
      top: -60%;
    `}
    ${above.large`
      width: 110vw;
      height: 52vw;
      top: -66%;
    `}
  };

`

export const StyledProducts = styled.div`
  background-color: ${colors.softGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 5rem 1rem;
  h2 {
    color: ${colors.lightBlue};
    font-size: 2rem;
  }
  & img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
    margin: 0;
  }
  article {
    display: flex;
    flex-direction: column;
    background: white;
    align-items: center;
    padding-bottom: 1rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    p {
      margin: 0;
      color: ${colors.green};
      font-weight: 500;
      font-size: 1.2rem;
    }
    small {
      color: ${colors.lightBlue};
      font-weight: 500;
      font-size: 1.2rem;
    }
    a {
      text-decoration: none;
      color: ${colors.lightBlue};
      font-size: 0.8rem;
      border-bottom: 3px solid ${colors.green};
      span {
        color: ${colors.green};
      }
    }
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  section {
    display: grid;
    grid-gap: 2rem;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 0;
    ${above.large`
      padding: 0 1rem;
      grid-gap: 3rem;
      padding: 0 10rem;
    `};
  }
`

export const StyledProductDetail = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 82vh;
  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
    margin: 0;
  }
  p {
    color: #171717;
    font-weight: 500;
    margin: 1.2rem 0;
    font-size: 0.9rem;
    text-align: flex-start;
  }
  & b {
    color: ${colors.green};
    font-size: 1.5rem;
    margin: 0;
    font-weight: 800;
  }
  h2,
  h3 {
    margin: 0;
  }
  small {
    margin: 0;
    color: ${colors.KiaDarkGrey};
    text-align: justify;
  }
  div {
    img {
      width: 20px;
      margin: 0.5rem 0;
      display: block;
      fill: red;
    }
  }
  ${above.medium`
    padding: 1rem 3rem;
    flex-direction: column;
    img{
      margin-right: 2rem;
    }
    `}
  ${above.large`
    flex-direction: row;
    height: 82vh;
    padding: 2rem 10rem;
  `}
`

export const StyledCart = styled.div`
  padding: 1rem;
  height: 80vh;
  overflow-y: scroll;
  h2 {
    border-bottom: 2px solid ${colors.lightBlue};
    color: ${colors.lightBlue};
  }
  & th {
    color: ${colors.KiaDarkGrey};
    margin: 0;
    border: none;
  }
  & img {
    vertical-align: middle;
    width: 120px;
    margin: 1rem;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${colors.lightBlue};
    div {
      display: flex;
      align-items: baseline;
      width: 250px;
      justify-content: space-between;
    }
  }
  & small {
    color: #505050;
    font-size: 0.9rem;
  }
  ${above.medium`
    padding: 1rem 3rem;
  `}
  ${above.large`
    padding: 5rem 10rem;
  `}
`

export const MenuItem = styled.li`
  margin: 0;
  color: ${colors.KiaDarkGrey};
  font-size: 1.3rem;
  font-weight: 100;
  padding: ${({ margin }) => (margin ? "0 13px 0 13px" : "0 0 0 13px")};
  a {
    color: ${colors.KiaDarkGrey};
    text-decoration: none;
  }
  & img {
    margin-right: 5px;
    width: 0.4rem;
  }
  ${above.medium`
    border-right: ${({ margin }) => (margin ? "1px solid #25221e" : "")};
    padding: ${({ margin }) => (margin ? "0 26px 0 26px" : "0 0 0 26px")};
    & img{
      margin-right: 5px; 
      width: 0.7rem;
    }
  `}
`

export const Footer = styled.footer`
  background-color: ${colors.orange};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  bottom: 0;
  a {
    color: ${colors.KiaDarkGrey};
    margin-left: 0.3rem;
    text-decoration: none;
  }
`

export const Tag = styled.span`
  padding: 0.1rem 0.6rem;
  background-color: ${colors.orange};
  display: inline-block;
  margin: 1.2rem 0;
  color: white;
  border-radius: 5px;
`

export const SizeButton = styled.button`
  padding: calc(0.4rem + 1px);
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: #272727;
  opacity: ${({ unavailable }) => (unavailable ? 0.4 : 1)};
  transition: 0.4s all ease;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.2);
  }
`

export const QtyButton = styled.button`
  padding: 0.4rem;
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
`
export const QtySelect = styled.div`
  display: flex;
  margin: 0.6rem 0;
  button {
    padding: 0 10px;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    max-width: 70px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #707070;
  }
  input {
    padding: 0.6rem;
    background-color: transparent;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    max-width: 40px;
    max-height: 40px;
  }
`
export const SizeSelect = styled.div`
  display: grid;
  width: 10rem;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  font-size: 0.8rem;
  margin-top: 0.6rem;
  button:nth-child(${props => props.selected}) {
    border: 2px solid rgba(0, 0, 0, 0.3);
  }
`
export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ type }) =>
    type === "outline" ? "transparent" : colors.KiaDarkGrey};
  color: ${({ type }) => (type === "outline" ? colors.darkBlue : "white")};
  font-size: 0.9rem;
  padding: 0.3rem 1rem;
  margin: 1.2rem 0;
  font-weight: 500;
  border: ${({ type }) =>
    type === "outline"
      ? `1px solid ${colors.darkBlue}`
      : `1px solid ${colors.KiaDarkGrey}`};
  border-radius: 12px;
  a {
    text-decoration: none;
    color: ${({ type }) => (type === "outline" ? colors.darkBlue : "white")};
  }
  &:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray};
    cursor: not-allowed;
  }
`
export const SelectFavorite = styled.div`
  margin: 0.5rem 0;
  span {
    margin: 0 5px;
    cursor: pointer;
    font-size: 40px;
    color: ${props =>
      props.selected === true ? colors.orange : colors.darkBlue};
  }
`
export const SelectStars = styled.div`
  margin: 0.5rem 0;
  span {
    margin: 0 5px;
    color: ${colors.KiaDarkGrey};
    cursor: pointer;
  }
  span:nth-child(-n + ${props => props.selected}) {
    color: ${colors.orange};
  }
`
export const Purchase = styled.div`
  width: 100vw;
  height: calc(100vh - 4.5rem - 101px);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.2rem;
  }
  p {
    margin: 2px 0;
  }
  span {
    font-size: 2rem;
  }
`

export const Content = styled.div`
  ${above.medium`
    padding-top: 3.5rem;
    `}
  ${above.large`
    padding-top: 4.5rem;
  `}
`
