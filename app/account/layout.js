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
        className="lg1000:hidden fixed top-[154px] md724:top-[110px] left-4 z-50 bg-accent-500 px-4 py-2 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      >
        {open ? <span>Hide Sidebar</span> : <span>Show Sidebar</span>}
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
            bg-primary-950 h-full transition-all duration-300
            lg1000:translate-x-0 lg1000:static lg1000:w-auto
            fixed top-[208px] md724:top-[164px] left-0 z-40 w-64
            ${open ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <SideNavigation setShowSidebar={setOpen} />
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
