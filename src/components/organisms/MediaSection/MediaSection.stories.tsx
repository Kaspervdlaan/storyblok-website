import type { Meta, StoryObj } from '@storybook/react';
import { MediaSection } from './MediaSection';
import { Button } from '../../atoms/Button';
import { Box } from '../../atoms/Box';
import { Icon } from '../../atoms/Icon';
import { Typography } from '../../atoms/Typography';

const meta: Meta<typeof MediaSection> = {
  title: 'Organisms/MediaSection',
  component: MediaSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['media-left', 'media-right'],
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    background: {
      control: 'select',
      options: ['none', 'subtle', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MediaSection>;

// Sample images
const sampleImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80';
const sampleImage2 = 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80';
const sampleImage3 = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&q=80';
const sampleVideo = 'https://www.w3schools.com/html/mov_bbb.mp4';

// Icons
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    media: {
      type: 'image',
      src: sampleImage,
      alt: 'Abstract gradient artwork',
    },
    eyebrow: 'INTRODUCING',
    title: 'Build faster with our design system',
    description:
      'A comprehensive collection of reusable components built with React and TypeScript. Create beautiful, accessible interfaces in record time.',
    layout: 'media-left',
    spacing: 'lg',
    background: 'none',
    actions: (
      <>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
        <Button variant="ghost" size="lg">
          Learn More
        </Button>
      </>
    ),
  },
};

// ----------------------------------------------------------------------------
// MEDIA RIGHT
// ----------------------------------------------------------------------------

export const MediaRight: Story = {
  args: {
    media: {
      type: 'image',
      src: sampleImage2,
      alt: 'Colorful abstract shapes',
    },
    eyebrow: 'FEATURES',
    title: 'Designed for developers',
    description:
      'Every component is fully typed with TypeScript, follows accessibility best practices, and uses a consistent token-based design system.',
    layout: 'media-right',
    spacing: 'lg',
    background: 'subtle',
    actions: (
      <Button variant="primary" size="lg">
        View Documentation
      </Button>
    ),
  },
};

// ----------------------------------------------------------------------------
// DARK BACKGROUND
// ----------------------------------------------------------------------------

export const DarkBackground: Story = {
  args: {
    media: {
      type: 'image',
      src: sampleImage3,
      alt: 'Vibrant gradient background',
    },
    eyebrow: 'NEOBRUTALIST',
    title: 'Bold. Unapologetic. Beautiful.',
    description:
      'Stand out from the crowd with our distinctive neobrutalist aesthetic. Heavy borders, offset shadows, and electric colors.',
    layout: 'media-left',
    spacing: 'xl',
    background: 'dark',
    actions: (
      <>
        <Button variant="primary" size="lg">
          Explore Components
        </Button>
        <Button variant="ghost" size="lg" style={{ borderColor: '#e9d8a6', color: '#e9d8a6' }}>
          View Examples
        </Button>
      </>
    ),
  },
};

// ----------------------------------------------------------------------------
// WITH VIDEO
// ----------------------------------------------------------------------------

export const WithVideo: Story = {
  args: {
    media: {
      type: 'video',
      src: sampleVideo,
      alt: 'Demo video',
      controls: true,
    },
    eyebrow: 'WATCH',
    title: 'See it in action',
    description:
      'Watch how easy it is to build beautiful interfaces with our design system. From prototype to production in minutes.',
    layout: 'media-left',
    spacing: 'lg',
    background: 'none',
  },
};

// ----------------------------------------------------------------------------
// WITH AUTOPLAY VIDEO
// ----------------------------------------------------------------------------

export const WithAutoplayVideo: Story = {
  args: {
    media: {
      type: 'video',
      src: sampleVideo,
      alt: 'Background video',
      autoPlay: true,
      loop: true,
      controls: false,
    },
    eyebrow: 'SEAMLESS',
    title: 'Smooth animations',
    description:
      'Every interaction is carefully crafted with smooth transitions and micro-animations that delight users.',
    layout: 'media-right',
    spacing: 'lg',
    background: 'subtle',
    actions: (
      <Button variant="secondary" size="lg">
        Try It Now
      </Button>
    ),
  },
};

// ----------------------------------------------------------------------------
// WITH FEATURE LIST
// ----------------------------------------------------------------------------

export const WithFeatureList: Story = {
  render: () => (
    <MediaSection
      media={{
        type: 'image',
        src: sampleImage,
        alt: 'Abstract artwork',
      }}
      eyebrow="WHY CHOOSE US"
      title="Everything you need"
      description="Our design system comes packed with features to help you build better products faster."
      layout="media-left"
      spacing="lg"
      actions={
        <Button variant="primary" size="lg">
          Start Building
        </Button>
      }
    >
      <Box display="flex" direction="column" gap="md" style={{ marginTop: '1rem' }}>
        {[
          'Fully typed with TypeScript',
          'Accessible out of the box',
          'Comprehensive documentation',
          'Regular updates & support',
        ].map((feature) => (
          <Box key={feature} display="flex" align="center" gap="sm">
            <Icon size="sm" color="success" variant="filled">
              <CheckIcon />
            </Icon>
            <Typography variant="body">{feature}</Typography>
          </Box>
        ))}
      </Box>
    </MediaSection>
  ),
};

// ----------------------------------------------------------------------------
// ALTERNATING SECTIONS
// ----------------------------------------------------------------------------

export const AlternatingSections: Story = {
  render: () => (
    <div>
      <MediaSection
        media={{
          type: 'image',
          src: sampleImage,
          alt: 'Design section',
        }}
        eyebrow="DESIGN"
        title="Beautiful by default"
        description="Every component is crafted with attention to detail, using our carefully curated color palette and typography system."
        layout="media-left"
        spacing="lg"
        background="none"
        actions={<Button variant="primary">Explore Design</Button>}
      />
      <MediaSection
        media={{
          type: 'image',
          src: sampleImage2,
          alt: 'Develop section',
        }}
        eyebrow="DEVELOP"
        title="Developer experience first"
        description="Built with TypeScript, fully documented APIs, and a focus on making development enjoyable and productive."
        layout="media-right"
        spacing="lg"
        background="subtle"
        actions={<Button variant="secondary">Read Docs</Button>}
      />
      <MediaSection
        media={{
          type: 'image',
          src: sampleImage3,
          alt: 'Deploy section',
        }}
        eyebrow="DEPLOY"
        title="Ship with confidence"
        description="Tested, accessible, and production-ready. Deploy knowing your UI will work for everyone."
        layout="media-left"
        spacing="lg"
        background="dark"
        actions={
          <Button variant="primary" size="lg">
            Get Started Free
          </Button>
        }
      />
    </div>
  ),
};

// ----------------------------------------------------------------------------
// COMPACT
// ----------------------------------------------------------------------------

export const Compact: Story = {
  args: {
    media: {
      type: 'image',
      src: sampleImage,
      alt: 'Compact section image',
    },
    title: 'Quick overview',
    description: 'A more compact section for less prominent content areas.',
    layout: 'media-left',
    spacing: 'sm',
    background: 'subtle',
  },
};

