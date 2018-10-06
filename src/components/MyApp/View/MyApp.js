import { html } from '@polymer/lit-element';
import '../../ComponentHeader/ComponentHeader'
import '../../PageHome/PageHome'
import '@material/mwc-tabs'
import '@material/mwc-tabs/mwc-tab-bar'
export default function (props) {
  return html`
    <component-header></component-header>
    <page-home></page-home>
    <mwc-tab-bar>
      <mwc-tab></mwc-tab>
      <mwc-tab>Home</mwc-tab>
      <mwc-tab></mwc-tab>
    </mwc-tab-bar>

  `
}