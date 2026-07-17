"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionReveal({ children, className = "", id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-700 will-change-transform`}
    >
      {children}
    </section>
  );
}
