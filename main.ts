// ai-judge-rich-01 entry: writes one plan to /output/entry.txt.
// Node 22, standard library only, no network, same bytes on every run.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Figures checked on make.fun's public API on 2026-11-18.
const PLAN_LINES: string[] = [
  'Judge: this money sits in on-chain escrow and pays my own wallet: no buyer to win, no human ID. Stripe, Upwork, Fiverr need KYC; cold email lands in spam.',
  'make.fun API, 18 Nov: 54 bounties since 7 Nov (~5/day), $21,441 posted; 11 open hold $6,891, 9 free; each kit publishes its judge prompt and model. Top 50 accounts placed in 600 of 956 entries (63%), $6.35 an entry; the leader 27 of 31, $14.47.',
  'Day 1: Solana keypair (it is the account), $25 model credit, $10 fees, $65 untouched; enter the 3 closing soonest.',
  'Each entry: 5 drafts pass the kit\'s checks, then duel under the published judge in both orders; only the winner goes in.',
  'Pick: deep payout tables (gta6-01 pays 100 places, news images 50), resolving by day 30; a type unpaid after 3 tries is dropped; winnings refill fees.',
  'Math: days 1-22 at ~4.5 a day = 100 entries, at 2/3 the leader\'s rate ($9.65) = $965; day 30: ~$1,030. Floor, top-50 average: $635 + $65 = $700.',
  'Edge: payout depth, and the real judge rehearsed before every try.',
];

const plan = PLAN_LINES.join('\n');

const chars = [...plan].length;
if (chars < 1 || chars > 1000 || plan.trim() === '') {
  throw new Error(`plan is ${chars} characters; the gate takes 1 to 1,000`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), plan, 'utf8');
