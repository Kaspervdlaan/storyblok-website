import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { initStoryblok, useStoryblok, StoryblokComponent } from './lib/storyblok';
import './styles/_globals.scss';

// Initialize Storyblok with Visual Editor support
initStoryblok();

function App() {
  const slug = window.location.pathname.replace(/^\//, '') || 'home';
  const storyblokVersion = import.meta.env.PROD ? 'published' : 'draft';
  const isCvPage = slug === 'cv';

  const [cvHtml, setCvHtml] = useState<string | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);

  const story = useStoryblok(slug, { version: storyblokVersion });

  useEffect(() => {
    if (!isCvPage) {
      setCvHtml(null);
      setCvError(null);
      return;
    }

    let isCancelled = false;

    const loadCv = async () => {
      try {
        setCvError(null);
        const response = await fetch('/api/cv', {
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch CV (${response.status})`);
        }

        const payload = await response.json();
        const html = typeof payload?.html === 'string' ? payload.html : null;

        if (!isCancelled) {
          if (!html) {
            throw new Error('CV endpoint did not return HTML content.');
          }
          setCvHtml(html);
        }
      } catch (error) {
        if (!isCancelled) {
          setCvError(error instanceof Error ? error.message : 'Unable to load CV.');
        }
      }
    };

    loadCv();

    return () => {
      isCancelled = true;
    };
  }, [isCvPage]);

  if (isCvPage) {
    if (cvError) {
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
          {cvError}
        </div>
      );
    }

    if (!cvHtml) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            fontFamily: 'Sora, sans-serif',
          }}
        >
          Loading CV...
        </div>
      );
    }

    return <div dangerouslySetInnerHTML={{ __html: cvHtml }} />;
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
          Fetching: /{slug}
        </div>
        {!story && !isCvPage && (
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

