import TextInput from "@atoms/TextInput";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    customStyles: {
      control: "object",
      description: "Custom styles to apply to the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
      defaultValue: "Enter text...",
    },
    register: {
      control: false, // Hides this control, since it's usually provided by react-hook-form
      description: "Register object from react-hook-form for form handling",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const CustomStyledInput: Story = {
  args: {
    placeholder: "Styled Input",
    customStyles: {
      border: "2px solid #0070f3",
      borderRadius: "8px",
      padding: "10px",
      fontSize: "18px",
    },
  },
};

export const InputWithPlaceholder: Story = {
  args: {
    placeholder: "Type something here...",
  },
};
