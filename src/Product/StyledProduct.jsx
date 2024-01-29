import styled from 'styled-components';

const StyledProduct = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  max-width: 350px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 8px;
    color: #333;
    font-family: 'Arial', sans-serif;
  }

  p {
    color: #666;
    margin-bottom: 8px;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 8px;
    max-height: 150px;
    margin-bottom: 10px;
  }
`;

export default StyledProduct;
