export default {
  name: "services",
  title: "Services",
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
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "service" }],
    },
  ],
};
