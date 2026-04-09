"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
}

export default function BlogArticleLayout({ children }: { children: React.ReactNode }) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract H2 headings from the article
    const article = document.querySelector("article");
    if (!article) return;

    const headings = article.querySelectorAll("h2");
    const items: TocItem[] = [];
    headings.forEach((h, i) => {
      const id = `section-${i}`;
      h.id = id;
      items.push({ id, text: h.textContent?.replace(/\s+/g, " ").trim() || "" });
    });
    setTocItems(items);

    // Intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        maxWidth: "1312px",
        margin: "0 auto",
        padding: "48px 30px 80px",
        display: "flex",
        gap: "60px",
        alignItems: "flex-start",
      }}
    >
      {/* Article content — LEFT */}
      <article
        style={{
          flex: "1 1 0%",
          maxWidth: "780px",
          fontSize: "17px",
          fontWeight: 400,
          color: "#1A1A1A",
          lineHeight: "30px",
                  }}
      >
        {children}
      </article>

      {/* Sommaire — RIGHT sticky */}
      {tocItems.length > 0 && (
        <aside
          style={{
            flex: "0 0 280px",
            position: "sticky",
            top: "120px",
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              backgroundColor: "#F6F7F9",
              borderRadius: "16px",
              padding: "24px",
              borderLeft: "3px solid #FF6333",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#000000",
                                marginBottom: "16px",
                textTransform: "uppercase" as const,
                letterSpacing: "1px",
              }}
            >
              Sommaire
            </h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  style={{
                    fontSize: "14px",
                    fontWeight: activeId === item.id ? 600 : 400,
                    color: activeId === item.id ? "#FF6333" : "#3B3B3B",
                                        textDecoration: "none",
                    lineHeight: "20px",
                    padding: "4px 0",
                    transition: "color 0.2s",
                    borderLeft: activeId === item.id ? "2px solid #FF6333" : "2px solid transparent",
                    paddingLeft: "12px",
                  }}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </div>
  );
}
