import { ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ScrollTop = () => {
  const [isScrollTop, setIsScrollTop] = useState(false);
  const scrollRef = useRef<HTMLButtonElement>(null);

  const handleScrollTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      ref={scrollRef}
      onClick={handleScrollTopClick}
      className={`fixed bottom-10 w-8 h-8 right-2 sm:right-4 rounded-full z-50 bg-[var(--primary)] text-white cursor-pointer flex items-center justify-center transition duration-300 hover:opacity-90 ${
        isScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <ChevronUp />
    </button>
  );
};

export default ScrollTop;