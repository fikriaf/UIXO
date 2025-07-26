import React, { useState, useEffect } from "react";
import LoadingIntro from "@/components/LoadingPage";

export function withPageLoader<T extends object>(WrappedComponent: React.ComponentType<T>) {
  return function PageWithLoader(props: T) {
    const [isPageReady, setIsPageReady] = useState(false);

    useEffect(() => {
      // Tunggu DOM benar-benar render dengan satu frame delay
      const timeout = requestAnimationFrame(() => {
        setIsPageReady(true);
      });
      return () => cancelAnimationFrame(timeout);
    }, []);

    return isPageReady ? <WrappedComponent {...props} /> : <LoadingIntro />;
  };
}
