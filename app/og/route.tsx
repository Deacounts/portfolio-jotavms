import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "João Vitor Matos";
  const subtitle = searchParams.get("subtitle") ?? "Da curiosidade ao dashboard";
  const tag = searchParams.get("tag") ?? "// PORTFÓLIO · 2026";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0e14",
          padding: "60px 72px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Cyan glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,180,166,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Top: monogram + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", position: "relative" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              backgroundColor: "#1a2e2c",
              border: "1.5px solid rgba(0,180,166,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: "700",
              color: "#00b4a6",
            }}
          >
            JM
          </div>
          <span
            style={{
              fontSize: "14px",
              color: "#8b95a7",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            João Vitor Matos
          </span>
        </div>

        {/* Center: title block */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "16px" }}>
          <span
            style={{
              fontSize: "13px",
              color: "#00b4a6",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: "400",
            }}
          >
            {tag}
          </span>
          <span
            style={{
              fontSize: title.length > 30 ? "52px" : "64px",
              fontWeight: "800",
              color: "#e6e9ef",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: "22px",
              color: "#b3bccc",
              lineHeight: "1.5",
              maxWidth: "800px",
            }}
          >
            {subtitle}
          </span>
        </div>

        {/* Bottom: stack tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            position: "relative",
          }}
        >
          {["Excel", "Power BI", "Chart.js", "IA"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "12px",
                color: "#8b95a7",
                border: "1px solid #1f2632",
                borderRadius: "4px",
                padding: "4px 10px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {tag}
            </span>
          ))}
          <span
            style={{
              marginLeft: "auto",
              fontSize: "12px",
              color: "#8b95a7",
              letterSpacing: "0.06em",
            }}
          >
            jotavms.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
