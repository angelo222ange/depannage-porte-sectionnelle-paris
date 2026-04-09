"use client";

import { useState } from "react";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallbackModal({ isOpen, onClose }: CallbackModalProps) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = {
      site: "porte-sectionnelle-paris.fr",
      type: "rappel",
      nom: (form.elements.namedItem("nom") as HTMLInputElement).value,
      telephone: (form.elements.namedItem("telephone") as HTMLInputElement).value,
      code_postal: (form.elements.namedItem("code_postal") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await fetch("https://lioai.app.n8n.cloud/webhook/drm-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  const handleClose = () => {
    setSent(false);
    onClose();
  };

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "28px",
          width: "100%",
          maxWidth: "460px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 40px 100px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.05)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            transition: "background 0.2s",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5" stroke="#999" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {sent ? (
          <div style={{ padding: "56px 40px 48px", textAlign: "center" }}>
            <div style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "#F0FDF4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 16L14 22L24 10" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h4 style={{ fontSize: "24px", fontWeight: 700, color: "#111", marginBottom: "10px" }}>
              Demande envoy{"e\u0301"}e !
            </h4>
            <p style={{ fontSize: "15px", color: "#666", lineHeight: "24px", maxWidth: "300px", margin: "0 auto" }}>
              Un technicien vous rappellera dans les plus brefs d{"\u00E9"}lais.
            </p>
            <button
              onClick={handleClose}
              style={{
                marginTop: "28px",
                backgroundColor: "#111",
                color: "#FFF",
                border: "none",
                borderRadius: "14px",
                padding: "14px 40px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Fermer
            </button>
          </div>
        ) : (
          <>
            {/* Top accent bar */}
            <div style={{ height: "4px", background: "linear-gradient(90deg, #FF6333, #FF8F6B)" }} />

            <div style={{ padding: "36px 36px 32px" }}>
              {/* Badge */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#FFF7ED",
                border: "1px solid #FFEDD5",
                borderRadius: "50px",
                padding: "6px 14px",
                marginBottom: "20px",
              }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#22C55E",
                  boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
                }} />
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#9A3412", letterSpacing: "0.3px" }}>
                  Technicien disponible maintenant
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#111",
                lineHeight: "34px",
                marginBottom: "8px",
              }}>
                {"\u00CAtre rappel\u00E9 imm\u00E9diatement"}
              </h3>
              <p style={{
                fontSize: "15px",
                color: "#777",
                lineHeight: "23px",
                marginBottom: "28px",
              }}>
                Renseignez vos coordonn{"\u00E9"}es, un technicien vous contacte sous 15 minutes.
              </p>

              <form onSubmit={handleSubmit}>
                {/* Nom */}
                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
                    Nom
                  </label>
                  <input
                    type="text"
                    name="nom"
                    required
                    placeholder="Votre nom"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #E5E7EB",
                      backgroundColor: "#FAFAFA",
                      fontSize: "15px",
                      color: "#111",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                  />
                </div>

                {/* Telephone */}
                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
                    {"T\u00E9l\u00E9phone"}
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    required
                    placeholder="06 12 34 56 78"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #E5E7EB",
                      backgroundColor: "#FAFAFA",
                      fontSize: "15px",
                      color: "#111",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                  />
                </div>

                {/* Code postal */}
                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
                    Code postal
                  </label>
                  <input
                    type="text"
                    name="code_postal"
                    required
                    placeholder="75011"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #E5E7EB",
                      backgroundColor: "#FAFAFA",
                      fontSize: "15px",
                      color: "#111",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
                    Message <span style={{ fontWeight: 400, color: "#AAA" }}>(optionnel)</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder={"D\u00E9crivez votre besoin..."}
                    rows={2}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1.5px solid #E5E7EB",
                      backgroundColor: "#FAFAFA",
                      fontSize: "15px",
                      color: "#111",
                      outline: "none",
                      resize: "none",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                      transition: "border-color 0.2s",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    width: "100%",
                    padding: "16px 24px",
                    backgroundColor: "#FF6333",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "14px",
                    fontSize: "16px",
                    fontWeight: 700,
                    cursor: sending ? "wait" : "pointer",
                    opacity: sending ? 0.7 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    letterSpacing: "0.3px",
                  }}
                >
                  {sending ? "Envoi en cours..." : "\u00CAtre rappel\u00E9 imm\u00E9diatement"}
                  {!sending && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>

                {/* Trust */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  marginTop: "16px",
                }}>
                  <span style={{ fontSize: "12px", color: "#AAA", display: "flex", alignItems: "center", gap: "4px" }}>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 1L10.2 5.5L15 6.2L11.5 9.6L12.3 14.4L8 12.1L3.7 14.4L4.5 9.6L1 6.2L5.8 5.5L8 1Z" fill="#FBBF24"/></svg>
                    4.9/5 avis clients
                  </span>
                  <span style={{ fontSize: "12px", color: "#CCC" }}>|</span>
                  <span style={{ fontSize: "12px", color: "#AAA" }}>
                    Gratuit, sans engagement
                  </span>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
