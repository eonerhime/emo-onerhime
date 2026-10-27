import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared look for images rendered with ImageResponse (the business card and
// the product card), matching the site's theme in globals.css.
export const colors = {
  background: "#05050a",
  surface: "#0d0d16",
  foreground: "#f4f4f7",
  soft: "#d6d6e0",
  muted: "#9797a8",
  border: "rgba(255,255,255,0.12)",
  accent: "#7c5cff",
  accent2: "#22d3c9",
};

const fontDir = join(process.cwd(), "src/assets/fonts");
export const fontsPromise = Promise.all([
  readFile(join(fontDir, "Geist-Regular.ttf")),
  readFile(join(fontDir, "Geist-SemiBold.ttf")),
  readFile(join(fontDir, "GeistMono-Regular.ttf")),
]).then(([regular, semibold, mono]) => [
  { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
  { name: "Geist", data: semibold, weight: 600 as const, style: "normal" as const },
  { name: "Geist Mono", data: mono, weight: 400 as const, style: "normal" as const },
]);

// A 24 × 24 stroke icon. Children are keyed elements, not a fragment, because
// ImageResponse (Satori) cannot serialize fragments inside <svg>.
export function Icon({
  size,
  color = colors.accent2,
  children,
}: {
  size: number;
  color?: string;
  children: React.ReactElement[];
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function Monogram({ size }: { size: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: size * 0.27,
        backgroundImage: `linear-gradient(135deg, ${colors.accent}, ${colors.accent2})`,
        color: colors.background,
        fontSize: size * 0.4,
        fontWeight: 600,
      }}
    >
      EO
    </div>
  );
}
