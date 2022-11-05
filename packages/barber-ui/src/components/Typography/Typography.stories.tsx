import { Meta, StoryObj } from "@storybook/react";
import { Typography, TypographyProps } from "./";

export default {
  title: "Typography",
  component: Typography,
  args: {
    sizes: [
      { type: "xs", size: 14 },
      { type: "sm", size: 16 },
      { type: "md", size: 18 },
      { type: "lg", size: 20 },
      { type: "xl", size: 24 },
      { type: "xxl", size: 32 },
    ],
  },
  argTypes: {
    fontFamily: {
      control: {
        options: ["Inter", "Roboto Slab", "Rye"],
        type: "inline-radio",
      },
      defaultValue: "Inter",
      type: "string",
    },
    sizes: {
      table: {
        disable: true,
      },
    },
    hasBold: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TypographyProps>;

const sourceDefaultCode = `
<div>
  <span className="font-roboto text-sm">
    Invest Regularly in Your Knowledge Portfolio...
  </span>
</div>
`;

export const Default: StoryObj<TypographyProps> = {
  args: {
    hasBold: false,
  },
  parameters: {
    docs: {
      source: {
        code: `${sourceDefaultCode}`,
        language: "html",
        type: "code",
      },
    },
  },
};

const sourceInterCode = `
<div>
  <span className="font-sans text-sm">
    Invest Regularly in Your Knowledge Portfolio...
  </span>
</div>
`;

export const Inter: StoryObj<TypographyProps> = {
  args: {
    sizes: [
      { type: "xs", size: 14 },
      { type: "sm", size: 16 },
      { type: "md", size: 18 },
      { type: "lg", size: 20 },
      { type: "xl", size: 24 },
      { type: "xxl", size: 32 },
    ],
    fontFamily: "Inter",
  },
  parameters: {
    docs: {
      source: {
        code: `${sourceInterCode}`,
        language: "html",
        type: "code",
      },
    },
  },
};

const sourceRobotoSlabCode = `
<div>
  <span className="font-slab text-sm">
    Invest Regularly in Your Knowledge Portfolio...
  </span>
</div>
`;

export const RobotoSlab: StoryObj<TypographyProps> = {
  args: {
    sizes: [
      { type: "xs", size: 14 },
      { type: "sm", size: 16 },
      { type: "md", size: 18 },
      { type: "lg", size: 20 },
      { type: "xl", size: 24 },
      { type: "xxl", size: 32 },
    ],
    fontFamily: "Roboto Slab",
  },
  parameters: {
    docs: {
      source: {
        code: `${sourceRobotoSlabCode}`,
        language: "html",
        type: "code",
      },
    },
  },
};

const sourceRyeCode = `
<div>
  <span className="font-rye text-sm">
    Invest Regularly in Your Knowledge Portfolio...
  </span>
</div>
`;

export const Rye: StoryObj<TypographyProps> = {
  args: {
    sizes: [
      { type: "xs", size: 14 },
      { type: "sm", size: 16 },
      { type: "md", size: 18 },
      { type: "lg", size: 20 },
      { type: "xl", size: 24 },
      { type: "xxl", size: 32 },
    ],
    fontFamily: "Rye",
    hasBold: false,
  },
  parameters: {
    docs: {
      source: {
        code: `${sourceRyeCode}`,
        language: "html",
        type: "code",
      },
    },
  },
};
