import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Free UK Calculators";
  const subtitle = searchParams.get("subtitle") ?? "calculio.co.uk";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0B1220",
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(37,99,235,0.55) 0%, rgba(11,18,32,0) 55%), radial-gradient(circle at 92% 88%, rgba(16,185,129,0.35) 0%, rgba(11,18,32,0) 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 20,
              background: "linear-gradient(135deg, #2563EB, #1d4ed8)",
              color: "white",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#E2E8F0", fontWeight: 600 }}>
            Calcul<span style={{ color: "#60A5FA" }}>io</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 64,
            fontSize: 62,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#94A3B8" }}>
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
