export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt =
  "Emo Onerhime — Full-Stack Product Engineer & AI Agent Developer";

const colors = {
  background: "#05050a",
  surface: "#0d0d16",
  foreground: "#f4f4f7",
  muted: "#9797a8",
  border: "rgba(255,255,255,0.12)",
  accent: "#7c5cff",
  accent2: "#22d3c9",
};

const stats = [
  { value: "6", label: "Products shipped" },
  { value: "5.5+", label: "Years engineering" },
  { value: "PSM I", label: "Certified Scrum Master" },
];

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: colors.background,
        backgroundImage: `radial-gradient(circle at 12% 8%, ${colors.accent}4d, transparent 45%), radial-gradient(circle at 88% 82%, ${colors.accent2}40, transparent 45%)`,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundImage: `linear-gradient(135deg, ${colors.accent}, ${colors.accent2})`,
              color: colors.background,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            EO
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 4,
              color: colors.accent2,
            }}
          >
            EMO ONERHIME
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: colors.muted }}>
          emo-onerhime.vercel.app
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          maxWidth: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.15,
            color: colors.foreground,
          }}
        >
          Full-Stack Product Engineer &amp; AI Agent Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: colors.muted,
            maxWidth: 920,
          }}
        >
          Spec-Driven Development across React, Next.js, Node.js &amp;
          PostgreSQL.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 20,
          borderTop: `1px solid ${colors.border}`,
          paddingTop: 32,
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "18px 28px",
              borderRadius: 16,
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.surface,
              minWidth: 200,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 32,
                fontWeight: 700,
                color: colors.foreground,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 18,
                color: colors.muted,
                marginTop: 4,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
