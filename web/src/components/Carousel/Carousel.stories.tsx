import { Meta, StoryObj } from "@storybook/react";
import Carousel from "./index";
import Card from "../Card";
import { SealCheck } from "@phosphor-icons/react";

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    className: {
      control: {
        type: 'text'
      }
    },
    children: {
      control: 'select',
      options: {
        Cards: [
          Card({ index: 0, title: 'Title', description: 'Description', Icon: SealCheck }),
          Card({ index: 1, title: 'Title', description: 'Description', Icon: SealCheck }),
          Card({ index: 2, title: 'Title', description: 'Description', Icon: SealCheck }),
          Card({ index: 3, title: 'Title', description: 'Description', Icon: SealCheck }),
        ],
      }
    },
  },
};

export default meta

export const Default: StoryObj = {
  args: {
    className: "",
    children: [
      Card({ index: 0, title: 'Title', description: 'Description', Icon: SealCheck }),
      Card({ index: 1, title: 'Title', description: 'Description', Icon: SealCheck }),
      Card({ index: 2, title: 'Title', description: 'Description', Icon: SealCheck }),
      Card({ index: 3, title: 'Title', description: 'Description', Icon: SealCheck }),
    ],
  }
}