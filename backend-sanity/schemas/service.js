export default {
  title: "Services",
  name: "service",
  type: "object",
  fields: [
    {
      name: "serviceTitle",
      title: "Service Title",
      type: "string",
    },
    {
      name: "serviceModalDesc",
      title: "Service Modal Descriptions",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
