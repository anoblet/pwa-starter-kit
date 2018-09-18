import { html } from '@polymer/lit-element';

export default (props) => html`
  <my-countdown duration="${props.duration}" timeleft="${props.timeleft}" nolabel></my-countdown>
`;