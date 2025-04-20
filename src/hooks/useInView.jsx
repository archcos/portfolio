import { useState, useEffect } from 'react';

export default function useInView(ref, options = {}) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            options
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, options]);

    return isIntersecting;
}
