import { Suspense } from "react";
import AnalysisPageClient from "./AnalysisPageClient";

export default function AnalysisPage() {
  return (
    <Suspense>
      <AnalysisPageClient />
    </Suspense>
  );
}
