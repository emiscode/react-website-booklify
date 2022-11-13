import { books } from "../../data/newReleases";
import styled from "styled-components";
import { Title } from "../Title";

const NewReleasesContainer = styled.section`
  color: #fff;
  text-align: center;
  width: 100%;
  margin-top: 1rem;
  border: 2px solid ridge;
  background: #fbeee6;
`;

const Library = styled.div`
  display: flex;
  justify-content: center;
`;

const Book = styled.div`
  width: 18rem;
  min-height: 25rem;
  padding: 20px;
  margin: 20px;
  border: 2px solid transparent;

  &:hover {
    border-top: 5px solid #592d00;
    border-left: 2px solid #592d00;
    border-right: 2px solid #592d00;
    border-bottom: 2px solid #592d00;
  }
`;

function NewReleases() {
  return (
    <NewReleasesContainer>
      <Title
        customColor="#592d00"
        customFontSize="2.5rem"
        customBackground="white"
      >
        New Releases
      </Title>
      <Library>
        {books.map((book) => (
          <Book key={book.id}>
            <img src={book.image} alt="" style={{ width: "200px" }} />
            <div>
              <p
                style={{
                  textTransform: "uppercase",
                  color: "#592d00",
                  fontWeight: "bold",
                }}
              >
                {book.title}
              </p>
            </div>
          </Book>
        ))}
      </Library>
    </NewReleasesContainer>
  );
}

export default NewReleases;
