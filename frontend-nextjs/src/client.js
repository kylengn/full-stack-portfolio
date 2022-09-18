import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "e4w27kcs",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "sk3iZfCBYSPyvrU8L5yYszx57BkXDR74j8opJH417roNevtjgPZgl63hHOBATfxhn6LJWqGDgjvOKvgkrZ5skCjugLWC4LTUtyX7Kxge7HvzKCJyAT1BFjgCSQ4GaQ0dSqm8eTtE9Fh1mEURmvM5neZG6DGunz1mIFU38nrktrMhxJrdEYzQ",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
