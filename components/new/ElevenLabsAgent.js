"use client";

import Script from "next/script";

export default function ElevenLabsAgent() {
  return (
    <>
      {/* ElevenLabs ConvAI Widget */}
      <elevenlabs-convai agent-id="agent_7701kd7qwp9nfwhtyy97phmzp6bm"/>

      {/* Load script safely */}
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  );
}
