"use client";
import { useEffect } from "react";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  // Locomotive scroll usage removed for performance
  useEffect(() => {
    // Native scroll is used now
  }, []);

  return <main>{children}</main>;
}
