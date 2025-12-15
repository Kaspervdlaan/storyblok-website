// ============================================================================
// STORYBLOK CONFIGURATION
// ============================================================================

import { storyblokInit, apiPlugin } from '@storyblok/react';
import { components } from './components';
import { SbFallback } from './bloks';

/**
 * Initialize Storyblok SDK
 * Call this once in your app entry point
 */
export const initStoryblok = () => {
  storyblokInit({
    accessToken: 'RDRQzvcVmmfgB3PQJ47NRAtt',
    use: [apiPlugin],
    components,
    enableFallbackComponent: true,
    customFallbackComponent: SbFallback,
    apiOptions: {
      region: 'eu', // Use 'us' if your space is in the US region
    },
  });
};

// Re-export everything from Storyblok React SDK
export {
  StoryblokComponent,
  storyblokEditable,
  useStoryblok,
  useStoryblokApi,
  getStoryblokApi,
} from '@storyblok/react';

// Re-export bloks
export * from './bloks';

