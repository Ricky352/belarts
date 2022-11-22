import styled from "styled-components";
import { device } from "./Device";

const Navbar = styled.div`
  align-items: center;
  color: white;
  display: flex;
  justify-content: center;

  margin-top: 80px;
  width: 100%;

  @media ${device.tablet} {
    justify-content: center;
  }
`;

const Name = styled.div`
  color: black;
  font-size: 20px;
  font-family: "Sacramento", cursive;
  font-weight: bold;
  height: 100%;

  @media ${device.tablet} {
    font-size: 200px;
  }
`;

const Title = styled.a`
  color: white;
  text-decoration: none;
  font-family: "Rajdhani", sans-serif;
  font-size: 20px;
  font-weight: 400;
  &:hover {
    transform: scale(1.05);
  }

  @media ${device.tablet} {
    font-size: 32px;
  }
`;

// const StyledContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
// `;

export function Header() {
  return (
    <>
      <Navbar>
        <Title>Contact me</Title>
      </Navbar>
    </>
  );
}
