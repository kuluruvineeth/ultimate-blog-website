import { createTRPCRouter } from "~/server/api/trpc";
import { authRouter } from "./routers/auth";
import { postRouter } from "./routers/post";
import { unsplashRouter } from "./routers/unsplash";
import { tagRouter } from "./routers/tag";
import { userRouter } from "./routers/user";
import { commentRouter } from "./routers/comment";
import { suggestionsRouter } from "./routers/suggestions";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  unsplash: unsplashRouter,
  tag: tagRouter,
  user: userRouter,
  comment: commentRouter,
  suggestions: suggestionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
