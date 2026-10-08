export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-xl border border-line bg-surface p-8">
        <h3 className="text-sm font-semibold">Cara menambah tab baru</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-muted">
          <li>
            Tambah 1 objek di{" "}
            <code className="rounded bg-canvas px-1.5 py-0.5 font-mono text-xs text-ink">
              app/config/navigation.ts
            </code>
          </li>
          <li>
            Buat folder{" "}
            <code className="rounded bg-canvas px-1.5 py-0.5 font-mono text-xs text-ink">
              app/contoh/page.tsx
            </code>{" "}
            untuk route baru
          </li>
          <li>
            Isi dengan client component dan{" "}
            <code className="rounded bg-canvas px-1.5 py-0.5 font-mono text-xs text-ink">
              {`import { animate } from 'animejs'`}
            </code>
          </li>
        </ol>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-coal p-4 font-mono text-xs leading-6 text-cream">
{`'use client';
import { animate } from 'animejs';

export default function Page() {
  return <div />;
}`}
        </pre>
      </section>
    </div>
  );
}
