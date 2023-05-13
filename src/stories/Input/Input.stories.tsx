import type { Meta, StoryObj, Preview } from '@storybook/react';
import  Input from '@/components/shared/Inputs/Input';

const meta = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  title: 'Components/Input/Input',
  
  component: Input,
  argTypes: {
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Text: Story = {
  args: {
    placeholder: 'Username',
  },  
}; 

export const Password: Story = {
  args: {
    placeholder: 'Password',
    type: 'password'
  },
}; 
