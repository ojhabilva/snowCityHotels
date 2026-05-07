"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
    isOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
    isContactOpen: boolean;
    openContact: () => void;
    closeContact: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openMenu = () => { setIsOpen(true); setIsContactOpen(false); };
    const closeMenu = () => setIsOpen(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    const openContact = () => { setIsContactOpen(true); setIsOpen(false); };
    const closeContact = () => setIsContactOpen(false);

    return (
        <MenuContext.Provider value={{ 
            isOpen, openMenu, closeMenu, toggleMenu, 
            isContactOpen, openContact, closeContact 
        }}>
            {children}
        </MenuContext.Provider>
    );
}


export function useMenu() {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
}
