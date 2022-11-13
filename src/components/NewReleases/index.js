import { books } from "../../data/newReleases";
import styled from "styled-components";

const NewReleasesContainer = styled.section`
  color: #fff;
  text-align: center;
  width: 100%;
  margin-top: 36rem;
  border: 2px solid ridge;
  background: #fbeee6;
`;

const Title = styled.h2`
  color: #331a00;
  font-size: 2.5rem;
  text-align: center;
  width: 100%;
  background: white;
  padding-bottom: 3rem;
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
    border-top: 5px solid #331a00;
    border-left: 2px solid #331a00;
    border-right: 2px solid #331a00;
    border-bottom: 2px solid #331a00;
  }
`;

function NewReleases() {
  return (
    <NewReleasesContainer>
      <Title>New Releases</Title>
      <Library>
        {books.map((book) => (
          <Book key={book.id}>
            <img src={book.image} alt="" style={{ width: "200px" }} />
            <div>
              <p
                style={{
                  textTransform: "uppercase",
                  color: "#331a00",
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
