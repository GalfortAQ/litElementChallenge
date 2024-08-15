import { LitElement, html } from 'lit';
import {styles} from './searchComponent.styles.js';

export class SearchComponent extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      search: { type: String },
    };
  }

  constructor() {
    super();
    this.search = '';
  }

  handleInput(event) {
    this.search = event.target.value;
  }

  getPokemonByName(name) {
    this.dispatchEvent(new CustomEvent('get-pokemon-by-name',{
      bubbles: true,
      composed: true,
      detail: name
    }));
  }

  render() {
    return html`
     <div class='searchBar'>
        <input
          type="text"
          @input=${this.handleInput}
          placeholder="Search Pokémon..."
        />
        <button @click=${() => this.getPokemonByName(this.search)}>
          Search
        </button>
      </div>
    `;
  }
}

