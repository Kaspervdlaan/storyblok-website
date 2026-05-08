#!/usr/bin/env bash
set -euo pipefail

if [[ ! -f .env ]]; then
  echo "Missing .env file in project root. Add VITE_STORYBLOK_API_TOKEN before deploying."
  exit 1
fi

if ! grep -q '^VITE_STORYBLOK_API_TOKEN=' .env; then
  echo "VITE_STORYBLOK_API_TOKEN is missing in .env"
  exit 1
fi

if ! grep -q '^STORYBLOK_API_TOKEN=' .env; then
  echo "STORYBLOK_API_TOKEN is missing in .env"
  exit 1
fi

if ! grep -q '^STORYBLOK_CV_SLUG=' .env; then
  echo "STORYBLOK_CV_SLUG is not set. Defaulting to 'cv'."
fi

if ! grep -q '^CV_CACHE_TTL_SECONDS=' .env; then
  echo "CV_CACHE_TTL_SECONDS is not set. Defaulting to 900 seconds."
fi

docker compose -f deploy/droplet/docker-compose.yml build --pull

docker compose -f deploy/droplet/docker-compose.yml up -d

docker compose -f deploy/droplet/docker-compose.yml ps
