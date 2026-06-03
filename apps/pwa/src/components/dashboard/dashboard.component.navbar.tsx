"use client";

import { brand } from "@/config/brand.config";
import { Button } from "@/ui/atoms";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { IconMenu4, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { Fragment } from "react";
import { SupportModal } from "../modals/modals.component.support";
import { MenuItems } from "./dashboard.component.menu-items";
import { NotificationDropdown } from "./dashboard.component.notification-dropdown";



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

export const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const [supportModalOpen, setSupportModalOpen] = React.useState(false);

    const openSupportModal = () => {
        setSupportModalOpen(true);
    };

    const closeSupportModal = () => {
        setSupportModalOpen(false);
    };


    return (
        <div className="flex items-center justify-between gap-4">
            <Button onClick={() => { setIsOpen(true) }} variant="secondary" className="!px-2 lg:hidden">
                <IconMenu4 size={20} />
            </Button>

            <Link href='/' className="flex items-center gap-2" style={{ textDecoration: "none" }}>
                <MehrLogoMark size={32} />
                <div style={{ lineHeight: 1.1 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "var(--slate-800)" }}>{brand.nameShort}</div>
                  <div style={{ fontSize: 13, fontWeight: 900, color: "var(--rose-500)" }}>{brand.namePrimary}</div>
                </div>
            </Link>

            <div className="flex items-center gap-3">
                <Button onClick={openSupportModal} variant="white">پشتیبانی</Button>
                <NotificationDropdown />
                <SupportModal
                    isOpen={supportModalOpen}
                    onClose={closeSupportModal}
                />
            </div>


            <Transition show={isOpen} as={Fragment}>
                <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 backdrop-blur bg-black/30" />
                    </TransitionChild>

                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="ease-in duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <DialogPanel className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-xl p-6 h-screen flex flex-col">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-2" style={{ textDecoration: "none" }}>
                                    <MehrLogoMark size={28} />
                                    <div style={{ lineHeight: 1.1 }}>
                                      <div style={{ fontSize: 12, fontWeight: 800, color: "var(--slate-800)" }}>{brand.nameShort}</div>
                                      <div style={{ fontSize: 12, fontWeight: 900, color: "var(--rose-500)" }}>{brand.namePrimary}</div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className='p-2'
                                    onClick={() => setIsOpen(false)}
                                >
                                    <IconX className="size-4" />
                                </Button>
                            </div>

                            <MenuItems
                                className="flex flex-col space-y-4 grow overflow-hidden lg:overflow-auto"
                                itemClassName="text-slate-600 hover:text-slate-800 text-lg"
                                onClose={() => setIsOpen(false)}
                            />
                        </DialogPanel>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </div>
    )
}