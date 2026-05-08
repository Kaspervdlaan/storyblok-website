import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { initStoryblok, StoryblokComponent } from './lib/storyblok';
import './styles/_globals.scss';

// Initialize Storyblok with Visual Editor support
initStoryblok();

function App() {
  const slug = window.location.pathname.replace(/^\//, '') || 'home';
  const [story, setStory] = useState<{ content?: unknown } | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const loadStory = async () => {
      try {
        setFetchError(null);
        setStory(null);

        const response = await fetch(`/api/story?slug=${encodeURIComponent(slug)}`, {
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch story (${response.status})`);
        }

        const payload = await response.json();
        const nextStory = payload?.story;

        if (!isCancelled) {
          if (!nextStory || typeof nextStory !== 'object') {
            throw new Error('Story endpoint did not return valid story data.');
          }

          setStory(nextStory);
        }
      } catch (error) {
        if (!isCancelled) {
          setFetchError(error instanceof Error ? error.message : 'Unable to load page.');
        }
      }
    };

    loadStory();

    return () => {
      isCancelled = true;
    };
  }, [slug]);

  if (fetchError) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          fontFamily: 'Sora, sans-serif',
          color: '#ae2012',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        {fetchError}
      </div>
    );
  }

  if (!story?.content) {
    return (
      <div 
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          fontFamily: 'Sora, sans-serif',
          fontSize: '1.25rem',
          color: '#001219',
          background: '#f7f4ed',
          gap: '1rem',
        }}
      >
        <div>Loading...</div>
        <div style={{ fontSize: '0.875rem', color: '#5c5a52' }}>
          Fetching cached story: /{slug}
        </div>
        {!story && (
          <div style={{ fontSize: '0.75rem', color: '#ae2012', maxWidth: '400px', textAlign: 'center' }}>
            No story found. Make sure you have a story with slug "{slug}" in Storyblok.
          </div>
        )}
      </div>
    );
  }

  return <StoryblokComponent blok={story.content} />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

