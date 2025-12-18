"use client";
import { useEffect } from "react";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let scroll: any;
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scroll = new LocomotiveScroll();
    })();
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <main>{children}</main>;
}
