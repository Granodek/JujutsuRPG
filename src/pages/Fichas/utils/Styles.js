import styled from "styled-components";
import items from "./ItensColor.json";

export const Itemm = styled.div`
  font-size: 1.125rem;
  line-height:1.75rem;
  color: ${props => props.bgColor || "white"};
  font-weight: 600;
`;


