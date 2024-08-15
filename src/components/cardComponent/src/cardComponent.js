import { LitElement, html } from 'lit';
import { styles } from './cardComponent.styles.js';
import { Router } from '@vaadin/router';

export class CardComponent extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      type: { type: String },
      image: { type: String },
      evolutions: { type: Array },
    };
  }

  get headerBackgroundColor() {
    const types = this.type.split('/').map(t => t.trim());
    if (types.length > 1) {
      const [type1, type2] = types;
      return `var(--header-bg-${type1}${type2})` || `var(--header-bg-${type1}${type2})` || 'var(--header-bg-default)';
    }
    return `var(--header-bg-${types[0]})` || 'var(--header-bg-default)';
  }

  _handleClick() {
    Router.go(`/detail/${this.id}`);
  }

  render() {
    return html`
      <div class="card" @click="${this._handleClick}">
        <div class="header-card" style="background: ${this.headerBackgroundColor}">
          <h2>${this.name}</h2>
        </div>
        <div class="body-card">
          <img src="${this.image}" alt="${this.name}" />
          <p>Type: ${this.type}</p>
        </div>
      </div>
    `;
  }
}
