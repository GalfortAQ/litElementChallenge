import { css } from 'lit';

export const styles = css`
  .container {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    max-width: 300px;
    margin: 20px 0;
  }
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  p span{
    color:gray;
  }
  h3 {
    margin: 10px;
  }
  button {
    min-width:100px;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #DD5F57;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 10px;
  }

  button:hover {
    background-color: #99423b;
  }
`;
