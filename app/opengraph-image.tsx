import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Jae Lee — design engineer in Seoul. Design in code.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Self-hosted grotesque, metric-compatible with the Helvetica/Arial stack the
// page itself asks for. Nothing is fetched from a font or image service.
async function displayFont() {
  return readFile(join(process.cwd(), "assets/fonts/LiberationSans-Bold.ttf"));
}

// Drawn locally with next/og. Two colours, poster type, no remote asset.
export default async function OpengraphImage() {
  const font = await displayFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#141414",
          color: "#f4f1ec",
          fontFamily: "Liberation Sans",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a09a90",
          }}
        >
          Jae Lee / Design Engineer / Seoul
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 172,
            lineHeight: 0.86,
            letterSpacing: "-0.045em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>Design</div>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#a09a90" }}>in&nbsp;</span>
            <span style={{ color: "#ddff33" }}>code</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#ddff33",
            color: "#141414",
            padding: "16px 24px",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Available January 2027
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Liberation Sans", data: font, weight: 700, style: "normal" }],
    },
  );
}
