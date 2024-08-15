import { LitElement, html } from 'lit';
import { styles } from './evolutionComponent.styles.js';
import '../../editEvolutionComponent/index.js';
import '../../dialogComponent/index.js';

export class EvolutionComponent extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      edit: { type: Boolean },
      id: { type: String },
      pokemon: { type: Object },
    };
  }

  constructor() {
    super();
    this.edit = false;
    this.pokemon = {};
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  openDialog(e) {
    const dialog = this.shadowRoot.querySelector('dialog-component');
    if (dialog && e.detail !== false) {
      dialog.openDialog();
    }
  }

  render() {
    return !this.edit
      ? html`
          <div class="evolution" role="group" aria-label="Evolution Component">
            <div class="info">
              <h1>${this.pokemon.name}</h1>
            </div>
            <div class="image">
              <img src="${this.pokemon.image}" alt="${this.pokemon.name}" />
            </div>
            <button @click=${this.toggleEdit}>EDIT</button>
          </div>
        `
      : html`
          <edit-evolution-component
            .id=${this.id}
            .name=${this.pokemon.name}
            .type=${this.pokemon.type}
            .image=${this.pokemon.image}
            @update-pokemon-success=${this.toggleEdit}
            @update-pokemon-failure=${this.toggleEdit}
            @is-repeadted-checked=${this.openDialog}
          ></edit-evolution-component>
          <dialog-component
            title="Duplicate Pokemon?!"
          >
            <p>You can change this duplicate pokemon at the nearest point.</p>
          </dialog-component>
        `;
  }
}
