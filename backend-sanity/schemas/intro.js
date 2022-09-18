export default {
  name: "intro",
  title: "Intro",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "home_img",
      title: "Home Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
