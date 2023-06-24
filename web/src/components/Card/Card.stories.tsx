import { Meta, StoryObj } from "@storybook/react";
import Card from "./index";
import { SealCheck } from "@phosphor-icons/react";

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    index: {
      control: {
        type: 'number'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    },
    description: {
      control: {
        type: 'text'
      }
    },
    Icon: {
      control: {
        type: 'select',
        options: {
          SealCheck: SealCheck,
        }
      }
    }
  },
};

export default meta

export const Default: StoryObj = {
  args: {
    index: 0,
    title: 'Title',
    description: 'Description',
    Icon: SealCheck,
  }
}