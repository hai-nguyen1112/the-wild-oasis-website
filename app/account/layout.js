'use client';

import { useState } from 'react';
import SideNavigation from '@/app/_components/SideNavigation';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-full">
      {/* Toggle Button (only shows at <=1000px) */}
      <button
        onClick={() => setOpen(!open)}
        className="lg1000:hidden fixed top-[110px] left-4 z-50 bg-primary-800 text-white p-2 rounded-md"
      >
        {open ? <span>Collapse Sidebar</span> : <span>Expand Sidebar</span>}
      </button>

      <div
        className={`
          grid h-full gap-12 transition-all
          lg1000:grid-cols-[16rem_1fr]  /* Normal sidebar */
          grid-cols-1                  /* Mobile default (sidebar hidden) */
        `}
      >
        {/* Sidebar */}
        <aside
          className={`
            bg-primary-900 h-full transition-all duration-300
            lg1000:translate-x-0 lg1000:static lg1000:w-auto
            fixed top-[164px] left-0 z-40 w-64
            ${open ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <SideNavigation />
        </aside>

        {/* Page content */}
        <main className="py-1">{children}</main>
      </div>

      {/* Optional overlay when sidebar open on mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg1000:hidden fixed inset-0 bg-black/40 z-30"
        />
      )}
    </div>
  );
}
