import * as trpc from "@trpc/server";
import { prisma } from "@/backend/utils/prisma";
import { z } from "zod";


export const appRouter = trpc
  .router()
  .query("get-problems", {
    async resolve() {
      const problems = await prisma.problem.findMany();
      return problems
    },
  })
  .mutation("add-problem", {
    input: z.object({
      name: z.string(),
      imageUrl: z.string(),
      description: z.string(),
      grade: z.number(),
    }),
    async resolve({ input }) {
      const problemInDb = await prisma.problem.create({
        data: {
          name: input.name,
          imageUrl: input.imageUrl,
          description: input.description,
          grade: input.grade
        }
      });
      return { success: true, problem: problemInDb };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;