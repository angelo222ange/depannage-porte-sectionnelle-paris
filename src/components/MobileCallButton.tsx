"use client";

export default function MobileCallButton() {
  return (
    <>
      <style>{`
        .mobile-call-btn {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-call-btn {
            display: flex !important;
          }
        }
      `}</style>
      <a
        href="tel:0972124141"
        className="mobile-call-btn"
        style={{
          position: "fixed",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9998,
          display: "none",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#FF6333",
          color: "#FFFFFF",
          fontFamily: "var(--font-figtree), sans-serif",
          fontSize: "16px",
          fontWeight: 600,
          textDecoration: "none",
          padding: "12px 28px",
          borderRadius: "50px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
          border: "none",
          cursor: "pointer",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
        Appeler
      </a>
    </>
  );
}
