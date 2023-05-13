import type { Meta, StoryObj, Preview } from '@storybook/react';
import  SearchBox from '@/components/shared/Inputs/SearchBox';

const meta = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  title: 'Components/Input/SearchBox',
  
  component: SearchBox,
  argTypes: {
  },
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Text: Story = {
  args: {
/*     placeholder: 'Username', */
  },
  
}; 

export const Round: Story = {
  args: {
    style: {borderRadius: '22px',}
  },
  
}; 

export const Password: Story = {
  args: {
    placeholder: 'Password',
    type: 'password'
  },
  
}; 
