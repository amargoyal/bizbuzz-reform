"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * The previous redesign used year hashes (/camps#2025). Send those visitors to
 * the season's own page (/camps/2025) so shared links keep working.
 */
export function YearHashRedirect({ base, years }: { base: string; years: number[] }) {
  const router = useRouter();
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (years.map(String).includes(hash)) router.replace(`${base}/${hash}`);
  }, [base, years, router]);
  return null;
}
