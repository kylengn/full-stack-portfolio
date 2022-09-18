export default {
  title: "Projects",
  name: "project",
  type: "object",
  fields: [
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
    },
    {
      name: "projectDesc",
      title: "Project Description",
      type: "text",
    },
    {
      name: "projectImg",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
  ],
};
