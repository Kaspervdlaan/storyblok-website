import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Slider } from './Slider';
import { Box } from '../Box';

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    defaultValue: 50,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Volume',
    showValue: true,
    min: 0,
    max: 100,
    defaultValue: 50,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <Slider
        label="Controlled Slider"
        showValue
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    );
  },
};

export const WithRange: Story = {
  args: {
    label: 'Price Range',
    min: 0,
    max: 1000,
    step: 10,
    defaultValue: 500,
    showValue: true,
  },
};

