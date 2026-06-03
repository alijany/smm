"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--slate-50)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-dana), system-ui, sans-serif",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(252,66,88,0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 520 }}>
        {/* Logo mark */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <svg width={52} height={52} viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <rect x="0.5" y="0.5" width="35" height="35" rx="10" fill="#FC4258" />
            <rect x="0.5" y="0.5" width="35" height="35" rx="10" stroke="#E0394D" strokeOpacity="0.4" />
            <rect x="8" y="20" width="4" height="8" rx="1" fill="#fff" opacity="0.7" />
            <rect x="14" y="16" width="4" height="12" rx="1" fill="#fff" opacity="0.85" />
            <rect x="20" y="11" width="4" height="17" rx="1" fill="#fff" />
            <path d="M9 14L16 9L23 5.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 5L23 5.5L22.5 9.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* 404 */}
        <div
          style={{
            fontSize: "clamp(80px, 18vw, 140px)",
            fontWeight: 900,
            color: "var(--rose-500)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          ۴۰۴
        </div>

        <h1 style={{ margin: "0 0 12px", fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 800, color: "var(--slate-800)" }}>
          صفحه مورد نظر پیدا نشد
        </h1>
        <p style={{ margin: "0 0 36px", fontSize: 16, color: "var(--slate-600)", lineHeight: 1.75 }}>
          به نظر می‌رسد این صفحه وجود ندارد یا جابجا شده است.<br />برگردید به صفحه اصلی یا با ما تماس بگیرید.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/">
            <button
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 32px", borderRadius: 12,
                background: "var(--rose-500)", color: "#fff",
                fontSize: 15, fontWeight: 700, border: "none",
                cursor: "pointer", fontFamily: "inherit",
                transition: "background .15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--rose-600)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--rose-500)")}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              بازگشت به صفحه اصلی
            </button>
          </Link>
          <Link href="/#lead">
            <button
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", borderRadius: 12,
                background: "transparent", color: "var(--slate-700)",
                fontSize: 15, fontWeight: 600,
                border: "1px solid var(--slate-300)",
                cursor: "pointer", fontFamily: "inherit",
                transition: "background .15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.03)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              تماس با ما
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
