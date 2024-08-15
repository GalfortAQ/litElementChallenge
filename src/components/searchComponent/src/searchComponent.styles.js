import { css } from 'lit';

export const styles = css`
 .searchBar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 50px;
    margin-right: 10px;
    width: 250px;
  }

  button {
    padding: 10px 15px;
    font-size: 16px;
    color: white;
    background-color: #DD5F57;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #99423b;
  }
`;
