"use client";

import { brand } from "@/config/brand.config";
import Link from "next/link";
import React from "react";

function MehrLogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="35" height="35" rx="10" fill="#FC4258" />
      <rect x="0.5" y="0.5" width="35" height="35" rx="10" stroke="#E0394D" strokeOpacity="0.4" />
      <rect x="8" y="20" width="4" height="8" rx="1" fill="#fff" opacity="0.7" />
      <rect x="14" y="16" width="4" height="12" rx="1" fill="#fff" opacity="0.85" />
      <rect x="20" y="11" width="4" height="17" rx="1" fill="#fff" />
      <path d="M9 14L16 9L23 5.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 5L23 5.5L22.5 9.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.4a4 4 0 1 1-4.6-4.6" />
      <line x1="17.6" y1="6.4" x2="17.6" y2="6.4" />
    </svg>
  );
}

function TelegramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.5 4.5L2.5 11.5 9 14l2 6.5 3-4 6.5-12z" />
      <path d="M9 14l9-7" />
    </svg>
  );
}

function WhatsappIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.6-4.5A8 8 0 1 1 12 20a8 8 0 0 1-3.8-1L3 21z" />
    </svg>
  );
}

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 5.2 12.82 19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22 6 12 13 2 6" />
    </svg>
  );
}

function LocationIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldCheckIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

const services = [
  "حسابداری", "حسابرسی", "دعاوی مالیاتی", "امور بیمه",
  "تنظیم اظهارنامه", "گزارش معاملات فصلی",
];

const instituteLinks: [string, string][] = [
  ["درباره ما", "#"],
  ["تیم متخصصان", "#team"],
  ["مشتریان", "#trust"],
  ["مقالات مالی", "/blog"],
  ["مشاوره رایگان", "#lead"],
  ["تماس با ما", "#contact"],
];

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        position: "relative",
        background: "var(--slate-800)",
        color: "rgba(255,255,255,0.78)",
        paddingTop: 72,
        paddingBottom: 32,
        overflow: "hidden",
      }}
    >
      {/* Subtle plus pattern overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/plus-pattern.svg')",
          backgroundRepeat: "repeat",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />

      <div className="container-page" style={{ position: "relative" }}>
        {/* 4-column grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.1fr",
            gap: 40,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {/* Brand block */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <MehrLogoMark size={40} />
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>{brand.nameShort}</div>
                <div style={{ fontSize: 17, fontWeight: 900, color: "var(--rose-400)" }}>{brand.namePrimary}</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.85, color: "rgba(255,255,255,0.65)", margin: 0 }}>
              {brand.description}
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {[
                { href: brand.social.instagram, Icon: InstagramIcon },
                { href: brand.social.telegram, Icon: TelegramIcon },
                { href: brand.social.whatsapp, Icon: WhatsappIcon },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Services links */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 1 }}>
              خدمات
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {services.map((s) => (
                <li key={s}>
                  <Link href="/#services" style={{ fontSize: 14, color: "rgba(255,255,255,0.70)" }}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institute links */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 1 }}>
              موسسه
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {instituteLinks.map(([label, href]) => (
                <li key={label}>
                  <Link href={href} style={{ fontSize: 14, color: "rgba(255,255,255,0.70)" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 1 }}>
              تماس مستقیم
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 14, color: "rgba(255,255,255,0.78)" }}>
              <a href={`tel:${brand.contact.phone.primary}`} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <PhoneIcon size={16} />
                <span dir="ltr">{brand.contact.phone.display}</span>
              </a>
              <a href={`mailto:${brand.contact.email}`} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <MailIcon size={16} />
                <span dir="ltr">{brand.contact.email}</span>
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, lineHeight: 1.65 }}>
                <LocationIcon size={16} />
                <span>{brand.contact.address}</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, lineHeight: 1.65 }}>
                <ClockIcon size={16} />
                <span>{brand.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            {brand.copyright}
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <div
              style={{
                padding: "10px 14px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.10)",
                fontSize: 11,
                color: "rgba(255,255,255,0.65)",
                display: "flex", alignItems: "center", gap: 8,
              }}
            >
              <ShieldCheckIcon size={16} />
              <span>شناسه ملی: {brand.nationalId}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom { justify-content: center !important; text-align: center; }
        }
      `}</style>
    </footer>
  );
};
