import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { Box } from '../../atoms/Box';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { Section } from '../../atoms/Section';
import { Container } from '../../atoms/Container';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'separated'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    allowMultiple: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// ============================================================================
// ICONS
// ============================================================================

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const QuestionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

// ============================================================================
// DEFAULT
// ============================================================================

export const Default: Story = {
  render: () => (
    <Box maxWidth="600px">
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Header>What is Vibe Design System?</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">
              Vibe is a neobrutalist React + TypeScript design system featuring bold colors, 
              heavy borders, and unapologetic typography. It's built with accessibility in mind 
              and follows Atomic Design principles.
            </Typography>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Header>How do I get started?</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">
              Install the package via npm, import the global styles, and start using components. 
              Check out our documentation for detailed setup instructions and examples.
            </Typography>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Header>Is it accessible?</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">
              Yes! All components are built with WCAG 2.1 guidelines in mind. We include proper 
              ARIA attributes, keyboard navigation, and focus management throughout.
            </Typography>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  ),
};

// ============================================================================
// VARIANTS
// ============================================================================

export const Variants: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="xl">
      <Box>
        <Typography variant="caption" style={{ marginBottom: '1rem', display: 'block' }}>
          DEFAULT
        </Typography>
        <Accordion variant="default">
          <Accordion.Item value="1">
            <Accordion.Header>Default Variant</Accordion.Header>
            <Accordion.Panel>
              <Typography variant="bodySm">Minimal dividers between items.</Typography>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Header>Clean and Simple</Accordion.Header>
            <Accordion.Panel>
              <Typography variant="bodySm">Great for FAQ sections and content lists.</Typography>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>

      <Box>
        <Typography variant="caption" style={{ marginBottom: '1rem', display: 'block' }}>
          BORDERED
        </Typography>
        <Accordion variant="bordered">
          <Accordion.Item value="1">
            <Accordion.Header>Bordered Variant</Accordion.Header>
            <Accordion.Panel>
              <Typography variant="bodySm">Full border around the entire accordion.</Typography>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Header>Bold and Striking</Accordion.Header>
            <Accordion.Panel>
              <Typography variant="bodySm">Active items get highlighted with the primary color.</Typography>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>

      <Box>
        <Typography variant="caption" style={{ marginBottom: '1rem', display: 'block' }}>
          SEPARATED
        </Typography>
        <Accordion variant="separated">
          <Accordion.Item value="1">
            <Accordion.Header>Separated Variant</Accordion.Header>
            <Accordion.Panel>
              <Typography variant="bodySm">Each item is a separate card.</Typography>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="2">
            <Accordion.Header>Card-like Appearance</Accordion.Header>
            <Accordion.Panel>
              <Typography variant="bodySm">Items have individual shadows and spacing.</Typography>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>
    </Box>
  ),
};

// ============================================================================
// SIZES
// ============================================================================

export const Sizes: Story = {
  render: () => (
    <Box display="flex" direction="column" gap="xl">
      <Box>
        <Typography variant="caption" style={{ marginBottom: '1rem', display: 'block' }}>
          SMALL
        </Typography>
        <Accordion variant="separated" size="sm">
          <Accordion.Item value="1">
            <Accordion.Header>Small Size</Accordion.Header>
            <Accordion.Panel>
              <Typography variant="bodySm">Compact accordion for tight spaces.</Typography>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>

      <Box>
        <Typography variant="caption" style={{ marginBottom: '1rem', display: 'block' }}>
          MEDIUM (DEFAULT)
        </Typography>
        <Accordion variant="separated" size="md">
          <Accordion.Item value="1">
            <Accordion.Header>Medium Size</Accordion.Header>
            <Accordion.Panel>
              <Typography variant="body">Standard accordion size for most use cases.</Typography>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>

      <Box>
        <Typography variant="caption" style={{ marginBottom: '1rem', display: 'block' }}>
          LARGE
        </Typography>
        <Accordion variant="separated" size="lg">
          <Accordion.Item value="1">
            <Accordion.Header>Large Size</Accordion.Header>
            <Accordion.Panel>
              <Typography variant="body">Larger accordion for prominent sections.</Typography>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>
    </Box>
  ),
};

// ============================================================================
// ALLOW MULTIPLE
// ============================================================================

export const AllowMultiple: Story = {
  render: () => (
    <Box maxWidth="600px">
      <Typography variant="bodySm" tone="muted" style={{ marginBottom: '1rem' }}>
        Multiple items can be expanded at the same time:
      </Typography>
      <Accordion variant="bordered" allowMultiple>
        <Accordion.Item value="section-1">
          <Accordion.Header>Section 1</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">
              Content for section 1. With allowMultiple, this can stay open while others are opened.
            </Typography>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="section-2">
          <Accordion.Header>Section 2</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">
              Content for section 2. Try opening multiple sections at once!
            </Typography>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="section-3">
          <Accordion.Header>Section 3</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">
              Content for section 3. All three can be expanded simultaneously.
            </Typography>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  ),
};

// ============================================================================
// DEFAULT EXPANDED
// ============================================================================

