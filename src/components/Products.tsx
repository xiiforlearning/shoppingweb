import styled from "styled-components";

import { popularProducts } from "../data";
import { mobile } from "../responsive";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1240px;
  ${mobile({ width: "none" })}
`;

export interface Product {
  id: number;
  img: string;
}

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: black;
  border: 2px solid black;
  transition: 0.3s;
  margin-bottom: 20px;
  color: white;
  opacity: 0.9;

  cursor: pointer;
  :hover {
    background-color: transparent;
    color: black;
    border: 2px solid black;
  }
`;

const Products = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        {popularProducts.map((item: Product) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </Container>
      <Button>SHOW MORE</Button>
    </div>
  );
};

export default Products;
