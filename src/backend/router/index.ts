import * as trpc from "@trpc/server";
import { prisma } from "@/backend/utils/prisma";

import data from "./problems.json";

export const appRouter = trpc
  .router()
  .query("get-problems", {
    async resolve() {
      // const bothPokemon = await prisma.pokemon.findMany({
      //   where: { id: { in: [first, second] } },
      // });

      return data.problems;
    },
  });
  // .mutation("cast-vote", {
  //   input: z.object({
  //     votedFor: z.number(),
  //     votedAgainst: z.number(),
  //   }),
  //   async resolve({ input }) {
  //     const voteInDb = await prisma.vote.create({
  //       data: {
  //         votedAgainstId: input.votedAgainst,
  //         votedForId: input.votedFor,
  //       },
  //     });
  //     return { success: true, vote: voteInDb };
  //   },
  // });

// export type definition of API
export type AppRouter = typeof appRouter;