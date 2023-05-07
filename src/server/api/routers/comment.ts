import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { z } from "zod";

export const commentRouter = createTRPCRouter({
  createComment: protectedProcedure
    .input(
      z.object({
        text: z.string().min(3),
        postId: z.string(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      await prisma.comment.create({
        data: {
          ...input,
          userId: session.user.id,
        },
      });
    }),

  getComments: publicProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .query(async ({ ctx: { prisma }, input: { postId } }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      const comments = await prisma.comment.findMany({
        where: {
          postId,
        },
        include: {
          user: {
            select: {
              name: true,
              image: true,
            },
          },
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return comments;
    }),
});
