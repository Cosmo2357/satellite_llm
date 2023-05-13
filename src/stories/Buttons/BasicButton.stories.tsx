import type { Meta, StoryObj } from '@storybook/react';
import BasicButton from '@/components/shared/Buttons/BasicButton';

const meta = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  title: 'Components/Button/BasicButton',
  component: BasicButton,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    style : {control: 'object'},
    is_loading: {control: 'boolean'},
    importClass: {control: 'text'},
    icon: {control: 'object'},
  },
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};

export const LoadingButton: Story = {
  args: {
    is_loading : true
  },
};

export const RoundButton: Story = {
  args: {
    importClass : "rounded-full "
  },
};

export const BorderButton: Story = {
  args: {
    importClass : "rounded-full btn-border "
  },
};

