import { css } from 'lit';

export const styles = css`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: #1a2b42;
    width: 100%;
    margin: 0;
    text-align: center;
    background-color: var(--pokemon-app-background-color);
    box-sizing: border-box;
  }

  main {
    flex-grow: 1;
    width: 100%;
    box-sizing: border-box;
  }
`;
