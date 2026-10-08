# Journey Motion Lab

Self lab [anime.js v4](https://animejs.com/).

## Tech Stack

- Next.js 16.4 (App Router)
- React 19
- Tailwind CSS 4
- `animejs` 4.5.0 (`import { animate } from 'animejs'`)
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Cara Menambah Eksperimen Baru

1. Tambah 1 objek di `app/config/navigation.ts`:

   ```ts
   { href: "/easing", label: "Easing", description: "ease, delay, loop" },
   ```

2. Buat folder `app/easing/page.tsx` untuk route baru.

3. Isi dengan client component, copy pola dari `app/dasar/page.tsx`:

   ```tsx
   'use client';
   import { animate } from 'animejs';

   export default function Page() {
     return <div />;
   }
   ```

## Referensi

- [anime.js Documentation](https://animejs.com/documentation)
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
