"use client";

import { useAuth } from "@/components/auth/auth.context.provider";
import { brand } from "@/config/brand.config";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import {
  IconArrowLeft,
  IconDashboard,
  IconMenu2,
  IconPhone,
  IconRocket,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { Fragment, useState } from "react";
import { MenuItems } from "./layout.component.menu-items";

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

export function Navbar({ transparent }: { transparent?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <>
      <div style={{ position: "sticky", top: 16, zIndex: 50, padding: "0 16px" }}>
        <nav
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            background: transparent ? "transparent" : "rgba(255,255,255,0.82)",
            backdropFilter: transparent ? "none" : "blur(24px)",
            WebkitBackdropFilter: transparent ? "none" : "blur(24px)",
            boxShadow: transparent ? "none" : "0 25px 50px -12px rgba(0,0,0,0.06)",
            borderRadius: 20,
            border: transparent ? "none" : "2px solid #fff",
            padding: "12px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* Logo lockup */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <MehrLogoMark size={38} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
              <span style={{ fontSize: 17, fontWeight: 800, color: "var(--slate-800)" }}>
                {brand.nameShort}
              </span>
              <span style={{ fontSize: 17, fontWeight: 900, color: "var(--rose-500)", marginTop: 1 }}>
                {brand.namePrimary}
              </span>
            </div>
          </Link>

          {/* Desktop menu */}
          <MenuItems
            className="hidden md:flex gap-7"
            itemClassName="text-sm font-medium text-[#4A546B] hover:text-[#FC4258] transition-colors duration-200"
          />

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <a href={`tel:${brand.contact.phone.primary}`}>
              <button
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 18px", borderRadius: 12,
                  background: "#fff", border: "1px solid var(--rose-500)",
                  color: "var(--rose-500)", fontSize: 14, fontWeight: 700,
                  cursor: "pointer", fontFamily: "inherit", transition: "background .15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--rose-50)")}
                onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
              >
                <span>{brand.contact.phone.display}</span>
                <IconPhone size={16} />
              </button>
            </a>

            {isAuthenticated ? (
              <Link href="/dashboard">
                <button
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "10px 22px", borderRadius: 12,
                    background: "var(--rose-500)", border: "none",
                    color: "#fff", fontSize: 14, fontWeight: 600,
                    cursor: "pointer", fontFamily: "inherit", transition: "background .15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--rose-600)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--rose-500)")}
                >
                  <span>داشبورد</span>
                  <IconDashboard size={16} />
                </button>
              </Link>
            ) : (
              <Link href="/#lead">
                <button
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "10px 22px", borderRadius: 12,
                    background: "var(--rose-500)", border: "none",
                    color: "#fff", fontSize: 14, fontWeight: 600,
                    cursor: "pointer", fontFamily: "inherit", transition: "background .15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--rose-600)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--rose-500)")}
                >
                  مشاوره رایگان
                </button>
              </Link>
            )}
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {isAuthenticated ? (
              <Link href="/dashboard">
                <button
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "8px 14px", borderRadius: 10,
                    background: "var(--rose-500)", border: "none",
                    color: "#fff", fontSize: 13, fontWeight: 600,
                    cursor: "pointer", fontFamily: "inherit",
                  }}
                >
                  <IconDashboard size={15} />
                  <span>داشبورد</span>
                </button>
              </Link>
            ) : (
              <Link href="/login">
                <button
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "8px 14px", borderRadius: 10,
                    background: "var(--rose-500)", border: "none",
                    color: "#fff", fontSize: 13, fontWeight: 600,
                    cursor: "pointer", fontFamily: "inherit",
                  }}
                >
                  <IconRocket size={15} />
                  <span>مشاوره</span>
                </button>
              </Link>
            )}
            <button
              onClick={() => setMobileOpen(true)}
              style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--slate-700)", padding: 4 }}
            >
              <IconMenu2 size={26} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <Transition appear show={mobileOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={() => setMobileOpen(false)}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100"
            leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in duration-200"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel
                  className="pointer-events-auto absolute left-0 inset-y-0 w-4/5 max-w-sm flex flex-col"
                  style={{ background: "#fff", boxShadow: "-8px 0 40px rgba(0,0,0,0.12)" }}
                >
                  {/* Drawer header */}
                  <div
                    className="flex items-center justify-between p-5"
                    style={{ borderBottom: "1px solid var(--slate-100)" }}
                  >
                    <div className="flex items-center gap-2.5">
                      <MehrLogoMark size={34} />
                      <div style={{ lineHeight: 1.1 }}>
                        <div style={{ fontSize: 15, fontWeight: 800, color: "var(--slate-800)" }}>{brand.nameShort}</div>
                        <div style={{ fontSize: 15, fontWeight: 900, color: "var(--rose-500)" }}>{brand.namePrimary}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setMobileOpen(false)}
                      style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--slate-500)" }}
                    >
                      <IconX size={22} />
                    </button>
                  </div>

                  {/* Drawer nav */}
                  <div className="flex-1 overflow-y-auto py-2">
                    <MenuItems
                      className="flex flex-col"
                      itemClassName="px-5 py-3.5 text-base font-medium border-b border-[#EEF0F6] text-[#36425D] hover:text-[#FC4258] hover:bg-[#FFF1F3] transition-colors block"
                      onClose={() => setMobileOpen(false)}
                    />
                  </div>

                  {/* Drawer footer */}
                  <div className="p-5" style={{ borderTop: "1px solid var(--slate-100)" }}>
                    <a
                      href={`tel:${brand.contact.phone.primary}`}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold"
                      style={{ background: "var(--rose-50)", color: "var(--rose-500)", border: "1px solid var(--rose-200)" }}
                    >
                      <IconPhone size={16} />
                      <span>{brand.contact.phone.display}</span>
                      <IconArrowLeft size={14} />
                    </a>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
