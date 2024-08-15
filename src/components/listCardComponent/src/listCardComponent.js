import { LitElement, html } from 'lit';
import { styles } from './listCardComponent.styles.js';
import '../../cardComponent/index.js';

export class ListCardComponent extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      pokemonList: { type: Array },
    };
  }

  render() {
    return html`
      <div class="card-container">
        ${this.pokemonList.map(pokemon => html`
          <card-component
            id="${pokemon.id}"
            name="${pokemon.name}"
            type="${pokemon.type}"
            image="${pokemon.image}"
            .evolutions="${pokemon.evolutions}">
          </card-component>
        `)}
      </div>
    `;
  }
}
