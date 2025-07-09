import { useEffect, useState } from "react";

interface UseCustomScrollSpyProps {
  root: HTMLElement | null;
  selector: string;
  offset?: number;
  threshold?: number; // phần trăm xuất hiện trong viewport để tính là "active"
}

export function useCustomScrollSpy({ root }: UseCustomScrollSpyProps) {
  const [activeId, setActiveId] = useState<string | null>("section-1");

  useEffect(() => {
    if (!root) return;

    const sections = [
      "section-1",
      "section-2",
      "section-3",
      "section-4",
      "section-5",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        // Tìm section có intersection ratio cao nhất và ở gần top nhất
        let maxRatio = 0;
        let currentActive = activeId;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio;
            const boundingTop =
              entry.boundingClientRect.top - entry.rootBounds!.top;

            // Ưu tiên section ở gần top và có intersection ratio cao
            if (ratio > maxRatio || (ratio > 0.1 && boundingTop < 100)) {
              maxRatio = ratio;
              currentActive = entry.target.id;
            }
          }
        });

        if (currentActive !== activeId) {
          setActiveId(currentActive);
        }
      },
      {
        root: root,
        rootMargin: "-50px 0px -50px 0px", // Chỉ active khi section thực sự visible
        threshold: [0.1, 0.3, 0.5, 0.7, 1.0],
      }
    );

    // Observe tất cả sections
    sections.forEach((id) => {
      const element = root.querySelector(`#${id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [root, activeId]);

  return { activeId };
}