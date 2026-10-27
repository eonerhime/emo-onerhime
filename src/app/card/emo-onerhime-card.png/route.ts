import { renderCard } from "@/lib/card";

export const dynamic = "force-static";

// 600 dpi so the PNG prints sharply at 85 × 55 mm and stays crisp on phones.
export async function GET() {
  const image = await renderCard(600);
  return new Response(await image.arrayBuffer(), {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": 'inline; filename="emo-onerhime-card.png"',
    },
  });
}
