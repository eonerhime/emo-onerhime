import { ogContentType } from "@/lib/og";
import { productCardAlt, productCardSize, renderProductCard } from "@/lib/product-card";

export const alt = productCardAlt;
export const size = productCardSize("preview");
export const contentType = ogContentType;

export default function Image() {
  return renderProductCard("preview");
}
