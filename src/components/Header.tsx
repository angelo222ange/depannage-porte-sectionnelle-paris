"use client";

import { useState, useEffect, useRef } from "react";
import CallbackModal from "./CallbackModal";

const produits = [
  { label: "Porte de garage sectionnelle", href: "/porte-de-garage-paris" },
  { label: "Porte de garage basculante", href: "/porte-de-garage-basculante-paris" },
  { label: "Porte de garage enroulable", href: "/porte-de-garage-enroulable-paris" },
  { label: "Porte sectionnelle industrielle", href: "/porte-sectionnelle-industrielle-paris" },
  { label: "Rideau métallique industriel", href: "/rideau-metallique-industriel-paris" },
  { label: "Porte souple rapide", href: "/porte-souple-rapide-paris" },
];

const services = [
  {
    label: "Installation",
    href: "/installation-porte-sectionnelle-paris",
    image: "/images/portes/reparation-porte-sectionnelle-industrielle-fond.webp",
  },
  {
    label: "Dépannage",
    href: "/depannage-porte-sectionnelle-paris",
    image: "/images/portes/depannage-porte-sectionnelle.webp",
  },
  {
    label: "Réparation",
    href: "/reparation-porte-sectionnelle-paris",
    image: "/images/portes/hero-reparation-porte-sectionnelle.webp",
  },
  {
    label: "Entretien",
    href: "/entretien-porte-sectionnelle-paris",
    image: "/images/portes/entretien-porte-sectionnelle.webp",
  },
  {
    label: "Motorisation",
    href: "/motorisation-porte-sectionnelle-paris",
    image: "/images/portes/moteur-porte-sectionnelle.webp",
  },
];

const featuredZones = [
  { label: "Paris 11eme", href: "/porte-sectionnelle-paris-11", image: "/images/zones/paris-1er.webp" },
  { label: "Paris 15eme", href: "/porte-sectionnelle-paris-15", image: "/images/zones/paris-2eme.webp" },
  { label: "Paris 18eme", href: "/porte-sectionnelle-paris-18", image: "/images/zones/paris-3eme.webp" },
  { label: "Paris 20eme", href: "/porte-sectionnelle-paris-20", image: "/images/zones/paris-4eme.webp" },
  { label: "Boulogne", href: "/porte-sectionnelle-boulogne-billancourt", image: "/images/zones/paris-5eme.webp" },
  { label: "Saint-Denis", href: "/porte-sectionnelle-saint-denis", image: "/images/zones/saint-denis.webp" },
];

