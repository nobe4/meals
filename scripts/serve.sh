#!/usr/bin/env bash

# Serve and reload the app, use via `npm start`.

# open http://localhost:8000

esbuild \
    app.js \
    --bundle \
    --sourcemap \
    --watch \
    --outdir=./static \
    --servedir=./static
