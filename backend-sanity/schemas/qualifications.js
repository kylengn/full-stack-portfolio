export default {
  name: "qualifications",
  title: "Qualifications",
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
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "education" }],
    },
    {
      name: "work",
      title: "Work",
      type: "array",
      of: [{ type: "work" }],
    },
  ],
};
