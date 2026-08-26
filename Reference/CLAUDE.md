# REVILLE — Project Context for Claude Code

## What REVILLE Is
REVILLE is a Toronto-based dream-car giveaway brand: "buy in, earn entries, win the keys." Reville turns everyday car spending — services, parts, accessories — into sweepstakes entries toward giving away a genuine dream car (currently targeting a BMW M850, ~$100K CAD / ~$85K used). Target entry pool size at full funding: **~330,000–350,000 entries**.

The name "Reville" echoes "reveille" (the wake-up call) with "rev" built in for the engine tie-in. Audience: Toronto car enthusiasts, Gen Z through late-20s.

The brand's real moat isn't the products or services themselves — it's the giveaway, the community, and the story.

**Primary inspiration / model: [80Eighty](https://www.80eighty.com/)** — the clearest template for this business. ~88 cars given away, ~$14.9M in total prizes over 12 years, built on heavily marked-up merch (e.g. a foam cannon sourced for ~$5–7 sold for $82). Reville's point of difference from 80Eighty and similar brands (LGND Supply Co., Prime Driven): running **two revenue divisions instead of one** (a real shop plus e-commerce), which funds the prize faster and gives customers two separate reasons to buy in.

## Two Divisions, One Entry Pool
- **[Nurbu Auto Centre](https://nurbuautocentre.com/)** — real physical auto shop, 4-84 Crockford Blvd, Scarborough, ON. Booked via Square (HST applies). Sells oil changes, brake work, PPF, ceramic coating, wraps, tuning, tint, and full detailing. ~55 shop-hours/week, 2 bays. Modeled at ~4 fully-booked 15-day windows (~4 months) to fund the car via 60% service margins.
  - **Entries:** every service booked earns entries weighted by price band, **1.5x–2.5x multiplier**. A **$25 standalone "entry pack"** is also sold on its own for customers who just want to enter without booking a service.
- **Reville Shop (Shopify)** — dropshipped car accessories sourced via **DSer** from AliExpress/Alibaba, curated to a sleek "auto boutique" look (matte black/gunmetal/white — no novelty/neon). Sells phone mounts, ambient lighting, detailing gear, seat covers, organizers, and similar accessories. Markup target 2.5x–4x, sell cap ~$50 CAD. Intentionally lean catalog (~30 curated hero products) — this is NOT the primary repeat-purchase engine, Nurbu's recurring services are, since a tight accessory catalog depletes (customers run out of things to buy) while car maintenance doesn't.
  - **Entries:** every product purchase earns entries on a **2x–10x multiplier scale**, with occasional bonus-entry periods.

## How Entries Work
Entries = price × a multiplier that increases with spend — bigger purchases earn disproportionately more entries per dollar, which encourages upsells and premium packages. Example: a $500 service at a 1.9x multiplier earns 950 entries, while a $2,200 service at 2.1x earns 4,620 entries — more than 4x the entries for roughly 4x the spend.

## Why It Works
The two divisions reinforce each other. Shop and store margin (60% on services, 2.5x–4x markup on products) funds the car; the car itself is the marketing engine — it drives traffic, social sharing, and repeat purchases without needing a big ad budget. Every dollar spent in either division feeds the same entry pool, so a customer who gets their car detailed at Nurbu can also shop Reville's accessories online, and vice versa — each division cross-sells the other instead of competing for the same dollar.

## What We're Building (this repo)
A **customized Shopify theme** (real Liquid + HTML/CSS/JS), not a separate hand-coded site. The entries mechanic needs to live inside Shopify's commerce layer (cart, checkout, orders) — a standalone site would mean rebuilding all of that from scratch.

**Theme base: still undecided.** Sina is resolving this directly in this VS Code chat — don't assume Dawn, Horizon, or any other theme. Ask if it isn't already clear from the repo.

**Core mechanic:** entries = price × multiplier, stored as Shopify product metafields (`entry_count`, `multiplier`) — same pattern 80Eighty uses (metafields, not a separate database).

**Nurbu → Shopify bridge (v1, manual, not automated):** staff creates a $0 draft order using a "Nurbu Service Entry — Tier X" product that has a fixed `entries` metafield, mirroring the in-person Square payment. A scheduled script (not yet built) later sums entries across all orders into a shop-level metafield that the homepage counter reads.

## Design System
- Colors: `--bg:#0A0B0D` `--panel:#16181C` `--panel-2:#1D2025` `--steel:#3A3F47` `--steel-dim:#22252A` `--text:#EDEEF0` `--text-dim:#9BA0A8` `--redline:#FF4D2E` (accent — use sparingly, CTAs/gauge redline zone only) `--chrome:#C7CCD1`
- Fonts: **Oswald** (display/headers — condensed, dashboard-badge feel), **Inter** (body text), **JetBrains Mono** (numeric data — entry counter, odometer-style readouts)
- Signature element: a semi-circular **tachometer/gauge** visualizing live entry-pool progress — ties to the brand name's "rev/reveille" pun. Appears in the hero and again in the Current Giveaway section.

## Homepage Structure (top to bottom)
1. **Nav** — REVILLE wordmark, links: Giveaway / Nurbu / Shop / Official Rules
2. **Hero** — wordmark, tagline "Buy in. Earn entries. Win the keys.", gauge + live entry counter, primary CTA
3. **How It Works** — price × multiplier formula, worked examples: $500 @ 1.9x = 950 entries; $2,200 @ 2.1x = 4,620 entries
4. **Two Divisions** — Nurbu Auto Centre / Reville Shop panels side by side, with a Reville × Nurbu lockup badge tying them together
5. **Current Giveaway** — stacked sequence (deliberate order, builds anticipation): prize visual (placeholder — "PHOTO/VIDEO PENDING") → gauge → large live-ticking counter → progress bar → CTA
6. **Footer** — Official Rules link, legal/no-purchase-necessary disclaimer text, Nurbu partnership line, social links

## Critical — Do Not Fabricate
The original mockup's live counter used a fake `setInterval` auto-increment (~every 2.8s) to simulate real-time momentum. **This must never ship as real behavior on the live site.** Displaying fabricated numbers on a real, legally-regulated sweepstakes page is a false-advertising risk, not a cosmetic placeholder. Any "live" counter in this repo must read a real value from a shop metafield — flag it clearly if you see fake-increment logic still in place.

## Legal — Don't Guess, Flag Instead
This is a real, legally-regulated Canadian sweepstakes (purchase-linked prize draws have specific Criminal Code requirements). Do not invent or finalize wording for: the **skill-testing question** mechanic, the **Official Rules** document, or the **no-purchase-necessary (NPN)** free-entry method. Build the page structure/skeleton for these, mark the specific legal copy as TBD, and flag it rather than filling in plausible-sounding text.

## Open Questions — Confirm, Don't Assume
- **Theme:** still being decided by Sina directly — don't assume
- **Nurbu service pricing:** multiplier tiers are currently built on estimated prices, not confirmed real ones
- **Catalog depth:** whether to add colorway/size variants of proven winners, loosen the quality bar to allow more products, or stay lean at ~30 curated hero products (closer to the "boutique" feel the brand wants)
- **Name lock-in:** domain/trademark check for "Reville" (CIPO + USPTO) and handle availability (@reville, reville.ca/.com) still needs confirming before the name is used publicly anywhere — relevant before connecting a custom domain
- **Legal structure:** how the entry mechanic is legally structured — decides whether a purchase can ever be required to enter, and needs sign-off before anything goes live publicly

## This Week's Scope (not a public launch)
Target: dev theme + CLI connected, entry/multiplier metafields working, homepage (hero → footer) built in Liquid, Official Rules page skeleton started. Full product catalog and public go-live are phased in over the following weeks — treat this as an internal milestone, not a launch.
