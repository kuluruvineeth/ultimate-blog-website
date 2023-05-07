import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { createApi } from "unsplash-js";
import { querySchema } from "../../../components/UnsplashGallary";
import { env } from "~/env.mjs";
const unsplash = createApi({
  accessKey: env.UNSPLASH_ACCESS_KEY,
});

export const unsplashRouter = createTRPCRouter({
  getImages: protectedProcedure
    .input(querySchema)
    .query(async ({ input: { query } }) => {
      try {
        const data = await unsplash.search.getPhotos({
          query,
          orderBy: "relevant",
          orientation: "landscape",
        });
        return data.response;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "not able to fetch images from unsplash server",
        });
      }
    }),
});
