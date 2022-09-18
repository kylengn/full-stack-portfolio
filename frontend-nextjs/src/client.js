import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "e4w27kcs",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.SANITY_TOKEN_ID,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
