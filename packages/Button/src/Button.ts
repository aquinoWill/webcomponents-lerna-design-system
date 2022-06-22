import { LitElement, html, css, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ButtonStyles } from './button-styles'

@customElement('ds-button')
export class DsButton extends LitElement {
  @property() size = 'medium'
  @property() label = 'Ds Button'
  @property({ type: Boolean }) primary = true

  static override styles = css`${unsafeCSS(ButtonStyles)}`

  override render() {
    return html`
      <button>button</button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-button': DsButton;
  }
}
