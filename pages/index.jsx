import Image from "next/image";
import { Layout } from "../components/Layout";
import { Container } from "../components/Container";
import styled from "styled-components";
import { Card } from "../components/Card";

const Description = styled.p`
  font-size: 16px;
  width: 90%;
  text-align: center;
`;

const Logo = styled.img`
  height: 120px;
  width: 320px;
`;

const Title = styled.h1`
  font-size: 40px;
`;

export default function Home() {
  return (
    <>
      <Layout>
        <Container margin="160px 0px 0px 0px" gap="20px">
          <Logo src="/logo.png" />
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            debitis quae minima itaque, illo doloribus voluptate facilis
            perferendis magnam nobis porro eum nulla asperiores animi amet
            mollitia ipsa ipsum dignissimos?
          </Description>
          <Card src="/test.jpg"/>
        </Container>
      </Layout>
    </>
  );
}
