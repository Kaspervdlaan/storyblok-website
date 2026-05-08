import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { Box } from '../../atoms/Box';
import { Typography } from '../../atoms/Typography';
import { Card } from '../Card';

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  render: () => {
    const basicItems = [
      { value: 'tab1', label: 'Tab 1', content: <Typography>Content for Tab 1</Typography> },
      { value: 'tab2', label: 'Tab 2', content: <Typography>Content for Tab 2</Typography> },
      { value: 'tab3', label: 'Tab 3', content: <Typography>Content for Tab 3</Typography> },
    ];
    return <Tabs items={basicItems} />;
  },
};

// ----------------------------------------------------------------------------
// HORIZONTAL
// ----------------------------------------------------------------------------

export const Horizontal: Story = {
  render: () => {
    const basicItems = [
      { value: 'tab1', label: 'Tab 1', content: <Typography>Content for Tab 1</Typography> },
      { value: 'tab2', label: 'Tab 2', content: <Typography>Content for Tab 2</Typography> },
      { value: 'tab3', label: 'Tab 3', content: <Typography>Content for Tab 3</Typography> },
    ];
    return <Tabs items={basicItems} orientation="horizontal" />;
  },
};

// ----------------------------------------------------------------------------
// VERTICAL
// ----------------------------------------------------------------------------

export const Vertical: Story = {
  render: () => {
    const basicItems = [
      { value: 'tab1', label: 'Tab 1', content: <Typography>Content for Tab 1</Typography> },
      { value: 'tab2', label: 'Tab 2', content: <Typography>Content for Tab 2</Typography> },
      { value: 'tab3', label: 'Tab 3', content: <Typography>Content for Tab 3</Typography> },
    ];
    return <Tabs items={basicItems} orientation="vertical" />;
  },
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => {
    const basicItems = [
      { value: 'tab1', label: 'Tab 1', content: <Typography>Content for Tab 1</Typography> },
      { value: 'tab2', label: 'Tab 2', content: <Typography>Content for Tab 2</Typography> },
      { value: 'tab3', label: 'Tab 3', content: <Typography>Content for Tab 3</Typography> },
    ];
    return (
      <Box display="flex" direction="column" gap="xl">
        <Box display="flex" direction="column" gap="md">
          <Typography variant="caption">SMALL</Typography>
          <Tabs items={basicItems} size="sm" />
        </Box>
        <Box display="flex" direction="column" gap="md">
          <Typography variant="caption">MEDIUM</Typography>
          <Tabs items={basicItems} size="md" />
        </Box>
        <Box display="flex" direction="column" gap="md">
          <Typography variant="caption">LARGE</Typography>
          <Tabs items={basicItems} size="lg" />
        </Box>
      </Box>
    );
  },
};

// ----------------------------------------------------------------------------
// WITHOUT PANELS
// ----------------------------------------------------------------------------

export const WithoutPanels: Story = {
  args: {
    items: [
      { value: 'tab1', label: 'Tab 1' },
      { value: 'tab2', label: 'Tab 2' },
      { value: 'tab3', label: 'Tab 3' },
    ],
    showPanels: false,
  },
};

// ----------------------------------------------------------------------------
// WITH DISABLED TABS
// ----------------------------------------------------------------------------

export const WithDisabledTabs: Story = {
  render: () => {
    const items = [
      { value: 'tab1', label: 'Tab 1', content: <Typography>Content 1</Typography> },
      { value: 'tab2', label: 'Tab 2', disabled: true, content: <Typography>Content 2</Typography> },
      { value: 'tab3', label: 'Tab 3', content: <Typography>Content 3</Typography> },
    ];
    return <Tabs items={items} />;
  },
};

// ----------------------------------------------------------------------------
// CONTROLLED
// ----------------------------------------------------------------------------

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('tab1');
    const basicItems = [
      { value: 'tab1', label: 'Tab 1', content: <Typography>Content for Tab 1</Typography> },
      { value: 'tab2', label: 'Tab 2', content: <Typography>Content for Tab 2</Typography> },
      { value: 'tab3', label: 'Tab 3', content: <Typography>Content for Tab 3</Typography> },
    ];
    return (
      <Tabs
        items={basicItems}
        value={value}
        onChange={setValue}
      />
    );
  },
};

// ----------------------------------------------------------------------------
// RICH CONTENT
// ----------------------------------------------------------------------------

export const RichContent: Story = {
  render: () => {
    const items = [
      {
        value: 'overview',
        label: 'Overview',
        content: (
          <Card variant="outlined" padding="md">
            <Typography variant="h3">Overview</Typography>
            <Typography variant="body" style={{ marginTop: '1rem' }}>
              This is the overview tab with rich content including cards and other components.
            </Typography>
          </Card>
        ),
      },
      {
        value: 'settings',
        label: 'Settings',
        content: (
          <Card variant="outlined" padding="md">
            <Typography variant="h3">Settings</Typography>
            <Typography variant="body" style={{ marginTop: '1rem' }}>
              Configure your settings here.
            </Typography>
          </Card>
        ),
      },
      {
        value: 'advanced',
        label: 'Advanced',
        content: (
          <Card variant="outlined" padding="md">
            <Typography variant="h3">Advanced</Typography>
            <Typography variant="body" style={{ marginTop: '1rem' }}>
              Advanced options and configurations.
            </Typography>
          </Card>
        ),
      },
    ];
    return <Tabs items={items} />;
  },
};

