import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import './_globals.scss';

const meta: Meta = {
  title: 'Foundation/Design Tokens',
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj;

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

const TokenSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div style={{ marginBottom: '3rem' }}>
    <h2
      style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '1.5rem',
        fontWeight: 700,
        marginBottom: '1.5rem',
        paddingBottom: '0.5rem',
        borderBottom: '3px solid #000',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}
    >
      {title}
    </h2>
    {children}
  </div>
);

const TokenGrid: React.FC<{ children: React.ReactNode; columns?: number }> = ({
  children,
  columns = 4,
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(${Math.floor(800 / columns)}px, 1fr))`,
      gap: '1rem',
    }}
  >
    {children}
  </div>
);

const ColorSwatch: React.FC<{
  name: string;
  value: string;
  textColor?: string;
}> = ({ name, value, textColor = '#000' }) => (
  <div
    style={{
      border: '3px solid #000',
      borderRadius: '0.6rem',
      overflow: 'hidden',
      boxShadow: '4px 4px 0 0 #000',
    }}
  >
    <div
      style={{
        background: value,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: textColor,
        fontFamily: 'Space Mono, monospace',
        fontSize: '0.75rem',
        fontWeight: 700,
      }}
    >
      {value}
    </div>
    <div
      style={{
        background: '#fff',
        padding: '0.75rem',
        borderTop: '3px solid #000',
      }}
    >
      <div
        style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.75rem',
          fontWeight: 700,
          wordBreak: 'break-all',
        }}
      >
        {name}
      </div>
    </div>
  </div>
);

const TokenCard: React.FC<{
  name: string;
  value: string;
  preview?: React.ReactNode;
}> = ({ name, value, preview }) => (
  <div
    style={{
      border: '3px solid #000',
      borderRadius: '0.6rem',
      padding: '1rem',
      background: '#fff',
      boxShadow: '4px 4px 0 0 #000',
    }}
  >
    {preview && <div style={{ marginBottom: '0.75rem' }}>{preview}</div>}
    <div
      style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '0.75rem',
        fontWeight: 700,
      }}
    >
      {name}
    </div>
    <div
      style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '0.7rem',
        color: '#525252',
        marginTop: '0.25rem',
      }}
    >
      {value}
    </div>
  </div>
);

// ============================================================================
// COLORS STORY
// ============================================================================

export const Colors: Story = {
  render: () => (
    <div>
      <TokenSection title="Brand Colors">
        <TokenGrid columns={4}>
          <ColorSwatch name="$color-primary" value="#ffde03" textColor="#000" />
          <ColorSwatch name="$color-primary-hover" value="#ffe534" textColor="#000" />
          <ColorSwatch name="$color-primary-active" value="#e6c800" textColor="#000" />
          <ColorSwatch name="$color-on-primary" value="#000000" textColor="#fff" />
        </TokenGrid>
        <div style={{ height: '1.5rem' }} />
        <TokenGrid columns={4}>
          <ColorSwatch name="$color-secondary" value="#ff2d92" textColor="#000" />
          <ColorSwatch name="$color-secondary-hover" value="#ff5aab" textColor="#000" />
          <ColorSwatch name="$color-secondary-active" value="#e6007a" textColor="#000" />
          <ColorSwatch name="$color-on-secondary" value="#000000" textColor="#fff" />
        </TokenGrid>
      </TokenSection>

      <TokenSection title="Semantic Colors">
        <TokenGrid columns={4}>
          <ColorSwatch name="$color-danger" value="#ff3333" textColor="#000" />
          <ColorSwatch name="$color-danger-hover" value="#ff5c5c" textColor="#000" />
          <ColorSwatch name="$color-danger-active" value="#cc0000" textColor="#fff" />
          <ColorSwatch name="$color-on-danger" value="#000000" textColor="#fff" />
        </TokenGrid>
        <div style={{ height: '1rem' }} />
        <TokenGrid columns={4}>
          <ColorSwatch name="$color-success" value="#00ff88" textColor="#000" />
          <ColorSwatch name="$color-success-hover" value="#33ff9f" textColor="#000" />
          <ColorSwatch name="$color-success-active" value="#00cc6a" textColor="#000" />
          <ColorSwatch name="$color-on-success" value="#000000" textColor="#fff" />
        </TokenGrid>
        <div style={{ height: '1rem' }} />
        <TokenGrid columns={4}>
          <ColorSwatch name="$color-warning" value="#ff9500" textColor="#000" />
          <ColorSwatch name="$color-warning-hover" value="#ffaa33" textColor="#000" />
          <ColorSwatch name="$color-warning-active" value="#cc7700" textColor="#000" />
          <ColorSwatch name="$color-on-warning" value="#000000" textColor="#fff" />
        </TokenGrid>
      </TokenSection>

      <TokenSection title="Neutral Scale">
        <TokenGrid columns={5}>
          <ColorSwatch name="$color-neutral-0" value="#ffffff" textColor="#000" />
          <ColorSwatch name="$color-neutral-50" value="#f5f5f5" textColor="#000" />
          <ColorSwatch name="$color-neutral-100" value="#e8e8e8" textColor="#000" />
          <ColorSwatch name="$color-neutral-200" value="#d4d4d4" textColor="#000" />
          <ColorSwatch name="$color-neutral-300" value="#a3a3a3" textColor="#000" />
          <ColorSwatch name="$color-neutral-400" value="#737373" textColor="#000" />
          <ColorSwatch name="$color-neutral-500" value="#525252" textColor="#fff" />
          <ColorSwatch name="$color-neutral-600" value="#404040" textColor="#fff" />
          <ColorSwatch name="$color-neutral-700" value="#2d2d2d" textColor="#fff" />
          <ColorSwatch name="$color-neutral-800" value="#1a1a1a" textColor="#fff" />
          <ColorSwatch name="$color-neutral-900" value="#000000" textColor="#fff" />
        </TokenGrid>
      </TokenSection>

      <TokenSection title="Surface Colors">
        <TokenGrid columns={4}>
          <ColorSwatch name="$color-surface" value="#ffffff" textColor="#000" />
          <ColorSwatch name="$color-surface-muted" value="#f0f0f0" textColor="#000" />
          <ColorSwatch name="$color-surface-dark" value="#1a1a1a" textColor="#fff" />
          <ColorSwatch name="$color-border" value="#000000" textColor="#fff" />
        </TokenGrid>
        <div style={{ height: '1rem' }} />
        <TokenGrid columns={4}>
          <ColorSwatch name="$color-border-muted" value="#d4d4d4" textColor="#000" />
          <ColorSwatch name="$color-text" value="#000000" textColor="#fff" />
          <ColorSwatch name="$color-text-muted" value="#525252" textColor="#fff" />
          <ColorSwatch name="$color-text-inverse" value="#ffffff" textColor="#000" />
        </TokenGrid>
      </TokenSection>

      <TokenSection title="Accent Colors">
        <TokenGrid columns={5}>
          <ColorSwatch name="$color-accent-blue" value="#0066ff" textColor="#fff" />
          <ColorSwatch name="$color-accent-cyan" value="#00e5ff" textColor="#000" />
          <ColorSwatch name="$color-accent-lime" value="#c8ff00" textColor="#000" />
          <ColorSwatch name="$color-accent-orange" value="#ff6600" textColor="#000" />
          <ColorSwatch name="$color-accent-purple" value="#9933ff" textColor="#fff" />
        </TokenGrid>
      </TokenSection>
    </div>
  ),
};

// ============================================================================
// TYPOGRAPHY STORY
// ============================================================================

export const Typography: Story = {
  render: () => (
    <div>
      <TokenSection title="Font Families">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div
            style={{
              border: '3px solid #000',
              borderRadius: '0.6rem',
              padding: '1.5rem',
              boxShadow: '4px 4px 0 0 #000',
            }}
          >
            <div
              style={{
                fontFamily: 'Space Mono, JetBrains Mono, Courier New, monospace',
                fontSize: '2rem',
                marginBottom: '0.5rem',
              }}
            >
              Space Mono
            </div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.875rem',
                color: '#525252',
              }}
            >
              $font-family-sans: 'Space Mono', 'JetBrains Mono', 'Courier New', monospace
            </div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '1.125rem',
                marginTop: '1rem',
              }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789 !@#$%^&*()
            </div>
          </div>
          <div
            style={{
              border: '3px solid #000',
              borderRadius: '0.6rem',
              padding: '1.5rem',
              boxShadow: '4px 4px 0 0 #000',
            }}
          >
            <div
              style={{
                fontFamily: 'IBM Plex Mono, Fira Code, Consolas, monospace',
                fontSize: '2rem',
                marginBottom: '0.5rem',
              }}
            >
              IBM Plex Mono
            </div>
            <div
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.875rem',
                color: '#525252',
              }}
            >
              $font-family-mono: 'IBM Plex Mono', 'Fira Code', 'Consolas', monospace
            </div>
          </div>
        </div>
      </TokenSection>

      <TokenSection title="Font Sizes">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { name: '$font-size-display', value: '4rem', size: '4rem' },
            { name: '$font-size-h1', value: '3rem', size: '3rem' },
            { name: '$font-size-h2', value: '2.25rem', size: '2.25rem' },
            { name: '$font-size-h3', value: '1.5rem', size: '1.5rem' },
            { name: '$font-size-body', value: '1.125rem', size: '1.125rem' },
            { name: '$font-size-body-sm', value: '1rem', size: '1rem' },
            { name: '$font-size-caption', value: '0.875rem', size: '0.875rem' },
          ].map((token) => (
            <div
              key={token.name}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem',
                padding: '1rem',
                border: '2px solid #e8e8e8',
                borderRadius: '0.6rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: token.size,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                Aa
              </span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  {token.name}
                </div>
                <div
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.7rem',
                    color: '#525252',
                  }}
                >
                  {token.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </TokenSection>

      <TokenSection title="Font Weights">
        <TokenGrid columns={4}>
          {[
            { name: '$font-weight-regular', value: '400' },
            { name: '$font-weight-medium', value: '500' },
            { name: '$font-weight-semibold', value: '600' },
            { name: '$font-weight-bold', value: '700' },
          ].map((token) => (
            <TokenCard
              key={token.name}
              name={token.name}
              value={token.value}
              preview={
                <div
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '1.5rem',
                    fontWeight: parseInt(token.value),
                  }}
                >
                  Weight
                </div>
              }
            />
          ))}
        </TokenGrid>
      </TokenSection>

      <TokenSection title="Line Heights">
        <TokenGrid columns={4}>
          {[
            { name: '$line-height-display', value: '1.1' },
            { name: '$line-height-heading', value: '1.2' },
            { name: '$line-height-tight', value: '1.3' },
            { name: '$line-height-body', value: '1.6' },
            { name: '$line-height-relaxed', value: '1.8' },
          ].map((token) => (
            <TokenCard
              key={token.name}
              name={token.name}
              value={token.value}
              preview={
                <div
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.875rem',
                    lineHeight: token.value,
                    background: '#f0f0f0',
                    padding: '0.5rem',
                    borderRadius: '0.4rem',
                  }}
                >
                  Line one
                  <br />
                  Line two
                  <br />
                  Line three
                </div>
              }
            />
          ))}
        </TokenGrid>
      </TokenSection>

      <TokenSection title="Letter Spacing">
        <TokenGrid columns={4}>
          {[
            { name: '$letter-spacing-tight', value: '-0.02em' },
            { name: '$letter-spacing-normal', value: '0' },
            { name: '$letter-spacing-wide', value: '0.05em' },
            { name: '$letter-spacing-ultra-wide', value: '0.1em' },
          ].map((token) => (
            <TokenCard
              key={token.name}
              name={token.name}
              value={token.value}
              preview={
                <div
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: token.value,
                    textTransform: 'uppercase',
                  }}
                >
                  SPACING
                </div>
              }
            />
          ))}
        </TokenGrid>
      </TokenSection>
    </div>
  ),
};

// ============================================================================
// SPACING STORY
// ============================================================================

export const Spacing: Story = {
  render: () => (
    <div>
      <TokenSection title="Spacing Scale">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { name: '$space-0', value: '0', px: '0px' },
            { name: '$space-1', value: '0.25rem', px: '4px' },
            { name: '$space-2', value: '0.5rem', px: '8px' },
            { name: '$space-3', value: '0.75rem', px: '12px' },
            { name: '$space-4', value: '1rem', px: '16px' },
            { name: '$space-5', value: '1.25rem', px: '20px' },
            { name: '$space-6', value: '1.5rem', px: '24px' },
            { name: '$space-8', value: '2rem', px: '32px' },
            { name: '$space-10', value: '2.5rem', px: '40px' },
            { name: '$space-12', value: '3rem', px: '48px' },
            { name: '$space-16', value: '4rem', px: '64px' },
            { name: '$space-20', value: '5rem', px: '80px' },
            { name: '$space-24', value: '6rem', px: '96px' },
          ].map((token) => (
            <div
              key={token.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '120px',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                {token.name}
              </div>
              <div
                style={{
                  width: token.value,
                  height: '24px',
                  background: '#ffde03',
                  border: '2px solid #000',
                  borderRadius: '0.25rem',
                  minWidth: '4px',
                }}
              />
              <div
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.7rem',
                  color: '#525252',
                }}
              >
                {token.value} ({token.px})
              </div>
            </div>
          ))}
        </div>
      </TokenSection>

      <TokenSection title="Container Widths">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { name: '$container-sm', value: '640px' },
            { name: '$container-md', value: '768px' },
            { name: '$container-lg', value: '1024px' },
            { name: '$container-xl', value: '1280px' },
            { name: '$container-2xl', value: '1536px' },
          ].map((token) => (
            <div
              key={token.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '140px',
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}
              >
                {token.name}
              </div>
              <div
                style={{
                  flex: 1,
                  maxWidth: token.value,
                  height: '24px',
                  background: '#ff2d92',
                  border: '2px solid #000',
                  borderRadius: '0.25rem',
                }}
              />
              <div
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.7rem',
                  color: '#525252',
                  width: '60px',
                }}
              >
                {token.value}
              </div>
            </div>
          ))}
        </div>
      </TokenSection>
    </div>
  ),
};

// ============================================================================
// BORDER RADIUS STORY
// ============================================================================

export const BorderRadius: Story = {
  render: () => (
    <div>
      <TokenSection title="Border Radius Scale">
        <TokenGrid columns={4}>
          {[
            { name: '$radius-none', value: '0' },
            { name: '$radius-xs', value: '0.25rem' },
            { name: '$radius-sm', value: '0.4rem' },
            { name: '$radius-md', value: '0.6rem (default)' },
            { name: '$radius-lg', value: '0.8rem' },
            { name: '$radius-xl', value: '1rem' },
            { name: '$radius-2xl', value: '1.5rem' },
            { name: '$radius-full', value: '9999px' },
          ].map((token) => (
            <TokenCard
              key={token.name}
              name={token.name}
              value={token.value}
              preview={
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: '#ffde03',
                    border: '3px solid #000',
                    borderRadius: token.value.replace(' (default)', ''),
                    margin: '0 auto',
                  }}
                />
              }
            />
          ))}
        </TokenGrid>
      </TokenSection>
    </div>
  ),
};

// ============================================================================
// SHADOWS STORY
// ============================================================================

export const Shadows: Story = {
  render: () => (
    <div>
      <TokenSection title="Shadow Scale (Neobrutalist Offset)">
        <TokenGrid columns={4}>
          {[
            { name: '$shadow-sm', value: '2px 2px 0 0 #000' },
            { name: '$shadow-md', value: '4px 4px 0 0 #000' },
            { name: '$shadow-lg', value: '6px 6px 0 0 #000' },
            { name: '$shadow-xl', value: '8px 8px 0 0 #000' },
          ].map((token) => (
            <TokenCard
              key={token.name}
              name={token.name}
              value={token.value}
              preview={
                <div
                  style={{
                    width: '100px',
                    height: '60px',
                    background: '#fff',
                    border: '3px solid #000',
                    borderRadius: '0.6rem',
                    boxShadow: token.value,
                    margin: '8px auto',
                  }}
                />
              }
            />
          ))}
        </TokenGrid>
      </TokenSection>

      <TokenSection title="Colored Shadows">
        <TokenGrid columns={3}>
          <TokenCard
            name="$shadow-primary"
            value="4px 4px 0 0 $color-primary"
            preview={
              <div
                style={{
                  width: '100px',
                  height: '60px',
                  background: '#fff',
                  border: '3px solid #000',
                  borderRadius: '0.6rem',
                  boxShadow: '4px 4px 0 0 #ffde03',
                  margin: '8px auto',
                }}
              />
            }
          />
          <TokenCard
            name="$shadow-secondary"
            value="4px 4px 0 0 $color-secondary"
            preview={
              <div
                style={{
                  width: '100px',
                  height: '60px',
                  background: '#fff',
                  border: '3px solid #000',
                  borderRadius: '0.6rem',
                  boxShadow: '4px 4px 0 0 #ff2d92',
                  margin: '8px auto',
                }}
              />
            }
          />
          <TokenCard
            name="$shadow-danger"
            value="4px 4px 0 0 $color-danger"
            preview={
              <div
                style={{
                  width: '100px',
                  height: '60px',
                  background: '#fff',
                  border: '3px solid #000',
                  borderRadius: '0.6rem',
                  boxShadow: '4px 4px 0 0 #ff3333',
                  margin: '8px auto',
                }}
              />
            }
          />
        </TokenGrid>
      </TokenSection>
    </div>
  ),
};

// ============================================================================
// BORDERS STORY
// ============================================================================

export const Borders: Story = {
  render: () => (
    <div>
      <TokenSection title="Border Widths">
        <TokenGrid columns={4}>
          {[
            { name: '$border-width-sm', value: '2px' },
            { name: '$border-width-md', value: '3px' },
            { name: '$border-width-lg', value: '4px' },
            { name: '$border-width-xl', value: '6px' },
          ].map((token) => (
            <TokenCard
              key={token.name}
              name={token.name}
              value={token.value}
              preview={
                <div
                  style={{
                    width: '100%',
                    height: '40px',
                    background: '#f0f0f0',
                    border: `${token.value} solid #000`,
                    borderRadius: '0.4rem',
                  }}
                />
              }
            />
          ))}
        </TokenGrid>
      </TokenSection>

      <TokenSection title="Border Presets">
        <TokenGrid columns={2}>
          <TokenCard
            name="$border-default"
            value="$border-width-md solid $color-border"
            preview={
              <div
                style={{
                  width: '100%',
                  height: '60px',
                  background: '#fff',
                  border: '3px solid #000',
                  borderRadius: '0.6rem',
                }}
              />
            }
          />
          <TokenCard
            name="$border-thick"
            value="$border-width-lg solid $color-border"
            preview={
              <div
                style={{
                  width: '100%',
                  height: '60px',
                  background: '#fff',
                  border: '4px solid #000',
                  borderRadius: '0.6rem',
                }}
              />
            }
          />
        </TokenGrid>
      </TokenSection>
    </div>
  ),
};

