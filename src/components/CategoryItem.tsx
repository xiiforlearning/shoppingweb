import styled from "styled-components";
import { mobile } from "../responsive";
import { Category } from "./Categorries";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  :hover img {
    filter: blur(2px) grayscale(70%);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;

  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: 1px solid white;
  padding: 15px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
  :hover {
    background-color: transparent;
    color: white;
  }
`;

interface Props {
  item: Category;
}

const CategoryItem = ({ item }: Props) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
