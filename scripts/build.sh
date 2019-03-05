#!/bin/bash

rm -rf ./dist/*

cp -r ./css ./dist/css
cp -r ./js ./dist/js
cp -r ./scss ./dist/scss
cp -r ./less ./dist/less
cp -r ./stylus ./dist/stylus

cp ./README.md ./dist
cp ./package.json ./dist
cp ./LICENSE ./dist
cp ./example.html ./dist