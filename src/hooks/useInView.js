import { useEffect, useMemo, useRef, useState } from "react";

export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const observerOptions = useMemo(() => options, [options.root, options.rootMargin, options.threshold, options.triggerOnce]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (observerOptions.triggerOnce) observer.disconnect();
      } else {
        setIsInView(false);
      }
    }, observerOptions);

    observer.observe(element);

    return () => observer.disconnect();
  }, [observerOptions]);

  return [ref, isInView];
};
