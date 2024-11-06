import TextButton from "@atoms/TextButton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextButton> = {
  title: "Components/TextButton",
  component: TextButton,
  argTypes: {
    customStyles: {
      control: "object",
      description: "Custom styles to apply to the button",
    },
    children: {
      control: "text",
      description: "Content inside the button",
      defaultValue: "Click Me",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
  args: {
    children: "Click Me",
  },
};

export const CustomStyledButton: Story = {
  args: {
    children: "Styled Button",
    customStyles: {
      backgroundColor: "#ff5733",
      color: "white",
      padding: "12px 24px",
      borderRadius: "8px",
    },
  },
};

export const ButtonWithClickAction: Story = {
  args: {
    children: "Click Action",
    customStyles: {
      backgroundColor: "#28a745",
    },
  },
};
