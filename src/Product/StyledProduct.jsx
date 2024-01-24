import styled from 'styled-components';

const StyledProduct = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: aliceblue;
  max-width: 350px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: black; 
    font-family: 'Arial', sans-serif;
  }

  p {
    color: black;
    margin-bottom: 8px;
    font-family: 'Arial', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-top: 8px;
    max-height: 150px; 
    margin-bottom: 10px;
  }
`;

export default StyledProduct;
