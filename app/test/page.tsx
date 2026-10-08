'use client';

import { useRef, useState } from 'react';
import { animate } from 'animejs';

export default function Page(){
    return(
        <div className="flex flex-col gap-4">
            <section className="rounded-xl border border-line bg-surface p-6 font-medium">
                <p className='text-[11px] uppercase font-medium text-muted tracking-[0.16em]'>Testimuani</p>
            </section>
        </div>
    )
}