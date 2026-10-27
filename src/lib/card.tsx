import { ImageResponse } from "next/og";
import QRCode from "qrcode";
import { contact, profile, siteHost, siteUrl } from "@/data/contact";
import { Icon, Monogram, colors, fontsPromise } from "@/lib/brand";

// ISO 85 × 55 mm, the common business-card size in Nigeria. The layout is
// drawn on a 300 dpi grid (1004 × 650 px) and scaled for other outputs.
export const cardMm = { width: 85, height: 55 };
const baseDpi = 300;
const mmPerInch = 25.4;

export function cardPx(dpi: number) {
  return {
    width: Math.round((cardMm.width / mmPerInch) * dpi),
    height: Math.round((cardMm.height / mmPerInch) * dpi),
  };
}

export const cardAlt = `${profile.name} — ${profile.role} & ${profile.roleSecondary} business card`;

const qrBase = 168;

function qrDataUrl(size: number) {
  return QRCode.toDataURL(siteUrl, {
    width: size,
    margin: 0,
    errorCorrectionLevel: "M",
    color: { dark: colors.background, light: "#ffffff" },
  });
}

const rows: { label: string; icon: React.ReactElement[] }[] = [
  {
    label: contact.email.label,
    icon: [
      <rect key="0" x="2" y="4" width="20" height="16" rx="2" />,
      <path key="1" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />,
    ],
  },
  {
    label: contact.phone.label,
    icon: [<path key="0" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />],
  },
  {
    label: siteHost,
    icon: [
      <circle key="0" cx="12" cy="12" r="10" />,
      <path key="1" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />,
      <path key="2" d="M2 12h20" />,
    ],
  },
  {
    label: contact.linkedin.label,
    icon: [
      <path key="0" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />,
      <rect key="1" x="2" y="9" width="4" height="12" />,
      <circle key="2" cx="4" cy="4" r="2" />,
    ],
  },
  {
    label: contact.github.label,
    icon: [
      <path key="0" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />,
      <path key="1" d="M9 18c-4.51 2-5-2-7-2" />,
    ],
  },
];

// The card face, sized by `scale` against the 300 dpi grid. Plain inline
// styles only: ImageResponse (Satori) supports flexbox and a CSS subset.
export function CardFace({ scale, qr }: { scale: number; qr: string }) {
  const u = (n: number) => n * scale;

  return (
    <div
      style={{
        width: u(1004),
        height: u(650),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        padding: `${u(64)}px ${u(60)}px ${u(56)}px`,
        backgroundColor: colors.background,
        backgroundImage: `radial-gradient(circle at 0% 0%, ${colors.accent}55, transparent 55%), radial-gradient(circle at 100% 100%, ${colors.accent2}3d, transparent 50%)`,
        fontFamily: "Geist",
        color: colors.foreground,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: u(1004),
          height: u(10),
          backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.accent2})`,
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: u(18) }}>
        <Monogram size={u(60)} />
        <div
          style={{
            display: "flex",
            fontFamily: "Geist Mono",
            fontSize: u(18),
            letterSpacing: u(2.5),
            color: colors.accent2,
          }}
        >
          {profile.motto.toUpperCase()}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: u(70),
              fontWeight: 600,
              letterSpacing: u(-1.5),
              lineHeight: 1,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: u(14),
              fontSize: u(27),
              lineHeight: 1.3,
            }}
          >
            <div style={{ display: "flex", color: colors.soft }}>{profile.role}</div>
            <div style={{ display: "flex", color: colors.muted }}>
              &amp; {profile.roleSecondary}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: u(84),
              height: u(3),
              margin: `${u(26)}px 0 ${u(24)}px`,
              borderRadius: u(2),
              backgroundImage: `linear-gradient(90deg, ${colors.accent}, ${colors.accent2})`,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: u(9) }}>
            {rows.map((row) => (
              <div
                key={row.label}
                style={{ display: "flex", alignItems: "center", gap: u(14) }}
              >
                <Icon size={u(22)}>{row.icon}</Icon>
                <div style={{ display: "flex", fontSize: u(24), color: colors.soft }}>
                  {row.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              padding: u(14),
              borderRadius: u(18),
              backgroundColor: "#ffffff",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={qr} alt="" width={u(qrBase)} height={u(qrBase)} />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: u(12),
              fontFamily: "Geist Mono",
              fontSize: u(15),
              letterSpacing: u(1),
              color: colors.muted,
            }}
          >
            SCAN FOR PORTFOLIO
          </div>
        </div>
      </div>
    </div>
  );
}

// The card on its own, edge to edge, at the given print resolution.
export async function renderCard(dpi: number) {
  const scale = dpi / baseDpi;
  const [fonts, qr] = await Promise.all([
    fontsPromise,
    qrDataUrl(Math.round(qrBase * scale)),
  ]);
  return new ImageResponse(<CardFace scale={scale} qr={qr} />, {
    ...cardPx(dpi),
    fonts,
  });
}

// The card floating on the site background, for link previews.
export async function renderCardPreview(size: { width: number; height: number }) {
  const scale = 0.8;
  const [fonts, qr] = await Promise.all([
    fontsPromise,
    qrDataUrl(Math.round(qrBase * scale)),
  ]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.background,
          backgroundImage: `radial-gradient(circle at 15% 10%, ${colors.accent}40, transparent 45%), radial-gradient(circle at 85% 90%, ${colors.accent2}33, transparent 45%)`,
        }}
      >
        <div
          style={{
            display: "flex",
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          }}
        >
          <CardFace scale={scale} qr={qr} />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
