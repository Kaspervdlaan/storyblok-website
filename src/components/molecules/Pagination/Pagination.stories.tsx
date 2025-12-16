import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { Box } from '../../atoms/Box';

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />;
  },
};

export const WithFirstLast: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
        showFirstLast
      />
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(50);
    return (
      <Pagination
        currentPage={page}
        totalPages={100}
        onPageChange={setPage}
        maxVisible={7}
      />
    );
  },
};

