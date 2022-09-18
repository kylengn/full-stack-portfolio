export default {
  name: "portfolio",
  title: "Portfolio",
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
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "project" }],
    },
  ],
};
