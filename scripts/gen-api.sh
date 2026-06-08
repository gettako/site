#!/bin/bash
set -e

echo "Generating Go API Documentation using gomarkdoc..."

# Check if gomarkdoc is installed, if not try to use 'go run'
cd tako

# We output the generated documentation to site/docs/api/reference.md
# We use a header template to add VitePress frontmatter
cat << 'HEADER' > ../docs/api/reference.md
---
title: Go API Reference
description: Auto-generated Go package documentation for Tako
---

# 📚 Go API Reference

This document is auto-generated directly from the source code. It contains the complete reference for all public packages, structs, and interfaces in the Tako framework.

HEADER

# Run gomarkdoc
go run github.com/princjef/gomarkdoc/cmd/gomarkdoc@latest --output ../docs/api/reference.md ./...

echo "API Documentation generated successfully at docs/api/reference.md!"
