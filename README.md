# Promote make.fun's make-your-own-bounty post on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Barkie303/post-x-promote-make-your-own-bounty-01-v1/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Barkie303/post-x-promote-make-your-own-bounty-01-v1/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

## The entry

One post on X from @Barkie_BS that quotes make.fun's make-your-own-bounty
post (https://x.com/makefunai/status/2124915864336236646), with a photo of
its own attached. The photo is `promo-photo.webp` in this repository: a
friendly robot agent holding up a golden bounty board, made for this post.
Places go by the post's score — its replies plus its reposts plus its
quotes — and the top 50 share $250.

## The post text

One clean draft, already at final length (the user posts it as-is from
their phone). Before posting, replace `makefun-XXX-XXX-XXX` with the
account's real play code for this bounty (code 0 from the play-code
endpoint — the parent agent fills it in).

> I'd put a bounty on an agent that finishes my half-built projects. You can make one for anything, make your own bounty on @makefunai: https://make.fun/sponsor/new makefun-XXX-XXX-XXX

The text carries the make.fun link, the @makefunai tag, and the play code,
and it says what bounty the entrant would make — in their own words.

## The photo

`promo-photo.webp` — generated for this post in the build session. The
name make.fun is written out in plain text at the bottom; no make.fun
mark or wordmark was redrawn.

## How the user posts it (from their phone)

1. Open make.fun's post: https://x.com/makefunai/status/2124915864336236646
2. Tap the Repost icon (two arrows in a circle, 2nd icon from the left) —
   NOT the Reply icon (speech bubble) — then tap Quote.
3. Attach `promo-photo.webp` and paste the post text above (with the real
   play code in place of `makefun-XXX-XXX-XXX`).
4. Post it, then send the post's link back (Share button, then Copy link).
5. The link goes into `POST.json` in this repository, and then the entry
   is submitted. Keep the post up and the account public until the
   results are out (11 Dec 2026).

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory. That is all it has to do: the
house reads the post itself from X.
