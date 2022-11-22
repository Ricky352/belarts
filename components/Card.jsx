import styled from "styled-components";
import { Container } from "./Container";

const CreationContainer = styled.div`
  background-color: #282a3a;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 328px;
  width: 250px;
`;

const Image = styled.img`
  border-radius: 20px;
  height: 100%;
  width: 100%;
`;

const ImageContainer = styled.div`
  background-color: #b3b5bd;
  border-radius: 20px;
  display: flex;
  height: 250px;
  margin: 5px;
  width: 240px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 12px;
`;

const Text = styled.p`
  color: white;
  font-size: 20px;
`;

export function Card(props) {
  return (
    <>
      <Container gap="12px">
        <CreationContainer>
            <a href="/test.jpg">
          <ImageContainer>
            <Image src={props.src} />
          </ImageContainer>
          </a>
          <DescriptionContainer>
            <Text>Price: 10e</Text>
            <Text>Quantity: 5</Text>
          </DescriptionContainer>
        </CreationContainer>
      </Container>
    </>
  );
}
