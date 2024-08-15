import { LitElement, html } from 'lit';
import { styles } from './dialogComponent.styles.js';

export class DialogComponent extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.open = false;
    this.title = '';
  }

  openDialog() {
    this.open = true;
  }

  closeDialog() {
    this.open = false;
  }

  render() {
    return html`
       <div class="overlay" ?hidden="${!this.open}"></div>
      <div class="dialog" ?hidden="${!this.open}">
        <div class="dialog-header">
          <span>${this.title}</span>
          <button class="close-button" @click="${this.closeDialog}">&times;</button>
        </div>
        <div class="dialog-body">
          <slot></slot>
        </div>
      </div>
      </div>
    `;
  }
}
