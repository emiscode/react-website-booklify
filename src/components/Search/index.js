import "./index.css";

import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "../../data/books";

const SearchContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: auto;
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

const Library = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
`;

const Book = styled.div`
  width: 18rem;
  height: auto;
  padding: 20px;
  margin: 20px;
  border: 3px solid #006653;

  &:hover {
    border-top: 6px solid #592d00;
    border-left: 3px solid #592d00;
    border-right: 3px solid #592d00;
    border-bottom: 3px solid #592d00;
  }
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
      <Library>
        {searchBooks.map((result) => (
          <Book key={result.id}>
            <img src={result.image} alt="" style={{ width: "200px" }} />
            <div>
              <p
                style={{
                  textTransform: "uppercase",
                  color: "#592d00",
                  fontWeight: "bold",
                  background: "#fbeee6",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                {result.title}
              </p>
              <p style={{ textAlign: "justify", lineHeight: "1.5" }}>
                {result.description}
              </p>
            </div>
          </Book>
        ))}
      </Library>
    </SearchContainer>
  );
}

export default Search;
