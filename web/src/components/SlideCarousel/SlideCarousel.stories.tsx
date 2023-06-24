import { Meta, StoryObj } from "@storybook/react";
import SlideCarousel from "./index";

const meta: Meta<typeof SlideCarousel> = {
  title: 'Components/SlideCarousel',
  component: SlideCarousel,
  argTypes: {
    className: {
      control: {
        type: 'text'
      }
    },
    children: {
      control: 'select',
      options: {
        Slides: [
          <div key={0} className="h-[100%] min-w-[100%] bg-zinc-300 border border-zinc-400 flex flex-row justify-center items-center rounded-lg">Slide 1</div>,
          <div key={1} className="h-[100%] min-w-[100%] bg-zinc-300 border border-zinc-400 flex flex-row justify-center items-center rounded-lg">Slide 2</div>,
          <div key={2} className="h-[100%] min-w-[100%] bg-zinc-300 border border-zinc-400 flex flex-row justify-center items-center rounded-lg">Slide 3</div>,
          <div key={3} className="h-[100%] min-w-[100%] bg-zinc-300 border border-zinc-400 flex flex-row justify-center items-center rounded-lg">Slide 4</div>,
        ],
      }
    },
  }
};

export default meta

export const Default: StoryObj = {
  args: {
    children: [
      <div key={0} className="h-[15rem] min-w-[100%] bg-zinc-300 border border-zinc-400 flex flex-row justify-center items-center rounded-lg">Slide 1</div>,
      <div key={1} className="h-[15rem] min-w-[100%] bg-zinc-300 border border-zinc-400 flex flex-row justify-center items-center rounded-lg">Slide 2</div>,
      <div key={2} className="h-[15rem] min-w-[100%] bg-zinc-300 border border-zinc-400 flex flex-row justify-center items-center rounded-lg">Slide 3</div>,
      <div key={3} className="h-[15rem] min-w-[100%] bg-zinc-300 border border-zinc-400 flex flex-row justify-center items-center rounded-lg">Slide 4</div>,
    ],
  }
}