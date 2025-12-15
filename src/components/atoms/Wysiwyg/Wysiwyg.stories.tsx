import type { Meta, StoryObj } from '@storybook/react';
import { Wysiwyg } from './Wysiwyg';
import { Box } from '../Box';
import { Typography } from '../Typography';
import { Section } from '../Section';
import { Container } from '../Container';
import { Card } from '../../molecules/Card';

const meta: Meta<typeof Wysiwyg> = {
  title: 'Atoms/Wysiwyg',
  component: Wysiwyg,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Wysiwyg>;

// Sample HTML content
const sampleHtml = `
<h1>Welcome to the Design System</h1>
<p>This is a <strong>WYSIWYG</strong> component that renders rich text content with proper styling. It supports all common HTML elements you'd find in content management systems.</p>

<h2>Features</h2>
<p>The component automatically styles:</p>
<ul>
  <li>Headings (h1 through h6)</li>
  <li>Paragraphs with proper spacing</li>
  <li>Links with <a href="#">hover states</a></li>
  <li>Lists (ordered and unordered)</li>
</ul>

<h3>Code Examples</h3>
<p>Inline code looks like <code>const x = 42;</code> while code blocks look like this:</p>
<pre><code>function greet(name) {
  return \`Hello, \${name}!\`;
}</code></pre>

<blockquote>
  <p>Blockquotes are styled with a bold left border and italic text. Perfect for highlighting important quotes or testimonials.</p>
</blockquote>

<h3>More Content</h3>
<p>You can also use <em>emphasis</em>, <strong>strong text</strong>, and even <mark>highlighted text</mark> for important callouts.</p>

<hr />

<p>That's the end of the demo content!</p>
`;

// ----------------------------------------------------------------------------
// DEFAULT
// ----------------------------------------------------------------------------

export const Default: Story = {
  args: {
    html: sampleHtml,
    size: 'md',
  },
  decorators: [
    (Story) => (
      <Box style={{ maxWidth: '720px' }}>
        <Story />
      </Box>
    ),
  ],
};

// ----------------------------------------------------------------------------
// SIZES
// ----------------------------------------------------------------------------

export const Sizes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="xl">
      <Box display="flex" direction="column" gap="md">
        <Box padding="sm" background="primary" radius="sm" style={{ display: 'inline-block', alignSelf: 'flex-start' }}>
          <Typography variant="caption" weight="bold">SIZE: SM</Typography>
        </Box>
        <Wysiwyg size="sm" html="<h1>Small Size</h1><p>This is the small size variant with reduced typography scale. Good for sidebars or secondary content areas.</p><ul><li>Compact headings</li><li>Smaller body text</li></ul>" />
      </Box>
      
      <Box display="flex" direction="column" gap="md">
        <Box padding="sm" background="primary" radius="sm" style={{ display: 'inline-block', alignSelf: 'flex-start' }}>
          <Typography variant="caption" weight="bold">SIZE: MD</Typography>
        </Box>
        <Wysiwyg size="md" html="<h1>Medium Size (Default)</h1><p>This is the default medium size variant. Ideal for main content areas like blog posts or documentation.</p><ul><li>Balanced headings</li><li>Comfortable reading size</li></ul>" />
      </Box>
      
      <Box display="flex" direction="column" gap="md">
        <Box padding="sm" background="primary" radius="sm" style={{ display: 'inline-block', alignSelf: 'flex-start' }}>
          <Typography variant="caption" weight="bold">SIZE: LG</Typography>
        </Box>
        <Wysiwyg size="lg" html="<h1>Large Size</h1><p>This is the large size variant with enhanced typography scale. Perfect for landing pages or hero content.</p><ul><li>Impactful headings</li><li>Larger body text</li></ul>" />
      </Box>
    </Box>
  ),
};

// ----------------------------------------------------------------------------
// WITH CHILDREN
// ----------------------------------------------------------------------------

export const WithChildren: Story = {
  render: () => (
    <Wysiwyg style={{ maxWidth: '720px' }}>
      <h1>Using Children Instead of HTML</h1>
      <p>
        You can also pass JSX children directly to the Wysiwyg component instead of 
        using the <code>html</code> prop. This is useful when you want to render 
        React components within your content.
      </p>
      <h2>Benefits</h2>
      <ul>
        <li>Type-safe JSX</li>
        <li>Can include React components</li>
        <li>No XSS concerns</li>
      </ul>
    </Wysiwyg>
  ),
};

// ----------------------------------------------------------------------------
// ARTICLE EXAMPLE
// ----------------------------------------------------------------------------

