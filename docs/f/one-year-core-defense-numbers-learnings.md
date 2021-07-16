---
type: post
title: 'One year of Core Defense – numbers and learnings'
htmlTitle: 'One year of Core Defense – numbers and learnings'
author: Mario Kaiser
tags: ['Tech', 'Gaming']
published: false
date: 2021-07-31
---

It has been exactly one year since [Core Defense](https://coredefense.ehmprah.com/) was released on Steam and in this post I'll share with you both the hard numbers as well as the lessons I learned along the way.

Before we get to the actual numbers, I'll give you a quick recap of the game's history, especially of the things I did after the release on Steam:

- Core Defense was released as first access on itch.io six months prior to the release, where it sold 106 units and grossed $1,144
- Core Defense was released on Steam on July 31, 2020 at a $9.99 price point, had 3632 wishlists before the launch, sold 2,546 units and grossed $20,186 in the first week on Steam
- I've since built 25 patches (3 of which were big content updates)
- Released the Mastery Expansion DLC on Steam on March 19, 2021 at a $4.99 price point
- Released the iOS & Android versions of the game on April 21, 2021 with a freemium business model, unlocking the full game at a $4.99 price point, the expansion for $2.99 and a bundle for both priced at $6.99

## Grand total

Across all platforms Core Defense has grossed $XX.XXX in the past year. I will break down this grand total per platform below.

## Steam Breakdown

- gross revenue: $65,637
- reviews: 82% positive of 228 reviews
- average daily users: 173
- median time played: 3h 57m
- wishlist conversion rate: 22.7%
- outstanding wishes: 7013
- DLC attach rate: 16%
- return rate: 9.4%

I will let the numbers speak for themselves here – but I wanted to share a few words about the DLC: The Mastery Expansion adds a permanent progression to the game with skill points to spend on various bonuses and a few other things, but doesn't really add new content but horizontally scales what's already there.

I wanted to add that anyway but saw that as an opportunity to make an extra buck, especially as I opted for a "high" price paired with regular sales strategy. I thought that a DLC would increase my earnings as people buy the game on sale but because they might be buying the bundle, the DLC compensates for the sale – and this works surprisingly well: At least 50% of the more recent sales have been bundle sales.

But even though I expected some backlash from players, especially due to the relatively aggressive $4.99 price point, I was surprised by just how mad this made some players. My reviews plunged from 86% to 81% within days of the DLC release and suddenly the recent review score showed "Very Negative" in deep red at the top of the store page. The baseline daily purchases dropped from 3-5 to zero, the still "Very Positive" score below notwithstanding. In the end I just had to wait a few weeks before those recent reviews vanished in the crowd but heck those were a few scary weeks.

## Mobile ads and marketing

Before I break down the numbers on the Play Store and App Store, I feel the need to explain: I have only recently begun marketing for the mobile versions because my monetization strategy involved rewarded ads via AdMob, which did not work at all as I expected, leading me to postpone marketing again and again.

I wanted the ads to work before I start the marketing – but in the end I was so frustrated with the whole shebang I discarded them and replaced them with a consumable currency, which players can now spend instead of watching a rewarded ad.

Since the game is based on JavaScript and relies on Capacitor for the mobile versions, AdMob was pretty much my only option because I didn't want to write the native plugins the ecosystem didn't offer. But

ad serving limits
ios ads started working in fact

## Rating prompt


## iOS Breakdown

- gross revenue: $3,740
- rating: 4.4 across 85 ratings
- downloads: 15,400



the whole review madness! but got a small feature out of it (link to form!)

## Android Breakdown

- gross revenue: $917
- rating: 4.0 across 58 ratings
- downloads: 3,117
- sales (+ admob revenue)
- Admob $201.55 for 19.578 requests




## Windows vs Mac and Linux

As an avid Linux user, I always wonder why so few developers publish their games for operating systems other than Windows. Looking at the sales of Core Defense, it makes a little more sense: Mac and Linux account for only 8.5% of sales. In my case, packaging the game for these OS was virtually no extra effort, so it made sense – but if it's additional work, it may very well be not worth the effort.

## Localization

I think that localizing Core Defense was an important part of the game's success: about 50% of sales come from non-English speaking countries. But I'm really unhappy with the state and the quality of the translations. The [enthusiasm I previously shared](/f/how-make-successful-indie-game.html) has subsided over the past year for various reasons:

- the quality of the crowdsourced translations is mostly sub-par
- while there was a lot of momentum around the launch it quickly faded after a while, leaving me with half-finished translations as I introduced new content
- I made quite a few mistakes in organizing the strings, leading to an unnecessary amount to translate, further reducing motivation for the translators
- I didn't funnel translators through the Discord server to be able to reach them

While the localizations helped me sell the game, they don't keep the promise they made in the game itself. I would surely have sold fewer copies of the game without them, but enough to make a professional translation worth it – I don't know. One of the two games I'm currently working on ([Thousand Lives](https://thousandlives.ehmprah.com/)) will be a narrative game that probably won't be localized and I can't wait to see (and share) the numbers in that case.

## What's next

I always envisioned Core Defense to be playable across all platforms – not just PC and mobile, but also on various consoles. Unfortunately I chose the wrong tech stack to reasonably make this vision a reality.

Coming from a web development background I wanted to use JavaScript and optimistically assumed that it would be possible to package Core Defense for consoles as well. I did the actual research too late and only recently found out that while this is actually possible, [it's incredibly hard](/f/multi-platform-games-javascript.html). I've since decided to not port Core Defense to consoles and focus on my next games for now – this time using Godot to make sure I won't run into the same roadblocks again.

Apart from the aforementioned [Thousand Lives](https://thousandlives.ehmprah.com/) I'm working on the spiritual successor of Core Defense, which is still unannounced but will follow the same successful recipe: a simple, high quality game which features an unusual combination of genres and sucks players in with a quick and dopamine-rushing core loop. If you're interested in this or any other stuff I make, be sure to follow me on [Twitter](https://twitter.com/ehmprah) for updates. Thank you for reading this, I hope my experiences prove useful to you!

<img src="https://vg09.met.vgwort.de/na/2f2dd17160214d0c884d613f3d2251e7" width="1" height="1" alt="">
