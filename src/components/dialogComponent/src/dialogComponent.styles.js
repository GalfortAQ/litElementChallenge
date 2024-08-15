import { css } from 'lit';

export const styles = css`
  :host {
    display: none;
  }
  :host([open]) {
    display: block;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  .dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    z-index: 1000;
    border-radius: 20px;
  }
  .dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #dd5f57;
    color: white;
    border-bottom: 1px solid #ddd;
    border-radius: 20px 20px 0 0;
  }
  .dialog-body {
    padding: 16px;
    font-size: 1rem;
  }
  .close-button {
    background: none;
    border: none;
    color:#99423b;
    font-size: 30px;
    cursor: pointer;
  }
  .close-button:hover {
    color:#5c2824;
  }
`;
