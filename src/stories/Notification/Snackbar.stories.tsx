import type { Meta, StoryObj } from '@storybook/react';
import  Snackbar from '@/components/shared/Notifications/Snackbar';
import { object } from 'prop-types';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  title: 'Components/Notifications/Snackbar',
  
  component: Snackbar,
  argTypes: {
  },
} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: 'message',
    notificationType: 'success'
  },
};

export const Warning: Story = {
  args: {
    message: 'message',
    notificationType: 'warning'
  },
};

export const Error: Story = {
  args: {
    message: 'message',
    notificationType: 'error'
  },
};
