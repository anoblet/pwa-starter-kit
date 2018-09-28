import { html } from '@polymer/lit-element';

export default (props) => html`
  <my-countdown duration="${props.duration}" _timeleft="${props.timeleft}"></my-countdown>
`;