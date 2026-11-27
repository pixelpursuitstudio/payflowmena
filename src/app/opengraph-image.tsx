import { ImageResponse } from "next/og";

export const alt = "PayFlow MENA — Get Paid 3x Faster, Automatically";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pills = [
  { x: 750, y: 90, w: 110, h: 34 },
  { x: 900, y: 150, w: 140, h: 40 },
  { x: 1060, y: 100, w: 100, h: 30 },
  { x: 780, y: 220, w: 90, h: 30 },
  { x: 950, y: 270, w: 130, h: 34 },
  { x: 760, y: 320, w: 75, h: 24 },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 700,
            top: 0,
            width: 500,
            height: 630,
            background: "#0f766e",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 700,
            top: 540,
            width: 500,
            height: 90,
            background: "#f0fdfa",
          }}
        />
        {pills.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              width: p.w,
              height: p.h,
              borderRadius: p.h / 2,
              background: "#ffffff",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            left: 640,
            top: 60,
            width: 150,
            height: 150,
            background: "#0f172a",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 64,
            top: 230,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 600,
          }}
        >
          <div
            style={{
              fontSize: 70,
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1,
            }}
          >
            PayFlow MENA
          </div>
          <div style={{ fontSize: 28, color: "#475569" }}>
            Automated collections for UAE &amp; India B2B teams
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
