import { LitElement, html } from 'lit';
import { styles } from './list-page.styles.js';
import '../../../components/dmPokemonComponent/index.js';
import '../../../components/listCardComponent/index.js';
import '../../../components/searchComponent/index.js';

export class ListPage extends LitElement {

  static get properties() {
    return {
      search: { type: String },
      pokemonList: { type: String },
    };
  }

  static styles = [styles];

  constructor() {
    super();
    this.pokemonList = [];
  }

  firstUpdated() {
    this.getPokemon();
  }

  getPokemon() {
    const dm = this.shadowRoot.querySelector('dm-pokemon-component');
    dm.getAllPokemon();
  }

  getPokemonByName(name) {
    const dm = this.shadowRoot.querySelector('dm-pokemon-component');
    dm.getPokemonByName(name);
  }

  setListPokemon(items) {
    this.pokemonList = items;
  }

  render() {
    return html`
      <dm-pokemon-component
        @get-pokemon-success=${e => {
          this.setListPokemon(e.detail);
        }}
        @get-pokemon-by-name-success=${e => {
          this.setListPokemon(e.detail);
        }}
      ></dm-pokemon-component>
      <search-component
        @get-pokemon-by-name=${e => {
          this.getPokemonByName(e.detail);
        }}
      ></search-component>
      <div>
        <list-card-component .pokemonList=${this.pokemonList}></list-card-component>
      </div>
    `;
  }
}
