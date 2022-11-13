import styled from "styled-components";

const Input = styled.input`
  order: 1;
  background: #fbeee6;
  border: 2px solid #6c6c00;
  padding: 20px 140px;
  width: 300px;
  color: #592d00;
  font-size: 1rem;
  margin-bottom: 10px;

  &::placeholder {
    color: #808000;
    font-size: 16px;
    text-align: center;
  }
`;

export default Input;
