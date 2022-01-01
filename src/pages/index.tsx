import type { NextPage } from "next";
import { trpc } from "@/utils/trpc";

import { inferQueryResponse } from "./api/trpc/[trpc]";
import { CragListItem } from "./crag-list-item";

type CragFromServer = inferQueryResponse<"get-crags">;

const Home: NextPage = () => {
  const { data, refetch, isLoading } = trpc.useQuery(["get-crags"], {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <h1>Crag list </h1>
      {data && data.map((crag) => <CragListItem key={crag.id} data={crag} />)}
    </div>
  );
};

export default Home;
