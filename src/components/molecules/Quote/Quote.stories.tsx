import type { Meta, StoryObj } from '@storybook/react';
import { Quote } from './Quote';
import { Box } from '../../atoms/Box';
import { Section } from '../../atoms/Section';
import { Container } from '../../atoms/Container';
import { Typography } from '../../atoms/Typography';

const meta: Meta<typeof Quote> = {
  title: 'Molecules/Quote',
  component: Quote,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'minimal'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Quote>;

// Sample avatars
const sampleAvatar1 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80';
const sampleAvatar2 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80';
const sampleAvatar3 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80';

// Icons
const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    quote: 'This design system has completely transformed how we build products. The neobrutalist aesthetic is exactly what we needed.',
    author: 'Sarah Chen',
    role: 'Design Lead, Acme Corp',
    avatar: sampleAvatar1,
    authorIcon: <VerifiedIcon />,
    variant: 'default',
    size: 'md',
    layout: 'horizontal',
  },
};

// ----------------------------------------------------------------------------
// WITH AUTHOR ICON
// ----------------------------------------------------------------------------

export const WithAuthorIcon: Story = {
  args: {
    quote: 'Bold design choices lead to memorable products. Vibe helped us stand out in a crowded market.',
    author: 'Marcus Johnson',
    role: 'Verified Customer',
    avatar: sampleAvatar2,
    authorIcon: <VerifiedIcon />,
    variant: 'default',
    size: 'md',
    layout: 'horizontal',
  },
};

// ----------------------------------------------------------------------------
// VARIANTS
// ----------------------------------------------------------------------------

export const Variants: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="xl" style={{ maxWidth: '600px' }}>
      <Quote
        quote="Default variant with shadow and border."
        author="Alex Designer"
        role="Product Designer"
        avatar={sampleAvatar1}
        variant="default"
      />
      <Quote
        quote="Elevated variant with stronger shadow for more emphasis."
        author="Jordan Tech"
        role="Frontend Developer"
        avatar={sampleAvatar2}
        variant="elevated"
      />
      <Quote
        quote="Minimal variant with just a left border accent."
        author="Morgan Creative"
        role="Art Director"
        avatar={sampleAvatar3}
        variant="minimal"
      />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="xl" style={{ maxWidth: '700px' }}>
      <Quote
        quote="Small size is perfect for sidebars or compact areas."
        author="Small Author"
        role="Designer"
        avatar={sampleAvatar1}
        size="sm"
      />
      <Quote
        quote="Medium size is the default, great for most use cases."
        author="Medium Author"
        role="Developer"
        avatar={sampleAvatar2}
        size="md"
      />
      <Quote
        quote="Large size makes a bold statement for hero sections."
        author="Large Author"
        role="CEO"
        avatar={sampleAvatar3}
        size="lg"
      />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// HORIZONTAL LAYOUT
// ----------------------------------------------------------------------------

export const HorizontalLayout: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '700px' }}>
      <Quote
        quote="Horizontal layout places the avatar on the side for a different look."
        author="Elena Rodriguez"
        role="Tech Lead, Stark Industries"
        avatar={sampleAvatar1}
        authorIcon={<VerifiedIcon />}
        layout="horizontal"
      />
      <Quote
        quote="Great for testimonial sections where you want a more compact feel."
        author="James Wilson"
        role="Senior Engineer"
        avatar={sampleAvatar2}
        authorIcon={<StarIcon />}
        layout="horizontal"
        variant="minimal"
      />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WITHOUT AVATAR
// ----------------------------------------------------------------------------

export const WithoutAvatar: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '600px' }}>
      <Quote
        quote="You can use the Quote component without an avatar for simpler use cases."
        author="Anonymous User"
        role="Happy Customer"
        variant="default"
      />
      <Quote
        quote="The minimal variant works especially well without avatars."
        author="Team Lead"
        variant="minimal"
      />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// SOCIAL MEDIA STYLE
// ----------------------------------------------------------------------------

export const SocialMediaStyle: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="lg" style={{ maxWidth: '500px' }}>
      <Quote
        quote="Just shipped our new product with @VibeDS and couldn't be happier! 🚀"
        author="@sarahcodes"
        avatar={sampleAvatar1}
        authorIcon={<TwitterIcon />}
        variant="elevated"
        size="sm"
      />
      <Quote
        quote="Excited to announce we're using Vibe Design System for our latest project. Game changer!"
        author="Marcus Johnson"
        role="CTO at TechStart"
        avatar={sampleAvatar2}
        authorIcon={<LinkedInIcon />}
        variant="elevated"
        size="sm"
      />
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// TESTIMONIALS SECTION
// ----------------------------------------------------------------------------

export const TestimonialsSection: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Section spacing="xl" background="subtle">
      <Container maxWidth="lg">
        <Box display="flex" direction="column" gap="xl" align="center">
          <Box display="flex" direction="column" gap="sm" align="center">
            <Typography variant="caption" style={{ color: '#ee9b00' }}>
              TESTIMONIALS
            </Typography>
            <Typography variant="display" align="center">
              Loved by Teams
            </Typography>
            <Typography variant="body" tone="muted" align="center" style={{ maxWidth: '500px' }}>
              See what developers and designers are saying about Vibe Design System.
            </Typography>
          </Box>

          <Box
            display="grid"
            gap="lg"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              width: '100%',
            }}
          >
            <Quote
              quote="The neobrutalist aesthetic is exactly what our brand needed. Bold and unapologetic."
              author="Sarah Chen"
              role="Design Lead"
              avatar={sampleAvatar1}
              authorIcon={<VerifiedIcon />}
              variant="elevated"
            />
            <Quote
              quote="TypeScript support is excellent. Integration was smooth and the DX is fantastic."
              author="Marcus Johnson"
              role="Frontend Engineer"
              avatar={sampleAvatar2}
              authorIcon={<VerifiedIcon />}
              variant="elevated"
            />
            <Quote
              quote="Our team's productivity doubled after adopting Vibe. Highly recommended!"
              author="Elena Rodriguez"
              role="Tech Lead"
              avatar={sampleAvatar3}
              authorIcon={<VerifiedIcon />}
              variant="elevated"
            />
          </Box>
        </Box>
      </Container>
    </Section>
  ),
};

// ----------------------------------------------------------------------------
// FEATURED QUOTE
// ----------------------------------------------------------------------------

export const FeaturedQuote: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Section spacing="xl" background="dark">
      <Container maxWidth="md">
        <Quote
          quote="Vibe Design System has fundamentally changed how we approach product design. It's not just a component library—it's a philosophy."
          author="Alex Designer"
          role="VP of Product, Fortune 500"
          avatar={sampleAvatar1}
          authorIcon={<StarIcon />}
          variant="elevated"
          size="lg"
          layout="vertical"
        />
      </Container>
    </Section>
  ),
};

// ----------------------------------------------------------------------------
// MINIMAL INLINE
// ----------------------------------------------------------------------------

export const MinimalInline: Story = {
  render: () => (
    <Box style={{ maxWidth: '600px' }}>
      <Typography variant="body" style={{ marginBottom: '1.5rem' }}>
        Here's what our users have to say about the product:
      </Typography>
      <Quote
        quote="Simple, elegant, and powerful. Everything a design system should be."
        author="Casey Smith"
        role="Designer"
        variant="minimal"
        size="sm"
        layout="horizontal"
      />
    </Box>
  ),
};

