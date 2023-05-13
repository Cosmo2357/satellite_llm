import type { Meta, StoryObj, Preview } from '@storybook/react';
import RoundInput from '@/components/shared/Inputs/RoundedInput';

const meta = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  title: 'Components/Input/RoundInput',
  
  component: RoundInput,
  argTypes: {
  },
} satisfies Meta<typeof RoundInput>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Round: Story = {
  args: {
    //placeholder: 'Username',

  },
}; 

