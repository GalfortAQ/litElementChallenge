import { LitElement, html } from 'lit';
import { styles } from './headerComponent.styles.js';

const pokeball = new URL('../../../../assets/pokeball.png', import.meta.url).href;
const pokedex = new URL('../../../../assets/pokedex.svg', import.meta.url).href;

export class HeaderComponent extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      altText: { type: String },
      showBackArrow: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.altText = 'Pokeball';
    this.showBackArrow = false;
  }

  render() {
    return html`
      <div class="header">
        <div class="ball"><img alt=${this.altText} src=${pokeball} /></div>
        <div class="logo"><img alt="open-wc logo" src=${pokedex} /></div>
        <div class="nav-links">
          <a href="/">Pokémon List</a>
        </div>
      </div>
    `;
  }
}
