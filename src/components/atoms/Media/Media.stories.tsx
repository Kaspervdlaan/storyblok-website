import type { Meta, StoryObj } from '@storybook/react';
import { Media } from './Media';
import { Box } from '../Box';
import { Typography } from '../Typography';

const meta: Meta<typeof Media> = {
  title: 'Atoms/Media',
  component: Media,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['image', 'video'],
    },
    aspectRatio: {
      control: 'select',
      options: ['auto', 'square', 'video', 'wide', 'portrait'],
    },
    fit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Media>;

// Sample image URLs (using placeholder images)
const sampleImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80';
const sampleImage2 = 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80';
const sampleImage3 = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80';
const sampleVideo = 'https://www.w3schools.com/html/mov_bbb.mp4';

// ----------------------------------------------------------------------------
// DEFAULT (IMAGE)
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    type: 'image',
    src: sampleImage,
    alt: 'Abstract gradient artwork',
    aspectRatio: 'video',
    fit: 'cover',
    radius: 'md',
  },
};

// ----------------------------------------------------------------------------
// ASPECT RATIOS
// ----------------------------------------------------------------------------

export const AspectRatios: Story = {
  render: () => (
    <Box display="flex" gap="lg" style={{ flexWrap: 'wrap' }}>
      <Box style={{ width: '200px' }}>
        <Media
          type="image"
          src={sampleImage}
          alt="Square aspect ratio"
          aspectRatio="square"
        />
        <Typography variant="caption" align="center" style={{ marginTop: '0.5rem', display: 'block' }}>
          square (1:1)
        </Typography>
      </Box>
      <Box style={{ width: '280px' }}>
        <Media
          type="image"
          src={sampleImage}
          alt="Video aspect ratio"
          aspectRatio="video"
        />
        <Typography variant="caption" align="center" style={{ marginTop: '0.5rem', display: 'block' }}>
          video (16:9)
        </Typography>
      </Box>
      <Box style={{ width: '350px' }}>
        <Media
          type="image"
          src={sampleImage}
          alt="Wide aspect ratio"
          aspectRatio="wide"
        />
        <Typography variant="caption" align="center" style={{ marginTop: '0.5rem', display: 'block' }}>
          wide (21:9)
        </Typography>
      </Box>
      <Box style={{ width: '150px' }}>
        <Media
          type="image"
          src={sampleImage}
          alt="Portrait aspect ratio"
          aspectRatio="portrait"
        />
        <Typography variant="caption" align="center" style={{ marginTop: '0.5rem', display: 'block' }}>
          portrait (3:4)
        </Typography>
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// OBJECT FIT
// ----------------------------------------------------------------------------

export const ObjectFit: Story = {
  render: () => (
    <Box display="flex" gap="lg">
      {(['cover', 'contain', 'fill'] as const).map((fit) => (
        <Box key={fit} style={{ width: '200px' }}>
          <Media
            type="image"
            src={sampleImage}
            alt={`${fit} object fit`}
            aspectRatio="square"
            fit={fit}
          />
          <Typography variant="caption" align="center" style={{ marginTop: '0.5rem', display: 'block' }}>
            fit="{fit}"
          </Typography>
        </Box>
      ))}
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// BORDER RADIUS
// ----------------------------------------------------------------------------

export const BorderRadius: Story = {
  render: () => (
    <Box display="flex" gap="lg" align="start">
      {(['none', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => (
        <Box key={radius} style={{ width: '150px' }}>
          <Media
            type="image"
            src={sampleImage2}
            alt={`${radius} border radius`}
            aspectRatio="square"
            radius={radius}
          />
          <Typography variant="caption" align="center" style={{ marginTop: '0.5rem', display: 'block' }}>
            radius="{radius}"
          </Typography>
        </Box>
      ))}
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// VIDEO
// ----------------------------------------------------------------------------

export const Video: Story = {
  args: {
    type: 'video',
    src: sampleVideo,
    alt: 'Sample video',
    aspectRatio: 'video',
    controls: true,
    radius: 'md',
  },
};

// ----------------------------------------------------------------------------
// VIDEO AUTOPLAY
// ----------------------------------------------------------------------------

export const VideoAutoplay: Story = {
  render: () => (
    <Box style={{ maxWidth: '500px' }}>
      <Media
        type="video"
        src={sampleVideo}
        alt="Autoplaying video"
        aspectRatio="video"
        autoPlay
        loop
        muted
        controls={false}
        radius="lg"
      />
      <Typography variant="bodySm" tone="muted" style={{ marginTop: '0.5rem' }}>
        Autoplaying, looping, muted video without controls
      </Typography>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// IMAGE GALLERY
// ----------------------------------------------------------------------------

export const ImageGallery: Story = {
  render: () => (
    <Box
      display="grid"
      gap="md"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        maxWidth: '800px',
      }}
    >
      <Media
        type="image"
        src={sampleImage}
        alt="Gallery image 1"
        aspectRatio="square"
        radius="md"
      />
      <Media
        type="image"
        src={sampleImage2}
        alt="Gallery image 2"
        aspectRatio="square"
        radius="md"
      />
      <Media
        type="image"
        src={sampleImage3}
        alt="Gallery image 3"
        aspectRatio="square"
        radius="md"
      />
      <Media
        type="image"
        src={sampleImage}
        alt="Gallery image 4"
        aspectRatio="square"
        radius="md"
      />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// HERO IMAGE
// ----------------------------------------------------------------------------

export const HeroImage: Story = {
  render: () => (
    <Box style={{ maxWidth: '100%' }}>
      <Media
        type="image"
        src={sampleImage3}
        alt="Hero gradient background"
        aspectRatio="wide"
        radius="lg"
      />
    </Box>
  ),
};