export const ArticleExample: Story = {
  render: () => (
    <Card variant="elevated" padding="lg" style={{ maxWidth: '800px' }}>
      <Card.Body>
        <Wysiwyg
          html={`
            <h1>The Future of Design Systems</h1>
            <p><em>Published on December 15, 2024</em></p>
            
            <p>Design systems have become an essential part of modern product development. They provide a shared language between designers and developers, ensuring consistency across products.</p>
            
            <h2>What Makes a Good Design System?</h2>
            <p>A successful design system needs several key components:</p>
            <ol>
              <li><strong>Clear documentation</strong> - Every component should be well-documented with examples</li>
              <li><strong>Flexibility</strong> - Components should be customizable without breaking consistency</li>
              <li><strong>Accessibility</strong> - Built-in support for keyboard navigation and screen readers</li>
            </ol>
            
            <blockquote>
              <p>"A design system is not just a style guide or component library—it's a living, breathing product that serves other products."</p>
            </blockquote>
            
            <h2>Implementation Tips</h2>
            <p>When implementing a design system, consider using <code>CSS custom properties</code> for theming and <code>TypeScript</code> for type safety.</p>
            
            <pre><code>// Example token usage
const Button = styled.button\`
  background: var(--color-primary);
  padding: var(--space-4);
\`;</code></pre>
            
            <p>Remember: the best design system is one that your team actually uses!</p>
          `}
        />
      </Card.Body>
    </Card>
  ),
};

// ----------------------------------------------------------------------------
// TABLE CONTENT
// ----------------------------------------------------------------------------

export const WithTable: Story = {
  render: () => (
    <Wysiwyg style={{ maxWidth: '720px' }}>
      <h2>Component Comparison</h2>
      <p>Here's a comparison of our available button variants:</p>
      <table>
        <thead>
          <tr>
            <th>Variant</th>
            <th>Use Case</th>
            <th>Background</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Primary</td>
            <td>Main actions</td>
            <td>Gamboge (Orange)</td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>Secondary actions</td>
            <td>Viridian (Teal)</td>
          </tr>
          <tr>
            <td>Ghost</td>
            <td>Tertiary actions</td>
            <td>Transparent</td>
          </tr>
          <tr>
            <td>Danger</td>
            <td>Destructive actions</td>
            <td>Rufous (Red)</td>
          </tr>
        </tbody>
      </table>
    </Wysiwyg>
  ),
};

// ----------------------------------------------------------------------------
// BLOG POST
// ----------------------------------------------------------------------------

export const BlogPost: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <Section spacing="lg">
      <Container maxWidth="md">
        <Box display="flex" direction="column" gap="lg">
          {/* Header */}
          <Box display="flex" direction="column" gap="md" align="center">
            <Typography variant="caption" style={{ color: '#ee9b00' }}>
              DESIGN SYSTEMS
            </Typography>
            <Typography variant="display" align="center">
              The Art of Neobrutalist Design
            </Typography>
            <Typography variant="body" tone="muted" align="center">
              How bold aesthetics and unapologetic typography are reshaping modern web design.
            </Typography>
            <Box display="flex" align="center" gap="md">
              <Box
                display="flex"
                align="center"
                justify="center"
                background="secondary"
                border="default"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                }}
              >
                <Typography variant="body" weight="bold" style={{ color: '#fff' }}>SC</Typography>
              </Box>
              <Box display="flex" direction="column">
                <Typography variant="bodySm" weight="bold">Sarah Chen</Typography>
                <Typography variant="caption" tone="muted">Dec 15, 2024 · 8 min read</Typography>
              </Box>
            </Box>
          </Box>
          
          {/* Content */}
          <Wysiwyg html={`
            <p>In the ever-evolving landscape of web design, a bold new aesthetic has emerged that challenges the polished, minimalist conventions of the past decade. Neobrutalism—with its heavy borders, offset shadows, and vibrant color palettes—is making a statement that resonates with brands seeking to stand out.</p>
            
            <h2>The Origins</h2>
            <p>The roots of neobrutalism can be traced back to the Brutalist architecture movement of the 1950s, which celebrated raw concrete and bold geometric forms. In web design, this translates to thick borders, stark contrasts, and an intentional "rawness" that feels refreshingly authentic.</p>
            
            <blockquote>
              <p>Neobrutalism isn't about breaking rules—it's about making intentional choices that prioritize personality over polish.</p>
            </blockquote>
            
            <h2>Core Principles</h2>
            <p>Several key principles define the neobrutalist aesthetic:</p>
            <ul>
              <li><strong>Heavy borders:</strong> Thick, often black outlines that define elements clearly</li>
              <li><strong>Offset shadows:</strong> Hard-edged shadows that create depth without blur</li>
              <li><strong>Bold typography:</strong> Monospace and sans-serif fonts used unapologetically</li>
              <li><strong>Vibrant colors:</strong> High-contrast palettes that demand attention</li>
            </ul>
          `} />
        </Box>
      </Container>
    </Section>
  ),
};
