import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "../../data/books";

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
  const [searchBooks, setSearchBooks] = useState([]);

  return (
    <SearchContainer>
      <Title>A home for your books.</Title>
      <SubTitle>Find your next favorite reading!</SubTitle>
      <Input
        placeholder="What do you want to read?"
        onChange={(event) => {
          const MIN_SEARCH_SIZE = 3;
          const inputData = event.target.value;

          const searchResult = books.filter(
            (book) =>
              inputData &&
              inputData.length >= MIN_SEARCH_SIZE &&
              book.title.toLowerCase().includes(inputData.toLowerCase())
          );

          setSearchBooks(searchResult);
        }}
      />
      <div>
        {searchBooks.map((result) => (
          <p key={result.id}>{result.title}</p>
        ))}
      </div>
    </SearchContainer>
  );
}

export default Search;
