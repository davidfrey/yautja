import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { opportunities } from "~/server/db/schema";

export const opportunityRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(
      z.object({
        jobTitle: z.string().min(1),
        url: z.string().min(1),
        companyName: z.string().min(1),
        companyDescription: z.string().min(1),
        jobDescription: z.string().min(1),
        jobType: z.string().min(1),
        location: z.string().min(1),
        baseSalary: z.string().min(1),
        benefits: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(opportunities).values({
        jobTitle: input.jobTitle,
        url: input.url,
        companyName: input.companyName,
        companyDescription: input.companyDescription,
        jobDescription: input.jobDescription,
        jobType: input.jobType,
        location: input.location,
        baseSalary: input.baseSalary,
        benefits: input.benefits,
        createdById: ctx.session.user.id,
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.opportunities.findFirst({
      orderBy: (opportunities, { desc }) => [desc(opportunities.createdAt)],
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
