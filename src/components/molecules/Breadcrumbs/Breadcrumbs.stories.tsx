import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';
import { Box } from '../../atoms/Box';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const basicItems = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#' },
  { label: 'Category', href: '#' },
  { label: 'Current Page' },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
};

export const WithClickHandlers: Story = {
  args: {
    items: [
      { label: 'Home', onClick: () => console.log('Home clicked') },
      { label: 'Products', onClick: () => console.log('Products clicked') },
      { label: 'Current Page' },
    ],
  },
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumbs
      items={basicItems}
      separator={<span style={{ margin: '0 4px' }}>/</span>}
    />
  ),
};

