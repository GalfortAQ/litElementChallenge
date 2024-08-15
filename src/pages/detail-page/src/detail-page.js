import { LitElement, html } from 'lit';
import { styles } from './detail-page.styles.js';
import '../../../components/dmPokemonComponent/index.js';
import '../../../components/evolutionComponent/index.js';

export class DetailPage extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      id: { type: String },
      pokemon: { type: Object },
    };
  }

  async firstUpdated() {
    this.getPokemon();
  }

  getPokemon() {
    const url = new URL(window.location.href);
    const { pathname } = url;
    this.id = pathname.split('/').pop();

    const dm = this.shadowRoot.querySelector('dm-pokemon-component');
    dm.getPokemon(this.id);
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setPokemons(){
    this.getPokemon();
  }

  handleBackClick() {
    window.history.back();
  }

  render() {
    return html`
      <dm-pokemon-component
        @get-pokemon-by-id-success=${e => {
          this.setPokemon(e.detail);
        }}
      ></dm-pokemon-component>
      <div class="container">
        ${this.pokemon
          ? html`
              <h1>${this.pokemon.name}</h1>
              <p>(Type: <span>${this.pokemon.type}</span>)</p>
              <img src="${this.pokemon.image}" alt="${this.pokemon.name}" />
              <h3>Evolutions</h3>
              ${this.pokemon.evolutions.map(evolution =>
                this.id
                  ? html`<evolution-component
                      .id=${this.id}
                      .pokemon=${evolution}
                      @update-pokemon-success=${this.setPokemons}
                      @update-pokemon-failure=${this.setPokemons}
                    ></evolution-component>`
                  : ''
              )}
              <section>
                <button @click=${this.handleBackClick}>BACK</button>
              </section>
            `
          : html`<p>Loading...</p>`}
      </div>
    `;
  }
}
