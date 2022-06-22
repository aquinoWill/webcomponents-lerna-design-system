import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ds-counter')
export class DsCounter extends LitElement {
  @property() name = 'World';
  @property() label = '';
  @property({ type: Number }) count = 0;

  override render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <h2>${this.label}</h2>
      <button @click=${this._onClick}>
        Click Count: ${this.count}
      </button>
    `;
  }

  private _onClick() {
    console.log(this.count++)
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'darwin-counter': DsCounter;
  }
}
