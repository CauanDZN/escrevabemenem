import { Meta, StoryObj } from "@storybook/react";
import Nav from "./index";

const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
  argTypes: {
    scroll0: {
      control: {
        type: 'boolean'
      }
    },
    className: {
      control: {
        type: 'text'
      }
    },
  },
}

export default meta

export const Default: StoryObj = {}