export const DefaultExpanded: Story = {
  render: () => (
    <Box maxWidth="600px">
      <Typography variant="bodySm" tone="muted" style={{ marginBottom: '1rem' }}>
        Item 2 is expanded by default:
      </Typography>
      <Accordion variant="separated" defaultExpanded="item-2">
        <Accordion.Item value="item-1">
          <Accordion.Header>Item 1</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">Content for item 1.</Typography>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Header>Item 2 (Default Open)</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">
              This item is expanded by default using the defaultExpanded prop.
            </Typography>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Header>Item 3</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">Content for item 3.</Typography>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  ),
};

// ============================================================================
// DISABLED ITEMS
// ============================================================================

export const DisabledItems: Story = {
  render: () => (
    <Box maxWidth="600px">
      <Accordion variant="bordered">
        <Accordion.Item value="enabled">
          <Accordion.Header>Enabled Item</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">This item can be expanded and collapsed.</Typography>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="disabled" disabled>
          <Accordion.Header>Disabled Item</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">This content is not accessible.</Typography>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="another-enabled">
          <Accordion.Header>Another Enabled Item</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">This item works normally.</Typography>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  ),
};

// ============================================================================
// WITH ICONS
// ============================================================================

export const WithIcons: Story = {
  render: () => (
    <Box maxWidth="600px">
      <Accordion variant="separated">
        <Accordion.Item value="question">
          <Accordion.Header>
            <Box display="flex" align="center" gap="sm">
              <Icon size="sm" color="primary" variant="ghost">
                <QuestionIcon />
              </Icon>
              <span>Frequently Asked Question</span>
            </Box>
          </Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">
              You can add icons to accordion headers by wrapping content in a Box with flex display.
            </Typography>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="settings">
          <Accordion.Header>
            <Box display="flex" align="center" gap="sm">
              <Icon size="sm" color="secondary" variant="ghost">
                <SettingsIcon />
              </Icon>
              <span>Settings</span>
            </Box>
          </Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">
              Icons help users quickly identify different sections.
            </Typography>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  ),
};

// ============================================================================
// CUSTOM ICON
// ============================================================================

export const CustomIcon: Story = {
  render: () => (
    <Box maxWidth="600px">
      <Typography variant="bodySm" tone="muted" style={{ marginBottom: '1rem' }}>
        Using a plus icon instead of the default chevron:
      </Typography>
      <Accordion variant="bordered">
        <Accordion.Item value="1">
          <Accordion.Header icon={<PlusIcon />}>Custom Plus Icon</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">
              You can customize the expand/collapse icon using the icon prop.
            </Typography>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Header icon={<PlusIcon />}>Another Item</Accordion.Header>
          <Accordion.Panel>
            <Typography variant="body">
              The icon rotates when expanded.
            </Typography>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  ),
};

// ============================================================================
// RICH CONTENT
// ============================================================================

export const RichContent: Story = {
  render: () => (
    <Box maxWidth="600px">
      <Accordion variant="separated">
        <Accordion.Item value="details">
          <Accordion.Header>Product Details</Accordion.Header>
          <Accordion.Panel>
            <Box display="flex" direction="column" gap="md">
              <Typography variant="body">
                Our premium product includes the following features:
              </Typography>
              <Box as="ul" style={{ paddingLeft: '1.5rem' }}>
                <li><Typography variant="bodySm">High-quality materials</Typography></li>
                <li><Typography variant="bodySm">5-year warranty</Typography></li>
                <li><Typography variant="bodySm">Free shipping</Typography></li>
              </Box>
              <Button variant="primary" size="sm">Learn More</Button>
            </Box>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="specs">
          <Accordion.Header>Specifications</Accordion.Header>
          <Accordion.Panel>
            <Box display="grid" gap="sm" style={{ gridTemplateColumns: 'auto 1fr' }}>
              <Typography variant="bodySm" weight="bold">Dimensions:</Typography>
              <Typography variant="bodySm">10" x 8" x 4"</Typography>
              <Typography variant="bodySm" weight="bold">Weight:</Typography>
              <Typography variant="bodySm">2.5 lbs</Typography>
              <Typography variant="bodySm" weight="bold">Material:</Typography>
              <Typography variant="bodySm">Premium aluminum</Typography>
              <Typography variant="bodySm" weight="bold">Color:</Typography>
              <Typography variant="bodySm">Space Black</Typography>
            </Box>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  ),
};

// ============================================================================
// FAQ SECTION
// ============================================================================

export const FAQSection: Story = {
  render: () => (
    <Section spacing="lg" background="subtle">
      <Container maxWidth="md">
        <Box display="flex" direction="column" gap="lg" align="center">
          <Box display="flex" direction="column" gap="sm" align="center">
            <Typography variant="caption">FAQ</Typography>
            <Typography variant="h1" align="center">Frequently Asked Questions</Typography>
            <Typography variant="body" tone="muted" align="center">
              Find answers to common questions about our product.
            </Typography>
          </Box>
          
          <Accordion variant="separated" style={{ width: '100%' }}>
            <Accordion.Item value="faq-1">
              <Accordion.Header>What payment methods do you accept?</Accordion.Header>
              <Accordion.Panel>
                <Typography variant="body">
                  We accept all major credit cards (Visa, MasterCard, American Express), 
                  PayPal, and bank transfers. All payments are processed securely.
                </Typography>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="faq-2">
              <Accordion.Header>How long does shipping take?</Accordion.Header>
              <Accordion.Panel>
                <Typography variant="body">
                  Standard shipping takes 5-7 business days. Express shipping (2-3 days) 
                  is available for an additional fee. Free shipping on orders over $50.
                </Typography>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="faq-3">
              <Accordion.Header>What is your return policy?</Accordion.Header>
              <Accordion.Panel>
                <Typography variant="body">
                  We offer a 30-day money-back guarantee. Items must be unused and in 
                  original packaging. Contact our support team to initiate a return.
                </Typography>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="faq-4">
              <Accordion.Header>Do you offer customer support?</Accordion.Header>
              <Accordion.Panel>
                <Typography variant="body">
                  Yes! Our support team is available 24/7 via email and live chat. 
                  Premium customers also get access to phone support.
                </Typography>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Box>
      </Container>
    </Section>
  ),
};

