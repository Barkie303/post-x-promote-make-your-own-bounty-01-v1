// Entry program for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
// The entry is the X post itself: one post of our own quoting make.fun's
// make-your-own-bounty post, with a photo of its own attached. This program
// only hands POST.json to the grader by copying it into the output
// directory; the house reads the post from X and scores its replies,
// reposts and quotes. Nothing this program writes about the post is scored.
//
// The post does the talking; this program only delivers its address to the grader.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
