---
type: post
title: 'How to Make a Somewhat Successful Indie Game'
htmlTitle: 'How to Make a Somewhat Successful Indie Game'
author: Mario Kaiser
tags: ['Tech', 'Gaming']
published: true
date: 2020-08-07 # TODO: define!
---

<img alt="Core Defense" src="/img/store_gif_final.png" style="width:100%">

A few months ago I released [Core Defense](https://store.steampowered.com/app/1203360/Core_Defense/) on Steam and grossed $20,186 in the first week. Nothing crazy, but good enough for a solo indie developer – especially if you take into account that you can expect to make 2-5x your first week's revenue during your first year, [according to](https://www.gamasutra.com/blogs/SimonCarless/20200615/364798/Steam_the_new_wishlists_to_first_week_sales_expectations.php) Simon Carless, whose [newsletter](https://gamediscoverability.substack.com/) I cannot recommend enough.

Currently I am at around 2.5x of the first week's revenue and I haven't done a single sale on Steam yet, which will profit from more than twice the amount of wishlists I had at launch. And then the game's coming to Adnroid and iOS soon, so all in all I would call Core Defense a somewhat successful indie game so far.

In this post mortem (which is the more readable version of my [AMA on r/gamedev](https://www.reddit.com/r/gamedev/comments/i1oi1o/im_a_solo_indie_dev_my_new_game_just_make_3k_in/)) I will share my lessons learned and give you my take on why Core Defense became a modest success. Naturally this post will contain lots of dos – but if you're also interested in the don'ts, check out the [post mortem](https://frgmnts.blog/f/how-not-to-make-a-game.html) about my first failed game Coregrounds.

## Simplicity

Being a minimalist at heart, I like simple things. Unfortunately that didn't keep me from making my last game a complexity monster. This time around I wanted to make a game that's simple but highly replayable and strategically diverse – and I think its simplicity is one of the core reasons (pun intended) for its success. Core Defense has no tutorial and does not need one. Its simple, dopamine-rushing core loop: get rewards, update your build, survive the next wave, repeat.

Embracing simplicity allows you to easily communicate what your game is about and why people should care, which helps selling your game in the first place. Players can dive right in and get to the fun faster (oh yeah your game needs that, too) – meaning less churn, more positive reviews and ultimately even more sales. Oh and did I mention that simple games are not only faster to build and easier to maintain, but also much more fun to work on? Believe me, I did both and crawling back out of countless rabbit holes is way less fun than tending to a nice little zen garden of a game project.

## Quality

My first game failed for many reasons, the most important one: it was hemorrhaging players from the start. And it was not just the game's complexity I've mentioned above: apart from a terrible user experience the game had bugs and technical issues aplenty – all of which were completely avoidable roadblocks.

When talking about selling games and things, we always talk about how to gain more, grow more, reach more – but personally I think it's the wrong way to go about it. We have huge markets to tap into anyway and I think we should worry more about loosing people than about reaching more. By releasing a game on Steam, we get our games in front of thousands of people no matter what – so we should make sure we loose as few of those as we can.

Quality is not everything, but without quality everything is nothing. With Core Defense I have tried to put quality first and to remove as much friction as possible. From the game design and user interface to the Steam capsule image everything was designed to be as crystal clear and appealing and as much fun to use as possible.

## Community-driven development

For Core Defense I luckily chose a community-driven development approach. After finishing the concept I whipped up an alpha version of the game within two months and created a Discord server to get people to play it. I kickstarted the server by alerting my last game's community (from which Core Defense is spin-off after all) and gaming outlets like [AlphaBetaGamer](https://www.alphabetagamer.com/core-defense-alpha-download/).

And since then the Discord server has been constantly growing and has been an invaluable ressource for the game's development. Much of the content in the game today is based on player's ideas and feedback. Countless bugs and issues were reported and the community was and is an endless source of both motivation and inspiration.

One reason this was working so well though: I was actively engaged with the community, reading absolutely everything they posted and commenting on most of it. The same is true for the Steam community discussions, where there's virtually no post without feedback from me. So while it was a considerable amount of work, not a minute of it I spent in vain.

## Store Page

Your store page is everything: you can have the best game of all time but if no one's going to make it past the store page, no one will ever know about it. All in all I spent at least an entire week's worth of work on creating and finetuning the Steam store page of Core Defense – and there's not even that much content on it, the main description fits above the fold. In the past couple of months, the game has sold almost as many copies as it gained wishlists, which I think is an indicator for a strong store page and proper pricing.

Mostly because of the minimalist graphics which obfuscate the production value I opted for a $9.99 price point. I have heard all kinds of feedback on this, mostly that the price is fair or could have been higher. But my feeling is that the price was perfect and one of the reasons sells so well.

## Release Strategy

If you haven't released a game on Steam before you might not know that you get a visibility boost in the first month after the release. After learning this the hard way with my last game I knew that this time around I wanted to make the most out of that boost: I wanted to release a properly polished product on Steam and convert as much of that traffic as possible.

After reading about Martin Nerurkar [launch strategy](https://www.gamasutra.com/blogs/MartinNerurkar/20180410/316400/Early_Access_without_Steam.php) for Nowhere Prophet, which had an Early Access phase via itch.io before being released on Steam as finished game, I knew that was perfect and did exactly the same thing.

After the short public alpha I had released the beta version of Core Defense on itch.io for $9.99 in mid-January 2020, roughly six months before the release on Steam. I think it was very important to have had the Steam store page ready for the itch.io release – I even included a Steam wishlist widget on the itch.io store page and announced free Steam keys for all owners of the game.

In the end Core Defense only sold about 150 copies there, but that was more than enough to keep the community-driven development going and to arrive at the level of polish necessary to nail the Steam release.

## Localization

More than half of the game's sales come from non-english speaking countries – which might not entirely be attributed to the fact that the game is localized in almost a dozen languages, but I'm pretty sure it helped. And the best part: for most of it I didn't even pay a dime. I crowdsourced the localization via [localizor.com](https://www.localizor.com/core-defense), which was still in beta at the time. It was good then already and just keeps getting better and better. All I had to do is add a call to action on the game's home screen and thanks to the community I was able to add another translation to the game every other update. The store pages I had successively translated via [translated.com](https://translated.com/). What I could have done better here: funneling the translators through the Discord server would have helped as I have no way of reaching most of them for updates et cetera.

## Standalone Demo

When I stumbled upon Mike Rose's [thread about pre-launch demos on Steam](https://twitter.com/RaveofRavendale/status/1228269323195748352) I quickly decided to give this a try and created a standalone pre-launch demo on Steam. It turned out a complete success: the demo netted me about 3000 wishlists for the game, among many other benefits which I have outlined in a [separate blog post](https://frgmnts.blog/f/why-you-need-a-separate-prelaunch-demo-on-steam.html).

My next game definitely will have a demo as well, the only question is whether it will be a standalone one. An onpage demo is less work and costs nothing, but the standalone demo will benefit from Steam's visibility boost, which means a lot more eyeballs on your game for just $100 you have to pay for the extra app credit. In terms of time and money spent on marketing, the demo was by far the most effective gig I have done for Core Defense.

## Marketing

- influencer outreach: by far the most
- social media presence: find new fans, keep your old ones on board.
- press releases:
- press outreach: even if it's just for those 3 quotes on the store page
- forum posts
- giveaways
- sharing data, post mortems, amas are a win-win: others can learn, you can get more eyes on your game

I post a lot on my personal Twitter (#screenshotsaturday!)
I have a press list to which I sent out news, press releases and review keys
I had a hand-picked list of influencers whom I contacted via mail (to no avail alas)
I used dodistribute, Keymailer and Woovit for key requests
I posted to IndieDB and several forums regularly
I had a prelaunch demo on Steam whose organic Steam traffic converted nicely into wishlists (I wrote a blog post about why a prelaunch demo makes sense)
The game was developed with a community-driven approach, so the Discord server and the community were crucial
I did an Indieboost campaign for the Early Access launch on itch.io and spent about $200 on sponsored influencer videos
Before the Steam launch, I used Woovit to send out keys to influencers, got featured by a few smaller ones but no big reach here
Also did a Keymailer ad for $100 two weeks before the launch which netted about 80 key requests and a few videos, again not much reach here though
Spent a lot of time perfecting the store page to nail that first impression and make people look beyond the graphics

## Beware of the burnout

Being an indie dev is hard.

## Do tracking as early as possible!

the situation, caveat: burnout!

research? play a shitton of games?

[Twitter](https://twitter.com/ehmprah)

<img src="https://vg09.met.vgwort.de/na/b57db01305e54829910870ca2b87b46c" width="1" height="1" alt="">
