import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { styles } from './pokemon-app.styles.js';
import './components/headerComponent/index.js';
import './pages/list-page/index.js';
import './pages/detail-page/index.js';

class PokemonApp extends LitElement {
  static get properties() {
    return {
      showBackArrow: { type: Boolean },
    };
  }

  static styles = [styles];

  constructor() {
    super();
    this.showBackArrow = false;
  }

  firstUpdated() {
    const outlet = this.shadowRoot.querySelector('router-outlet');
    if (!outlet) {
      console.error('Router outlet not found');
      return;
    }

    const router = new Router(outlet);

    router.setRoutes([
      { path: '/', component: 'list-page' },
      {
        path: '/detail/:id',
        component: 'detail-page',
      },
    ]);
  }

  render() {
    return html`
      <main>
        <header-component
          .showBackArrow=${this.showBackArrow}
        ></header-component>
        <router-outlet></router-outlet>
      </main>
    `;
  }
}

customElements.define('pokemon-app', PokemonApp);
