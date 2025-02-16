import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { SvgUtil } from '../../utils/SvgUtil'
import { ThemeUtil } from '../../utils/ThemeUtil'
import styles from './styles.css'

@customElement('w3m-search-input')
export class W3mSearchInput extends LitElement {
  public static styles = [ThemeUtil.globalCss, styles]

  @property() public onChange = () => null

  // -- render ------------------------------------------------------- //
  protected render() {
    const placeholder = 'Search wallets'

    return html`
      <input type="text" @input=${this.onChange} placeholder=${placeholder} />
      <div>
        ${SvgUtil.SEARCH_ICON}
        <w3m-text color="secondary" variant="small-thin">${placeholder}</w3m-text>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w3m-search-input': W3mSearchInput
  }
}
