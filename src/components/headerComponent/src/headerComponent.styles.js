import { css } from 'lit';

export const styles = css`
  .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background-color: #DD5F57;
    padding: 10px 20px;
    box-sizing: border-box;
  }

  .back-arrow {
    margin-right: 20px;
    cursor: pointer;
    font-size: 24px;
    color: white;
  }

  .ball {
    margin-right: 20px;
    animation: app-logo-spin infinite 5s linear;
  }

  .ball img {
    height: 50px;
  }

  .logo img {
    height: 50px;
  }

  .nav-links {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 15px;
    font-size: 18px;
  }

  .nav-links a:hover {
    text-decoration: underline;
  }

  @keyframes app-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
