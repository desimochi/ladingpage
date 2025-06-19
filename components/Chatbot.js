'use client';

import { useEffect, useRef, useState } from 'react';

export default function Chatwidget() {
  const chatref = useRef(null);
  useEffect(() => {
    // Check if script already exists (to prevent duplication on client)
    const existingScript = document.querySelector('script[src="https://chatbot.in6.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/f6f9d1752e1b400da7fc93ef9cd508bb/9f18b28d2dce475bb6f6e97bb63a60b5"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://chatbot.in6.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/f6f9d1752e1b400da7fc93ef9cd508bb/9f18b28d2dce475bb6f6e97bb63a60b5';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
      <div
  ref={chatref}
  className="npf_chatbots"
  data-w="9f18b28d2dce475bb6f6e97bb63a60b5"
  style={{ display: 'none' }}
></div>
  );
}
