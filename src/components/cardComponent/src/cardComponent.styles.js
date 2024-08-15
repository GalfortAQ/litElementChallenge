import { css } from 'lit';

export const styles = css`
:host {
  --header-bg-Grass: #7AC74C;
  --header-bg-Poison: #A040A0;
  --header-bg-Fire: #F08030;
  --header-bg-Water: #6890F0;
  --header-bg-Electric: #F8D030;
  --header-bg-Normal: #b8e3ff;
  --header-bg-Fairy: #EE99AC;
  --header-bg-Ghost: #313131;
  --header-bg-Fighting: #C03028;
  --header-bg-Rock: #916640;
  --header-bg-Ground: #E0C068;
  --header-bg-Psychic: #F85888;
  --header-bg-Flying: #A890F0;
  --header-bg-GrassPoison: linear-gradient(50deg, var(--header-bg-Grass), var(--header-bg-Poison));
  --header-bg-FireFlying: linear-gradient(50deg, var(--header-bg-Fire), var(--header-bg-Flying));
  --header-bg-RockGround: linear-gradient(50deg, var(--header-bg-Rock), var(--header-bg-Ground));
  --header-bg-NormalFairy: linear-gradient(50deg, var(--header-bg-Normal), var(--header-bg-Fairy));
  --header-bg-GhostPoison: linear-gradient(50deg, var(--header-bg-Ghost), var(--header-bg-Poison));
  --header-bg-default: #CCCCCC;
}


  .card {
    border: none;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transform: scale(1.07);
  }

  .header-card {
    padding: 16px;
    color: white;
    text-align: center;
    font-size: 1rem;
  }

  .body-card {
    padding: 16px;
    text-align: center;
    font-size: 1rem;
    background-color:#f5f5f5
  }

  .body-card img {
    max-width: 100%;
    height: auto;
  }
`;
