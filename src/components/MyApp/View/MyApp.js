import { html } from '@polymer/lit-element';
import '../../ComponentHeader/ComponentHeader'
import '../../PageHome/PageHome'

export default function (props) {
  return html`
    <component-header></component-header>
    <page-home></page-home>
  `
}