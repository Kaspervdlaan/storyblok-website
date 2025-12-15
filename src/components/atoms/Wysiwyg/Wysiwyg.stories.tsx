import type { Meta, StoryObj } from '@storybook/react';
import { Wysiwyg } from './Wysiwyg';
import { Box } from '../Box';

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
      <Box>
        <Box padding="sm" background="primary" radius="sm" style={{ marginBottom: '1rem', display: 'inline-block' }}>
          <strong>SIZE: SM</strong>
        </Box>
        <Wysiwyg size="sm" html="<h1>Small Size</h1><p>This is the small size variant with reduced typography scale. Good for sidebars or secondary content areas.</p><ul><li>Compact headings</li><li>Smaller body text</li></ul>" />
      </Box>
      
      <Box>
        <Box padding="sm" background="primary" radius="sm" style={{ marginBottom: '1rem', display: 'inline-block' }}>
          <strong>SIZE: MD</strong>
        </Box>
        <Wysiwyg size="md" html="<h1>Medium Size (Default)</h1><p>This is the default medium size variant. Ideal for main content areas like blog posts or documentation.</p><ul><li>Balanced headings</li><li>Comfortable reading size</li></ul>" />
      </Box>
      
      <Box>
        <Box padding="sm" background="primary" radius="sm" style={{ marginBottom: '1rem', display: 'inline-block' }}>
          <strong>SIZE: LG</strong>
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
    <Box
      padding="lg"
      background="surface"
      border="default"
      radius="lg"
      shadow="md"
      style={{ maxWidth: '800px' }}
    >
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
    </Box>
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

