import React from "react";
import styled from "styled-components";

// const loadButtons = styled.keyframes`
//   from {
//     right: -64px;
//   }
//   to {
//     right: 2px;
//   }
//animation: ${loadButtons} 0.25s both;
// `;

const Button = styled.button`
  background-color: #575456;
  color: #90ada5;
  border: 1px solid #cb8371;
  position: fixed;
  right: 2px;
  z-index: 1000;
  font-size: 18px;
  width: 50px;

  &:active {
    transform: translateY(1px);
    outline-color: #90ada5;
  }
`;
export const SwitchButton = styled(Button)`
  top: 5%;
`;
export const NewButton = styled(Button)`
  top: 11%;
`;
export const SaveButton = styled(Button)`
  top: 17%;
`;
