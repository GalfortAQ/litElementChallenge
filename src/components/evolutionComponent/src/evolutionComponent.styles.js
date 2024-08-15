import { css } from 'lit';

export const styles = css`
 .evolution {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      padding: 1rem;
    }

    .info {
      min-width: 300px
    }

    .info, .image, button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      margin: 0 0.5rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 1rem;
      background-color: #f9f9f9;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .info h1 {
      margin: 0;
      font-size: 1.5rem;
    }

    .info p {
      margin: 0;
      color: #666;
      font-size: 1rem;
    }

    .image img {
      max-width: 80px;
    }

    button {
    font-size: 16px;
    font-weight: 600;
    color:#DD5F57;
    border: solid 1px #DD5F57;
    background-color: white;
    border-radius: 4px;
    box-shadow: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #dd605780;
  }
`;
