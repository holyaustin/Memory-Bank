# What it does

**Memory Bank** is a global, censorship-resistant digital legacy platform that empowers users to **permanently store, verify, and share** their most important memories — photos, videos, voice notes, and journals — with full ownership and control.

Key features:
- **One-Tap Verification (SnapTrust Mode)**: Instantly timestamp and PDP-verify any moment (e.g., protests, weddings, travel)
- **Memory Will**: Automatically share access with heirs or loved ones after death or on a future date
- **Time Capsule**: Lock content to unlock in 2030, at a life event, or when a condition is met
- **Public Archive**: Contribute to historical collections (e.g., “Ukrainian War Diaries”)
- **Fast, Private Retrieval**: Encrypted by default, served via FilCDN
- **Seamless Payments**: $1/month subscription via Filecoin Pay (USDC or fiat)

Built on **Filecoin Onchain Cloud**, it combines **verifiable storage**, **on-chain payments**, and **fast retrieval** into a **Web2-like experience** — no wallet required.

> 💬 *"Don’t die with your stories."*

---

## The problem it solves

Digital memories are fragile:
- Platforms delete content (activists, journalists)
- Accounts get locked, devices break, cloud services shut down
- Families lose irreplaceable moments when loved ones pass
- No way to **prove** a photo or video hasn’t been altered

Current solutions (Google Photos, iCloud) are **rentals**, not ownership. They can be censored, hacked, or lost.

**Memory Bank solves this** by giving users:
- ✅ **Permanent storage** with PDP proofs
- ✅ **Censorship resistance** via decentralized infrastructure
- ✅ **True ownership** — you control access
- ✅ **Legacy planning** — your memories live on

This is not just storage — it’s **digital immortality**.

---

## Challenges I ran into (Anticipated)

1. **Wallet Abstraction**: Making Web3 invisible while still using Filecoin Pay and Synapse SDK.  
   → Solved with **Web3Auth** (email/phone login) and embedded flows.
   - 

2. **PDP Gas Costs**: High fees for small files (e.g., voice notes).  
   → To Implemented **batch PDP verification** per user folder to reduce overhead.
   → Other options are Privy and Onboard.

3. **Synapse SDK Error Handling**: Errors were too technical for average users.  
   → TO Built a **user-friendly translation layer** (e.g., “Upload failed” → “No internet”).

4. **FilCDN Cache TTL**: Default 1-hour TTL was too short for static memories.  
   → To add cache-control headers and requested longer TTLs.

5. **Emotional UX Design**: How to make legacy planning feel empowering, not morbid?  
   → Focused on **celebration of life**, not death — e.g., “Leave a voice for your child’s graduation.”

---

## Technologies I used

| Category | Technology |
|--------|------------|
| **Frontend** | PWA and React Native (mobile), Next.js (web), Tailwind CSS |
| **Auth** | Web3Auth (email/socials/phone login) |
| **Encryption** | Lit Protocol (client-side, time-locked access) |
| **Storage** | FilecoinWarmStorageService + PDP Contracts |
| **Payments** | Filecoin Pay (USDC, Stripe bridge) |
| **Retrieval** | FilCDN |
| **Dev Interface** | Synapse SDK (TypeScript) |
| **Backend** | Supabase (user metadata, access rules) |
| **Design** | Figma |
| **Hosting** | Vercel (web), GitHub Actions (CI/CD) |

---

## How we built it

1. **Designed the UX**  — focused on emotional clarity and simplicity.
2. **Set up the React Native + Next.js monorepo** with shared components.
3. **Integrated Synapse SDK** for unified Filecoin Onchain Cloud access.
4. **Built upload flow**:  
   - File → encrypt (Lit) → store (WarmStorage + PDP) → index (Supabase)
5. **Added Filecoin Pay** for $1/month subscriptions (USDC + Stripe).
6. **Implemented “Verify Now”** button for instant PDP proof.
7. **Built “Memory Will”** with time-locked decryption via Lit.
8. **Connected FilCDN** for fast playback.
9. **Tested on FVM testnet** with real PDP verification cycles.
10. **Recorded demo video** and prepared submission.


---

## What we learned

- **Users don’t care about blockchain** — they care about **trust, permanence, and ease**.
- **Filecoin Onchain Cloud is powerful** — but needs better UX docs for real-world apps.
- **PDP is a game-changer** for proving data integrity — especially for activists and journalists.
- **Synapse SDK drastically reduces dev time** — one SDK for storage, pay, retrieve.
- **Legacy is a hard sell** — but **“leave a voice for your kid”** is emotional gold.
- **Sustainability is possible** — $1/month adds up at scale.

---

## What's next for Memory Bank

### 🚀 Short-Term (Wave 2–4)
- Launch beta with 500 users
- Add **Ukrainian War Diaries** public archive
- Integrate with **Will.com** for digital wills
- Optimize PDP batching for cost
- Improve FilCDN caching strategy

### 🌍 Mid-Term
- Partner with **human rights orgs** (Amnesty, Witness)
- Add **SMS/USSD fallback** for low-connectivity users
- Launch **“Verify Your Protest”** campaign
- Support **Swahili, Arabic, Spanish**

### 🏗 Long-Term
- Become the **default digital legacy layer** for Web3
- Enable **AI summaries** of life stories (privacy-preserving)
- Build **Memory Bank API** for hospitals, schools, NGOs
- Token-gate **premium features** (governance, curation)

> We’re not just storing data.  
> We’re preserving **human truth**.