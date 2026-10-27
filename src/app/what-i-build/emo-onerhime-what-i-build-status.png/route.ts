import { renderProductCard } from "@/lib/product-card";

export const dynamic = "force-static";

// 9:16, for WhatsApp Status.
export async function GET() {
  const image = await renderProductCard("story");
  return new Response(await image.arrayBuffer(), {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition":
        'inline; filename="emo-onerhime-what-i-build-status.png"',
    },
  });
}
