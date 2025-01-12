import { RefObject, useEffect, useState } from "react";

export const useOnScroll = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      console.log("Ref is not assigned yet.");
      return;
    }

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const scrollableHeight = scrollHeight - clientHeight;
      if (scrollableHeight > 0) {
        const scrolled = (scrollTop / scrollableHeight) * 100;
        setProgress(scrolled);
      }
    };

    element.addEventListener("scroll", onScroll);

    return () => {
      element.removeEventListener("scroll", onScroll);
    };
  }, [ref]);

  return { progress };
};
