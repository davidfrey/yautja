import Link from "next/link";

import { LatestOpportunity } from "~/app/_components/opportunity";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.opportunity.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.opportunity.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#22aef2] to-[#12516d] text-white">
        Yautja (Hunter) [When you need to find the perfect job]
      </main>
    </HydrateClient>
  );
}
