"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Qui appeler pour un depannage de porte sectionnelle a Paris ?",
      answer:
        "Contactez notre service de <strong>depannage porte sectionnelle</strong> au <strong>09 72 12 41 41</strong>. Nos techniciens interviennent en <strong>30 minutes maximum</strong> dans tous les arrondissements de <strong>Paris</strong> et les villes limitrophes d'Ile-de-France. Notre astreinte est disponible <strong>24h/24</strong> et 7j/7, y compris les dimanches et jours feries.",
    },
    {
      question:
        "Combien coute l'installation d'une porte sectionnelle a Paris ?",
      answer:
        "Le prix d'une <strong>installation de porte sectionnelle a Paris</strong> depend des dimensions, du type de panneaux et de la motorisation. Pour une porte sectionnelle residentielle standard motorisee, comptez <strong>a partir de 1 200 euros</strong> pose incluse. Nous etablissons systematiquement un <strong>devis gratuit</strong> et detaille apres visite technique.",
    },
    {
      question:
        "Quel est le delai d'intervention pour une porte sectionnelle bloquee ?",
      answer:
        "Notre delai d'intervention pour une <strong>porte sectionnelle bloquee a Paris</strong> est de <strong>30 minutes maximum</strong>. Nos techniciens circulent en permanence dans Paris et la petite couronne, equipes d'un stock de <strong>pieces detachees</strong> couvrant les pannes les plus frequentes.",
    },
    {
      question:
        "Quelles marques de portes sectionnelles installez-vous a Paris ?",
      answer:
        "Nous installons et entretenons toutes les marques : <strong>Hormann</strong> (leader europeen), <strong>Novoferm</strong>, Wayne Dalton, Crawford, Marantec pour les portes, ainsi que <strong>Somfy</strong>, Nice, Came, Liftmaster et Sommer pour les motorisations.",
    },
    {
      question:
        "La porte sectionnelle est-elle adaptee aux garages parisiens ?",
      answer:
        "La <strong>porte sectionnelle</strong> est particulierement adaptee aux garages parisiens, souvent caracterises par des espaces restreints. Elle coulisse verticalement puis se loge sous le plafond. Pour les garages avec un plafond tres bas, nous proposons des modeles a <strong>deplacement lateral</strong>.",
    },
    {
      question:
        "Proposez-vous un contrat d'entretien pour porte sectionnelle ?",
      answer:
        "Oui, nous proposons des <strong>contrats d'entretien annuels</strong> comprenant une a deux visites preventives par an : verification de l'equilibrage, <strong>lubrification des rails</strong> et charnieres, controle de la tension des ressorts, test des dispositifs de securite, reglage de la motorisation.",
    },
  ];

  return (
    <section
      data-section-lg
      data-faq
      style={{
        padding: "120px 30px",
        backgroundColor: "#FFFFFF",
        minHeight: "800px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
            FAQ
          </span>
          <h2
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "62px",
                          }}
          >
            FAQ — <strong>Porte sectionnelle</strong> a <strong>Paris</strong>
          </h2>
        </div>

        {/* Accordion */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                backgroundColor: openIndex === i ? "#F6F7F9" : "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #E5E7EB",
                overflow: "hidden",
                transition: "background-color 0.2s ease",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#000000",
                                        paddingRight: "16px",
                  }}
                >
                  {faq.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{
                    flexShrink: 0,
                    transform:
                      openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#3B3B3B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div style={{ padding: "0 24px 20px" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 400,
                      color: "#3B3B3B",
                      lineHeight: "24px",
                                          }}
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
