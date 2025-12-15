import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { initStoryblok, useStoryblok, StoryblokComponent } from './lib/storyblok';
import './styles/_globals.scss';

// Initialize Storyblok with Visual Editor support
initStoryblok();

function App() {
  // Get slug from URL or default to 'home'
  const slug = window.location.pathname.replace(/^\//, '') || 'home';
  
  // useStoryblok hook enables live editing in Visual Editor
  const story = useStoryblok(slug, { version: 'draft' });

  // Log Storyblok data for debugging
  useEffect(() => {
    console.log('=== STORYBLOK DATA ===');
    console.log('Slug:', slug);
    console.log('Story:', story);
    if (story?.content) {
      console.log('Content:', JSON.stringify(story.content, null, 2));
    }
    console.log('======================');
  }, [slug, story]);

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

