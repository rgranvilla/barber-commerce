import { Meta, StoryObj } from "@storybook/react";
import { AdminPanelButton, AdminPanelButtonProps } from "./AdminPanelButton";
import { BsImages, BsFillInboxFill, BsShopWindow } from "react-icons/bs";

export default {
  title: "Components/Buttons/AdminPanelButton",
  component: AdminPanelButton,
  args: {
    label: "Button",
    icon: <BsImages />,
    count: 1,
    href: "/test",
  },
  argTypes: {
    icon: {
      description: "A react-icons icon component (type of ReactNode)",
      control: false,
    },
    label: {
      description: "The text that is displayed on the button",
      control: {
        type: "text",
      },
    },
    count: {
      type: {
        name: "number",
        required: false,
      },
      description: "Tag with the value of unseen items ",
      control: {
        type: "number",
      },
    },
    actived: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<AdminPanelButtonProps>;

export const Default: StoryObj<AdminPanelButtonProps> = {};

export const Unselected: StoryObj<AdminPanelButtonProps> = {
  args: {
    label: "Inbox",
    icon: <BsFillInboxFill />,
    count: 0,
  },
};

export const UnselectedWithTag: StoryObj<AdminPanelButtonProps> = {
  args: {
    label: "Inbox",
    icon: <BsFillInboxFill />,
    count: 2,
  },
};

export const Selected: StoryObj<AdminPanelButtonProps> = {
  args: {
    label: "Image Galery",
    actived: true,
    count: 0,
  },
};

export const Disabled: StoryObj<AdminPanelButtonProps> = {
  args: {
    label: "Showcase",
    icon: <BsShopWindow />,
    disabled: true,
    count: 0,
  },
};
