"use client";

import { useState } from "react";

interface CTAFormProps {
  heading?: string;
  subtitle?: string;
}

export default function CTAForm({ heading, subtitle }: CTAFormProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("https://lioai.app.n8n.cloud/webhook/drm-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "depannage-porte-sectionnelle-paris.fr",
          type: "devis",
          nom: formData.name,
          email: formData.email,
          telephone: formData.phone,
          message: formData.message,
        }),
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      data-section-lg
      style={{
        padding: "120px 30px 100px",
        backgroundColor: "#F6F7F9",
        minHeight: "733px",
      }}
    >
      <div
        data-cta-form-container
        style={{
          maxWidth: "1312px",
          margin: "0 auto",
          display: "flex",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* LEFT — Content */}
        <div style={{ flex: "1 1 50%" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#E63946",
              textTransform: "uppercase" as const,
              letterSpacing: "1.5px",
                            display: "block",
              marginBottom: "16px",
            }}
          >
            Contactez-nous
          </span>
          <h2
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "62px",
                            marginBottom: "20px",
            }}
          >
            {heading || <>Besoin d&apos;un expert en <strong>porte sectionnelle</strong> a <strong>Paris</strong> ?</>}
          </h2>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#3B3B3B",
              lineHeight: "26px",
              marginBottom: "40px",
              maxWidth: "460px",
            }}
          >
            {subtitle || "Contactez notre \u00E9quipe pour un devis gratuit. Nous \u00E9valuons vos besoins et vous fournissons un devis transparent et sans engagement."}
          </p>

          {/* Contact info */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#FFEEF0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.5 14.19V16.44C17.5 16.98 17.08 17.43 16.54 17.475C16.12 17.505 15.775 17.52 15.5 17.52C8.045 17.52 2 11.475 2 4.02C2 3.745 2.015 3.4 2.045 2.98C2.09 2.44 2.54 2.02 3.08 2.02H5.33C5.595 2.02 5.82 2.215 5.855 2.48C5.885 2.715 5.915 2.905 5.945 3.055C6.18 4.27 6.61 5.415 7.21 6.46L6.025 7.25C6.025 7.25 6.62 8.85 8.64 10.87C10.66 12.89 12.27 13.495 12.27 13.495L13.055 12.305C14.105 12.905 15.25 13.34 16.465 13.575C16.615 13.605 16.805 13.635 17.04 13.665C17.305 13.7 17.5 13.925 17.5 14.19Z"
                    stroke="#E63946"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#3B3B3B",
                                        display: "block",
                  }}
                >
                  Téléphone
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000000",
                                      }}
                >
                  09 72 12 41 41
                </span>
              </div>
            </div>

            <div
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#FFEEF0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2.5 6.667L8.832 10.8867C9.5265 11.3295 10.4735 11.3295 11.168 10.8867L17.5 6.667M4.167 15.833H15.833C16.754 15.833 17.5 15.087 17.5 14.167V5.833C17.5 4.913 16.754 4.167 15.833 4.167H4.167C3.247 4.167 2.5 4.913 2.5 5.833V14.167C2.5 15.087 3.247 15.833 4.167 15.833Z"
                    stroke="#E63946"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#3B3B3B",
                                        display: "block",
                  }}
                >
                  Email
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000000",
                                      }}
                >
                  contact@depannage-porte-sectionnelle-paris.fr
                </span>
              </div>
            </div>

            <div
              style={{ display: "flex", alignItems: "center", gap: "12px" }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#FFEEF0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 10.833C11.3807 10.833 12.5 9.714 12.5 8.333C12.5 6.953 11.3807 5.833 10 5.833C8.6193 5.833 7.5 6.953 7.5 8.333C7.5 9.714 8.6193 10.833 10 10.833Z"
                    stroke="#E63946"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 18.333C10 18.333 16.667 13.333 16.667 8.333C16.667 4.651 13.682 1.667 10 1.667C6.318 1.667 3.333 4.651 3.333 8.333C3.333 13.333 10 18.333 10 18.333Z"
                    stroke="#E63946"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#3B3B3B",
                                        display: "block",
                  }}
                >
                  Zone d&apos;intervention
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000000",
                                      }}
                >
                  Paris &amp; Ile-de-France
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div style={{ flex: "1 1 50%" }}>
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "32px",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "#E8F5E9", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M7 14L12 19L21 9" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#000", marginBottom: "8px" }}>Demande envoyee !</h3>
                <p style={{ fontSize: "15px", color: "#666", lineHeight: "24px" }}>Nous vous recontacterons dans les plus brefs delais.</p>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "#000000",
                    marginBottom: "24px",
                  }}
                >
                  Devis Gratuit
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nom complet"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1px solid #E5E7EB",
                      fontSize: "15px",
                      outline: "none",
                      backgroundColor: "#F9FAFB",
                      color: "#000000",
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Adresse email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1px solid #E5E7EB",
                      fontSize: "15px",
                      outline: "none",
                      backgroundColor: "#F9FAFB",
                      color: "#000000",
                    }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={"Num\u00E9ro de t\u00E9l\u00E9phone"}
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1px solid #E5E7EB",
                      fontSize: "15px",
                      outline: "none",
                      backgroundColor: "#F9FAFB",
                      color: "#000000",
                    }}
                  />
                  <textarea
                    name="message"
                    placeholder={"D\u00E9crivez votre besoin..."}
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1px solid #E5E7EB",
                      fontSize: "15px",
                      outline: "none",
                      backgroundColor: "#F9FAFB",
                      resize: "vertical",
                      color: "#000000",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    style={{
                      width: "100%",
                      padding: "16px 24px",
                      borderRadius: "50px",
                      backgroundColor: "#E63946",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: 600,
                      border: "none",
                      cursor: sending ? "wait" : "pointer",
                      opacity: sending ? 0.7 : 1,
                      textTransform: "uppercase" as const,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {sending ? "Envoi en cours..." : "Envoyer ma demande"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
