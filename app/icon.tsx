import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Accent monogram, drawn locally. No icon service.
export default async function Icon() {
  const font = await readFile(
    join(process.cwd(), "assets/fonts/LiberationSans-Bold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ddff33",
          color: "#141414",
          fontFamily: "Liberation Sans",
          fontSize: 34,
          letterSpacing: "-0.04em",
        }}
      >
        JL
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Liberation Sans", data: font, weight: 700, style: "normal" }],
    },
  );
}
