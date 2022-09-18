export default {
  name: "skills",
  title: "Skills",
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
      name: "skillPercent",
      title: "Skill Percentage",
      type: "array",
      of: [
        {
          title: "Frontend Development",
          type: "frontend",
        },
        {
          title: "UI/UX Design",
          type: "design",
        },
        {
          title: "Development Workflow",
          type: "workflow",
        },
      ],
    },
  ],
};
