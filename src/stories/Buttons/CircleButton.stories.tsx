import type { Meta, StoryObj } from '@storybook/react';
import CircleButton from '@/components/shared/Buttons/CircleButton';

const meta = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  title: 'Components/Button/CircleButton',
  component: CircleButton,
  argTypes: {
    children: { control: 'text' },
    importClass: { control: 'text' },
    style : {control: 'string'},
  },
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};

