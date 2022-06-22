import { Story, Meta } from '@storybook/web-components';
import { Page } from './Page';

export default {
  title: 'Example/Page',
} as Meta;

const Template: Story = () => Page();

export const LoggedIn = Template.bind({});
LoggedIn.args = {};
