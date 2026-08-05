"use client";

import {
  useRef,
  useEffect,
  useState,
  type RefObject,
} from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

/**
 * Returns a ref and `isVisible` boolean.
 * When the element enters the viewport (per threshold),
 * isVisible becomes true. If once=true, stays true after first trigger.
 */
export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
): { ref: RefObject<T | null>; isVisible: boolean } {
  const { threshold = 0.15, once = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, isVisible };
}
