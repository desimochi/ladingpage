'use client';

import { useEffect, useRef, useState } from 'react';

export default function FormWidget() {
  const widgetRef = useRef(null);
  useEffect(() => {
    // Check if script already exists (to prevent duplication on client)
    const existingScript = document.querySelector('script[src="https://widgets.in6.nopaperforms.com/emwgts.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://widgets.in6.nopaperforms.com/emwgts.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div id='apply' className="px-1 pt-3 bg-gray-100 w-full">
     
      <h3  className=" text-center font-sans text-gray-800 font-semibold mb-2">Admission Open 2026-28</h3>
      
      <div
        ref={widgetRef} 
        id='form'
        className="npf_wgts"
        data-height="500px"
        data-w="b8c4e00dec4eb71a43966a6ca45f53f3"
      ></div>
    
    </div>
  );
}
