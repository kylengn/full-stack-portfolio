export default {
  name: "callToAction",
  title: "Call To Action",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "text",
    },
    {
      name: "ctaImg",
      title: "CTA Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