const moreZones = [
  { label: "Montreuil", href: "/porte-sectionnelle-montreuil" },
  { label: "Nanterre", href: "/porte-sectionnelle-nanterre" },
  { label: "Creteil", href: "/porte-sectionnelle-creteil" },
  { label: "Versailles", href: "/porte-sectionnelle-versailles" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [showCallback, setShowCallback] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleOpenCallback = () => setShowCallback(true);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-callback", handleOpenCallback);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-callback", handleOpenCallback);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  return (
    <>
      <header
        data-header
        style={{
          height: "100px",
          padding: "28px 30px",
          backgroundColor: scrolled ? "#FFFFFF" : "transparent",
          position: "fixed",
          top: scrolled ? 0 : 52,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            data-header-logo
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <img
              src="/favicon.png"
              alt="Depannage Porte Sectionnelle Paris - logo"
              title="Depannage Porte Sectionnelle Paris"
              width={90}
              height={90}
              decoding="async"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "8px",
                objectFit: "contain",
              }}
            />
            <span
              data-header-logo-text
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#000000",
              }}
            >
              Paris
            </span>
          </a>

          {/* Nav — Desktop only */}
          <nav data-nav-desktop style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {/* Accueil */}
            <a
              href="/"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#000000",
                textDecoration: "none",
              }}
            >
              Accueil
            </a>

            {/* Services dropdown */}
            <div
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
              style={{ position: "relative" }}
            >
              <button
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#000000",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: 0,
                }}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.7, transform: openMenu === "services" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Mega dropdown */}
              {openMenu === "services" && (
                <div
                  data-mega-dropdown
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    paddingTop: "16px",
                    zIndex: 1001,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "16px",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                      padding: "32px",
                      display: "flex",
                      gap: "40px",
                      width: "820px",
                    }}
                  >
                    {/* Left — Produits */}
                    <div style={{ minWidth: "220px" }}>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#999999",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          display: "block",
                          marginBottom: "16px",
                        }}
                      >
                        Produits
                      </span>
                      {produits.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          style={{
                            display: "block",
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "#1A1A1A",
                            textDecoration: "none",
                            padding: "8px 0",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#E63946")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>

                    {/* Right — Services with images */}
                    <div style={{ flex: 1 }}>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#999999",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          display: "block",
                          marginBottom: "16px",
                        }}
                      >
                        Services
                      </span>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                        {services.slice(0, 3).map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            style={{ textDecoration: "none", display: "block" }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "120px",
                                borderRadius: "12px",
                                backgroundImage: `url('${item.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                marginBottom: "10px",
                              }}
                            />
                            <span
                              style={{
                                fontSize: "15px",
                                fontWeight: 600,
                                color: "#1A1A1A",
                                display: "block",
                                marginBottom: "4px",
                              }}
                            >
                              {item.label}
                            </span>
                            <span
                              style={{
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#E63946",
                              }}
                            >
                              En savoir plus
                            </span>
                          </a>
                        ))}
                      </div>
                      {/* Second row: entretien + motorisation */}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "16px" }}>
                        {services.slice(3).map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            style={{ textDecoration: "none", display: "block" }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "120px",
                                borderRadius: "12px",
                                backgroundImage: `url('${item.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                marginBottom: "10px",
                              }}
                            />
                            <span
                              style={{
                                fontSize: "15px",
                                fontWeight: 600,
                                color: "#1A1A1A",
                                display: "block",
                                marginBottom: "4px",
                              }}
                            >
                              {item.label}
                            </span>
                            <span
                              style={{
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#E63946",
                              }}
                            >
                              En savoir plus
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Zones dropdown */}
            <div
              onMouseEnter={() => handleMouseEnter("zones")}
              onMouseLeave={handleMouseLeave}
              style={{ position: "relative" }}
            >
              <button
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#000000",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: 0,
                }}
              >
                Zones
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.7, transform: openMenu === "zones" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {openMenu === "zones" && (
                <div
                  data-mega-dropdown
                  style={{
                    position: "fixed",
                    top: scrolled ? "100px" : "152px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    paddingTop: "16px",
                    zIndex: 1001,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "16px",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                      padding: "28px 32px",
                      display: "flex",
                      gap: "28px",
                      width: "720px",
                    }}
                  >
                    {/* Left — Featured zones with images */}
                    <div style={{ flex: "1 1 55%" }}>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#999999",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          display: "block",
                          marginBottom: "14px",
                        }}
                      >
                        Nos zones
                      </span>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                        {featuredZones.map((zone) => (
                          <a
                            key={zone.href}
                            href={zone.href}
                            style={{ textDecoration: "none", display: "block" }}
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "80px",
                                borderRadius: "10px",
                                backgroundImage: `url('${zone.image}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                                overflow: "hidden",
                              }}
                            >
                              <div style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(transparent 30%, rgba(0,0,0,0.55))",
                              }} />
                              <span style={{
                                position: "absolute",
                                bottom: "5px",
                                left: "7px",
                                fontSize: "11px",
                                fontWeight: 600,
                                color: "#FFFFFF",
                              }}>
                                {zone.label}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Right — More zones */}
                    <div style={{ flex: "1 1 35%", borderLeft: "1px solid #F0F0F0", paddingLeft: "24px" }}>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "#999999",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          display: "block",
                          marginBottom: "12px",
                        }}
                      >
                        Ile-de-France
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        {moreZones.map((zone) => (
                          <a
                            key={zone.href}
                            href={zone.href}
                            style={{
                              display: "block",
                              fontSize: "14px",
                              fontWeight: 500,
                              color: "#1A1A1A",
                              textDecoration: "none",
                              padding: "6px 10px",
                              borderRadius: "8px",
                              transition: "all 0.15s",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#FFEEF0"; e.currentTarget.style.color = "#E63946"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#1A1A1A"; }}
                          >
                            {zone.label}
                          </a>
                        ))}
                      </div>
                      <a
                        href="/zones/"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#E63946",
                          textDecoration: "none",
                          marginTop: "14px",
                          padding: "6px 10px",
                        }}
                      >
                        Voir toutes les zones
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <a
              href="/contact/"
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#000000",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </nav>

          {/* CTA buttons — Desktop only */}
          <div data-cta-desktop style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Etre rappele */}
            <button
              onClick={() => setShowCallback(true)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#1B2A4A",
                padding: "10px 22px",
                borderRadius: "50px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.3px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 2a8.38 8.38 0 015.5 2.1M14.5 6A4.26 4.26 0 0118 7.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {"\u00CAtre rappel\u00E9"}
            </button>

            {/* Appeler */}
            <a
              href="tel:0972124141"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0px",
                backgroundColor: "#FFFFFF",
                padding: "8px 8px 8px 24px",
                borderRadius: "50px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#000000",
                textDecoration: "none",
                letterSpacing: "0.5px",
              }}
            >
              09 72 12 41 41
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  backgroundColor: "#E63946",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "12px",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>

          {/* Hamburger button — Mobile only */}
          <button
            data-hamburger
            onClick={() => setMobileMenuOpen(true)}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label="Ouvrir le menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ══ Mobile Menu Overlay ══ */}
      {mobileMenuOpen && (
        <div data-mobile-menu>
          {/* Header */}
          <div data-mobile-menu-header>
            <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
              <img
                src="/favicon.png"
                alt="Depannage Porte Sectionnelle Paris"
                width={36}
                height={36}
                style={{ width: "36px", height: "36px", borderRadius: "6px", objectFit: "contain" }}
              />
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#000000" }}>Paris</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); setMobileSubmenu(null); }}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                border: "1px solid #E5E7EB",
                backgroundColor: "#FFFFFF",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
              }}
              aria-label="Fermer le menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div data-mobile-menu-body>
            {/* Main links */}
            <div data-mobile-menu-section>
              <a data-mobile-menu-link href="/" onClick={() => setMobileMenuOpen(false)}>Accueil</a>

              {/* Services accordion */}
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === "services" ? null : "services")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "12px 0",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#1A1A1A",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid #F0F0F0",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: mobileSubmenu === "services" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                  <path d="M4 6L8 10L12 6" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileSubmenu === "services" && (
                <div style={{ paddingLeft: "12px", paddingBottom: "8px" }}>
                  <span data-mobile-menu-section-title style={{ marginTop: "12px" }}>Produits</span>
                  {produits.map((item) => (
                    <a key={item.href} data-mobile-menu-link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </a>
                  ))}
                  <span data-mobile-menu-section-title style={{ marginTop: "16px" }}>Services</span>
                  {services.map((item) => (
                    <a key={item.href} data-mobile-menu-link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Zones accordion */}
              <button
                onClick={() => setMobileSubmenu(mobileSubmenu === "zones" ? null : "zones")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "12px 0",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#1A1A1A",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid #F0F0F0",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                Zones
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: mobileSubmenu === "zones" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                  <path d="M4 6L8 10L12 6" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileSubmenu === "zones" && (
                <div style={{ paddingLeft: "12px", paddingBottom: "8px" }}>
                  {featuredZones.map((zone) => (
                    <a key={zone.href} data-mobile-menu-link href={zone.href} onClick={() => setMobileMenuOpen(false)}>
                      {zone.label}
                    </a>
                  ))}
                  {moreZones.map((zone) => (
                    <a key={zone.href} data-mobile-menu-link href={zone.href} onClick={() => setMobileMenuOpen(false)}>
                      {zone.label}
                    </a>
                  ))}
                  <a data-mobile-menu-link href="/zones/" onClick={() => setMobileMenuOpen(false)} style={{ color: "#E63946", fontWeight: 600 }}>
                    Voir toutes les zones
                  </a>
                </div>
              )}

              <a data-mobile-menu-link href="/contact/" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>

            {/* CTA buttons */}
            <div data-mobile-menu-cta>
              <a
                href="tel:0972124141"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  backgroundColor: "#E63946",
                  padding: "14px 24px",
                  borderRadius: "50px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                09 72 12 41 41
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); setTimeout(() => setShowCallback(true), 200); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  backgroundColor: "#1B2A4A",
                  padding: "14px 24px",
                  borderRadius: "50px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  <path d="M14.5 2a8.38 8.38 0 015.5 2.1M14.5 6A4.26 4.26 0 0118 7.5" />
                </svg>
                {"\u00CAtre rappel\u00E9"}
              </button>
              <a
                href="/contact/"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  backgroundColor: "#FFFFFF",
                  padding: "14px 24px",
                  borderRadius: "50px",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000000",
                  textDecoration: "none",
                  border: "1px solid #E5E7EB",
                }}
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Callback Modal */}
      <CallbackModal isOpen={showCallback} onClose={() => setShowCallback(false)} />
    </>
  );
}
