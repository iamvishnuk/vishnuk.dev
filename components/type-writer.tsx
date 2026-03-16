'use client';

import { useEffect, useRef, useState } from 'react';

const Typewriter = ({ text, speed = 40 }: { text: string; speed?: number }) => {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const prevText = useRef(text);

  useEffect(() => {
    // Reset when text changes
    if (prevText.current !== text) {
      setDisplayed('');
      prevText.current = text;
    }

    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [text, displayed, speed]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {displayed}
      <span
        className={`ml-0.5 inline-block h-[1em] w-[2px] bg-current align-middle transition-opacity duration-100 ${
          showCursor ? 'opacity-70' : 'opacity-0'
        }`}
      />
    </span>
  );
};

export default Typewriter;
