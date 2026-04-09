export default function TopBar() {
  return (
    <div
      data-topbar
      style={{
        height: "52px",
        backgroundColor: "#F6F7F9",
        padding: "14px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "80px",
          animation: "marquee 20s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#000000",
                          }}
          >
            Porte Sectionnelle Paris — Intervention en 30 min, 24h/24, 7j/7 — Appelez le 09 72 12 41 41
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
