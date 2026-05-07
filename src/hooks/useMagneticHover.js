import { useEffect, useRef, useState } from "react";

export const useMagneticHover = (strength = 20) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) / strength;
      const y = (clientY - (top + height / 2)) / strength;
      setPosition({ x, y });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return {
    ref,
    style: { transform: `translate(${position.x}px, ${position.y}px)` },
  };
};
