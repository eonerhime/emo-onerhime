import { ImageResponse } from "next/og";
import { OgImageContent, ogAlt, ogContentType, ogSize } from "@/lib/og";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return new ImageResponse(<OgImageContent />, { ...size });
}
