import type { Meta, StoryObj, Preview } from '@storybook/react';
import BasicDropdown from '@/components/shared/Dropdown/BasicDropdown';
import {AiFillSetting} from "react-icons/ai";
import {FiLogOut} from "react-icons/fi";
import {FaPencilAlt} from "react-icons/fa";


const meta = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  title: 'Components/Dropdown/BasicDropdown',
  component: BasicDropdown,
  argTypes: {
    options: { control: 'object' },
  },
} satisfies Meta<typeof BasicDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [{ label: "Option 1", value: "1", icon: <AiFillSetting size={"18px"}/>, counter: 1 },
    { label: "Option 3", value: "3", icon: <FaPencilAlt size={"14px"} /> },
    { label: "Logout", value: "2", icon: <FiLogOut size={"18px"}/>,  },],
    
  },
};


