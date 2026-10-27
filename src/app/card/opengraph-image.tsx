import { ogContentType, ogSize } from "@/lib/og";
import { cardAlt, renderCardPreview } from "@/lib/card";

export const alt = cardAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderCardPreview(size);
}
