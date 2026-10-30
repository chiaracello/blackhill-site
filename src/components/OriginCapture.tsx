"use client";

import { useEffect } from "react";

import { captureOrigin } from "@/lib/attribution";

/**
 * Records, once per tab, which campaign or referrer the visitor arrived from,
 * so a contact that does come in can be attributed. Renders nothing, requests
 * nothing, sets no cookie — see `src/lib/attribution.ts`.
 */
export default function OriginCapture() {
  useEffect(() => {
    captureOrigin();
  }, []);

  return null;
}