// ============================================================================
// MIXINS STORY
// ============================================================================

export const Mixins: Story = {
  render: () => (
    <div>
      <TokenSection title="Focus Ring">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.875rem',
                marginBottom: '1rem',
              }}
            >
              @mixin focus-ring
            </h4>
            <button
              style={{
                padding: '1rem 2rem',
                background: '#ffde03',
                border: '3px solid #000',
                borderRadius: '0.6rem',
                fontFamily: 'Space Mono, monospace',
                fontWeight: 700,
                cursor: 'pointer',
                outline: '3px solid #000',
                outlineOffset: '2px',
                boxShadow: '0 0 0 4px #ffde03',
              }}
            >
              Focus State
            </button>
            <pre
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: '#1a1a1a',
                color: '#fff',
                borderRadius: '0.6rem',
                fontSize: '0.75rem',
                fontFamily: 'Space Mono, monospace',
                overflow: 'auto',
              }}
            >
{`@mixin focus-ring {
  outline: $border-width-md solid $color-black;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px $color-primary;
  border-radius: $radius-md;
}`}
            </pre>
          </div>
          <div>
            <h4
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.875rem',
                marginBottom: '1rem',
              }}
            >
              @mixin focus-ring-inset
            </h4>
            <div
              style={{
                padding: '1rem 2rem',
                background: '#fff',
                border: '3px solid #000',
                borderRadius: '0.6rem',
                fontFamily: 'Space Mono, monospace',
                fontWeight: 700,
                boxShadow: 'inset 0 0 0 3px #ffde03',
              }}
            >
              Inset Focus
            </div>
            <pre
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: '#1a1a1a',
                color: '#fff',
                borderRadius: '0.6rem',
                fontSize: '0.75rem',
                fontFamily: 'Space Mono, monospace',
                overflow: 'auto',
              }}
            >
{`@mixin focus-ring-inset {
  outline: none;
  box-shadow: inset 0 0 0 
    $border-width-md $color-primary;
}`}
            </pre>
          </div>
        </div>
      </TokenSection>

      <TokenSection title="Text Utilities">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.875rem',
                marginBottom: '1rem',
              }}
            >
              @mixin truncate
            </h4>
            <div
              style={{
                padding: '1rem',
                background: '#f0f0f0',
                border: '2px solid #000',
                borderRadius: '0.6rem',
                width: '200px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontFamily: 'Space Mono, monospace',
              }}
            >
              This is a very long text that will be truncated
            </div>
            <pre
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: '#1a1a1a',
                color: '#fff',
                borderRadius: '0.6rem',
                fontSize: '0.75rem',
                fontFamily: 'Space Mono, monospace',
                overflow: 'auto',
              }}
            >
{`@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`}
            </pre>
          </div>
          <div>
            <h4
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.875rem',
                marginBottom: '1rem',
              }}
            >
              @mixin line-clamp($lines)
            </h4>
            <div
              style={{
                padding: '1rem',
                background: '#f0f0f0',
                border: '2px solid #000',
                borderRadius: '0.6rem',
                width: '200px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.875rem',
              }}
            >
              This is a longer text that will be clamped to only two lines of content.
            </div>
            <pre
              style={{
                marginTop: '1rem',
                padding: '1rem',
                background: '#1a1a1a',
                color: '#fff',
                borderRadius: '0.6rem',
                fontSize: '0.75rem',
                fontFamily: 'Space Mono, monospace',
                overflow: 'auto',
              }}
            >
{`@mixin line-clamp($lines: 2) {
  display: -webkit-box;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`}
            </pre>
          </div>
        </div>
      </TokenSection>

      <TokenSection title="Neobrutalist Hover Effect">
        <div>
          <h4
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.875rem',
              marginBottom: '1rem',
            }}
          >
            @mixin brutalist-hover
          </h4>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div
              style={{
                padding: '2rem',
                background: '#fff',
                border: '3px solid #000',
                borderRadius: '0.6rem',
                boxShadow: '4px 4px 0 0 #000',
                fontFamily: 'Space Mono, monospace',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'transform 100ms, box-shadow 100ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '6px 6px 0 0 #000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = '4px 4px 0 0 #000';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'translate(0, 0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '6px 6px 0 0 #000';
              }}
            >
              Hover Me!
            </div>
            <pre
              style={{
                flex: 1,
                padding: '1rem',
                background: '#1a1a1a',
                color: '#fff',
                borderRadius: '0.6rem',
                fontSize: '0.75rem',
                fontFamily: 'Space Mono, monospace',
                overflow: 'auto',
                margin: 0,
              }}
            >
{`@mixin brutalist-hover($shadow: $shadow-md) {
  box-shadow: $shadow;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 0 $color-black;
  }
  
  &:active {
    transform: translate(0, 0);
    box-shadow: none;
  }
}`}
            </pre>
          </div>
        </div>
      </TokenSection>

      <TokenSection title="Button Base">
        <pre
          style={{
            padding: '1.5rem',
            background: '#1a1a1a',
            color: '#fff',
            borderRadius: '0.6rem',
            fontSize: '0.75rem',
            fontFamily: 'Space Mono, monospace',
            overflow: 'auto',
          }}
        >
{`@mixin button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $space-2;
  font-family: $font-family-sans;
  font-weight: $font-weight-bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: $letter-spacing-wide;
  border: $border-default;
  cursor: pointer;
  transition: transform $transition-fast, box-shadow $transition-fast;
  user-select: none;
  
  &:hover:not(:disabled) {
    transform: translate(-2px, -2px);
  }
  
  &:active:not(:disabled) {
    transform: translate(0, 0);
    box-shadow: none;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}`}
        </pre>
      </TokenSection>

      <TokenSection title="Responsive Container">
        <pre
          style={{
            padding: '1.5rem',
            background: '#1a1a1a',
            color: '#fff',
            borderRadius: '0.6rem',
            fontSize: '0.75rem',
            fontFamily: 'Space Mono, monospace',
            overflow: 'auto',
          }}
        >
{`@mixin responsive-container($max-width: $container-lg) {
  width: 100%;
  max-width: $max-width;
  margin-left: auto;
  margin-right: auto;
  padding-left: $space-4;
  padding-right: $space-4;
}`}
        </pre>
      </TokenSection>
    </div>
  ),
};

