# 🏦 Memory Bank: Your Digital Legacy, Verified & Forever

> **Permanent, censorship-resistant storage for your photos, videos, voice notes, and stories — with PDP verification, heir access, and one-tap proof. Built on Filecoin Onchain Cloud.**

[![Demo Video](https://img.youtube.com/vi/memorybank-demo/0.jpg)](https://youtu.be/memorybank-demo)  
▶️ Watch the 2-minute demo

---

## 📌 Overview

Memory Bank is a global archive for personal and collective history. It combines:
- **SnapTrust Mode**: One-tap "Verify Now" to timestamp and prove authenticity
- **Memory Will**: Automatically share access with heirs or the public
- **Time Capsule**: Unlock content in the future
- **FilCDN**: Fast playback
- **Filecoin Pay**: $1/month subscription (USDC or card)
- **Synapse SDK**: Unified interface

No wallet. No seed phrase. Just **phone or email login**.

> 💬 *"Don’t die with your stories."*

---

## 🚀 Features

- ✅ **PDP-Verified Storage** – Tamper-evident, stored on Filecoin
- ✅ **One-Tap Verification** – Prove your moment is real
- ✅ **Heir Access** – Share with family after death
- ✅ **Time Capsule** – Unlock in 2030 or on a life event
- ✅ **Public Archive** – Contribute to historical collections
- ✅ **Web3-Abstracted** – No crypto knowledge needed

---

## 🛠 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React Native (iOS/Android), Next.js (Web) |
| Auth | Web3Auth (email/phone login) |
| Encryption | Lit Protocol (client-side) |
| Storage | FilecoinWarmStorageService + PDP |
| Payments | Filecoin Pay (USDC, Stripe bridge) |
| Retrieval | FilCDN |
| Dev Interface | Synapse SDK |
| Backend | Supabase (user metadata) |

---
## Repo Structure

memory-bank/
├── README.md
├── WAVE1.md
├── /docs
│   ├── architecture.png
│   ├── revenue-model.xlsx
│   └── MemoryBank-MemoryWill-Flow.fig
├── /src
├── /mobile
└── .env.example

---

## 📦 Installation & Setup

### Prerequisites
- Node.js v18+
- npm or yarn
- Filecoin FVM Testnet access
- Synapse SDK API key (get from [Synapse Dashboard](https://synapse.filecoin.io))

### Clone & Install
```bash
git clone https://github.com/memory-bank/memory-bank.git
cd memory-bank
npm install

Environment Variables

Create .env:
env
NEXT_PUBLIC_SYNAPSE_API_KEY=your_api_key
NEXT_PUBLIC_FILECOIN_NETWORK=testnet
LIT_CLIENT_KEY=your_lit_key
STRIPE_PUBLIC_KEY=pk_test_...
Run Locally
bash
npm run dev
# Open http://localhost:3000
Build Mobile App
bash
cd mobile
npx react-native run-android
# or
npx react-native run-ios
🧩 Filecoin Onchain Cloud Integration
Service	Usage
Synapse SDK	import { upload, pay, retrieve } from '@filecoin/synapse'
FilecoinWarmStorageService	await synapse.storeWithPDP(file)
Filecoin Pay	await synapse.pay({ amount: 1, currency: 'USDC' })
FilCDN	const url = await synapse.getCIDUrl(cid)
PDP Contracts	Auto-verified monthly via cron job

See /src/lib/foc.js for full integration.
📎 Project Structure
/memory-bank ├── /src │ ├── /components # UI │ ├── /lib # FOC integration │ ├── /pages # Next.js routes │ └── /utils # Helpers ├── /docs │ ├── architecture.png │ └── revenue-model.xlsx ├── /mobile # React Native app └── README.md 