import { html } from 'lit';
import './Counter';

export default {
  title: 'Example/Counter'
};

const Template = ({ name, label }) => html`<ds-counter .name=${name} label=${label}></ds-counter>`;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Test',
  label: 'test'
};