// ============================================================================
// TRANSITIONS STORY
// ============================================================================

export const Transitions: Story = {
  render: () => (
    <div>
      <TokenSection title="Transition Tokens">
        <TokenGrid columns={3}>
          {[
            { name: '$transition-fast', value: '100ms ease' },
            { name: '$transition-base', value: '150ms ease' },
            { name: '$transition-slow', value: '300ms ease' },
          ].map((token) => (
            <TokenCard
              key={token.name}
              name={token.name}
              value={token.value}
              preview={
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: '#ffde03',
                    border: '3px solid #000',
                    borderRadius: '0.6rem',
                    margin: '0 auto',
                    transition: `transform ${token.value}`,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              }
            />
          ))}
        </TokenGrid>
      </TokenSection>
    </div>
  ),
};

// ============================================================================
// COMPLETE OVERVIEW
// ============================================================================

export const Overview: Story = {
  render: () => (
    <div
      style={{
        background: '#ffde03',
        padding: '3rem',
        margin: '-1rem',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: '#fff',
          border: '4px solid #000',
          borderRadius: '0.6rem',
          padding: '3rem',
          boxShadow: '8px 8px 0 0 #000',
        }}
      >
        <h1
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '3rem',
            fontWeight: 700,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          VIBE DESIGN TOKENS
        </h1>
        <p
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '1.125rem',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}
        >
          A comprehensive token system for building bold, neobrutalist interfaces.
          Every component uses these tokens for consistent styling.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
          }}
        >
          {[
            { label: 'Colors', count: '30+', color: '#ff2d92' },
            { label: 'Typography', count: '15+', color: '#0066ff' },
            { label: 'Spacing', count: '13', color: '#00ff88' },
            { label: 'Shadows', count: '7', color: '#9933ff' },
            { label: 'Radii', count: '8', color: '#ff6600' },
            { label: 'Mixins', count: '10+', color: '#00e5ff' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: item.color,
                border: '3px solid #000',
                borderRadius: '0.6rem',
                padding: '1.5rem',
                boxShadow: '4px 4px 0 0 #000',
              }}
            >
              <div
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '2rem',
                  fontWeight: 700,
                }}
              >
                {item.count}
              </div>
              <div
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: '#f0f0f0',
            border: '2px dashed #000',
            borderRadius: '0.6rem',
          }}
        >
          <h3
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.75rem',
            }}
          >
            Usage
          </h3>
          <pre
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.75rem',
              margin: 0,
            }}
          >
{`@use "styles/variables" as *;
@use "styles/mixins" as *;

.my-component {
  padding: $space-4;
  background: $color-primary;
  border-radius: $radius-md;
  box-shadow: $shadow-md;
  @include focus-ring;
}`}
          </pre>
        </div>
      </div>
    </div>
  ),
};

