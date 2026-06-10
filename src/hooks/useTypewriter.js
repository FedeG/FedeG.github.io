import { useState, useEffect, useCallback } from 'react';

export function useTypewriter(text, { speed = 50, delay = 500 } = {}) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  const tick = useCallback(() => {
    if (!text) return;
    let i = 0;
    setDone(false);
    setDisplayed('');
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    const timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [tick, delay]);

  return { displayed, done };
}
