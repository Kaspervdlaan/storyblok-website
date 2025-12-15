import React from 'react';
import { Box } from '../Box';
import './_media.scss';

type MediaAspectRatio = 'auto' | 'square' | 'video' | 'wide' | 'portrait';
type MediaFit = 'cover' | 'contain' | 'fill' | 'none';
type MediaRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface MediaBaseProps {
  /** Aspect ratio of the media container */
  aspectRatio?: MediaAspectRatio;
  /** How the media should fit within its container */
  fit?: MediaFit;
  /** Border radius */
  radius?: MediaRadius;
  /** Alt text for accessibility */
  alt: string;
  /** Additional CSS classes */
  className?: string;
}

interface MediaImageProps extends MediaBaseProps {
  /** Media type */
  type: 'image';
  /** Image source URL */
  src: string;
}

interface MediaVideoProps extends MediaBaseProps {
  /** Media type */
  type: 'video';
  /** Video source URL */
  src: string;
  /** Poster image for video */
  poster?: string;
  /** Autoplay video (muted by default for autoplay) */
  autoPlay?: boolean;
  /** Loop video */
  loop?: boolean;
  /** Show video controls */
  controls?: boolean;
  /** Mute video */
  muted?: boolean;
}

export type MediaProps = MediaImageProps | MediaVideoProps;

export const Media: React.FC<MediaProps> = (props) => {
  const {
    type,
    src,
    alt,
    aspectRatio = 'auto',
    fit = 'cover',
    radius = 'md',
    className = '',
    ...rest
  } = props;

  const classNames = [
    'media',
    `media--aspect-${aspectRatio}`,
    `media--fit-${fit}`,
    `media--radius-${radius}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (type === 'video') {
    const {
      poster,
      autoPlay = false,
      loop = false,
      controls = true,
      muted = autoPlay,
    } = rest as Omit<MediaVideoProps, keyof MediaBaseProps | 'type' | 'src'>;

    return (
      <Box className={classNames} radius={radius}>
        <video
          className="media__video"
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          controls={controls}
          muted={muted}
          playsInline
          aria-label={alt}
        >
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>
      </Box>
    );
  }

  return (
    <Box className={classNames} radius={radius}>
      <img
        className="media__image"
        src={src}
        alt={alt}
        loading="lazy"
      />
    </Box>
  );
};

Media.displayName = 'Media';

export default Media;

