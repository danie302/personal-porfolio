import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = process.env.NEXT_PUBLIC_FULL_NAME ?? "Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const name = process.env.NEXT_PUBLIC_FULL_NAME ?? "Daniel Daza";
  const title = process.env.NEXT_PUBLIC_JOB_TITLE ?? "Frontend Developer";
  const tagline = process.env.NEXT_PUBLIC_TAGLINE ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAF6EC",
          padding: "72px 80px",
          border: "10px solid #0E0D0B",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#FF4A2E",
              border: "3px solid #0E0D0B",
            }}
          />
          <span style={{ fontSize: "20px", fontWeight: 700, color: "#0E0D0B", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {title}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "96px", fontWeight: 800, color: "#0E0D0B", lineHeight: 1 }}>
            {name}
          </div>
          <div style={{ fontSize: "28px", color: "#0E0D0B", opacity: 0.7, maxWidth: "700px" }}>
            {tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {["React", "TypeScript", "Next.js"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 24px",
                border: "2.5px solid #0E0D0B",
                borderRadius: "999px",
                fontSize: "18px",
                fontWeight: 600,
                color: "#0E0D0B",
                letterSpacing: "0.05em",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
