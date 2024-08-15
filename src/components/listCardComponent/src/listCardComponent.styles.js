import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    padding: 16px;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
  }

  card-component {
    display: block;
  }
`;
