# Web Audio memory allocation demo

This is a demostration of memory allocations triggering garbage collection on the audio thread for any AudioWorkletProcessor, even if it doesn't do any work.

## Get up and running

Download the source, then run `npm i` then `npm start` in the directory where the package.json file sits. This assumes you have node and npm installed.

Browse to one of the urls listed on the command line, probably localhost:8000, in Chromium/Google Chrome.
