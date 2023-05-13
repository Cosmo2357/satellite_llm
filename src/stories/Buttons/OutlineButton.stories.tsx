import type { Meta, StoryObj } from '@storybook/react';
import OutlineButton from '@/components/shared/Buttons/OutlineButton';

const meta = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  title: 'Components/Button/OutlineButton',
  component: OutlineButton,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    style : {control: 'object'},
    is_loading: {control: 'boolean'},
    importClass: {control: 'text'},
    icon: {control: 'object'},
  },
} satisfies Meta<typeof OutlineButton>;

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

export const ShortButton: Story = {
  args: {
    importClass : "rounded-full w-72 "
  },
};

export const SecondaryButton: Story = {
  args: {
    importClass : "btn-secondary w-72 "
  },
};
