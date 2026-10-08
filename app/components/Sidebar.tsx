'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { animate } from 'animejs';
import { navigation } from '../config/navigation';

const EXPANDED = 260;
const COLLAPSED = 76;

export default function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();
  const asideRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!asideRef.current) return;
    animate(asideRef.current, {
      width: collapsed ? COLLAPSED : EXPANDED,
      duration: 450,
      ease: 'outCubic',
    });
  }, [collapsed]);

  return (
    <aside
      ref={asideRef}
      style={{ width: EXPANDED }}
      className="sticky top-0 flex h-screen shrink-0 flex-col bg-coal text-cream"
    >
      <div
        className={`flex items-center pt-5 pb-4 ${
          collapsed ? 'justify-center px-0' : 'justify-between px-4'
        }`}
      >
        <div
          className={`overflow-hidden transition-opacity duration-200 ${
            collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
          }`}
        >
          <p className="text-[11px] font-medium tracking-[0.18em] text-cream/60 uppercase">
            Journey Motion
          </p>
          <p className="truncate text-sm font-semibold text-cream">
            anime.js lab
          </p>
        </div>
        <button
          onClick={onToggle}
          aria-label={collapsed ? 'Buka sidebar' : 'Tutup sidebar'}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  text-cream transition-colors"
        >
          {collapsed ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5 2.5 9.5 7 5 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M9 2.5 4.5 7 9 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      <nav
        className={`flex flex-1 flex-col gap-1 ${
          collapsed ? 'items-center px-0' : 'px-3'
        }`}
      >
        {navigation.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.description}
              className={`flex items-center rounded-lg text-sm transition-colors ${
                collapsed ? 'h-8 w-8 justify-center px-0' : 'gap-3 px-3 py-1.5'
              } ${
                active
                  ? ' text-cream font-extrabold'
                  : 'text-cream/70  hover:text-cream'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                  active ? 'bg-cream' : 'bg-cream/30'
                }`}
              />
              <span
                className={`truncate transition-opacity duration-200 ${
                  collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
