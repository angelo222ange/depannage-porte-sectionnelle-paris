import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Porte Sectionnelle Paris - Devis Gratuit",
  description:
    "Contactez-nous pour un devis gratuit. Installation, depannage et reparation de portes sectionnelles a Paris. Reponse sous 30 min au 09 72 12 41 41.",
  alternates: { canonical: "https://porte-sectionnelle-paris.fr/contact/" },
};

export default function ContactPage() {
  const infoCards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M22.167 19.833v2.334a1.556 1.556 0 01-1.694 1.556 15.39 15.39 0 01-6.71-2.384 15.167 15.167 0 01-4.666-4.667 15.39 15.39 0 01-2.384-6.734 1.556 1.556 0 011.545-1.694h2.334a1.556 1.556 0 011.556 1.337c.098.742.28 1.47.543 2.17a1.556 1.556 0 01-.35 1.641l-.988.988a12.444 12.444 0 004.667 4.667l.988-.988a1.556 1.556 0 011.64-.35c.7.263 1.43.445 2.171.543a1.556 1.556 0 011.348 1.58z"
            stroke="#FF6333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Telephone",
      value: "09 72 12 41 41",
      subtitle: "Disponible 24h/24, 7j/7",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M4.667 4.667h18.666c1.284 0 2.334 1.05 2.334 2.333v14c0 1.283-1.05 2.333-2.334 2.333H4.667c-1.284 0-2.334-1.05-2.334-2.333V7c0-1.283 1.05-2.333 2.334-2.333z"
            stroke="#FF6333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.667 7L14 15.167 2.333 7"
            stroke="#FF6333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Email",
      value: "contact@porte-sectionnelle-paris.fr",
      subtitle: "Reponse sous 2h",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M24.5 11.667c0 7.777-10.5 14-10.5 14s-10.5-6.223-10.5-14a10.5 10.5 0 0121 0z"
            stroke="#FF6333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="14"
            cy="11.667"
            r="3.5"
            stroke="#FF6333"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Zone d'intervention",
      value: "Paris et Ile-de-France",
      subtitle: "Tous arrondissements",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle
            cx="14"
            cy="14"
            r="10.5"
            stroke="#FF6333"
            strokeWidth="2"
          />
          <path
            d="M14 7v7l4.667 2.333"
            stroke="#FF6333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Horaires",
      value: "24h/24 - 7j/7",
      subtitle: "Intervention en 30 min",
    },
  ];

  return (
    <>
      <Header />
      <main
        style={{
                    backgroundColor: "#F6F7F9",
          paddingTop: "152px",
        }}
      >
        {/* Hero section with background image */}
        <section
          style={{
            maxWidth: "1312px",
            margin: "0 auto 0",
            padding: "0 30px",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              backgroundImage: "url('/images/portes/header-contact-porte-sectionnelle.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              overflow: "hidden",
              minHeight: "340px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 2,
                textAlign: "center",
                padding: "60px 30px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "#FF6333",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 600,
                  padding: "6px 16px",
                  borderRadius: "50px",
                  marginBottom: "20px",
                  textTransform: "uppercase" as const,
                  letterSpacing: "1px",
                }}
              >
                Contactez-nous
              </span>
              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                  marginBottom: "16px",
                }}
              >
                Demandez votre devis gratuit
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                Notre equipe de techniciens specialises en portes sectionnelles
                intervient dans tout Paris en moins de 30 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Info cards */}
        <section
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            padding: "0 30px 60px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {infoCards.map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  textAlign: "center",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: "rgba(255,99,51,0.08)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#999999",
                    marginBottom: "6px",
                                      }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#111111",
                    marginBottom: "4px",
                                      }}
                >
                  {card.value}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#888888",
                                      }}
                >
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Form + Map section */}
        <section
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            padding: "0 30px 100px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "start",
            }}
          >
            {/* Form */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "48px 40px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#111111",
                  marginBottom: "8px",
                                  }}
              >
                Envoyez-nous un message
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "#888888",
                  marginBottom: "32px",
                                  }}
              >
                Remplissez le formulaire ci-dessous et nous vous recontacterons
                dans les plus brefs delais.
              </p>

              <form
                action="https://lioai.app.n8n.cloud/webhook/drm-contact"
                method="POST"
              >
                <input type="hidden" name="site" value="porte-sectionnelle-paris.fr" />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#333333",
                        marginBottom: "8px",
                                              }}
                    >
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
                        border: "1px solid #E0E0E0",
                        fontSize: "15px",
                                                outline: "none",
                        backgroundColor: "#F6F7F9",
                        boxSizing: "border-box" as const,
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#333333",
                        marginBottom: "8px",
                                              }}
                    >
                      Prenom
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      required
                      placeholder="Votre prenom"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: "12px",
                        border: "1px solid #E0E0E0",
                        fontSize: "15px",
                                                outline: "none",
                        backgroundColor: "#F6F7F9",
                        boxSizing: "border-box" as const,
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#333333",
                      marginBottom: "8px",
                                          }}
                  >
                    Telephone
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
                      border: "1px solid #E0E0E0",
                      fontSize: "15px",
                                            outline: "none",
                      backgroundColor: "#F6F7F9",
                      boxSizing: "border-box" as const,
                    }}
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#333333",
                      marginBottom: "8px",
                                          }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="votre@email.com"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1px solid #E0E0E0",
                      fontSize: "15px",
                                            outline: "none",
                      backgroundColor: "#F6F7F9",
                      boxSizing: "border-box" as const,
                    }}
                  />
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#333333",
                      marginBottom: "8px",
                                          }}
                  >
                    Service souhaite
                  </label>
                  <select
                    name="service"
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1px solid #E0E0E0",
                      fontSize: "15px",
                                            outline: "none",
                      backgroundColor: "#F6F7F9",
                      boxSizing: "border-box" as const,
                      cursor: "pointer",
                    }}
                  >
                    <option value="">Choisir un service</option>
                    <option value="installation">Installation porte sectionnelle</option>
                    <option value="depannage">Depannage urgent</option>
                    <option value="reparation">Reparation</option>
                    <option value="motorisation">Motorisation</option>
                    <option value="entretien">Entretien / Maintenance</option>
                    <option value="remplacement">Remplacement</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#333333",
                      marginBottom: "8px",
                                          }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Decrivez votre besoin..."
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      borderRadius: "12px",
                      border: "1px solid #E0E0E0",
                      fontSize: "15px",
                                            outline: "none",
                      backgroundColor: "#F6F7F9",
                      resize: "vertical" as const,
                      boxSizing: "border-box" as const,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "16px",
                    backgroundColor: "#FF6333",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: 600,
                    borderRadius: "12px",
                    border: "none",
                    cursor: "pointer",
                                      }}
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            {/* Right column - CTA + reassurance */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Call CTA */}
              <div
                style={{
                  backgroundColor: "#111111",
                  borderRadius: "16px",
                  padding: "40px",
                  color: "#FFFFFF",
                }}
              >
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "12px",
                                      }}
                >
                  Besoin d'une intervention urgente ?
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    marginBottom: "24px",
                                      }}
                >
                  Nos techniciens specialises en portes sectionnelles sont
                  disponibles 24h/24 pour une intervention rapide a Paris et en
                  Ile-de-France.
                </p>
                <a
                  href="tel:0972124141"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "#FF6333",
                    color: "#FFFFFF",
                    padding: "14px 28px",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: 600,
                    textDecoration: "none",
                                      }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M18 13.22v2.27a1.514 1.514 0 01-1.65 1.51 15 15 0 01-6.53-2.32 14.78 14.78 0 01-4.55-4.55 15 15 0 01-2.32-6.56A1.514 1.514 0 014.46 2h2.27a1.514 1.514 0 011.51 1.3c.1.72.28 1.43.53 2.11a1.514 1.514 0 01-.34 1.6L7.47 7.94a12.12 12.12 0 004.55 4.55l.96-.96a1.514 1.514 0 011.6-.34c.68.25 1.39.43 2.11.53A1.514 1.514 0 0118 13.22z"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  09 72 12 41 41
                </a>
              </div>

              {/* Reassurance items */}
              {[
                {
                  title: "Intervention en 30 minutes",
                  desc: "Nos techniciens sont repartis dans tout Paris pour une intervention ultra-rapide.",
                },
                {
                  title: "Devis gratuit et sans engagement",
                  desc: "Nous etablissons un diagnostic precis et un devis transparent avant toute intervention.",
                },
                {
                  title: "Garantie pieces et main d'oeuvre",
                  desc: "Toutes nos interventions sont garanties. Nous utilisons exclusivement des pieces certifiees.",
                },
                {
                  title: "Plus de 25 ans d'experience",
                  desc: "Une expertise reconnue dans l'installation et la reparation de portes sectionnelles.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "28px 32px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      minWidth: "40px",
                      backgroundColor: "rgba(255,99,51,0.08)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M16.667 5L7.5 14.167 3.333 10"
                        stroke="#FF6333"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#111111",
                        marginBottom: "4px",
                                              }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#888888",
                        lineHeight: 1.5,
                                              }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Google Maps */}
        <section
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            padding: "0 30px 80px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(255,99,51,0.1)",
                color: "#FF6333",
                fontSize: "14px",
                fontWeight: 600,
                padding: "6px 16px",
                borderRadius: "50px",
                marginBottom: "16px",
              }}
            >
              Zone d&apos;intervention
            </span>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#111111",
              }}
            >
              Nous intervenons dans tout Paris
            </h2>
          </div>
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410694685!2d2.2769955!3d48.8588443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1712000000000!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Google Maps - Zone intervention porte sectionnelle Paris"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section
          style={{
            maxWidth: "1312px",
            margin: "0 auto",
            padding: "0 30px 100px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(255,99,51,0.1)",
                color: "#FF6333",
                fontSize: "14px",
                fontWeight: 600,
                padding: "6px 16px",
                borderRadius: "50px",
                marginBottom: "20px",
              }}
            >
              Questions frequentes
            </span>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#111111",
                marginBottom: "16px",
              }}
            >
              Tout savoir avant de nous contacter
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#666666",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Retrouvez les reponses aux questions les plus frequentes de nos clients parisiens concernant nos interventions sur portes sectionnelles.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "880px",
              margin: "0 auto",
            }}
          >
            {[
              {
                question: "Quel est le delai d'intervention pour un depannage de porte sectionnelle a Paris ?",
                answer: "Nos techniciens specialises en portes sectionnelles interviennent dans un delai moyen de 30 minutes sur tout Paris et la petite couronne. Notre equipe est repartie strategiquement dans les differents arrondissements pour garantir une prise en charge ultra-rapide. En cas de panne bloquante ou de probleme de securite, nous priorisons votre intervention pour retablir le fonctionnement de votre porte dans les meilleurs delais.",
              },
              {
                question: "Quelles zones geographiques couvrez-vous pour l'installation et la reparation ?",
                answer: "Nous intervenons dans les 20 arrondissements de Paris ainsi que dans toute l'Ile-de-France : Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Val-d'Oise (95) et Yvelines (78). Que vous soyez a Paris 15e, a Boulogne-Billancourt ou a Saint-Denis, notre equipe se deplace chez vous pour tout type d'intervention sur porte sectionnelle, de l'installation complete au simple reglage.",
              },
              {
                question: "Le devis pour une intervention sur porte sectionnelle est-il gratuit ?",
                answer: "Oui, le devis est entierement gratuit et sans engagement. Nos techniciens se deplacent chez vous pour etablir un diagnostic precis de votre porte sectionnelle et vous remettent un devis detaille sur place. Vous connaissez le cout exact de l'intervention avant toute reparation. Aucun frais cache, aucune surprise : nous nous engageons sur une tarification transparente et competitive.",
              },
              {
                question: "Proposez-vous un service d'urgence 24h/24 pour les portes sectionnelles bloquees ?",
                answer: "Absolument. Notre service d'urgence fonctionne 24 heures sur 24 et 7 jours sur 7, y compris les jours feries. Une porte sectionnelle bloquee en position ouverte represente un risque de securite majeur pour votre local ou votre garage. C'est pourquoi nous maintenons une equipe d'astreinte permanente capable d'intervenir de jour comme de nuit pour securiser votre bien et reparer votre porte dans les plus brefs delais.",
              },
              {
                question: "Quelles marques de portes sectionnelles prenez-vous en charge ?",
                answer: "Nos techniciens sont formes pour intervenir sur toutes les marques de portes sectionnelles du marche : Hormann, Novoferm, Crawford, Tubauto, Came, Nice, Somfy, Marantec, Sommer et bien d'autres. Que votre porte soit a panneaux isoles, vitree, en acier ou en aluminium, nous disposons des pieces detachees et de l'expertise necessaires pour assurer la reparation, l'entretien ou le remplacement de votre equipement.",
              },
            ].map((item) => (
              <details
                key={item.question}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 32px",
                    cursor: "pointer",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#111111",
                    lineHeight: 1.4,
                    listStyle: "none",
                  }}
                >
                  {item.question}
                </summary>
                <div
                  style={{
                    padding: "0 32px 24px",
                    fontSize: "15px",
                    color: "#555555",
                    lineHeight: 1.7,
                    borderTop: "1px solid #F0F0F0",
                    paddingTop: "20px",
                    marginTop: "-4px",
                  }}
                >
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Porte Sectionnelle Paris",
            "telephone": "09 72 12 41 41",
            "email": "contact@porte-sectionnelle-paris.fr",
            "url": "https://porte-sectionnelle-paris.fr/contact/",
            "areaServed": { "@type": "City", "name": "Paris" },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Paris",
              "addressRegion": "Ile-de-France",
              "addressCountry": "FR"
            }
          })
        }}
      />
      <Footer />
    </>
  );
}
