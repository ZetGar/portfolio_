'use client';

import { useEffect, useRef } from "react";

export default function useScrollReveal<T extends HTMLElement = HTMLElement>() {

    const ref = useRef<T>(null);

    useEffect(() => {

        const el = ref.current;
        if (!el) return;

        // 모바일에서는 즉시 표시
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            el.classList.add("visible");
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("visible");
                } else {
                    el.classList.remove("visible");
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);

        return () => observer.disconnect();

    }, []);

    return ref;
}
