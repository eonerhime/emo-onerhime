import { PDFDocument } from "pdf-lib";
import { profile } from "@/data/contact";
import { cardMm, renderCard } from "@/lib/card";

export const dynamic = "force-static";

const ptPerMm = 72 / 25.4;

// One page at exactly 85 × 55 mm holding the 600 dpi card image. The page has
// no link annotations, so nothing on it is clickable.
export async function GET() {
  const image = await renderCard(600);
  const pdf = await PDFDocument.create();
  pdf.setTitle(`${profile.name} — Business card`);
  pdf.setAuthor(profile.name);
  pdf.setCreator(profile.name);

  const png = await pdf.embedPng(await image.arrayBuffer());
  const width = cardMm.width * ptPerMm;
  const height = cardMm.height * ptPerMm;
  pdf.addPage([width, height]).drawImage(png, { x: 0, y: 0, width, height });

  return new Response(Buffer.from(await pdf.save()), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="emo-onerhime-card.pdf"',
    },
  });
}
