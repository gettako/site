#!/usr/bin/env bash

set -e

# Pindah ke root direktori proyek 'site' relatif terhadap script ini
cd "$(dirname "$0")/.."

echo "📦 Syncing gettako/docs..."

if [ ! -d "../docs" ]; then
  echo "📥 Cloning docs repository..."
  git clone --depth 1 https://github.com/gettako/docs.git ../docs
else
  echo "🔄 Pulling latest changes for docs repository..."
  git -C ../docs pull
fi

echo "🚀 Building Nuxt application..."
bun run nuxt build
