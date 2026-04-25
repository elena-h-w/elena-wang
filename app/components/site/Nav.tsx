"use client";

import { useState } from "react";
import { nav } from "../../../lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ borderBottom: "1px solid var(--rule)" }}>
      <div
        className="section-pad"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 56px",
          maxWidth: 1320,
          margin: "0 auto",
        }}
      >
        {/* Wordmark */}
        <a
          href="/"
          className="link-ink"
          style={{
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          Elena Wang
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex" style={{ gap: 28 }}>
          {nav.map((n) => (
            <a
              key={n}
              href={`/#${n.toLowerCase()}`}
              className="link-soft"
              style={{ fontSize: 13, fontWeight: 500 }}
            >
              {n}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col justify-center gap-[5px] p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            style={{ display: "block", height: 2, width: 20, background: "var(--ink-soft)", transition: "transform .2s, opacity .2s", transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
          />
          <span
            style={{ display: "block", height: 2, width: 20, background: "var(--ink-soft)", transition: "opacity .2s", opacity: open ? 0 : 1 }}
          />
          <span
            style={{ display: "block", height: 2, width: 20, background: "var(--ink-soft)", transition: "transform .2s", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          aria-label="Primary mobile"
          className="flex md:hidden flex-col"
          style={{
            borderTop: "1px solid var(--rule)",
            padding: "20px 56px",
            gap: 20,
          }}
        >
          {nav.map((n) => (
            <a
              key={n}
              href={`/#${n.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="link-soft"
              style={{ fontSize: 15, fontWeight: 500 }}
            >
              {n}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
