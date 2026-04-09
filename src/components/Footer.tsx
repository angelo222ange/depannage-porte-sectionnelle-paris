"use client";

export default function Footer() {
  const companyLinks = [
    { label: "Accueil", href: "/" },
    { label: "Nos services", href: "/installation-porte-sectionnelle-paris" },
    { label: "Zones d'intervention", href: "/zones" },
    { label: "Contact", href: "/contact" },
  ];
  const serviceLinks = [
    { label: "Installation", href: "/installation-porte-sectionnelle-paris" },
    { label: "Dépannage", href: "/depannage-porte-sectionnelle-paris" },
    { label: "Réparation", href: "/reparation-porte-sectionnelle-paris" },
    { label: "Entretien", href: "/entretien-porte-sectionnelle-paris" },
    { label: "Motorisation", href: "/motorisation-porte-sectionnelle-paris" },
    { label: "Porte de garage", href: "/porte-de-garage-paris" },
    { label: "Porte basculante", href: "/porte-de-garage-basculante-paris" },
    { label: "Porte enroulable", href: "/porte-de-garage-enroulable-paris" },
    { label: "Porte souple rapide", href: "/porte-souple-rapide-paris" },
    { label: "Rideau métallique", href: "/rideau-metallique-industriel-paris" },
  ];
  const quickLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/politique-de-confidentialite" },
    { label: "Plan du site", href: "/plan-du-site" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#000000",
        minHeight: "718px",
      }}
    >
      <div
        style={{
          maxWidth: "1408px",
          margin: "0 auto",
          backgroundColor: "#000000",
          borderRadius: "16px",
        }}
      >
        <div
          data-footer-padding
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            padding: "120px 30px 40px",
          }}
        >
          {/* Top row: logo + nav */}
          <div
            data-footer-top
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "60px",
              paddingBottom: "40px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Logo */}
            <a
              href="/"
              style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
            >
              <img
                src="/favicon.png"
                alt="Porte Sectionnelle Paris - logo"
                title="Porte Sectionnelle Paris"
                width={44}
                height={44}
                loading="lazy"
                decoding="async"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                Paris
              </span>
            </a>

            {/* Nav links */}
            <nav data-footer-nav style={{ display: "flex", gap: "32px" }}>
              {[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/installation-porte-sectionnelle-paris" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Phone CTA instead of social icons */}
            <a
              href="tel:0972124141"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#FF6333",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#FF6333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              09 72 12 41 41
            </a>
          </div>

          {/* 4 Column Grid */}
          <div
            data-footer-grid
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
              gap: "48px",
              marginBottom: "60px",
            }}
          >
            {/* Company description */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "20px",
                }}
              >
                Porte Sectionnelle Paris
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: "24px",
                }}
              >
                Spécialiste de la <strong>porte sectionnelle à Paris</strong> depuis plus de <strong>25 ans</strong>. Installation, dépannage, réparation et motorisation pour particuliers et professionnels.
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: "12px", marginTop: "24px", marginBottom: "24px" }}>
                <a
                  href="https://www.linkedin.com/posts/depannage-rideau-metallique-drm_notre-nouvelle-article-activity-7447601748921409536-XRRf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://pin.it/3hj4JOPmS"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.79-.167-2.005.035-2.868.181-.78 1.172-4.966 1.172-4.966s-.299-.598-.299-1.482c0-1.388.805-2.425 1.808-2.425.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.134-4.515 4.34 0 .859.331 1.781.745 2.282a.3.3 0 01.069.288c-.076.316-.245.995-.278 1.134-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.472 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#FFFFFF"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/photo?fbid=122131503699046377&set=a.122096514057046377"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* CTA buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <a
                  href="tel:0972124141"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "50px",
                    padding: "12px 20px",
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  09 72 12 41 41
                </a>
                <button
                  onClick={() => {
                    const modal = document.querySelector("[data-callback-modal]") as HTMLElement;
                    if (modal) modal.click();
                    else window.dispatchEvent(new CustomEvent("open-callback"));
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "50px",
                    padding: "12px 20px",
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 2a8.38 8.38 0 015.5 2.1M14.5 6A4.26 4.26 0 0118 7.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {"\u00CAtre rappel\u00E9"}
                </button>
                <a
                  href="/contact/"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "50px",
                    padding: "12px 20px",
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Demander un devis
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "20px",
                }}
              >
                Navigation
              </h3>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "20px",
                }}
              >
                Services
              </h3>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "20px",
                }}
              >
                Contact
              </h3>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <li
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  Paris et Ile-de-France
                </li>
                <li>
                  <a
                    href="tel:0972124141"
                    style={{
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                    }}
                  >
                    09 72 12 41 41
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@porte-sectionnelle-paris.fr"
                    style={{
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                    }}
                  >
                    contact@porte-sectionnelle-paris.fr
                  </a>
                </li>
                <li
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  24h/24, 7j/7
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            data-footer-bottom
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              &copy; 2026 Porte Sectionnelle Paris. Tous droits réservés.
            </span>
            <div data-footer-bottom-links style={{ display: "flex", gap: "24px" }}>
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
