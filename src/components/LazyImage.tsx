// src/components/LazyImage.tsx
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" } // Preload slightly before it appears
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Shimmer Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-[shimmer_1.5s_infinite] rounded-md" />
      )}

      {isVisible && (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          animate={{
            opacity: loaded ? 1 : 0,
            scale: loaded ? 1 : 1.05,
            filter: loaded ? "blur(0px)" : "blur(10px)",
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${className} transition-all duration-700`}
        />
      )}
    </div>
  );
};

export default LazyImage;
