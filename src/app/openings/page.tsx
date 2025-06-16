import { Suspense } from "react";
import OpeningsPageClient from "@/components/connect/openings"; // or wherever your client component is

export default function Page() {
  return (
    <Suspense fallback={<div>Loading openings...</div>}>
      <OpeningsPageClient />
    </Suspense>
  );
}
