'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import { navigation } from '../config/navigation';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const active = navigation.find((item) => item.href === pathname);

  return (
    <div className="flex min-h-screen bg-canvas text-ink">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-10 border-b border-line bg-canvas/90 backdrop-blur">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="min-w-0">
              <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
                Lab / {active?.label ?? 'Eksperimen'}
              </p>
              <h1 className="truncate text-lg font-semibold">
                {active?.description ?? 'Eksplorasi anime.js'}
              </h1>
            </div>
         
          </div>
        </header>
        <main className="flex-1 px-6 py-8">
          <div className="mx-auto w-full max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
