import { renderProductCard } from "@/lib/product-card";

export const dynamic = "force-static";

// Square, for posting in a WhatsApp chat.
export async function GET() {
  const image = await renderProductCard("square");
  return new Response(await image.arrayBuffer(), {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": 'inline; filename="emo-onerhime-what-i-build.png"',
    },
  });
}
