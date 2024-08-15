import { LitElement, html } from 'lit';
import { styles } from './editEvolutionComponent.styles.js';
import '../../dmPokemonComponent/index.js';

export class EditEvolutionComponent extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      type: { type: String },
      image: { type: String },
    };
  }

  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.type = '';
    this.image = '';
    this.repeadted = false;
    this.prevPokemon = {};
  }

  firstUpdated() {
    this.prevPokemon = {
      name: this.name,
      type: this.type,
      image: this.image,
    };
  }

  setValue(prop) {
    const input = this.shadowRoot.getElementById(prop);
    if (input) {
      this[prop] = input.value;
    }
  }

  _submit() {
    const dm = this.shadowRoot.querySelector('dm-pokemon-component');
    dm.updateEvolution(this.id, this.prevPokemon, {
      name: this.name,
      type: this.type,
      image: this.image,
    });
  }

  _isRepeadted() {
    this.repeadted = !this.repeadted;
    this._fireEvent('is-repeadted-checked',this.repeadted);
  }

  _fireEvent(name,detail) {
    this.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        composed: true,
        detail,
      })
    );
  }

  render() {
    return html`
      <dm-pokemon-component
      ></dm-pokemon-component>
      <div class="form-container">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            .value=${this.name}
            @input=${() => this.setValue('name')}
          />
        </div>
        <div class="form-group">
          <label for="image">Image URL</label>
          <input
            id="image"
            type="text"
            .value=${this.image}
            @input=${() => this.setValue('image')}
          />
        </div>
        <div class="form-group-check">
        <input
            id="repeated"
            type="checkbox"
            ?checked=${this.repeadted}
            @input=${() => this._isRepeadted()}
          />
          <label for="repeated">Is the pokemon repeated?</label>
        </div>
        <div class="button-container">
          <button @click=${this._submit}>Submit</button>
        </div>
      </div>
    `;
  }
}
