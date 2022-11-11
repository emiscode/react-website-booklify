import Input from "../Input";
import styled from "styled-components";

const SearchContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  width: 100%;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Search() {
  return (
    <SearchContainer>
      <Title>A home for your books.</Title>
      <SubTitle>Find your next favorite reading!</SubTitle>
      <Input placeholder="What do you want to read?" />
    </SearchContainer>
  );
}

export default Search;
