import { ImageResponse } from "next/og";
import { profile, siteHost } from "@/data/contact";
import { shippedCount } from "@/data/projects";
import { services, type ServiceIcon } from "@/data/services";
import { Icon, Monogram, colors, fontsPromise } from "@/lib/brand";

// One design in three shapes: square for WhatsApp chats, 9:16 for WhatsApp
// Status, and 1.91:1 for the link preview of /what-i-build.
const formats = {
  square: {
    width: 1080,
    height: 1080,
    pad: 72,
    cols: 2,
    headline: 60,
    stats: 22,
    tileTitle: 28,
    tileBlurb: 0,
    tileMeta: 20,
    iconBox: 56,
    gap: 18,
    cta: 26,
  },
  story: {
    width: 1080,
    height: 1920,
    pad: 88,
    cols: 1,
    headline: 72,
    stats: 25,
    tileTitle: 34,
    tileBlurb: 24,
    tileMeta: 22,
    iconBox: 76,
    gap: 20,
    cta: 30,
  },
  preview: {
    width: 1200,
    height: 630,
    pad: 52,
    cols: 3,
    headline: 40,
    stats: 18,
    tileTitle: 22,
    tileBlurb: 0,
    tileMeta: 16,
    iconBox: 44,
    gap: 14,
    cta: 20,
  },
};

export type ProductCardFormat = keyof typeof formats;

export const productCardSize = (format: ProductCardFormat) => ({
  width: formats[format].width,
  height: formats[format].height,
});

export const productCardAlt = `What ${profile.name} builds: ${services
  .map((service) => service.title)
  .join(", ")}`;

const icons: Record<ServiceIcon, React.ReactElement[]> = {
  layers: [
    <path key="0" d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />,
    <path key="1" d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />,
    <path key="2" d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />,
  ],
  sparkles: [
    <path key="0" d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />,
    <path key="1" d="M19 3v4" />,
    <path key="2" d="M21 5h-4" />,
    <path key="3" d="M5 17v4" />,
    <path key="4" d="M7 19H3" />,
  ],
  wallet: [
    <rect key="0" x="2" y="5" width="20" height="14" rx="2" />,
    <path key="1" d="M2 10h20" />,
    <path key="2" d="M6 15h4" />,
  ],
  message: [
    <path key="0" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
    <path key="1" d="M8 12h.01" />,
    <path key="2" d="M12 12h.01" />,
    <path key="3" d="M16 12h.01" />,
  ],
  layout: [
    <rect key="0" x="3" y="3" width="18" height="18" rx="2" />,
    <path key="1" d="M3 9h18" />,
    <path key="2" d="M9 21V9" />,
  ],
  chart: [
    <path key="0" d="M3 3v18h18" />,
    <path key="1" d="M18 17V9" />,
    <path key="2" d="M13 17V5" />,
    <path key="3" d="M8 17v-3" />,
  ],
};

function chunk<T>(items: T[], size: number) {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
  return rows;
}

function ProductCard({ format }: { format: ProductCardFormat }) {
  const f = formats[format];
  const stats = [
    `${shippedCount} products shipped`,
    "Next.js",
    "PostgreSQL",
    "AI agents",
    "Paystack & Stripe",
  ];

  return (
    <div
      style={{
        width: f.width,
        height: f.height,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        padding: f.pad,
        backgroundColor: colors.background,
        backgroundImage: `radial-gradient(circle at 0% 0%, ${colors.accent}50, transparent 50%), radial-gradient(circle at 100% 100%, ${colors.accent2}38, transparent 50%)`,
        fontFamily: "Geist",
        color: colors.foreground,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: f.width,
          height: f.gap * 0.45,
          backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.accent2})`,
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: f.gap }}>
        <Monogram size={f.iconBox} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: f.tileTitle, fontWeight: 600 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: f.tileMeta, color: colors.muted }}>
            {profile.role} &amp; {profile.roleSecondary}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: f.gap * 2.2,
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Geist Mono",
            fontSize: f.stats * 0.85,
            letterSpacing: f.stats * 0.15,
            color: colors.accent2,
          }}
        >
          WHAT I BUILD
        </div>
        <div
          style={{
            display: "flex",
            marginTop: f.gap * 0.6,
            fontSize: f.headline,
            fontWeight: 600,
            letterSpacing: f.headline * -0.02,
            lineHeight: 1.08,
          }}
        >
          Web products that ship, from spec to production.
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: f.gap,
            fontSize: f.stats,
            color: colors.muted,
          }}
        >
          {stats.join("  ·  ")}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: f.gap,
          margin: `${f.gap * 2}px 0`,
        }}
      >
        {chunk(services, f.cols).map((row) => (
          <div
            key={row[0].title}
            style={{ display: "flex", flexGrow: 1, gap: f.gap }}
          >
            {row.map((service) => (
              <div
                key={service.title}
                style={{
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  gap: f.gap,
                  padding: f.gap * 1.2,
                  borderRadius: f.gap,
                  border: `1px solid ${colors.border}`,
                  backgroundColor: `${colors.surface}cc`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    width: f.iconBox,
                    height: f.iconBox,
                    borderRadius: f.iconBox * 0.28,
                    backgroundColor: `${colors.accent2}1f`,
                  }}
                >
                  <Icon size={f.iconBox * 0.5}>{icons[service.icon]}</Icon>
                </div>
                <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      fontSize: f.tileTitle,
                      fontWeight: 600,
                      lineHeight: 1.15,
                    }}
                  >
                    {service.title}
                  </div>
                  {f.tileBlurb > 0 && (
                    <div
                      style={{
                        display: "flex",
                        marginTop: f.gap * 0.35,
                        fontSize: f.tileBlurb,
                        lineHeight: 1.3,
                        color: colors.soft,
                      }}
                    >
                      {service.blurb}
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      marginTop: f.gap * 0.35,
                      fontSize: f.tileMeta,
                      color: colors.muted,
                    }}
                  >
                    {service.examples.join(" · ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          padding: 2,
          borderRadius: 999,
          backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.accent2})`,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            padding: `${f.cta * 0.75}px ${f.cta * 1.2}px`,
            borderRadius: 999,
            backgroundColor: colors.background,
            fontSize: f.cta,
          }}
        >
          <div style={{ display: "flex", fontWeight: 600 }}>See the work</div>
          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: f.cta * 0.9,
              color: colors.accent2,
            }}
          >
            {siteHost} →
          </div>
        </div>
      </div>
    </div>
  );
}

export async function renderProductCard(format: ProductCardFormat) {
  return new ImageResponse(<ProductCard format={format} />, {
    ...productCardSize(format),
    fonts: await fontsPromise,
  });
}
