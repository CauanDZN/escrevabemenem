import { Meta, StoryObj } from "@storybook/react";
import Svg from "./index";

const meta: Meta<typeof Svg> = {
  title: 'Components/Svg',
  component: Svg,
};

export default meta

export const Default: StoryObj = {
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg',
    width: 100,
    height: 100,
  }
}