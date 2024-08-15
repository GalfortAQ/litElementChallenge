import { css } from 'lit';

export const styles = css`
  .form-container {
    min-width: 400px;
    margin: 10px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  .form-group {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 15px;
  }
  label {
    margin-right: 10px;
    font-size: 1rem;
    font-weight:600;
  }
  input[type='text'] {
    width: 300px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .form-group-check  {
    margin-bottom: 15px;
  }
  input[type='checkbox'] {
    margin-right: 10px;
  }
  input[type='checkbox']:checked {
    background-color:#dd5f57;
  }
  .button-container {
    text-align: center;
  }
  button {
    padding: 10px 15px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #dd5f57;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #99423b;
  }
`;
