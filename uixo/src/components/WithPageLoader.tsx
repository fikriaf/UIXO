import React, { useEffect, useState } from "react";
import LoadingIntro from "@/components/LoadingPage";

export function withPageLoader<T extends object>(WrappedComponent: React.ComponentType<T>) {
  return function PageWithLoader(props: T) {
    const [isPageReady, setIsPageReady] = useState(false);

    useEffect(() => {
      const raf = requestAnimationFrame(() => {
        // menunggu 1 frame render selesai
        setTimeout(() => setIsPageReady(true), 100);
      });
      return () => cancelAnimationFrame(raf);
    }, []);

    if (!isPageReady) {
      return <LoadingIntro />;
    }

    return <WrappedComponent {...props} />;
  };
}
