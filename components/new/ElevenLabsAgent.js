"use client";

import Script from "next/script";

export default function ElevenLabsAgent() {
  return (
    <>
      {/* ElevenLabs ConvAI Widget */}
      <elevenlabs-convai agent-id="agent_1801kd4rk0tqfa1b9sts8cn8a8g7" />

      {/* Load script safely */}
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  );
}
