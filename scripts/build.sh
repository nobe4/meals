#!/usr/bin/env bash

set -e

rm -rf ./dist
esbuild \
    app.js \
    --bundle \
    --minify \
    --sourcemap \
    --outdir="dist" \
    --analyze

cp ./static/* "dist"
(
    cd "dist"
    sed -i "s#app.js#$(echo ./*.js)#" index.html
)

